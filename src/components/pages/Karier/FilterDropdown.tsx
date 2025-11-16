import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

export function FilterDropdown({ value, onChange, options }: FilterDropdownProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-4 py-3 pr-10 rounded-xl border transition-all duration-200 appearance-none bg-white cursor-pointer ${
          isFocused 
            ? 'border-[#6C63FF] ring-2 ring-[#6C63FF]/20 shadow-sm' 
            : 'border-gray-200 hover:border-gray-300'
        } focus:outline-none`}
      >
        <option value="">Semua Kategori</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown 
        className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none transition-colors duration-200 ${
          isFocused ? 'text-[#6C63FF]' : 'text-[#777777]'
        }`}
      />
    </div>
  );
}