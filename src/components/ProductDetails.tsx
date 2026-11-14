import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { ImageGallery } from './ImageGallery';
import { SizeGuideModal } from './SizeGuideModal';
import { useShop, formatPKR } from '../context/ShopContext';
import {
  Heart,
  ShoppingBag,
  Truck,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  Layers,
  Ruler,
  Star,
  Check,
} from 'lucide-react';

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { addToCart, isInWishlist, toggleWishlist, setIsCartOpen } = useShop();
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState<string>(
    product.availableSizes ? product.availableSizes[0] : ''
  );
  const [quantity, setQuantity] = useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'fabric' | 'shipping'>('details');

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, quantity);
    setIsCartOpen(true);
  };

  return (
    <div className="bg-ivory py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-brown-muted mb-8 tracking-wider">
          <span className="hover:text-gold cursor-pointer" onClick={() => navigate('/')}>Home</span>
          <span>/</span>
          <span className="hover:text-gold cursor-pointer" onClick={() => navigate('/shop')}>Shop</span>
          <span>/</span>
          <span className="hover:text-gold cursor-pointer" onClick={() => navigate(`/shop?category=${encodeURIComponent(product.category)}`)}>
            {product.category}
          </span>
          <span>/</span>
          <span className="text-brown font-semibold truncate max-w-[200px] sm:max-w-xs">{product.name}</span>
        </div>

        {/* Main Grid: Gallery + Product Spec */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Image Gallery (7 cols on lg) */}
          <div className="lg:col-span-7">
            <ImageGallery images={product.images} productName={product.name} />
          </div>

          {/* Right Column: Product Spec & Ordering (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Collection & Brand */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold">
                  {product.brand} • {product.collection}
                </span>
                <span className="text-xs bg-beige-200 text-brown px-2 py-0.5 rounded font-medium">
                  SKU: {product.sku}
                </span>
              </div>

              {/* Product Title */}
              <h1 className="font-serif text-3xl sm:text-4xl text-brown font-normal mb-3 leading-tight">
                {product.name}
              </h1>

              {/* Ratings and Reviews */}
              <div className="flex items-center gap-3 mb-5 pb-5 border-b border-beige-300">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-beige-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-brown">{product.rating}</span>
                <span className="text-xs text-brown-muted">• ({product.reviewsCount} verified Pakistani reviews)</span>
              </div>

              {/* Pricing section */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-serif text-3xl font-bold text-brown">
                  {formatPKR(product.discountedPrice)}
                </span>
                {product.originalPrice > product.discountedPrice && (
                  <>
                    <span className="text-base text-brown-muted line-through">
                      {formatPKR(product.originalPrice)}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-100 px-2 py-0.5 rounded">
                      Save {product.discountPercentage}%
                    </span>
                  </>
                )}
                <span className="text-[11px] text-brown-muted block sm:inline">
                  (Inclusive of all taxes in Pakistan)
                </span>
              </div>

              {/* Quick Specification Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3.5 bg-beige-100 rounded-sm mb-6 text-xs border border-beige-300/80">
                <div>
                  <span className="text-brown-muted block text-[10px] uppercase tracking-wider">Fabric</span>
                  <span className="font-semibold text-brown">{product.fabric}</span>
                </div>
                <div>
                  <span className="text-brown-muted block text-[10px] uppercase tracking-wider">Suit Type</span>
                  <span className="font-semibold text-brown">{product.suitType}</span>
                </div>
                <div>
                  <span className="text-brown-muted block text-[10px] uppercase tracking-wider">Pieces</span>
                  <span className="font-semibold text-brown">{product.pieces}</span>
                </div>
                <div>
                  <span className="text-brown-muted block text-[10px] uppercase tracking-wider">Color</span>
                  <span className="font-semibold text-brown">{product.color}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-brown-muted block text-[10px] uppercase tracking-wider">Category</span>
                  <span className="font-semibold text-brown">{product.category}</span>
                </div>
              </div>

              {/* SIZE SELECTION vs UNSTITCHED FABRIC BREAKDOWN */}
              {product.suitType === 'Ready to Wear' && product.availableSizes ? (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs uppercase tracking-widest font-semibold text-brown">
                      Select Size (Ready to Wear):
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsSizeGuideOpen(true)}
                      className="text-xs text-gold hover:text-brown flex items-center gap-1 font-semibold underline"
                    >
                      <Ruler className="w-3.5 h-3.5" />
                      <span>View Size Chart</span>
                    </button>
                  </div>
                  <div className="flex gap-2.5">
                    {product.availableSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-11 text-xs font-bold rounded-xs border transition-all ${
                          selectedSize === size
                            ? 'bg-brown text-ivory border-brown shadow-sm ring-1 ring-gold'
                            : 'bg-white text-brown border-beige-300 hover:border-gold'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Unstitched Suit Pieces & Meters Information */
                <div className="mb-6 p-4 bg-white border border-beige-300 rounded-sm">
                  <div className="flex items-center gap-2 mb-2 text-gold">
                    <Layers className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-widest font-bold text-brown">
                      Unstitched Fabric Breakdown & Inclusions
                    </span>
                  </div>
                  <p className="text-xs text-brown-muted mb-3">
                    Premium uncut fabric ready to be customized and stitched to your personal measurements.
                  </p>
                  <ul className="text-xs space-y-1.5 text-brown-light">
                    {product.unstitchedIncludes ? (
                      <>
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                          <span><strong>Shirt:</strong> {product.unstitchedIncludes.shirt}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                          <span><strong>Dupatta:</strong> {product.unstitchedIncludes.dupatta}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                          <span><strong>Trouser:</strong> {product.unstitchedIncludes.trouser}</span>
                        </li>
                        {product.unstitchedIncludes.borders && (
                          <li className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                            <span><strong>Patches & Borders:</strong> {product.unstitchedIncludes.borders}</span>
                          </li>
                        )}
                      </>
                    ) : (
                      <li className="text-xs text-brown">
                        {product.pieces} Complete Unstitched Ensemble with embroidered neckline, borders and matching dupatta.
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* Quantity Selector & Add to Cart Action */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-4">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-beige-300 bg-white">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-10 h-11 flex items-center justify-center text-brown hover:bg-beige-100 transition-colors text-base font-bold"
                    >
                      -
                    </button>
                    <span className="w-12 text-center text-xs font-bold text-brown">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-10 h-11 flex items-center justify-center text-brown hover:bg-beige-100 transition-colors text-base font-bold"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex-1 bg-brown hover:bg-gold text-ivory text-xs font-semibold uppercase tracking-[0.2em] h-11 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>

                  {/* Wishlist Heart Button */}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(product)}
                    className={`w-11 h-11 flex items-center justify-center rounded-xs border transition-colors ${
                      inWishlist
                        ? 'border-red-400 bg-red-50 text-red-600'
                        : 'border-beige-300 bg-white text-brown hover:text-red-600'
                    }`}
                    title={inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                  >
                    <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Buy Now Button */}
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="w-full bg-gold hover:bg-gold-dark text-white text-xs font-semibold uppercase tracking-[0.2em] h-11 transition-all duration-300 shadow-gold-glow flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Buy Now • Cash on Delivery</span>
                </button>
              </div>

              {/* Pakistani Nationwide Delivery & Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-beige-100/70 border border-beige-300 rounded-sm text-xs mb-8">
                <div className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-gold shrink-0" />
                  <div>
                    <strong className="block text-brown">Pakistan Delivery</strong>
                    <span className="text-[10px] text-brown-muted">3-5 Working Days</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                  <div>
                    <strong className="block text-brown">100% Authentic</strong>
                    <span className="text-[10px] text-brown-muted">Guaranteed Fabrics</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <RotateCcw className="w-4 h-4 text-gold shrink-0" />
                  <div>
                    <strong className="block text-brown">7 Days Exchange</strong>
                    <span className="text-[10px] text-brown-muted">Hassle-free return</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Tabbed Info Section (Details / Fabric / Shipping) */}
            <div className="border-t border-beige-300 pt-6">
              <div className="flex border-b border-beige-300 gap-6 text-xs uppercase tracking-wider font-semibold mb-4">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`pb-2 transition-colors relative ${
                    activeTab === 'details' ? 'text-gold' : 'text-brown-muted hover:text-brown'
                  }`}
                >
                  Description & Details
                  {activeTab === 'details' && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('fabric')}
                  className={`pb-2 transition-colors relative ${
                    activeTab === 'fabric' ? 'text-gold' : 'text-brown-muted hover:text-brown'
                  }`}
                >
                  Embroidery & Care
                  {activeTab === 'fabric' && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('shipping')}
                  className={`pb-2 transition-colors relative ${
                    activeTab === 'shipping' ? 'text-gold' : 'text-brown-muted hover:text-brown'
                  }`}
                >
                  Delivery in Pakistan
                  {activeTab === 'shipping' && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold" />
                  )}
                </button>
              </div>

              {activeTab === 'details' && (
                <div className="text-xs text-brown-light space-y-3 leading-relaxed">
                  <p>{product.description}</p>
                  <div className="mt-3">
                    <strong className="text-brown block mb-1">Design Inclusions:</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li><strong>Shirt:</strong> {product.designDetails.shirt}</li>
                      <li><strong>Dupatta:</strong> {product.designDetails.dupatta}</li>
                      <li><strong>Trouser:</strong> {product.designDetails.trouser}</li>
                      <li><strong>Workmanship:</strong> {product.designDetails.embroidery}</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'fabric' && (
                <div className="text-xs text-brown-light space-y-2">
                  <p className="font-semibold text-brown">Care & Washing Guidelines:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    {product.careInstructions?.map((c, i) => (
                      <li key={i}>{c}</li>
                    )) || (
                      <>
                        <li>Dry clean recommended for first wash</li>
                        <li>Do not bleach or expose to harsh chemicals</li>
                        <li>Iron at medium temperature with protective cloth</li>
                      </>
                    )}
                  </ul>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div className="text-xs text-brown-light space-y-2">
                  <p><strong>Standard Shipping:</strong> Rs. 250 flat shipping across Pakistan. Orders over Rs. 4,999 qualify for <strong>FREE DELIVERY</strong>.</p>
                  <p><strong>Delivery Timelines:</strong> Lahore & Islamabad: 2-3 working days. Karachi & rest of Pakistan: 3-5 working days.</p>
                  <p><strong>Payment Methods:</strong> Cash on Delivery (COD), JazzCash, EasyPaisa, Direct Bank Transfer.</p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* Size Guide Modal */}
      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
    </div>
  );
};
