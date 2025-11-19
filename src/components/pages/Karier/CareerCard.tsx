import { useNavigate } from 'react-router-dom';
import { ArrowRight, Briefcase } from 'lucide-react';
import { useState } from 'react';

interface Career {
  id: number;
  NamaPekerjaan: string;
  Type: string;
  Gaji: string;
}

interface CareerCardProps {
  career: Career;
  isLoading?: boolean;
}

export function CareerCard({ career, isLoading = false }: CareerCardProps) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl p-6 border border-gray-100 animate-pulse">
        <div className="flex items-start justify-between mb-3">
          <div className="w-12 h-12 rounded-lg bg-gray-200"></div>
          <div className="w-5 h-5 rounded bg-gray-200"></div>
        </div>
        <div className="h-6 bg-gray-200 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded mb-3 w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    );
  }

  return (
    <div
      onClick={() => navigate(`/persiapan-karir/${career.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className={`
        bg-white rounded-xl p-6 border border-gray-100 cursor-pointer
        transition-all duration-300 ease-out
        ${isPressed 
          ? 'scale-[0.98] shadow-md' 
          : isHovered 
            ? 'shadow-xl -translate-y-2 border-[#6C63FF]/20' 
            : 'shadow-sm hover:shadow-lg'
        }
      `}
    >
      {/* Auto Layout: Flex column with proper spacing */}
      <div className="flex flex-col h-full">
        {/* Header with icon and arrow - Auto Layout: Space between */}
        <div className="flex items-start justify-between mb-4">
          <div className={`
            w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0
            transition-all duration-300
            ${isHovered ? 'bg-[#6C63FF] scale-110' : 'bg-[#6C63FF]/10'}
          `}>
            <Briefcase className={`
              w-6 h-6 transition-colors duration-300
              ${isHovered ? 'text-white' : 'text-[#6C63FF]'}
            `} />
          </div>
          <ArrowRight className={`
            w-5 h-5 transition-all duration-300
            ${isHovered 
              ? 'text-[#6C63FF] translate-x-1' 
              : 'text-[#777777]'
            }
          `} />
        </div>
        
        {/* Content area - Auto Layout: Flex grow */}
        <div className="flex-grow flex flex-col gap-2">
          <h3 className="text-[#333333] line-clamp-2">
            {career.NamaPekerjaan}
          </h3>
          
          <p className="text-[#777777]">
            {career.Type}
          </p>
        </div>

        {/* Footer - Auto Layout: Margin top auto for bottom alignment */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-[#6C63FF]">
            {career.Gaji}
          </p>
        </div>
      </div>
    </div>
  );
}