import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, toggleMaterial, clearCart, totalPrice } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoError, setPromoError] = useState('');

  // Calculate shipping
  const shippingPrice = cart.length > 0 ? 4.99 : 0;
  
  // Calculate final total
  const finalTotal = totalPrice + shippingPrice;
  
  // Handle promo code submission
  const handlePromoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.toLowerCase() === 'welcome10') {
      setPromoError('Promo code not valid for this order.');
    } else {
      setPromoError('Invalid promo code.');
    }
    // In a real app, this would validate with a backend
  };
  
  // Format price
  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="md:col-span-2">
              {cart.map(item => {
                // Calculate item total (including selected materials)
                let itemTotal = item.price * item.quantity;
                item.materials.forEach(material => {
                  if (material.selected) {
                    itemTotal += material.price * item.quantity;
                  }
                });
                
                return (
                  <div key={item.id} className="mb-6">
                    <div className="flex gap-4">
                      {/* Product image */}
                      <Link to={`/product/${item.productId}`} className="w-24 h-24 bg-gray-100 dark:bg-gray-900 rounded flex-shrink-0">
                        <img 
                          src={item.image || '/images/placeholder.jpg'}
                          alt={item.name}
                          className="w-full h-full object-cover object-center rounded"
                        />
                      </Link>
                      
                      {/* Product details */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between mb-1">
                          <Link to={`/product/${item.productId}`} className="font-medium hover:underline">
                            {item.name}
                          </Link>
                          <span className="font-medium">{formatPrice(itemTotal)}</span>
                        </div>
                        
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {formatPrice(item.price)} each
                        </div>
                        
                        {/* Selected materials */}
                        {item.materials.some(m => m.selected) && (
                          <div className="mb-2">
                            <p className="text-sm font-medium">Selected materials:</p>
                            <ul className="text-sm text-gray-600 dark:text-gray-400">
                              {item.materials
                                .filter(m => m.selected)
                                .map(material => (
                                  <li key={material.id} className="flex justify-between">
                                    <span>{material.name}</span>
                                    <span>{formatPrice(material.price)} each</span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Material toggles */}
                        {item.materials.length > 0 && (
                          <div className="mb-2">
                            <p className="text-sm font-medium mb-1">Materials:</p>
                            <div className="flex flex-wrap gap-2">
                              {item.materials.map(material => (
                                <Button
                                  key={material.id}
                                  variant={material.selected ? "default" : "outline"}
                                  size="sm"
                                  onClick={() => toggleMaterial(item.id, material.id)}
                                  className="text-xs"
                                >
                                  {material.name}
                                </Button>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Quantity controls */}
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 p-1"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Separator className="my-4" />
                  </div>
                );
              })}
              
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={clearCart} className="gap-2">
                  <Trash2 className="h-4 w-4" />
                  Clear Cart
                </Button>
                <Button asChild className="gap-2">
                  <Link to="/products">
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Order summary */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal ({cart.length} items)</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{formatPrice(shippingPrice)}</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              {/* Promo code */}
              <form onSubmit={handlePromoSubmit} className="mb-4">
                <label htmlFor="promo-code" className="text-sm font-medium mb-2 block">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <Input
                    id="promo-code"
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={e => setPromoCode(e.target.value)}
                  />
                  <Button type="submit" variant="outline">
                    Apply
                  </Button>
                </div>
                {promoError && (
                  <p className="text-red-500 text-sm mt-2">{promoError}</p>
                )}
              </form>
              
              <Separator className="my-4" />
              
              {/* Total */}
              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span>{formatPrice(finalTotal)}</span>
              </div>
              
              <Button className="w-full gap-2">
                Proceed to Checkout
                <ArrowRight className="h-4 w-4" />
              </Button>
              
              <p className="text-xs text-gray-600 dark:text-gray-400 text-center mt-4">
                Taxes calculated at checkout. Shipping calculated based on delivery location.
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 space-y-4">
            <h2 className="text-2xl font-bold">Your cart is empty</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button asChild size="lg">
              <Link to="/products">Start Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}