import React from 'react';
import { FilterState, FabricType, SuitType, PieceCount } from '../types';
import { X, RotateCcw, Check } from 'lucide-react';
import { formatPKR } from '../context/ShopContext';

interface ProductFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onReset: () => void;
  isMobileDrawer?: boolean;
  onCloseMobile?: () => void;
  totalFilteredCount: number;
}

const FABRICS: FabricType[] = [
  'Lawn',
  'Chiffon',
  'Organza',
  'Cotton',
  'Khaddar',
  'Cambric',
  'Raw Silk',
  'Jacquard',
];

const SUIT_TYPES: SuitType[] = ['Unstitched', 'Ready to Wear'];

const PIECES: PieceCount[] = ['2-Piece', '3-Piece'];

const COLLECTIONS = [
  'Lawn Collection',
  'Luxury Formal',
  'Festive Collection',
  'Summer Collection',
  'Winter Khaddar',
  'Wedding Collection',
  'Ready to Wear',
  'Sale',
];

const POPULAR_COLORS = [
  { name: 'Ivory / Cream', hex: '#FAF7F2' },
  { name: 'Black', hex: '#222222' },
  { name: 'Teal Blue', hex: '#006D77' },
  { name: 'Mustard Gold', hex: '#D4A373' },
  { name: 'Emerald Green', hex: '#1B4332' },
  { name: 'Lilac Mauve', hex: '#CDB4DB' },
  { name: 'Crimson Red', hex: '#9E2A2B' },
  { name: 'Champagne Gold', hex: '#C5A16A' },
  { name: 'Powder Blue', hex: '#B8C0CC' },
  { name: 'Charcoal Grey', hex: '#333333' },
];

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFilterChange,
  onReset,
  isMobileDrawer = false,
  onCloseMobile,
  totalFilteredCount,
}) => {
  const toggleFabric = (fabric: FabricType) => {
    const exists = filters.fabrics.includes(fabric);
    const updated = exists
      ? filters.fabrics.filter((f) => f !== fabric)
      : [...filters.fabrics, fabric];
    onFilterChange({ ...filters, fabrics: updated });
  };

  const toggleSuitType = (type: SuitType) => {
    const exists = filters.suitTypes.includes(type);
    const updated = exists
      ? filters.suitTypes.filter((t) => t !== type)
      : [...filters.suitTypes, type];
    onFilterChange({ ...filters, suitTypes: updated });
  };

  const togglePieces = (piece: PieceCount) => {
    const exists = filters.pieces.includes(piece);
    const updated = exists
      ? filters.pieces.filter((p) => p !== piece)
      : [...filters.pieces, piece];
    onFilterChange({ ...filters, pieces: updated });
  };

  const toggleCollection = (col: string) => {
    const exists = filters.collections.includes(col);
    const updated = exists
      ? filters.collections.filter((c) => c !== col)
      : [...filters.collections, col];
    onFilterChange({ ...filters, collections: updated });
  };

  const toggleColor = (colorName: string) => {
    const exists = filters.colors.includes(colorName);
    const updated = exists
      ? filters.colors.filter((c) => c !== colorName)
      : [...filters.colors, colorName];
    onFilterChange({ ...filters, colors: updated });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    onFilterChange({ ...filters, priceRange: [filters.priceRange[0], val] });
  };

  const hasActiveFilters =
    filters.fabrics.length > 0 ||
    filters.suitTypes.length > 0 ||
    filters.pieces.length > 0 ||
    filters.collections.length > 0 ||
    filters.colors.length > 0 ||
    filters.onlySale ||
    filters.discountMin > 0 ||
    filters.priceRange[1] < 30000;

  return (
    <div className={`space-y-6 ${isMobileDrawer ? 'p-6' : ''}`}>
      {/* Header for Filter Drawer */}
      <div className="flex items-center justify-between pb-4 border-b border-beige-300">
        <div>
          <h3 className="font-serif text-xl text-brown font-semibold">Filter Suits</h3>
          <p className="text-xs text-brown-muted">Showing {totalFilteredCount} matching suits</p>
        </div>
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="text-xs text-gold hover:text-brown flex items-center gap-1 font-semibold uppercase tracking-wider"
              title="Reset all filters"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          )}
          {isMobileDrawer && onCloseMobile && (
            <button onClick={onCloseMobile} className="p-1 text-brown hover:text-gold">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* 1. Suit Type (Unstitched vs Ready to Wear) */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-brown mb-3">
          Suit Type
        </h4>
        <div className="space-y-2">
          {SUIT_TYPES.map((type) => {
            const checked = filters.suitTypes.includes(type);
            return (
              <label
                key={type}
                className="flex items-center justify-between text-xs text-brown-light cursor-pointer hover:text-brown"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    onClick={() => toggleSuitType(type)}
                    className={`w-4 h-4 rounded-xs border flex items-center justify-center transition-colors ${
                      checked
                        ? 'bg-brown border-brown text-white'
                        : 'border-beige-400 bg-white'
                    }`}
                  >
                    {checked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span onClick={() => toggleSuitType(type)}>{type}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* 2. Number of Pieces (2-Piece / 3-Piece) */}
      <div className="pt-4 border-t border-beige-200">
        <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-brown mb-3">
          Pieces
        </h4>
        <div className="flex gap-2">
          {PIECES.map((piece) => {
            const selected = filters.pieces.includes(piece);
            return (
              <button
                key={piece}
                type="button"
                onClick={() => togglePieces(piece)}
                className={`flex-1 py-2 text-xs font-semibold rounded-xs border transition-colors ${
                  selected
                    ? 'bg-brown text-ivory border-brown'
                    : 'bg-white text-brown border-beige-300 hover:border-gold'
                }`}
              >
                {piece}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Fabric Type */}
      <div className="pt-4 border-t border-beige-200">
        <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-brown mb-3">
          Fabric Type
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {FABRICS.map((fabric) => {
            const checked = filters.fabrics.includes(fabric);
            return (
              <button
                key={fabric}
                type="button"
                onClick={() => toggleFabric(fabric)}
                className={`px-3 py-1.5 text-xs text-left rounded-xs border transition-all flex items-center justify-between ${
                  checked
                    ? 'bg-gold/15 text-brown border-gold font-semibold'
                    : 'bg-white text-brown-light border-beige-300 hover:border-beige-400'
                }`}
              >
                <span>{fabric}</span>
                {checked && <Check className="w-3 h-3 text-gold" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Price Range (PKR) */}
      <div className="pt-4 border-t border-beige-200">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-brown">
            Price Range (PKR)
          </h4>
          <span className="text-xs font-semibold text-gold">
            Max: {formatPKR(filters.priceRange[1])}
          </span>
        </div>
        <input
          type="range"
          min={3000}
          max={30000}
          step={500}
          value={filters.priceRange[1]}
          onChange={handlePriceChange}
          className="w-full accent-gold cursor-pointer"
        />
        <div className="flex justify-between text-[11px] text-brown-muted mt-1 font-medium">
          <span>₨ 3,000</span>
          <span>₨ 30,000+</span>
        </div>
      </div>

      {/* 5. Color Palette */}
      <div className="pt-4 border-t border-beige-200">
        <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-brown mb-3">
          Color Family
        </h4>
        <div className="flex flex-wrap gap-2">
          {POPULAR_COLORS.map((col) => {
            const isSelected = filters.colors.includes(col.name);
            return (
              <button
                key={col.name}
                type="button"
                onClick={() => toggleColor(col.name)}
                title={col.name}
                className={`relative w-7 h-7 rounded-full border transition-transform ${
                  isSelected
                    ? 'ring-2 ring-gold scale-110 border-white shadow-sm'
                    : 'border-beige-300 hover:scale-105'
                }`}
                style={{ backgroundColor: col.hex }}
              >
                {isSelected && (
                  <Check
                    className={`w-3.5 h-3.5 mx-auto ${
                      col.hex === '#FAF7F2' || col.hex === '#B8C0CC'
                        ? 'text-brown'
                        : 'text-white'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 6. Collections */}
      <div className="pt-4 border-t border-beige-200">
        <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-brown mb-3">
          Collections
        </h4>
        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
          {COLLECTIONS.map((col) => {
            const checked = filters.collections.includes(col);
            return (
              <label
                key={col}
                className="flex items-center gap-2 text-xs text-brown-light hover:text-brown cursor-pointer py-0.5"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleCollection(col)}
                  className="rounded text-gold focus:ring-gold accent-gold"
                />
                <span>{col}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 7. Special Promotions & Sale */}
      <div className="pt-4 border-t border-beige-200">
        <label className="flex items-center justify-between cursor-pointer p-2 rounded-xs bg-red-50 border border-red-200">
          <span className="text-xs font-semibold text-red-800 uppercase tracking-wider">
            Sale Items Only
          </span>
          <input
            type="checkbox"
            checked={filters.onlySale}
            onChange={(e) => onFilterChange({ ...filters, onlySale: e.target.checked })}
            className="rounded text-red-700 focus:ring-red-700 accent-red-700 w-4 h-4"
          />
        </label>
      </div>

      {/* Clear All Filters Button */}
      {hasActiveFilters && (
        <div className="pt-4">
          <button
            type="button"
            onClick={onReset}
            className="w-full py-2.5 text-xs uppercase tracking-widest font-semibold border border-brown text-brown hover:bg-brown hover:text-ivory transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
};
