import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[selectedIndex] || images[0];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails list */}
      <div className="flex md:flex-col gap-2.5 overflow-x-auto md:overflow-y-auto max-h-[620px] scrollbar-none py-1">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedIndex(idx)}
            className={`relative w-16 h-20 sm:w-20 sm:h-24 shrink-0 rounded-xs overflow-hidden border-2 transition-all ${
              selectedIndex === idx
                ? 'border-gold shadow-sm scale-102 ring-1 ring-gold'
                : 'border-beige-200 hover:border-beige-400 opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={img}
              alt={`${productName} thumbnail ${idx + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </button>
        ))}
      </div>

      {/* Main Image Viewport with Zoom */}
      <div className="relative flex-1 aspect-[3/4] max-h-[720px] bg-beige-100 rounded-sm overflow-hidden border border-beige-300">
        <div
          className="w-full h-full relative cursor-crosshair overflow-hidden"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
        >
          <img
            src={currentImage}
            alt={`${productName} - Pakistani Traditional Suit`}
            className={`w-full h-full object-cover object-center transition-transform duration-200 ${
              isZoomed ? 'scale-150' : 'scale-100'
            }`}
            style={
              isZoomed
                ? {
                    transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                  }
                : undefined
            }
          />
        </div>

        {/* Zoom Hint Indicator */}
        <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-md px-2.5 py-1 text-[11px] text-brown font-medium rounded-full flex items-center gap-1.5 shadow-sm pointer-events-none">
          <ZoomIn className="w-3.5 h-3.5 text-gold" />
          <span>Hover to Zoom Fabric & Embroidery</span>
        </div>

        {/* Prev / Next controls for mobile & desktop */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-brown hover:text-gold flex items-center justify-center shadow-md backdrop-blur-md transition-colors"
              aria-label="Previous suit image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-brown hover:text-gold flex items-center justify-center shadow-md backdrop-blur-md transition-colors"
              aria-label="Next suit image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
