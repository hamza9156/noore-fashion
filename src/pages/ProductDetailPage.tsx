import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductDetails } from '../components/ProductDetails';
import { ProductCard } from '../components/ProductCard';
import { Sparkles, ArrowLeft } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.id === id);
  }, [id]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter(
      (p) =>
        p.id !== product.id &&
        (p.fabric === product.fabric ||
          p.category === product.category ||
          p.collection === product.collection)
    ).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="bg-ivory min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <Sparkles className="w-12 h-12 text-gold mx-auto mb-4" />
        <h2 className="font-serif text-3xl text-brown mb-2 font-normal">
          Suit Not Found
        </h2>
        <p className="text-sm text-brown-muted max-w-md mb-8">
          The Pakistani suit you are looking for is either archived or unavailable in our current seasonal inventory.
        </p>
        <Link to="/shop" className="btn-primary">
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Catalog</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-ivory">
      {/* Main Product Details Presentation */}
      <ProductDetails product={product} />

      {/* Related Pakistani Suits Section */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-white border-t border-beige-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold block mb-1.5">
                Complete The Look
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-brown font-normal mb-2">
                You May Also Admire
              </h2>
              <div className="w-12 h-0.5 bg-gold mx-auto mb-3" />
              <p className="text-xs sm:text-sm text-brown-muted font-light">
                Complementary Pakistani silhouettes crafted in fine {product.fabric} and festive silks.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
