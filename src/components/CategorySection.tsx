import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES_LIST } from '../data/products';

export const CategorySection: React.FC = () => {
  // Select top 8 featured categories for the homepage grid
  const featuredCategories = CATEGORIES_LIST.slice(0, 8);

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold block mb-2 font-sans">
            Curated Elegance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brown font-normal mb-4">
            Shop By Categories
          </h2>
          <div className="w-16 h-[1.5px] bg-gold mx-auto mb-4" />
          <p className="text-sm md:text-base text-brown-muted font-light">
            From breezy unstitched lawn to majestic bridal chiffon ensembles, find the quintessential Pakistani silhouette tailored for every occasion.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {featuredCategories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${encodeURIComponent(cat.slug)}`}
              className="group relative block overflow-hidden bg-beige-100 rounded-sm shadow-luxury hover:shadow-luxury-hover transition-all duration-500"
            >
              {/* Category Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/80 via-brown-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Floating pill for count */}
                <span className="absolute top-3 right-3 text-[10px] uppercase tracking-widest px-2.5 py-1 bg-ivory/90 backdrop-blur-md text-brown font-semibold rounded-full shadow-sm">
                  {cat.count} Suits
                </span>

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-end justify-between text-ivory">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-normal leading-snug group-hover:text-gold-light transition-colors duration-300">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] text-beige-200 font-light line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {cat.description}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-ivory/20 backdrop-blur-sm border border-ivory/30 flex items-center justify-center shrink-0 ml-2 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Categories Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border-b border-brown text-brown pb-1 text-xs uppercase tracking-[0.2em] font-semibold hover:text-gold hover:border-gold transition-colors duration-200"
          >
            <span>View All 16 Collections & Fabrics</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
