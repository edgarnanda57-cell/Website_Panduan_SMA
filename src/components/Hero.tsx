import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onScrollToSection: (section: string) => void;
}
export default function Hero({ onScrollToSection }: HeroProps) {

  return (
    <section id="beranda" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[#F3F4F6] via-white to-[#EFF6FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EFF6FF] rounded-full border border-[#3B82F6]/20">
              <Sparkles className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-[#3B82F6]">Platform Edukasi Modern</span>
            </div>
            
            <h1 className="text-gray-900">
              Panduan SMA: Sukses Menyongsong Masa Depan
            </h1>
            
            <p className="text-gray-600 max-w-xl">
              Temukan panduan lengkap untuk siswa SMA dalam menghadapi berbagai tantangan. 
              Dari persiapan administrasi, pilihan kuliah, hingga merencanakan karier impian.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => onScrollToSection('panduan')}
                className="bg-[#3B82F6] hover:bg-[#2563EB] group"
              >
                Mulai Belajar
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => onScrollToSection('tentang')}
                variant="outline"
                className="border-gray-300 hover:border-[#3B82F6] hover:text-[#3B82F6]"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-[#3B82F6]">1000+</div>
                <div className="text-gray-600">Siswa Terbantu</div>
              </div>
              <div>
                <div className="text-[#3B82F6]">50+</div>
                <div className="text-gray-600">Panduan Lengkap</div>
              </div>
              <div>
                <div className="text-[#3B82F6]">24/7</div>
                <div className="text-gray-600">Akses Gratis</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1760351561007-526f5353cc76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwbGFwdG9wJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MjAwMzExM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Siswa belajar dengan laptop"
                className="w-full h-auto"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#3B82F6] rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#60A5FA] rounded-full blur-3xl opacity-20"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#EFF6FF] rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <div className="text-gray-900">Belajar Cerdas</div>
                  <div className="text-gray-500">Raih Masa Depan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
