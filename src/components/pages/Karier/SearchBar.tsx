import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <Search 
        className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
          isFocused ? 'text-[#6C63FF]' : 'text-[#777777]'
        }`} 
      />
      <input
        type="text"
        placeholder="Cari nama pekerjaan…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-all duration-200 ${
          isFocused 
            ? 'border-[#6C63FF] ring-2 ring-[#6C63FF]/20 shadow-sm' 
            : 'border-gray-200 hover:border-gray-300'
        } focus:outline-none`}
      />
    </div>
  );
}