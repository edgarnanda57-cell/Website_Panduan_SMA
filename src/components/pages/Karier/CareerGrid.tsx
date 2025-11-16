import { CareerCard } from './CareerCard';

interface Career {
  id: number;
  NamaPekerjaan: string;
  Type: string;
  Gaji: string;
}

interface CareerGridProps {
  careers: Career[];
  isLoading?: boolean;
}

export function CareerGrid({ careers, isLoading = false }: CareerGridProps) {
  if (isLoading) {
    return (
      // Auto Layout: Responsive grid with constraints
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
        {[...Array(6)].map((_, index) => (
          <CareerCard 
            key={index} 
            career={{ id: 0, NamaPekerjaan: '', Type: '', Gaji: '' }} 
            isLoading={true}
          />
        ))}
      </div>
    );
  }

  if (careers.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <p className="text-[#777777] mb-2">
            Tidak ada pekerjaan yang sesuai dengan pencarian Anda.
          </p>
          <p className="text-[#777777]">
            Coba kata kunci atau kategori lain.
          </p>
        </div>
      </div>
    );
  }

  return (
    // Auto Layout: Responsive grid with proper constraints
    // Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns
    // Equal height rows with auto-rows-fr
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
      {careers.map((career) => (
        <CareerCard key={career.id} career={career} />
      ))}
    </div>
  );
}