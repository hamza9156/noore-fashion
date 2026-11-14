import React from 'react';
import { Link } from 'react-router-dom';
import { useShop, formatPKR } from '../context/ShopContext';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

export const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist, addToCart } = useShop();

  const handleMoveToCart = (product: any) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <div className="bg-ivory min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold block mb-1">
            Saved Favorites
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brown font-normal">
            My Wishlist ({wishlist.length})
          </h1>
          <div className="w-12 h-0.5 bg-gold mx-auto my-3" />
          <p className="text-xs sm:text-sm text-brown-muted font-light">
            Keep track of your favorite unstitched lawn, festive chiffon, and pret pieces before they sell out.
          </p>
        </div>

        {wishlist.length === 0 ? (
          <div className="bg-white p-12 max-w-md mx-auto rounded-sm border border-beige-300 text-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-beige-100 flex items-center justify-center mx-auto mb-4 text-gold">
              <Heart className="w-8 h-8 text-gold" />
            </div>
            <h3 className="font-serif text-2xl text-brown font-normal mb-2">
              Your Wishlist is Empty
            </h3>
            <p className="text-xs text-brown-muted mb-6">
              You haven&rsquo;t saved any Pakistani designer suits yet. Click the heart icon on any suit card to save it here.
            </p>
            <Link to="/shop" className="btn-primary">
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-beige-200 rounded-sm overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-luxury-hover transition-all"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] bg-beige-100">
                  <Link to={`/product/${product.id}`} className="block w-full h-full">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </Link>

                  {/* Remove button */}
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/90 hover:bg-white text-brown hover:text-red-600 transition-colors shadow-sm"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <span className="absolute bottom-2.5 left-2.5 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-brown text-ivory">
                    {product.fabric} • {product.pieces}
                  </span>
                </div>

                {/* Details Body */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-gold tracking-widest block mb-1">
                      {product.brand}
                    </span>
                    <h3 className="font-serif text-base font-normal text-brown truncate mb-2">
                      <Link to={`/product/${product.id}`} className="hover:text-gold">
                        {product.name}
                      </Link>
                    </h3>

                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="font-serif text-base font-bold text-brown">
                        {formatPKR(product.discountedPrice)}
                      </span>
                      {product.originalPrice > product.discountedPrice && (
                        <span className="text-xs text-brown-muted line-through">
                          {formatPKR(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <button
                    type="button"
                    onClick={() => handleMoveToCart(product)}
                    className="w-full py-2.5 bg-brown hover:bg-gold text-ivory text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Move to Bag</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
