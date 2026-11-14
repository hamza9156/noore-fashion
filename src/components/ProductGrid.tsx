import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
  onResetFilters?: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  emptyMessage = 'No Pakistani suits match your selected criteria.',
  onResetFilters,
}) => {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center bg-white rounded-sm border border-dashed border-beige-300 p-8 my-6">
        <Sparkles className="w-10 h-10 text-gold mx-auto mb-3" />
        <h3 className="font-serif text-2xl text-brown mb-2 font-normal">No Suits Found</h3>
        <p className="text-sm text-brown-muted max-w-md mx-auto mb-6">
          {emptyMessage}
        </p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="btn-primary"
          >
            Clear All Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
