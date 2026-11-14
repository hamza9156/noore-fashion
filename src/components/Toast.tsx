import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast } = useShop();

  if (!toast.show) return null;

  const Icon =
    toast.type === 'error'
      ? AlertCircle
      : toast.type === 'info'
      ? Info
      : CheckCircle2;

  const bgColor =
    toast.type === 'error'
      ? 'bg-red-800'
      : toast.type === 'info'
      ? 'bg-brown'
      : 'bg-emerald-900';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up max-w-sm">
      <div
        className={`${bgColor} text-white px-4 py-3 rounded-sm shadow-2xl border border-gold/40 flex items-center gap-3`}
      >
        <Icon className="w-5 h-5 text-gold shrink-0" />
        <span className="text-xs font-medium leading-snug">{toast.message}</span>
      </div>
    </div>
  );
};
