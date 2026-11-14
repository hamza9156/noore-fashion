import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types';

interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'info' | 'error';
}

interface ShopContextType {
  cart: CartItem[];
  wishlist: Product[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  toast: ToastState;
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  addToCart: (product: Product, size?: string, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQty: number) => void;
  clearCart: () => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  removeFromWishlist: (productId: string) => void;
  cartCount: number;
  cartTotal: number;
  wishlistCount: number;
  freeShippingThreshold: number;
  formatPKR: (amount: number) => string;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const formatPKR = (amount: number): string => {
  return `₨ ${amount.toLocaleString('en-PK')}`;
};

const FREE_SHIPPING_THRESHOLD = 5000;

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('noore_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('noore_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState<ToastState>({ show: false, message: '', type: 'success' });

  useEffect(() => {
    try {
      localStorage.setItem('noore_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('noore_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist to localStorage', e);
    }
  }, [wishlist]);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 3200);
  };

  const addToCart = (product: Product, size?: string, quantity: number = 1) => {
    const selectedSize = product.suitType === 'Ready to Wear' ? (size || product.availableSizes?.[0] || 'M') : undefined;
    const cartItemId = `${product.id}-${selectedSize || 'unstitched'}`;

    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === cartItemId);
      if (existing) {
        return prevCart.map(item =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { id: cartItemId, product, selectedSize, quantity }];
    });

    showToast(`Added "${product.name}" to shopping bag`, 'success');
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== cartItemId));
    showToast('Item removed from shopping bag', 'info');
  };

  const updateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item => (item.id === cartItemId ? { ...item, quantity: newQty } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product: Product) => {
    const exists = wishlist.some(item => item.id === product.id);
    if (exists) {
      setWishlist(prev => prev.filter(item => item.id !== product.id));
      showToast(`Removed "${product.name}" from your wishlist`, 'info');
    } else {
      setWishlist(prev => [...prev, product]);
      showToast(`Saved "${product.name}" to your wishlist`, 'success');
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some(item => item.id === productId);
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist(prev => prev.filter(item => item.id !== productId));
  };

  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.product.discountedPrice * item.quantity, 0);
  const wishlistCount = wishlist.length;

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        setIsCartOpen,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        toast,
        showToast,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        cartCount,
        cartTotal,
        wishlistCount,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        formatPKR,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
