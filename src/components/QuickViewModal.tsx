import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Heart, ShoppingBag, Eye, ArrowRight } from 'lucide-react';
import { useShop, formatPKR } from '../context/ShopContext';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, closeQuickView, addToCart, isInWishlist, toggleWishlist, setIsCartOpen } = useShop();
  const [selectedSize, setSelectedSize] = useState<string>('M');

  if (!quickViewProduct) return null;

  const inWishlist = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, selectedSize);
    closeQuickView();
  };

  const handleBuyNow = () => {
    addToCart(quickViewProduct, selectedSize);
    closeQuickView();
    setIsCartOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brown-dark/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-ivory max-w-3xl w-full rounded-sm border border-gold/40 shadow-2xl relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-brown hover:text-gold transition-colors shadow-sm"
          aria-label="Close quick view"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-[3/4] bg-beige-100 max-h-[460px] md:max-h-none overflow-hidden">
            <img
              src={quickViewProduct.images[0]}
              alt={quickViewProduct.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-3 left-3 flex flex-col gap-1">
              <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-gold text-white shadow-sm">
                {quickViewProduct.fabric}
              </span>
              <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-brown text-ivory shadow-sm">
                {quickViewProduct.pieces}
              </span>
            </div>
          </div>

          {/* Modal Info */}
          <div className="p-6 md:p-8 flex flex-col justify-between bg-white">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold">
                {quickViewProduct.brand} • {quickViewProduct.collection}
              </span>
              <h3 className="font-serif text-2xl text-brown font-normal mt-1 mb-2">
                {quickViewProduct.name}
              </h3>

              {/* Pricing */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-serif text-2xl font-bold text-brown">
                  {formatPKR(quickViewProduct.discountedPrice)}
                </span>
                {quickViewProduct.originalPrice > quickViewProduct.discountedPrice && (
                  <>
                    <span className="text-xs text-brown-muted line-through">
                      {formatPKR(quickViewProduct.originalPrice)}
                    </span>
                    <span className="text-[10px] font-bold text-red-700 bg-red-100 px-1.5 py-0.5 rounded">
                      -{quickViewProduct.discountPercentage}%
                    </span>
                  </>
                )}
              </div>

              {/* Short Description */}
              <p className="text-xs text-brown-muted mb-4 line-clamp-3 leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Ready to wear size selection */}
              {quickViewProduct.suitType === 'Ready to Wear' && quickViewProduct.availableSizes && (
                <div className="mb-5">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-brown block mb-1.5">
                    Select Size:
                  </span>
                  <div className="flex gap-2">
                    {quickViewProduct.availableSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`w-9 h-8 text-xs font-bold rounded-xs border ${
                          selectedSize === size
                            ? 'bg-brown text-ivory border-brown'
                            : 'bg-white text-brown border-beige-300 hover:border-gold'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Unstitched details summary */}
              {quickViewProduct.suitType === 'Unstitched' && (
                <div className="mb-5 p-2.5 bg-beige-100 rounded-xs text-[11px] text-brown-light">
                  <strong className="text-brown block mb-0.5">Unstitched 3-Piece Fabric:</strong>
                  <span>Includes full shirt, dupatta & trouser fabric with embroidered borders.</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-4 border-t border-beige-200">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 bg-brown hover:bg-gold text-ivory text-xs py-3 font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleWishlist(quickViewProduct)}
                  className={`p-3 border rounded-xs transition-colors ${
                    inWishlist
                      ? 'border-red-300 bg-red-50 text-red-600'
                      : 'border-beige-300 text-brown hover:text-red-600'
                  }`}
                  title="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
                </button>
              </div>

              <Link
                to={`/product/${quickViewProduct.id}`}
                onClick={closeQuickView}
                className="w-full border border-beige-300 hover:border-brown text-brown text-xs py-2.5 font-semibold uppercase tracking-wider text-center block transition-colors"
              >
                <span>View Full Product Details</span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
