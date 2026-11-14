import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { CategorySection } from '../components/CategorySection';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, TESTIMONIALS } from '../data/products';
import {
  ArrowRight,
  Sparkles,
  Star,
  Quote,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ShoppingBag,
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const HomePage: React.FC = () => {
  const { showToast } = useShop();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Filter specific product sets for homepage sections
  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival).slice(0, 4);
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4);
  const luxuryEmbroidered = PRODUCTS.filter((p) => p.category === 'Embroidered Lawn Suits' || p.category === 'Luxury Formal Suits').slice(0, 4);
  const festiveSuits = PRODUCTS.filter((p) => p.collection === 'Festive Collection' || p.category === 'Festive Collection' || p.category === 'Chiffon Suits').slice(0, 4);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    setNewsletterSubscribed(true);
    showToast('Subscribed! Check your inbox for your 10% discount code', 'success');
  };

  return (
    <div className="bg-ivory">
      {/* 4. Large Hero Banner */}
      <HeroSection />

      {/* 5. Shop By Categories Section */}
      <CategorySection />

      {/* 6. New Arrivals Section */}
      <section className="py-16 bg-white border-y border-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold block mb-1">
                Fresh Off The Looms
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-brown font-normal">
                New Arrivals 2026
              </h2>
            </div>
            <Link
              to="/shop?filter=new"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brown hover:text-gold transition-colors"
            >
              <span>Explore All New Arrivals</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Best Selling Suits Section */}
      <section className="py-16 md:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold block mb-1.5">
              Loved Across Pakistan
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-brown font-normal mb-3">
              Best Selling Suits
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto mb-3" />
            <p className="text-xs sm:text-sm text-brown-muted font-light">
              Our most-coveted printed lawn, luxury chiffon, and festive pret designs adored by women in Lahore, Karachi, and Islamabad.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop?sort=bestseller" className="btn-primary">
              View All Best Sellers
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Summer Collection Promotional Banner */}
      <section className="relative overflow-hidden bg-brown-dark py-16 md:py-24 text-ivory">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1600&q=80"
            alt="Summer Lawn Banner Background"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3 py-1 bg-gold/20 border border-gold/40 text-gold-shimmer text-xs uppercase tracking-[0.25em] font-semibold">
                Mid-Summer Lawn Gala
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-tight">
                Breathable Luxury Lawn for the <br />
                <span className="italic text-gold-light">Pakistani Summer Heat</span>
              </h2>
              <p className="text-sm text-beige-200/90 leading-relaxed max-w-xl font-light">
                Crafted with high-twist 80s supima cotton yarns, our printed and embroidered lawn suits keep you effortlessly graceful under the summer sun. Complete with gossamer Swiss voile and printed chiffon dupattas.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/shop?collection=Summer+Collection"
                  className="bg-gold hover:bg-gold-dark text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] shadow-lg transition-colors flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Shop Summer Lawn</span>
                </Link>
                <Link
                  to="/shop?sale=true"
                  className="border border-ivory/40 hover:bg-ivory/15 text-ivory px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-colors"
                >
                  <span>Explore Summer Sale</span>
                </Link>
              </div>
            </div>

            {/* Split Visual Highlight Box */}
            <div className="lg:col-span-5 bg-ivory/10 backdrop-blur-md p-6 sm:p-8 rounded-sm border border-gold/30">
              <div className="flex items-center gap-2 text-gold-shimmer mb-3 text-xs uppercase tracking-widest font-semibold">
                <Clock className="w-4 h-4 text-gold" />
                <span>Special Online Offer</span>
              </div>
              <h3 className="font-serif text-2xl text-ivory font-normal mb-2">
                Save Up To 30% on Lawn 3-Pieces
              </h3>
              <p className="text-xs text-beige-200 leading-relaxed mb-6">
                Limited stock printed lawn suits starting from just Rs. 3,270. Free express delivery across Pakistan on orders above Rs. 4,999.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs pt-4 border-t border-ivory/15">
                <div>
                  <strong className="block text-gold text-lg font-serif">80s Count</strong>
                  <span className="text-beige-300">Pure Combed Lawn</span>
                </div>
                <div>
                  <strong className="block text-gold text-lg font-serif">100% Color Fast</strong>
                  <span className="text-beige-300">Fade-Resistant Dyes</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Luxury Embroidered Collection Section */}
      <section className="py-16 md:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold block mb-1">
                Masterpiece Threadwork
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-brown font-normal">
                Luxury Embroidered Collection
              </h2>
            </div>
            <Link
              to="/shop?category=Embroidered+Lawn+Suits"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brown hover:text-gold transition-colors"
            >
              <span>View Embroidered Suits</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
            {luxuryEmbroidered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. Festive & Wedding Collection Showcase */}
      <section className="py-16 md:py-20 bg-beige-100/70 border-t border-beige-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold block mb-1.5">
              Royal Nuptials & Soirees
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-brown font-normal mb-3">
              Festive & Wedding Collection
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto mb-3" />
            <p className="text-xs sm:text-sm text-brown-muted font-light">
              Gota patti, zardozi, raw silk peshwas, and pure crinkle chiffon ensembles designed for Pakistani wedding festivities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
            {festiveSuits.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop?collection=Wedding+Collection" className="btn-outline">
              Explore Wedding & Festive Couture
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Customer Testimonials (Clearly Labeled Sample Content) */}
      <section className="py-16 md:py-24 bg-white border-t border-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold block mb-1.5">
              Real Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-brown font-normal mb-2">
              Words From Our Patrons
            </h2>
            <span className="inline-block text-[11px] text-brown-muted bg-beige-100 px-3 py-1 rounded-full border border-beige-300">
              Sample Verified Customer Reviews
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-ivory p-6 rounded-sm border border-beige-300/80 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <Quote className="w-8 h-8 text-gold/40 mb-3" />
                  <div className="flex text-amber-500 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-brown-light leading-relaxed mb-4 italic">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-beige-200 text-xs">
                  <h4 className="font-serif font-bold text-brown">{t.name}</h4>
                  <p className="text-[11px] text-gold font-semibold">{t.city}</p>
                  <p className="text-[10px] text-brown-muted mt-0.5 truncate">
                    Bought: {t.suitBought}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Newsletter Subscription UI */}
      <section className="py-16 bg-beige-200/60 border-t border-beige-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-full bg-gold/20 mx-auto flex items-center justify-center text-gold mb-4">
            <Sparkles className="w-6 h-6 text-gold" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold block mb-2">
            The NOORÉ Circle
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-brown font-normal mb-3">
            Enjoy 10% Off Your First Order
          </h2>
          <p className="text-xs sm:text-sm text-brown-muted max-w-lg mx-auto mb-8 leading-relaxed font-light">
            Subscribe for private preview access to our seasonal lawn launches, festive previews, and exclusive discount codes in Pakistan.
          </p>

          {newsletterSubscribed ? (
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-sm text-emerald-800 text-xs max-w-md mx-auto flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-700" />
              <span>Thank you for subscribing! Your 10% voucher code is <strong>NOORE10</strong>.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 bg-white border border-beige-400 focus:border-gold px-4 py-3 text-xs text-brown focus:outline-none"
              />
              <button
                type="submit"
                className="bg-brown hover:bg-gold text-ivory px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shrink-0"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="text-[11px] text-brown-muted/70 mt-3">
            We value your privacy. Unsubscribe anytime with one click.
          </p>
        </div>
      </section>

    </div>
  );
};
