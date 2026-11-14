import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SearchBar } from './components/SearchBar';
import { QuickViewModal } from './components/QuickViewModal';
import { Toast } from './components/Toast';

// Pages
import { HomePage } from './pages/HomePage';
import { ProductListingPage } from './pages/ProductListingPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { WishlistPage } from './pages/WishlistPage';

// Scroll to top helper on route navigation
const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
};

export const App: React.FC = () => {
  return (
    <ShopProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-ivory text-brown">
          {/* Announcement Bar */}
          <AnnouncementBar />

          {/* Sticky Luxury Navbar */}
          <Navbar />

          {/* Main Routing Views */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ProductListingPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              {/* Fallback to shop */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          {/* Luxury Footer */}
          <Footer />

          {/* Global Interactive Overlays */}
          <CartDrawer />
          <SearchBar />
          <QuickViewModal />
          <Toast />
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
};

export default App;
