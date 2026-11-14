export type FabricType =
  | 'Lawn'
  | 'Chiffon'
  | 'Organza'
  | 'Cotton'
  | 'Khaddar'
  | 'Cambric'
  | 'Raw Silk'
  | 'Jacquard'
  | 'Net';

export type SuitType = 'Unstitched' | 'Ready to Wear';

export type PieceCount = '2-Piece' | '3-Piece';

export type CollectionType =
  | 'Lawn Collection'
  | 'Luxury Formal'
  | 'Festive Collection'
  | 'Summer Collection'
  | 'Winter Khaddar'
  | 'Wedding Collection'
  | 'Ready to Wear'
  | 'Sale';

export interface UnstitchedDetails {
  shirt: string;
  dupatta: string;
  trouser: string;
  borders?: string;
}

export interface DesignDetails {
  shirt: string;
  dupatta: string;
  trouser: string;
  embroidery: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  fabric: FabricType;
  suitType: SuitType;
  pieces: PieceCount;
  color: string;
  colorHex: string;
  description: string;
  designDetails: DesignDetails;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  rating: number;
  reviewsCount: number;
  collection: CollectionType;
  images: string[];
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
  availableSizes?: ('XS' | 'S' | 'M' | 'L' | 'XL')[];
  unstitchedIncludes?: UnstitchedDetails;
  careInstructions?: string[];
  sku: string;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedSize?: string;
  quantity: number;
}

export interface FilterState {
  fabrics: FabricType[];
  suitTypes: SuitType[];
  pieces: PieceCount[];
  collections: string[];
  colors: string[];
  priceRange: [number, number];
  onlySale: boolean;
  readyToWear: boolean;
  unstitched: boolean;
  discountMin: number;
}

export type SortOption =
  | 'featured'
  | 'newest'
  | 'price-asc'
  | 'price-desc'
  | 'bestseller'
  | 'rating';
