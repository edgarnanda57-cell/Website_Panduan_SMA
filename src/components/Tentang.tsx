import { Target, Eye, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Tentang() {
  return (
    <section id="tentang" className="py-16 md:py-24 bg-gradient-to-br from-[#F3F4F6] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1522202195465-df8a5f26fa15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MjAwMzExM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tim pengembang"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/20 to-transparent"></div>
            </div>
            
            {/* Decorative Badge */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-[#3B82F6]">⭐ 4.9/5</div>
                <div className="text-gray-600">Rating Pengguna</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="inline-block px-4 py-2 bg-[#EFF6FF] rounded-full">
              <span className="text-[#3B82F6]">Tentang Kami</span>
            </div>
            
            <h2 className="text-gray-900">
              Membantu Siswa SMA Meraih Masa Depan Cerah
            </h2>
            
            <p className="text-gray-600">
              Platform Panduan SMA hadir sebagai solusi edukasi modern yang dirancang khusus untuk membantu siswa SMA Indonesia. 
              Kami percaya bahwa setiap siswa berhak mendapatkan akses informasi dan panduan berkualitas untuk meraih impian mereka.
            </p>

            {/* Mission Items */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#EFF6FF] rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Misi Kami</h3>
                  <p className="text-gray-600">
                    Memberikan panduan praktis dan mudah dipahami untuk membantu siswa dalam mengambil keputusan penting.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#EFF6FF] rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Visi Kami</h3>
                  <p className="text-gray-600">
                    Menjadi platform edukasi terdepan yang memberdayakan generasi muda Indonesia untuk sukses.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#EFF6FF] rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Komunitas</h3>
                  <p className="text-gray-600">
                    Bergabung dengan ribuan siswa lain yang sedang mempersiapkan masa depan bersama kami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
