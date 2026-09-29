import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function PersistentWarningBox() {
  return (
    <div className="bg-amber-950/40 border border-amber-500/40 rounded-xl p-4 text-amber-200 text-xs sm:text-sm flex items-start gap-3 shadow-lg backdrop-blur-md">
      <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 animate-pulse" />
      <div>
        <strong className="font-bold text-amber-300 block mb-0.5">
          Important Notice:
        </strong>
        Please show this legal paper to a lawyer in your state or country before signing it.
      </div>
    </div>
  );
}
