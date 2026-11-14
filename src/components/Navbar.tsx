import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, X, ChevronRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, wishlistCount, setIsCartOpen, setIsSearchOpen } = useShop();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'New Arrivals', path: '/shop?filter=new' },
    { name: 'Unstitched', path: '/shop?suitType=Unstitched' },
    { name: 'Ready to Wear', path: '/shop?suitType=Ready+to+Wear' },
    { name: 'Lawn Collection', path: '/shop?collection=Lawn+Collection' },
    { name: 'Luxury Collection', path: '/shop?collection=Luxury+Formal' },
    { name: 'Sale', path: '/shop?sale=true', isSale: true },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname + location.search === path;
  };

  return (
    <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur-md border-b border-beige-300/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2 text-brown hover:text-gold transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="p-2 ml-1 text-brown hover:text-gold transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <Link to="/" className="inline-flex flex-col items-center lg:items-start group">
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-[0.25em] text-brown font-semibold transition-colors duration-300 group-hover:text-gold">
                NOORÉ
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-brown-muted -mt-1 font-medium font-sans">
                Pakistani Fashion
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-9">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-xs uppercase tracking-[0.16em] font-medium transition-colors duration-200 py-1 ${
                  link.isSale
                    ? 'text-red-700 font-semibold hover:text-red-800'
                    : isActive(link.path)
                    ? 'text-gold font-semibold'
                    : 'text-brown hover:text-gold'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold rounded-full" />
                )}
                {link.isSale && (
                  <span className="ml-1 px-1.5 py-0.5 text-[9px] uppercase bg-red-100 text-red-700 rounded font-semibold tracking-wider">
                    Sale
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden lg:flex items-center gap-2 p-2 text-brown hover:text-gold transition-colors text-xs tracking-wider"
              title="Search collection"
            >
              <Search className="w-5 h-5" />
              <span className="hidden xl:inline text-xs font-medium text-brown-muted">Search</span>
            </button>

            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="relative p-2 text-brown hover:text-gold transition-colors"
              title="My Wishlist"
            >
              <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-gold rounded-full ring-2 ring-ivory animate-fade-in">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-brown hover:text-gold transition-colors flex items-center gap-1.5"
              title="Shopping Bag"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1.5 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-brown rounded-full ring-2 ring-ivory animate-fade-in">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden md:inline text-xs font-semibold tracking-wider text-brown">
                Bag
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 left-0 w-[82%] max-w-sm bg-ivory shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-beige-300">
                <div>
                  <span className="font-display text-2xl tracking-[0.2em] text-brown font-semibold">
                    NOORÉ
                  </span>
                  <p className="text-[10px] uppercase tracking-widest text-brown-muted">Pakistani Fashion</p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-brown hover:text-gold"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Search Bar Quick trigger */}
              <div className="mt-5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="w-full flex items-center justify-between px-4 py-2.5 bg-beige-100 rounded-sm text-brown text-xs border border-beige-300"
                >
                  <span className="flex items-center gap-2 text-brown-muted">
                    <Search className="w-4 h-4 text-gold" />
                    Search Lawn, Chiffon, Pret...
                  </span>
                  <span className="text-[10px] text-gold font-medium">OPEN</span>
                </button>
              </div>

              {/* Navigation Links List */}
              <div className="mt-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-3 text-sm uppercase tracking-widest transition-colors border-b border-beige-200/60 ${
                      link.isSale
                        ? 'text-red-700 font-semibold'
                        : isActive(link.path)
                        ? 'text-gold font-semibold bg-gold/5'
                        : 'text-brown hover:text-gold'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-beige-400" />
                  </Link>
                ))}
              </div>

              {/* Popular Categories in drawer */}
              <div className="mt-8">
                <h4 className="text-[11px] uppercase tracking-[0.2em] text-brown-muted font-semibold mb-3">
                  Shop By Fabric
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <Link
                    to="/shop?fabric=Lawn"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 bg-beige-100 rounded-sm text-brown hover:bg-gold/10 hover:text-gold transition-colors text-center font-medium"
                  >
                    Pure Lawn
                  </Link>
                  <Link
                    to="/shop?fabric=Chiffon"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 bg-beige-100 rounded-sm text-brown hover:bg-gold/10 hover:text-gold transition-colors text-center font-medium"
                  >
                    Pure Chiffon
                  </Link>
                  <Link
                    to="/shop?fabric=Organza"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 bg-beige-100 rounded-sm text-brown hover:bg-gold/10 hover:text-gold transition-colors text-center font-medium"
                  >
                    Organza
                  </Link>
                  <Link
                    to="/shop?fabric=Khaddar"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 bg-beige-100 rounded-sm text-brown hover:bg-gold/10 hover:text-gold transition-colors text-center font-medium"
                  >
                    Winter Khaddar
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-beige-300 text-xs text-brown-muted space-y-2">
              <div className="flex items-center justify-between">
                <span>Currency:</span>
                <span className="font-semibold text-brown">Pakistani Rupee (PKR ₨)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Nationwide Helpline:</span>
                <span className="font-semibold text-gold">+92 300 1234567</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
