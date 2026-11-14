import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { useShop, formatPKR } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const SearchBar: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useShop();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.toLowerCase().trim();

    return PRODUCTS.filter((p) => {
      return (
        p.name.toLowerCase().includes(term) ||
        p.fabric.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.color.toLowerCase().includes(term) ||
        p.collection.toLowerCase().includes(term) ||
        p.suitType.toLowerCase().includes(term) ||
        p.pieces.toLowerCase().includes(term)
      );
    }).slice(0, 6);
  }, [searchTerm]);

  if (!isSearchOpen) return null;

  const popularSearches = [
    'Chikankari Lawn',
    'Pure Chiffon 3-Piece',
    'Ready to Wear',
    'Organza Peshwas',
    'Winter Khaddar',
    'Printed Lawn',
  ];

  const handleSelectProduct = (productId: string) => {
    setIsSearchOpen(false);
    setSearchTerm('');
    navigate(`/product/${productId}`);
  };

  const handleViewAllResults = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    setIsSearchOpen(false);
    navigate(`/shop?q=${encodeURIComponent(searchTerm.trim())}`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brown-dark/70 backdrop-blur-md animate-fade-in">
      <div className="min-h-screen px-4 pt-12 pb-20 flex flex-col items-center">
        
        {/* Search Modal Container */}
        <div className="w-full max-w-3xl bg-ivory shadow-2xl rounded-sm border border-gold/40 p-6 md:p-8 relative">
          
          {/* Close button */}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-5 right-5 p-2 text-brown hover:text-gold transition-colors"
            aria-label="Close search"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Search Header */}
          <div className="text-center mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">
              Instant Pakistani Suits Finder
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-brown font-normal mt-1">
              Search NOORÉ Collection
            </h2>
          </div>

          {/* Search Input Form */}
          <form onSubmit={handleViewAllResults} className="relative mb-6">
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by suit name, fabric (lawn, chiffon), color, category..."
              className="w-full bg-white border-2 border-beige-300 focus:border-gold py-4 pl-12 pr-28 text-sm md:text-base text-brown placeholder-brown-muted/60 focus:outline-none transition-colors"
            />
            <Search className="w-5 h-5 text-gold absolute left-4 top-1/2 -translate-y-1/2" />
            
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-brown hover:bg-gold text-ivory text-xs px-4 py-2 font-semibold uppercase tracking-wider transition-colors"
            >
              Search
            </button>
          </form>

          {/* Quick Suggestions Pills */}
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wider text-brown-muted font-medium block mb-2">
              Popular In Pakistan:
            </span>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setSearchTerm(term)}
                  className="px-3 py-1 bg-beige-200/70 hover:bg-gold/20 hover:text-gold text-xs text-brown rounded-full transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Real-time search results */}
          {searchTerm.trim() && (
            <div className="border-t border-beige-300 pt-5">
              <div className="flex items-center justify-between mb-3 text-xs text-brown-muted">
                <span className="font-semibold uppercase tracking-wider">
                  Matching Suits ({searchResults.length})
                </span>
                {searchResults.length > 0 && (
                  <button
                    onClick={handleViewAllResults}
                    className="text-gold hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>View all matches</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {searchResults.length === 0 ? (
                <div className="py-8 text-center text-brown-muted">
                  <p className="text-sm">No Pakistani suits found matching &ldquo;{searchTerm}&rdquo;.</p>
                  <p className="text-xs mt-1">Try searching for &quot;Lawn&quot;, &quot;Chiffon&quot;, &quot;Pret&quot;, or &quot;3-Piece&quot;.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-1">
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleSelectProduct(product.id)}
                      className="flex items-center gap-3 p-2 bg-white border border-beige-200 hover:border-gold transition-colors cursor-pointer group"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-16 h-20 object-cover object-center shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] uppercase font-semibold text-gold tracking-wider">
                          {product.fabric} • {product.pieces}
                        </span>
                        <h4 className="font-serif text-sm text-brown truncate group-hover:text-gold transition-colors">
                          {product.name}
                        </h4>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-xs font-bold text-brown">
                            {formatPKR(product.discountedPrice)}
                          </span>
                          {product.originalPrice > product.discountedPrice && (
                            <span className="text-[10px] text-brown-muted line-through">
                              {formatPKR(product.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
