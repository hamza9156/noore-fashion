import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop, formatPKR } from '../context/ShopContext';
import {
  Trash2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, freeShippingThreshold, showToast } =
    useShop();
  const navigate = useNavigate();

  const [couponCode, setCouponCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  // Checkout Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Lahore',
    address: '',
    paymentMethod: 'COD',
    notes: '',
  });

  const [orderSuccess, setOrderSuccess] = useState<string | null>(null);

  const PAKISTANI_CITIES = [
    'Lahore',
    'Karachi',
    'Islamabad',
    'Rawalpindi',
    'Faisalabad',
    'Multan',
    'Peshawar',
    'Quetta',
    'Sialkot',
    'Gujranwala',
    'Hyderabad',
    'Abbottabad',
    'Bahawalpur',
  ];

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'NOORE10') {
      const discount = Math.round(cartTotal * 0.1);
      setDiscountAmount(discount);
      setCouponApplied(true);
      showToast('10% NOORÉ discount applied successfully!', 'success');
    } else {
      showToast('Invalid coupon code. Try "NOORE10"', 'error');
    }
  };

  const shippingCost = cartTotal >= freeShippingThreshold || cartTotal === 0 ? 0 : 250;
  const finalTotal = Math.max(0, cartTotal - discountAmount + shippingCost);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) {
      showToast('Please complete all delivery fields', 'error');
      return;
    }

    const orderId = `NOORE-PK-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderSuccess(orderId);
    clearCart();
  };

  if (orderSuccess) {
    return (
      <div className="bg-ivory py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-emerald-100 border border-emerald-300 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-emerald-700" />
          </div>

          <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-bold">
            Shukriya • Order Confirmed
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-brown font-normal mt-2 mb-3">
            Your Order Has Been Placed!
          </h1>
          <p className="text-sm text-brown-muted mb-2">
            Order Reference: <strong className="text-brown">{orderSuccess}</strong>
          </p>
          <p className="text-xs text-brown-light max-w-md mx-auto mb-8 leading-relaxed">
            Our boutique concierge will contact you via WhatsApp/SMS on <strong>{formData.phone}</strong> for delivery verification. Your suits will arrive in {formData.city} within 2-4 working days.
          </p>

          <div className="bg-white p-6 rounded-sm border border-beige-300 text-left text-xs mb-8 space-y-2">
            <div className="flex justify-between border-b border-beige-200 pb-2">
              <span className="text-brown-muted">Customer Name:</span>
              <span className="font-semibold text-brown">{formData.fullName}</span>
            </div>
            <div className="flex justify-between border-b border-beige-200 pb-2">
              <span className="text-brown-muted">Delivery Address:</span>
              <span className="font-semibold text-brown text-right">{formData.address}, {formData.city}</span>
            </div>
            <div className="flex justify-between border-b border-beige-200 pb-2">
              <span className="text-brown-muted">Payment Mode:</span>
              <span className="font-semibold text-brown">{formData.paymentMethod === 'COD' ? 'Cash on Delivery (COD)' : formData.paymentMethod}</span>
            </div>
            <div className="flex justify-between pt-1 text-sm font-bold">
              <span>Total Payable:</span>
              <span className="text-gold font-serif">{formatPKR(finalTotal)}</span>
            </div>
          </div>

          <Link to="/shop" className="btn-primary">
            Continue Shopping NOORÉ
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="bg-ivory py-20 text-center">
        <div className="max-w-md mx-auto px-4">
          <div className="w-20 h-20 rounded-full bg-beige-200 flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-gold" />
          </div>
          <h2 className="font-serif text-3xl text-brown mb-2 font-normal">
            Your Bag is Empty
          </h2>
          <p className="text-sm text-brown-muted mb-8 font-light">
            You have not added any Pakistani designer suits to your shopping bag yet.
          </p>
          <Link to="/shop" className="btn-primary">
            <span>Explore New Arrivals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ivory py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center lg:text-left">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-bold">
            Checkout & Bag
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-brown font-normal mt-1">
            Review Your Pakistani Suits
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Cart Items (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white p-6 rounded-sm border border-beige-300 shadow-sm">
              <h2 className="font-serif text-xl text-brown font-semibold mb-4 pb-3 border-b border-beige-200">
                Shopping Bag ({cart.length} distinct designs)
              </h2>

              <div className="divide-y divide-beige-200">
                {cart.map((item) => (
                  <div key={item.id} className="py-5 flex gap-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-28 object-cover object-center bg-beige-100 rounded-xs shrink-0 border border-beige-300"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-gold tracking-widest">
                              {item.product.fabric} • {item.product.pieces}
                            </span>
                            <h3 className="font-serif text-base font-semibold text-brown">
                              <Link to={`/product/${item.product.id}`} className="hover:text-gold">
                                {item.product.name}
                              </Link>
                            </h3>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-brown-muted hover:text-red-700 p-1 transition-colors"
                            title="Remove design"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {item.selectedSize && (
                          <span className="inline-block mt-1 px-2 py-0.5 bg-beige-100 text-brown text-[11px] font-semibold rounded-xs">
                            Size: {item.selectedSize}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-3 mt-3 border-t border-beige-100">
                        {/* Stepper */}
                        <div className="flex items-center border border-beige-300 rounded-xs bg-white">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-brown hover:bg-beige-100 text-sm font-bold"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-brown">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-brown hover:bg-beige-100 text-sm font-bold"
                          >
                            +
                          </button>
                        </div>

                        {/* Calculated price */}
                        <div className="text-right">
                          <span className="font-serif text-base font-bold text-brown">
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
                ))}
              </div>
            </div>

            {/* Nationwide Delivery Notice */}
            <div className="bg-beige-100 p-4 rounded-sm border border-beige-300 flex items-center gap-3 text-xs text-brown-light">
              <Truck className="w-5 h-5 text-gold shrink-0" />
              <span>
                <strong>Express Courier:</strong> Dispatched via TCS / Leopards / Call Courier with SMS tracking across Pakistan.
              </span>
            </div>
          </div>

          {/* Right Column: Order Summary & Pakistani Delivery Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Promo Voucher */}
            <div className="bg-white p-5 rounded-sm border border-beige-300 shadow-sm">
              <h3 className="font-serif text-lg text-brown font-semibold mb-3">
                Have a Voucher or Promo Code?
              </h3>
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="e.g. NOORE10"
                  className="flex-1 bg-ivory border border-beige-300 px-3 py-2 text-xs uppercase tracking-wider text-brown focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-brown hover:bg-gold text-ivory px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Apply
                </button>
              </form>
              {couponApplied && (
                <p className="text-[11px] text-emerald-700 mt-2 font-medium">
                  ✓ Voucher NOORE10 applied (-10%)
                </p>
              )}
            </div>

            {/* Checkout Delivery Details Form */}
            <form onSubmit={handlePlaceOrder} className="bg-white p-6 rounded-sm border border-beige-300 shadow-sm space-y-4">
              <h3 className="font-serif text-xl text-brown font-semibold pb-3 border-b border-beige-200">
                Delivery Details (Pakistan)
              </h3>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-brown mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Ayesha Malik"
                  className="w-full bg-ivory border border-beige-300 px-3 py-2 text-xs text-brown focus:border-gold focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-brown mb-1">
                    Phone (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0300-1234567"
                    className="w-full bg-ivory border border-beige-300 px-3 py-2 text-xs text-brown focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-brown mb-1">
                    City *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-ivory border border-beige-300 px-3 py-2 text-xs text-brown focus:border-gold focus:outline-none cursor-pointer"
                  >
                    {PAKISTANI_CITIES.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-brown mb-1">
                  Delivery Address *
                </label>
                <textarea
                  required
                  rows={2}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="House / Apartment #, Street, Sector / Area"
                  className="w-full bg-ivory border border-beige-300 px-3 py-2 text-xs text-brown focus:border-gold focus:outline-none"
                />
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-brown mb-2">
                  Select Payment Method:
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2.5 p-2.5 border rounded-xs cursor-pointer border-gold bg-gold/5">
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === 'COD'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'COD' })}
                      className="accent-gold"
                    />
                    <div className="text-xs">
                      <strong className="block text-brown">Cash on Delivery (COD)</strong>
                      <span className="text-[10px] text-brown-muted">Pay in cash when rider delivers to your doorstep</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-2.5 p-2.5 border rounded-xs cursor-pointer border-beige-300 hover:border-beige-400">
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === 'JazzCash / EasyPaisa'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'JazzCash / EasyPaisa' })}
                      className="accent-gold"
                    />
                    <div className="text-xs">
                      <strong className="block text-brown">JazzCash / EasyPaisa Wallet</strong>
                      <span className="text-[10px] text-brown-muted">Instant mobile account transfer</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-2.5 p-2.5 border rounded-xs cursor-pointer border-beige-300 hover:border-beige-400">
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === 'Bank Transfer'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'Bank Transfer' })}
                      className="accent-gold"
                    />
                    <div className="text-xs">
                      <strong className="block text-brown">Online Bank Transfer (IBFT)</strong>
                      <span className="text-[10px] text-brown-muted">HBL, Meezan, Bank Alfalah</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Order Totals Summary */}
              <div className="pt-4 border-t border-beige-200 space-y-2 text-xs">
                <div className="flex justify-between text-brown-muted">
                  <span>Bag Subtotal</span>
                  <span className="font-semibold text-brown">{formatPKR(cartTotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-800">
                    <span>Voucher Discount (10%)</span>
                    <span>-{formatPKR(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-brown-muted">
                  <span>Nationwide Shipping</span>
                  <span className="font-semibold text-brown">
                    {shippingCost === 0 ? (
                      <span className="text-emerald-700 font-bold uppercase">FREE</span>
                    ) : (
                      formatPKR(shippingCost)
                    )}
                  </span>
                </div>
                <div className="pt-2 border-t border-beige-200 flex justify-between text-base font-bold text-brown">
                  <span>Grand Total</span>
                  <span className="font-serif text-xl text-brown">{formatPKR(finalTotal)}</span>
                </div>
              </div>

              {/* Place Order CTA */}
              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-white py-4 text-xs font-semibold uppercase tracking-[0.2em] shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2 mt-4"
              >
                <Sparkles className="w-4 h-4" />
                <span>Confirm & Place Order</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-brown-muted pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>Safe & Secure Checkout • 100% Genuine Pakistani Suits</span>
              </div>
            </form>

          </div>

        </div>

      </div>
    </div>
  );
};
