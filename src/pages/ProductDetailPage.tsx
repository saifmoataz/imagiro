import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getProductById, products, Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { v4 as uuidv4 } from 'uuid';
import { Minus, Plus, ChevronLeft } from 'lucide-react';

export default function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState('');
  const [selectedMaterials, setSelectedMaterials] = useState<{ [key: string]: boolean }>({});
  const [additionalPrice, setAdditionalPrice] = useState(0);

  useEffect(() => {
    if (!productId) return;
    const productData = getProductById(productId);
    if (productData) {
      setProduct(productData);
      setCurrentImage(productData.images[0] || '/assets/products/placeholder.svg');
      const initialSelectedMaterials: { [key: string]: boolean } = {};
      productData.availableMaterials.forEach(material => {
        initialSelectedMaterials[material.id] = false;
      });
      setSelectedMaterials(initialSelectedMaterials);
    }
    setLoading(false);
  }, [productId]);

  useEffect(() => {
    if (!product) return;
    let total = 0;
    product.availableMaterials.forEach(material => {
      if (selectedMaterials[material.id]) {
        total += material.price;
      }
    });
    setAdditionalPrice(total);
  }, [selectedMaterials, product]);

  const toggleMaterial = (materialId: string) => {
    setSelectedMaterials(prev => ({
      ...prev,
      [materialId]: !prev[materialId]
    }));
  };

  const increaseQuantity = () => setQuantity(prev => Math.min(prev + 1, 10));
  const decreaseQuantity = () => setQuantity(prev => Math.max(prev - 1, 1));

  const handleAddToCart = () => {
    if (!product) return;
    const materialOptions = product.availableMaterials.map(material => ({
      id: material.id,
      name: material.name,
      price: material.price,
      selected: !!selectedMaterials[material.id]
    }));
    addToCart({
      id: uuidv4(),
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.images[0],
      materials: materialOptions,
    });
    navigate('/cart');
  };

  const totalPrice = product ? (product.price + additionalPrice) * quantity : 0;

  if (loading || !product) {
    return (
      <Layout>
        <div className="container px-4 py-16 mx-auto">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/products" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Product Image & Thumbnails */}
          <div>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg overflow-hidden mb-4 aspect-square flex items-center justify-center">
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 mt-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`w-16 h-16 border rounded-md overflow-hidden ${
                      currentImage === img ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setCurrentImage(img)}
                  >
                    <img src={img} alt={`thumb-${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Product Info */}
          <div>
            <div className="mb-2">
              <span className="inline-block bg-green-700 text-white text-xs px-3 py-1 rounded-full mb-2">
                Beginner
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-1">{product.name}</h1>
            <div className="text-gray-400 mb-2 capitalize">{product.category}</div>
            <div className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</div>
            <p className="text-gray-300 mb-6">{product.shortDescription}</p>
            <div className="mb-6">
              <span className="font-semibold">Quantity:</span>
              <div className="flex items-center mt-2">
                <Button variant="outline" size="icon" onClick={decreaseQuantity} disabled={quantity <= 1}>
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={e => setQuantity(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                  className="w-16 text-center mx-2"
                />
                <Button variant="outline" size="icon" onClick={increaseQuantity} disabled={quantity >= 10}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Essential Materials & Order Summary */}
        <div className="bg-gray-800 dark:bg-gray-900 rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-1">Add Essential Materials</h2>
          <p className="text-gray-400 mb-6">
            Complete your origami experience with these professional-grade materials
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {product.availableMaterials.map(material => (
              <label
                key={material.id}
                className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition ${
                  selectedMaterials[material.id]
                    ? 'border-primary bg-gray-700'
                    : 'border-gray-700 bg-gray-800'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedMaterials[material.id]}
                  onChange={() => toggleMaterial(material.id)}
                  className="accent-primary w-5 h-5"
                />
                <span className="font-semibold text-white">{material.name}</span>
                <span className="ml-auto text-gray-300 font-medium">${material.price.toFixed(2)}</span>
              </label>
            ))}
          </div>
          <div className="bg-gray-700 rounded-xl p-6 mb-4">
            <h3 className="font-bold text-white mb-2">Order Summary</h3>
            <div className="flex justify-between text-gray-200 mb-2">
              <span>{product.name} × {quantity}</span>
              <span>${(product.price * quantity).toFixed(2)}</span>
            </div>
            {Object.entries(selectedMaterials)
              .filter(([_, selected]) => selected)
              .map(([id]) => {
                const mat = product.availableMaterials.find(m => m.id === id);
                return mat ? (
                  <div className="flex justify-between text-gray-400 text-sm" key={id}>
                    <span>+ {mat.name}</span>
                    <span>${(mat.price * quantity).toFixed(2)}</span>
                  </div>
                ) : null;
              })}
            <div className="flex justify-between font-bold text-lg mt-4 text-white">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <Button
            onClick={handleAddToCart}
            size="lg"
            className="w-full text-lg font-semibold"
          >
            Add to Cart - ${totalPrice.toFixed(2)}
          </Button>
        </div>
      </div>
    </Layout>
  );
}