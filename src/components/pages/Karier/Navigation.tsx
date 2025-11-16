import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Briefcase, Info } from 'lucide-react';
import { useState } from 'react';

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function NavButton({ icon, label, isActive, onClick }: NavButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-lg
        transition-all duration-200
        ${isActive 
          ? 'text-[#6C63FF] bg-[#6C63FF]/10' 
          : isHovered
            ? 'text-[#6C63FF] bg-[#6C63FF]/5'
            : 'text-[#777777]'
        }
      `}
    >
      <span className={`transition-transform duration-200 ${isHovered ? 'scale-110' : ''}`}>
        {icon}
      </span>
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      {/* Auto Layout: Responsive container with max-width constraint */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        {/* Auto Layout: Space between layout */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo - Auto Layout: Flex shrink 0 */}
          <div 
            onClick={() => navigate('/')}
            className="cursor-pointer flex-shrink-0 group"
          >
            <h3 className="text-[#6C63FF] transition-transform duration-200 group-hover:scale-105">
              Persiapan Karier
            </h3>
          </div>

          {/* Navigation Items - Auto Layout: Flex gap */}
          <div className="flex items-center gap-2 sm:gap-4">
            <NavButton
              icon={<Home className="w-5 h-5" />}
              label="Beranda"
              isActive={location.pathname === '/'}
              onClick={() => navigate('/')}
            />

            <NavButton
              icon={<Briefcase className="w-5 h-5" />}
              label="Karier"
              isActive={false}
              onClick={() => {}}
            />

            <NavButton
              icon={<Info className="w-5 h-5" />}
              label="Tentang"
              isActive={false}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}