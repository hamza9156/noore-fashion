import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Compass } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-ivory">
      {/* Hero Container */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[760px] flex items-center">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=2000&q=85"
            alt="Pakistani Women Traditional Luxury Designer Suits NOORÉ"
            className="w-full h-full object-cover object-[50%_25%]"
          />
          {/* Subtle multi-layer luxury gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-brown-dark/85 via-brown/60 to-transparent lg:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/70 via-transparent to-brown-dark/30" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl text-ivory">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory/15 backdrop-blur-md border border-gold/40 text-gold-shimmer text-xs tracking-[0.2em] uppercase font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Couture 2026 Collection • Now Live</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal leading-[1.08] tracking-tight text-white mb-6">
              The Essence of <br />
              <span className="italic font-light text-beige-200">Pakistani Luxury</span> <br />
              Couture.
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-lg text-beige-100/90 font-light leading-relaxed mb-8 max-w-xl">
              Immerse yourself in ethereal embroideries, pure 80s count lawn, hand-embellished chiffon dupattas, and masterfully tailored ready-to-wear ensembles designed for the modern Pakistani woman.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/shop?suitType=Ready+to+Wear"
                className="bg-gold hover:bg-gold-dark text-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] shadow-lg shadow-gold/25 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Explore Luxury Pret</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/shop?suitType=Unstitched"
                className="bg-ivory/15 hover:bg-ivory/25 backdrop-blur-md border border-ivory/40 text-ivory px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Shop Unstitched Lawn</span>
              </Link>
            </div>

            {/* Key Quality Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-12 mt-12 border-t border-ivory/20 text-xs text-beige-200">
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-gold shrink-0" />
                <span className="leading-tight">100% Pure Combed Fabrics</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-gold shrink-0" />
                <span className="leading-tight">Artisanal Zari & Resham Work</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-gold shrink-0" />
                <span className="leading-tight">Free Nationwide Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
