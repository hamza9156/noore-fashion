import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag, Star, Check } from 'lucide-react';
import { Product } from '../types';
import { useShop, formatPKR } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isInWishlist, toggleWishlist, addToCart, openQuickView } = useShop();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAddedAnim, setIsAddedAnim] = useState(false);

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setIsAddedAnim(true);
    setTimeout(() => setIsAddedAnim(false), 1200);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openQuickView(product);
  };

  return (
    <div className="group relative bg-white border border-beige-200/80 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-luxury-hover hover:border-gold/40">
      
      {/* Top Image Container */}
      <div
        className="relative aspect-[3/4] overflow-hidden bg-beige-100 cursor-pointer"
        onMouseEnter={() => {
          if (product.images.length > 1) setCurrentImageIndex(1);
        }}
        onMouseLeave={() => setCurrentImageIndex(0)}
      >
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.images[currentImageIndex] || product.images[0]}
            alt={`${product.name} - ${product.fabric} Pakistani Suit`}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        {/* Badges Overlay */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
          {product.discountPercentage > 0 && (
            <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-red-800 text-white rounded-xs shadow-sm">
              -{product.discountPercentage}%
            </span>
          )}
          {product.isNewArrival && (
            <span className="px-2 py-0.5 text-[10px] uppercase font-semibold tracking-wider bg-brown text-ivory rounded-xs shadow-sm">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-2 py-0.5 text-[10px] uppercase font-semibold tracking-wider bg-gold text-white rounded-xs shadow-sm">
              Best Seller
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          type="button"
          onClick={handleWishlistToggle}
          className={`absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-md transition-all duration-200 z-10 shadow-sm ${
            inWishlist
              ? 'bg-red-50 text-red-600 ring-1 ring-red-300'
              : 'bg-white/80 text-brown hover:text-red-600 hover:bg-white'
          }`}
          title={inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
          aria-label="Wishlist toggle"
        >
          <Heart
            className={`w-4 h-4 transition-transform duration-200 ${
              inWishlist ? 'fill-current scale-110' : ''
            }`}
          />
        </button>

        {/* Quick View Button (hover reveal on desktop, always accessible) */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex gap-2 z-10">
          <button
            type="button"
            onClick={handleQuickView}
            className="flex-1 bg-ivory/95 hover:bg-white text-brown text-xs py-2.5 px-3 font-semibold uppercase tracking-wider shadow-md backdrop-blur-md flex items-center justify-center gap-1.5 transition-colors border border-beige-300"
          >
            <Eye className="w-3.5 h-3.5 text-gold" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Details Card Body */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Brand, Fabric & Piece Type */}
          <div className="flex items-center justify-between text-[11px] text-brown-muted mb-1 font-medium tracking-wide">
            <span className="uppercase text-gold font-semibold tracking-wider">{product.brand}</span>
            <div className="flex items-center gap-1.5">
              <span className="bg-beige-100 px-1.5 py-0.5 rounded-xs text-[10px] text-brown">
                {product.fabric}
              </span>
              <span>•</span>
              <span className="font-semibold text-brown">{product.pieces}</span>
            </div>
          </div>

          {/* Product Title */}
          <Link to={`/product/${product.id}`} className="block group/title">
            <h3 className="font-serif text-base sm:text-lg font-normal text-brown line-clamp-1 group-hover/title:text-gold transition-colors duration-200 mb-1.5">
              {product.name}
            </h3>
          </Link>

          {/* Ratings & Suit Type */}
          <div className="flex items-center justify-between text-xs mb-3">
            <div className="flex items-center gap-1">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-beige-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[11px] text-brown-muted">({product.reviewsCount})</span>
            </div>
            <span className="text-[10px] uppercase font-semibold text-brown-light tracking-wider">
              {product.suitType}
            </span>
          </div>
        </div>

        {/* Pricing & Add to Cart button */}
        <div className="pt-2 border-t border-beige-100">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="font-serif text-lg sm:text-xl font-bold text-brown">
              {formatPKR(product.discountedPrice)}
            </span>
            {product.originalPrice > product.discountedPrice && (
              <span className="text-xs text-brown-muted/70 line-through font-normal">
                {formatPKR(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Add to Cart CTA */}
          <button
            type="button"
            onClick={handleAddToCart}
            className={`w-full py-2.5 px-3 text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              isAddedAnim
                ? 'bg-emerald-800 text-white'
                : 'bg-brown text-ivory hover:bg-gold hover:text-white'
            }`}
          >
            {isAddedAnim ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
};
