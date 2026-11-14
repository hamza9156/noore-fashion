import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield, Truck, RotateCcw, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-dark text-beige-100 border-t border-gold/30">
      
      {/* Upper Features Bar */}
      <div className="border-b border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-serif text-base text-ivory font-medium">Free Delivery</h4>
                <p className="text-xs text-beige-300">Across Pakistan on orders over ₨ 4,999</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-serif text-base text-ivory font-medium">100% Authentic</h4>
                <p className="text-xs text-beige-300">Pure Pakistani designer cotton & silk</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                <RotateCcw className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-serif text-base text-ivory font-medium">7 Days Exchange</h4>
                <p className="text-xs text-beige-300">Hassle-free nationwide returns</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-serif text-base text-ivory font-medium">Dedicated Helpline</h4>
                <p className="text-xs text-beige-300">+92 300 1234567 (Mon-Sat 10am-8pm)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Intro (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-display text-3xl tracking-[0.25em] text-ivory font-semibold">
                NOORÉ
              </span>
              <span className="block text-[10px] uppercase tracking-[0.35em] text-gold font-medium mt-0.5">
                Pakistani Fashion
              </span>
            </Link>

            <p className="text-xs text-beige-200/80 leading-relaxed max-w-sm">
              NOORÉ is a premier Pakistani women’s clothing brand dedicated to preserving our rich cultural textile heritage through timeless embroideries, luxurious lawn fabrics, and modern silhouettes.
            </p>

            <div className="pt-2 text-xs text-beige-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Flagship: MM Alam Road, Gulberg III, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>UAN: +92 42 111 666 733 | WhatsApp: +92 300 1234567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>concierge@noorefashion.pk</span>
              </div>
            </div>
          </div>

          {/* Quick Collections */}
          <div>
            <h4 className="font-serif text-lg text-ivory font-normal tracking-wide mb-4 border-b border-gold/30 pb-2">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-beige-200">
              <li>
                <Link to="/shop?collection=Lawn+Collection" className="hover:text-gold transition-colors">
                  Unstitched Lawn 2026
                </Link>
              </li>
              <li>
                <Link to="/shop?fabric=Chiffon" className="hover:text-gold transition-colors">
                  Pure Chiffon Formals
                </Link>
              </li>
              <li>
                <Link to="/shop?suitType=Ready+to+Wear" className="hover:text-gold transition-colors">
                  Ready to Wear Pret
                </Link>
              </li>
              <li>
                <Link to="/shop?collection=Wedding+Collection" className="hover:text-gold transition-colors">
                  Wedding & Festive Wear
                </Link>
              </li>
              <li>
                <Link to="/shop?fabric=Khaddar" className="hover:text-gold transition-colors">
                  Winter Khaddar & Shawls
                </Link>
              </li>
              <li>
                <Link to="/shop?sale=true" className="text-gold-light hover:underline font-semibold">
                  Season End Sale (Up to 30% Off)
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-serif text-lg text-ivory font-normal tracking-wide mb-4 border-b border-gold/30 pb-2">
              Customer Care
            </h4>
            <ul className="space-y-2 text-xs text-beige-200">
              <li>
                <Link to="/cart" className="hover:text-gold transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gold transition-colors">
                  Shipping & Delivery Across Pakistan
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gold transition-colors">
                  Exchange & Return Policy
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gold transition-colors">
                  Stitching & Size Chart
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gold transition-colors">
                  Payment Methods & COD
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gold transition-colors">
                  Privacy Policy & Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Pakistan Boutiques */}
          <div>
            <h4 className="font-serif text-lg text-ivory font-normal tracking-wide mb-4 border-b border-gold/30 pb-2">
              Boutiques
            </h4>
            <div className="space-y-3 text-xs text-beige-200">
              <div>
                <strong className="block text-ivory">Lahore</strong>
                <span className="text-[11px] text-beige-300">MM Alam Road & Packages Mall</span>
              </div>
              <div>
                <strong className="block text-ivory">Karachi</strong>
                <span className="text-[11px] text-beige-300">Dolmen Mall Clifton & Bukhari Comm. DHA</span>
              </div>
              <div>
                <strong className="block text-ivory">Islamabad</strong>
                <span className="text-[11px] text-beige-300">Beverly Centre, Blue Area & Centaurus</span>
              </div>
              <div>
                <strong className="block text-ivory">Faisalabad</strong>
                <span className="text-[11px] text-beige-300">Kohinoor City, Jaranwala Road</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Payment Badges & Copyright */}
      <div className="border-t border-white/10 py-6 bg-brown-900 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-beige-300 text-center sm:text-left">
            &copy; 2026 NOORÉ – Pakistani Fashion. All rights reserved. Crafted with passion for Pakistani luxury fashion.
          </p>

          {/* Local Pakistani Payment Methods Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] uppercase font-bold tracking-wider text-ivory">
            <span className="px-2 py-1 bg-white/10 rounded border border-white/15">Cash on Delivery</span>
            <span className="px-2 py-1 bg-white/10 rounded border border-white/15">JazzCash</span>
            <span className="px-2 py-1 bg-white/10 rounded border border-white/15">EasyPaisa</span>
            <span className="px-2 py-1 bg-white/10 rounded border border-white/15">Bank Transfer</span>
            <span className="px-2 py-1 bg-white/10 rounded border border-white/15">Visa / Mastercard</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
