import { useState, useMemo } from 'react';
import { Header } from './Header';
import { SearchBar } from './SearchBar';
import { FilterDropdown } from './FilterDropdown';
import { CareerGrid } from './CareerGrid';
import { careerData } from '../data/careerData';
import { X } from 'lucide-react';


export default function HomePage1() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://campus.quipper.com/careers";
  // Get unique types for filter
  const types = useMemo(() => {
    const uniqueTypes = [...new Set(careerData.map(career => career.Type))];
    return uniqueTypes.sort();
  }, []);

  // Filter careers
  const filteredCareers = useMemo(() => {
    return careerData.filter(career => {
      const matchesSearch = career.NamaPekerjaan.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === '' || career.Type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [searchQuery, selectedType]);

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500); // Simulate search
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedType('');
  };

  return (
    <div className="pt-12 min-h-screen bg-white">
      <Header />

      {/* Search & Filter Section - Auto Layout with responsive constraints */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-8 sm:py-12 px-4 sm:px-6">
        {/* Auto Layout: Centered container with max-width */}
        <div className="max-w-6xl mx-auto">
          {/* Auto Layout: Centered search area with max-width constraint */}
          <div className="max-w-3xl mx-auto">
            {/* Auto Layout: Flex column with gap */}
            <div className="flex flex-col gap-4">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
              
              {/* Auto Layout: Responsive grid layout */}
              <div className="grid grid-cols-1 sm:grid-cols-[1fr,auto] gap-3 sm:gap-4">
                <FilterDropdown
                  value={selectedType}
                  onChange={setSelectedType}
                  options={types}
                />
                
                <button
                  onClick={handleSearch}
                  className="px-6 sm:px-8 py-3 bg-[#6C63FF] text-white rounded-xl transition-all duration-200 shadow-sm hover:bg-[#5B52E8] hover:shadow-md active:scale-95"
                >
                  Cari
                </button>
              </div>

              {/* Active Filters - Auto Layout: Flex wrap */}
              {(searchQuery || selectedType) && (
                <div className="flex items-center gap-2 flex-wrap animate-fade-in">
                  <span className="text-[#777777]">Filter aktif:</span>
                  {searchQuery && (
                    <span className="px-3 py-1 bg-white rounded-full text-[#6C63FF] border border-[#6C63FF]/20 flex items-center gap-2">
                      "{searchQuery}"
                    </span>
                  )}
                  {selectedType && (
                    <span className="px-3 py-1 bg-white rounded-full text-[#6C63FF] border border-[#6C63FF]/20 flex items-center gap-2">
                      {selectedType}
                    </span>
                  )}
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1 text-[#6C63FF] hover:text-[#5B52E8] transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span className="hover:underline">Hapus filter</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Career Cards Grid - Auto Layout: Responsive padding and constraints */}
      <div className="py-8 sm:py-12 px-4 sm:px-6">
        {/* Auto Layout: Max-width container */}
        <div className="max-w-6xl mx-auto">
          {/* Auto Layout: Flex column with gap */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Header - Auto Layout */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
              <div>
                <h2 className="text-[#333333] mb-2">
                  Jelajahi Karier
                </h2>
                <p className="text-[#777777]">
                  {isLoading ? 'Mencari...' : `${filteredCareers.length} pekerjaan ditemukan`}
                </p>
                <div className="text-gray-500 text-xs">
                  Sumber:{' '}
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-600"
                  >
                    {url}
                  </a>
                </div>
              </div>
            </div>

            <CareerGrid careers={filteredCareers} isLoading={isLoading} />
          </div>
        </div>
      </div>

      {/* Footer - Auto Layout: Responsive padding */}
      <div className="bg-gradient-to-br from-[#6C63FF] to-[#5B52E8] py-12 sm:py-16 px-4 sm:px-6 mt-12 sm:mt-16">
        {/* Auto Layout: Centered container */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-white mb-4">
            Mulai Rencanakan Kariermu Sekarang!
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Masa depan gemilang menanti mereka yang berani merencanakan. Pilih karier impianmu dan mulai langkah pertamamu hari ini.
          </p>
        </div>
      </div>
    </div>
  );
}