import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';

// Improved checkout modal
function CheckoutModal({ open, onClose, total }) {
  const [step, setStep] = useState<'form' | 'done'>('form');
  const [card, setCard] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('done');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 max-w-md w-full">
        {step === 'form' ? (
          <>
            <h2 className="text-2xl font-bold mb-6">Secure Checkout</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Total: <span className="font-semibold">${total.toFixed(2)}</span>
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Cardholder Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                placeholder="Card Number"
                value={card}
                onChange={(e) => setCard(e.target.value)}
                required
                maxLength={19}
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  required
                  maxLength={5}
                />
                <Input
                  placeholder="CVC"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  required
                  maxLength={4}
                />
              </div>
              <Button type="submit" className="w-full">
                Pay ${total.toFixed(2)}
              </Button>
            </form>
            <Button variant="outline" className="w-full mt-3" onClick={onClose}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Order Confirmed 🎉</h2>
            <p className="mb-4">Thank you for your purchase.</p>
            <p className="font-bold mb-6">Total Paid: ${total.toFixed(2)}</p>
            <Button className="w-full" onClick={onClose}>
              Close
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, toggleMaterial, clearCart, totalPrice } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoError, setPromoError] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutTotal, setCheckoutTotal] = useState(0); // store total before clearing cart

  const shippingPrice = cart.length > 0 ? 4.99 : 0;
  const discountedTotal = totalPrice * (1 - promoDiscount);
  const finalTotal = discountedTotal + shippingPrice;

  const handlePromoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toLowerCase() === 'qwertyuiopkokok') {
      setPromoDiscount(0.1);
      setPromoError('');
    } else {
      setPromoDiscount(0);
      setPromoError('Invalid promo code.');
    }
  };

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  const handleCheckout = () => {
    setCheckoutTotal(finalTotal); // save total first
    setCheckoutOpen(true);
    clearCart(); // then clear the cart
  };

  return (
    <Layout>
      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        total={checkoutTotal}
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {cart.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="md:col-span-2">
              {cart.map((item) => {
                let itemTotal = item.price * item.quantity;
                item.materials.forEach((material) => {
                  if (material.selected) {
                    itemTotal += material.price * item.quantity;
                  }
                });

                return (
                  <div key={item.id} className="mb-6">
                    <div className="flex gap-4">
                      <Link
                        to={`/product/${item.productId}`}
                        className="w-24 h-24 bg-gray-100 dark:bg-gray-900 rounded flex-shrink-0"
                      >
                        <img
                          src={item.image || '/images/placeholder.jpg'}
                          alt={item.name}
                          className="w-full h-full object-cover object-center rounded"
                        />
                      </Link>
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
                        {item.materials.some((m) => m.selected) && (
                          <div className="mb-2">
                            <p className="text-sm font-medium">Selected materials:</p>
                            <ul className="text-sm text-gray-600 dark:text-gray-400">
                              {item.materials
                                .filter((m) => m.selected)
                                .map((material) => (
                                  <li key={material.id} className="flex justify-between">
                                    <span>{material.name}</span>
                                    <span>{formatPrice(material.price)} each</span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        )}
                        {item.materials.length > 0 && (
                          <div className="mb-2">
                            <p className="text-sm font-medium mb-1">Materials:</p>
                            <div className="flex flex-wrap gap-2">
                              {item.materials.map((material) => (
                                <Button
                                  key={material.id}
                                  variant={material.selected ? 'default' : 'outline'}
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
                  <Link to="/products">Continue Shopping</Link>
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
              <form onSubmit={handlePromoSubmit} className="mb-4">
                <label htmlFor="promo-code" className="text-sm font-medium mb-2 block">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <Input
                    id="promo-code"
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button type="submit" variant="outline">
                    Apply
                  </Button>
                </div>
                {promoError && <p className="text-red-500 text-sm mt-2">{promoError}</p>}
              </form>
              <Separator className="my-4" />
              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span>{formatPrice(finalTotal)}</span>
              </div>
              <Button className="w-full gap-2" onClick={handleCheckout}>
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
