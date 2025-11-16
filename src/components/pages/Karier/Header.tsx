import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumb } from "../BelajarEfektif/Breadcrumb";
export function Header() {
  const navigate = useNavigate();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Perencanaan Karir" },
  ];
  return (
    // Auto Layout: Responsive padding with constraints
    <header className="bg-white py-12 sm:py-16 px-4 sm:px-6">
      {/* Auto Layout: Centered container with max-width constraint */}
      <div className="max-w-6xl mx-auto text-center">
        <Breadcrumb items={breadcrumbItems} />
        {/* Auto Layout: Flex column with gap */}
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <h1 className="text-[#333333] px-4 animate-fade-in">
            Persiapan Kariermu Dimulai di Sini 🚀
          </h1>
          
          <p className="text-[#777777] max-w-3xl mx-auto px-4 animate-fade-in-delay">
            Temukan berbagai pilihan profesi, pelajari jalur pendidikannya, dan rancang langkah pertamamu menuju masa depan.
          </p>
          
          {/* Auto Layout: Constrained width image container */}
          <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-delay-2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759903553683-77785e1e6c35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY2FyZWVyJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzYyOTI3NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Student planning career"
              className="w-full h-48 sm:h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}