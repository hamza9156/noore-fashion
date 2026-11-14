import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { FilterState, SortOption, Product } from '../types';
import { ProductGrid } from '../components/ProductGrid';
import { ProductFilters } from '../components/ProductFilters';
import { SlidersHorizontal, ArrowUpDown, X, RotateCcw } from 'lucide-react';

const INITIAL_FILTERS: FilterState = {
  fabrics: [],
  suitTypes: [],
  pieces: [],
  collections: [],
  colors: [],
  priceRange: [3000, 30000],
  onlySale: false,
  readyToWear: false,
  unstitched: false,
  discountMin: 0,
};

export const ProductListingPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync with URL query parameters
  useEffect(() => {
    const updated: FilterState = { ...INITIAL_FILTERS };

    const fabricParam = searchParams.get('fabric');
    if (fabricParam) updated.fabrics = [fabricParam as any];

    const suitTypeParam = searchParams.get('suitType');
    if (suitTypeParam) updated.suitTypes = [suitTypeParam as any];

    const piecesParam = searchParams.get('pieces');
    if (piecesParam) updated.pieces = [piecesParam as any];

    const collectionParam = searchParams.get('collection');
    if (collectionParam) updated.collections = [collectionParam];

    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      // If category has Lawn, or specific keywords
      if (categoryParam.includes('Lawn')) updated.fabrics = ['Lawn'];
      if (categoryParam.includes('Chiffon')) updated.fabrics = ['Chiffon'];
      if (categoryParam.includes('Organza')) updated.fabrics = ['Organza'];
      if (categoryParam.includes('Cotton')) updated.fabrics = ['Cotton'];
      if (categoryParam.includes('Khaddar')) updated.fabrics = ['Khaddar'];
      if (categoryParam.includes('Cambric')) updated.fabrics = ['Cambric'];
      if (categoryParam === '3-Piece Suits') updated.pieces = ['3-Piece'];
      if (categoryParam === '2-Piece Suits') updated.pieces = ['2-Piece'];
      if (categoryParam === 'Ready to Wear') updated.suitTypes = ['Ready to Wear'];
      if (categoryParam === 'Unstitched Lawn Suits') updated.suitTypes = ['Unstitched'];
    }

    const saleParam = searchParams.get('sale');
    if (saleParam === 'true') updated.onlySale = true;

    const filterParam = searchParams.get('filter');
    if (filterParam === 'new') setSortBy('newest');

    const sortParam = searchParams.get('sort');
    if (sortParam) setSortBy(sortParam as SortOption);

    setFilters(updated);
  }, [searchParams]);

  const searchQuery = searchParams.get('q') || '';

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Global Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.color.toLowerCase().includes(q) ||
          p.collection.toLowerCase().includes(q) ||
          p.suitType.toLowerCase().includes(q)
      );
    }

    // Filter by Fabric
    if (filters.fabrics.length > 0) {
      result = result.filter((p) => filters.fabrics.includes(p.fabric));
    }

    // Filter by Suit Type
    if (filters.suitTypes.length > 0) {
      result = result.filter((p) => filters.suitTypes.includes(p.suitType));
    }

    // Filter by Pieces
    if (filters.pieces.length > 0) {
      result = result.filter((p) => filters.pieces.includes(p.pieces));
    }

    // Filter by Collection
    if (filters.collections.length > 0) {
      result = result.filter((p) => filters.collections.includes(p.collection));
    }

    // Filter by Color
    if (filters.colors.length > 0) {
      result = result.filter((p) =>
        filters.colors.some((c) => p.color.toLowerCase().includes(c.toLowerCase()))
      );
    }

    // Filter by Price Range
    result = result.filter(
      (p) =>
        p.discountedPrice >= filters.priceRange[0] &&
        p.discountedPrice <= filters.priceRange[1]
    );

    // Filter by Sale
    if (filters.onlySale) {
      result = result.filter((p) => p.isOnSale || p.discountPercentage > 0);
    }

    // Filter by Min Discount
    if (filters.discountMin > 0) {
      result = result.filter((p) => p.discountPercentage >= filters.discountMin);
    }

    // Sorting
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
        break;
      case 'price-asc':
        result.sort((a, b) => a.discountedPrice - b.discountedPrice);
        break;
      case 'price-desc':
        result.sort((a, b) => b.discountedPrice - a.discountedPrice);
        break;
      case 'bestseller':
        result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    return result;
  }, [filters, sortBy, searchQuery]);

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
    setSearchParams({});
  };

  const removeFabricFilter = (fabric: string) => {
    setFilters({ ...filters, fabrics: filters.fabrics.filter((f) => f !== fabric) });
  };

  const removeSuitTypeFilter = (type: string) => {
    setFilters({ ...filters, suitTypes: filters.suitTypes.filter((t) => t !== type) });
  };

  const removePieceFilter = (piece: string) => {
    setFilters({ ...filters, pieces: filters.pieces.filter((p) => p !== piece) });
  };

  const removeCollectionFilter = (col: string) => {
    setFilters({ ...filters, collections: filters.collections.filter((c) => c !== col) });
  };

  const removeColorFilter = (color: string) => {
    setFilters({ ...filters, colors: filters.colors.filter((c) => c !== color) });
  };

  return (
    <div className="bg-ivory min-h-screen py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold block mb-1">
            Pakistani Designer Clothing
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brown font-normal">
            {searchQuery
              ? `Search Results for "${searchQuery}"`
              : searchParams.get('collection') ||
                searchParams.get('category') ||
                searchParams.get('fabric')
              ? `${searchParams.get('collection') || searchParams.get('category') || searchParams.get('fabric')} Suits`
              : 'All Pakistani Ladies Suits'}
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto my-3" />
          <p className="text-xs sm:text-sm text-brown-muted font-light">
            Explore authentic Pakistani lawn, pure chiffon, rich organza, and winter khaddar ensembles with intricate embroidery and luxury dupattas.
          </p>
        </div>

        {/* Toolbar: Filter Toggle on Mobile, Count, Sort Select */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 px-4 bg-white border border-beige-300 rounded-sm mb-6 shadow-sm">
          
          {/* Mobile Filter Button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3.5 py-2 bg-beige-100 hover:bg-beige-200 text-brown text-xs font-semibold uppercase tracking-wider rounded-xs border border-beige-300"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-gold" />
              <span>Filters ({filteredProducts.length})</span>
            </button>

            {/* Showing Count */}
            <span className="text-xs text-brown-muted font-medium">
              Showing <strong className="text-brown">{filteredProducts.length}</strong> Pakistani Suits
            </span>
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-xs text-brown-muted hidden sm:inline uppercase tracking-wider font-semibold">
              Sort By:
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort products by"
                className="appearance-none bg-ivory border border-beige-300 py-1.5 pl-3 pr-8 text-xs font-medium text-brown rounded-xs focus:outline-none focus:border-gold cursor-pointer"
              >
                <option value="featured">Featured Collection</option>
                <option value="newest">New Arrivals</option>
                <option value="bestseller">Best Selling Suits</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ArrowUpDown className="w-3 h-3 text-gold absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Active Filter Chips */}
        {(filters.fabrics.length > 0 ||
          filters.suitTypes.length > 0 ||
          filters.pieces.length > 0 ||
          filters.collections.length > 0 ||
          filters.colors.length > 0 ||
          filters.onlySale ||
          searchQuery) && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs uppercase tracking-wider font-semibold text-brown-muted">
              Active Filters:
            </span>

            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-beige-200 text-brown text-xs rounded-full">
                Search: &ldquo;{searchQuery}&rdquo;
                <X
                  className="w-3 h-3 cursor-pointer hover:text-red-700"
                  onClick={() => setSearchParams({})}
                />
              </span>
            )}

            {filters.fabrics.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-gold/15 text-brown text-xs rounded-full border border-gold/30"
              >
                {f}
                <X className="w-3 h-3 cursor-pointer hover:text-red-700" onClick={() => removeFabricFilter(f)} />
              </span>
            ))}

            {filters.suitTypes.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-beige-200 text-brown text-xs rounded-full"
              >
                {t}
                <X className="w-3 h-3 cursor-pointer hover:text-red-700" onClick={() => removeSuitTypeFilter(t)} />
              </span>
            ))}

            {filters.pieces.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-beige-200 text-brown text-xs rounded-full"
              >
                {p}
                <X className="w-3 h-3 cursor-pointer hover:text-red-700" onClick={() => removePieceFilter(p)} />
              </span>
            ))}

            {filters.collections.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-beige-200 text-brown text-xs rounded-full"
              >
                {c}
                <X className="w-3 h-3 cursor-pointer hover:text-red-700" onClick={() => removeCollectionFilter(c)} />
              </span>
            ))}

            {filters.colors.map((col) => (
              <span
                key={col}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-beige-200 text-brown text-xs rounded-full"
              >
                {col}
                <X className="w-3 h-3 cursor-pointer hover:text-red-700" onClick={() => removeColorFilter(col)} />
              </span>
            ))}

            {filters.onlySale && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                Sale Only
                <X
                  className="w-3 h-3 cursor-pointer hover:text-red-900"
                  onClick={() => setFilters({ ...filters, onlySale: false })}
                />
              </span>
            )}

            <button
              type="button"
              onClick={handleResetFilters}
              className="text-xs text-gold hover:text-brown underline font-semibold uppercase tracking-wider ml-2"
            >
              Clear All
            </button>
          </div>
        )}

        {/* Layout Grid: Desktop Sidebar + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block lg:col-span-1 bg-white p-6 rounded-sm border border-beige-300 shadow-sm sticky top-28">
            <ProductFilters
              filters={filters}
              onFilterChange={setFilters}
              onReset={handleResetFilters}
              totalFilteredCount={filteredProducts.length}
            />
          </div>

          {/* Product Grid (3 cols on lg, or responsive grid) */}
          <div className="lg:col-span-3">
            {/* The ProductGrid component uses 4 columns on desktop, 3 on tablet, 2 on mobile */}
            <ProductGrid
              products={filteredProducts}
              onResetFilters={handleResetFilters}
              emptyMessage="No suits match your criteria. Try adjusting the fabric, price range, or collection filters."
            />
          </div>

        </div>

      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-sm bg-ivory shadow-2xl flex flex-col justify-between overflow-y-auto">
              <ProductFilters
                filters={filters}
                onFilterChange={setFilters}
                onReset={handleResetFilters}
                isMobileDrawer={true}
                onCloseMobile={() => setIsMobileFilterOpen(false)}
                totalFilteredCount={filteredProducts.length}
              />
              <div className="p-4 bg-white border-t border-beige-300">
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full btn-primary"
                >
                  View {filteredProducts.length} Results
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
