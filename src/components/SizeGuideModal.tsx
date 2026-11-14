import React from 'react';
import { X, Ruler } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sizeChart = [
    { size: 'XS', chest: '36"', waist: '32"', hip: '38"', length: '40"', shoulder: '14"' },
    { size: 'S', chest: '38"', waist: '34"', hip: '40"', length: '41"', shoulder: '14.5"' },
    { size: 'M', chest: '40"', waist: '36"', hip: '42"', length: '42"', shoulder: '15"' },
    { size: 'L', chest: '43"', waist: '39"', hip: '45"', length: '42"', shoulder: '15.5"' },
    { size: 'XL', chest: '46"', waist: '42"', hip: '48"', length: '43"', shoulder: '16"' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brown-dark/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-ivory max-w-xl w-full rounded-sm border border-gold/40 shadow-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-brown hover:text-gold transition-colors"
          aria-label="Close size guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4 text-gold">
          <Ruler className="w-5 h-5" />
          <h3 className="font-serif text-2xl text-brown font-semibold">
            Ready to Wear Size Guide
          </h3>
        </div>

        <p className="text-xs text-brown-muted mb-4">
          All measurements are in inches. Our ready-to-wear kurtas feature a modern comfortable Pakistani silhouette.
        </p>

        <div className="overflow-x-auto border border-beige-300 mb-6 bg-white">
          <table className="w-full text-left text-xs">
            <thead className="bg-beige-100 text-brown uppercase tracking-wider text-[11px] border-b border-beige-300">
              <tr>
                <th className="py-2.5 px-3 font-semibold">Size</th>
                <th className="py-2.5 px-3 font-semibold">Chest</th>
                <th className="py-2.5 px-3 font-semibold">Waist</th>
                <th className="py-2.5 px-3 font-semibold">Hips</th>
                <th className="py-2.5 px-3 font-semibold">Length</th>
                <th className="py-2.5 px-3 font-semibold">Shoulder</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-beige-200">
              {sizeChart.map((row) => (
                <tr key={row.size} className="hover:bg-beige-50">
                  <td className="py-2.5 px-3 font-bold text-brown">{row.size}</td>
                  <td className="py-2.5 px-3 text-brown-light">{row.chest}</td>
                  <td className="py-2.5 px-3 text-brown-light">{row.waist}</td>
                  <td className="py-2.5 px-3 text-brown-light">{row.hip}</td>
                  <td className="py-2.5 px-3 text-brown-light">{row.length}</td>
                  <td className="py-2.5 px-3 text-brown-light">{row.shoulder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-beige-100 p-3 rounded-xs text-[11px] text-brown-muted">
          <p className="font-semibold text-brown mb-1">Fitting Tip:</p>
          <p>If your measurements fall between two sizes, we recommend selecting the larger size for a relaxed traditional drape or tailoring alteration.</p>
        </div>
      </div>
    </div>
  );
};
