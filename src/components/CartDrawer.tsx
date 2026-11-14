import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Trash2, ShoppingBag, ArrowRight, Truck, CheckCircle2 } from 'lucide-react';
import { useShop, formatPKR } from '../context/ShopContext';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
    freeShippingThreshold,
  } = useShop();

  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const progressPercent = Math.min(100, Math.round((cartTotal / freeShippingThreshold) * 100));
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    navigate('/cart');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brown-dark/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-ivory shadow-2xl flex flex-col justify-between border-l border-beige-300">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-beige-300 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-gold" />
                <h3 className="font-serif text-xl text-brown font-semibold">
                  Shopping Bag ({cartCount})
                </h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1 text-brown hover:text-gold transition-colors"
                aria-label="Close cart drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Indicator */}
            <div className="mt-4 p-3 bg-beige-100 rounded-xs border border-beige-200">
              <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                <span className="flex items-center gap-1.5 text-brown">
                  <Truck className="w-3.5 h-3.5 text-gold" />
                  {remainingForFreeShipping > 0 ? (
                    <span>Add <strong>{formatPKR(remainingForFreeShipping)}</strong> more for <strong>FREE Delivery</strong></span>
                  ) : (
                    <span className="text-emerald-800 flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Congratulations! You unlocked FREE Delivery
                    </span>
                  )}
                </span>
                <span className="text-gold font-bold">{progressPercent}%</span>
              </div>
              <div className="w-full bg-beige-300 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gold h-full transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-beige-200">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-beige-200/80 flex items-center justify-center text-brown-muted mb-4">
                  <ShoppingBag className="w-8 h-8 text-gold" />
                </div>
                <h4 className="font-serif text-2xl text-brown mb-1 font-normal">Your Bag is Empty</h4>
                <p className="text-xs text-brown-muted max-w-xs mb-6">
                  Explore our luxury unstitched lawn, festive chiffon, and pret collections.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/shop');
                  }}
                  className="btn-primary"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="py-4 flex gap-3 group">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover object-center bg-beige-100 rounded-xs shrink-0 border border-beige-200"
                  />
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-sm font-semibold text-brown truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-brown-muted hover:text-red-700 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-brown-muted mt-0.5">
                        {item.product.fabric} • {item.product.pieces}
                        {item.selectedSize && ` • Size: ${item.selectedSize}`}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-beige-100">
                      {/* Stepper */}
                      <div className="flex items-center border border-beige-300 bg-white rounded-xs">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-brown hover:bg-beige-100 text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-semibold text-brown">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-brown hover:bg-beige-100 text-xs font-bold"
                        >
                          +
                        </button>
                      </div>

                      {/* Price calculation */}
                      <div className="text-right">
                        <span className="text-xs font-bold text-brown font-serif">
                          {formatPKR(item.product.discountedPrice * item.quantity)}
                        </span>
                        {item.quantity > 1 && (
                          <span className="block text-[10px] text-brown-muted">
                            {formatPKR(item.product.discountedPrice)} each
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer with Totals & CTAs */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-beige-300 bg-white space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-brown-muted">
                  <span>Subtotal</span>
                  <span className="font-serif text-sm font-semibold text-brown">{formatPKR(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-brown-muted">
                  <span>Nationwide Shipping</span>
                  <span className="font-semibold text-brown">
                    {cartTotal >= freeShippingThreshold ? (
                      <span className="text-emerald-700 uppercase tracking-wider font-bold">FREE</span>
                    ) : (
                      '₨ 250'
                    )}
                  </span>
                </div>
                <div className="pt-2 border-t border-beige-200 flex justify-between text-sm font-bold text-brown">
                  <span>Estimated Total</span>
                  <span className="font-serif text-lg text-brown">
                    {formatPKR(cartTotal + (cartTotal >= freeShippingThreshold ? 0 : 250))}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={handleProceedToCheckout}
                className="w-full bg-brown hover:bg-gold text-ivory py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-brown-muted">
                Cash on Delivery (COD) & Online Bank Transfer available across Pakistan.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
