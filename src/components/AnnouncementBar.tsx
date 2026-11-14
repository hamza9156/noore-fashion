import React, { useState, useEffect } from 'react';
import { Truck, ShieldCheck, Sparkles, Phone } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const announcements = [
    {
      icon: Truck,
      text: 'Free Express Nationwide Delivery on Orders Above ₨ 4,999 • Cash on Delivery Available',
    },
    {
      icon: Sparkles,
      text: 'New Spring/Summer Lawn Collection 2026 is Now Live • Limited Designer Editions',
    },
    {
      icon: ShieldCheck,
      text: '100% Authentic Pakistani Designer Fabrics • 7-Day Hassle-Free Returns',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const CurrentIcon = announcements[currentIndex].icon;

  return (
    <div className="bg-brown text-ivory text-xs py-2 px-4 border-b border-gold/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden lg:flex items-center gap-2 text-beige-300 text-[11px] tracking-wider uppercase">
          <Phone className="w-3.5 h-3.5 text-gold" />
          <span>Support: +92 300 1234567</span>
        </div>

        <div className="flex-1 flex items-center justify-center gap-2 tracking-wide font-light transition-opacity duration-500 ease-in-out text-center">
          <CurrentIcon className="w-3.5 h-3.5 text-gold shrink-0 animate-pulse" />
          <span className="text-[11px] md:text-xs text-ivory/95 font-medium">
            {announcements[currentIndex].text}
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-3 text-beige-300 text-[11px] uppercase tracking-wider">
          <span className="hover:text-gold cursor-pointer transition-colors">Store Locator</span>
          <span>•</span>
          <span className="hover:text-gold cursor-pointer transition-colors">Track Order</span>
          <span>•</span>
          <span className="text-gold font-semibold">PKR ₨</span>
        </div>
      </div>
    </div>
  );
};
