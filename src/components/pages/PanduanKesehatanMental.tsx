import { Button } from "../ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import image1 from "../Images/PanduanKesehatanMental_1.jpg";
import image2 from "../Images/PanduanKesehatanMental_2.jpg";
import image3 from "../Images/PanduanKesehatanMental_3.jpg";
import { Breadcrumb } from "./BelajarEfektif/Breadcrumb";

export default function PanduanKesehatanMental() {
  const navigate = useNavigate();
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Kesehatan Mental" },
  ];
  return (
    <div className="pt-12 min-h-screen bg-white">
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Breadcrumb items={breadcrumbItems} />
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-purple-700 mb-2 sm:mb-4">Panduan Kesehatan Mental</h1>
          <p className="text-gray-600">
            Ikuti langkah-langkah berikut untuk mengakses layanan kesehatan mental gratis
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 sm:space-y-12">
          {/* Step 1 */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 mb-1 sm:mb-2">Masukkan Kode Sekolah</h3>
                <p className="text-gray-600 mb-3 sm:mb-4">
                  Kode sekolah dapat diminta ke guru BK kamu
                </p>
                <img 
                  src={image1} 
                  alt="Masukkan kode sekolah" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 mb-1 sm:mb-2">Login dengan Akun Google</h3>
                <p className="text-gray-600 mb-3 sm:mb-4">
                  Klik tombol "Login dengan Google" untuk melanjutkan
                </p>
                <img 
                  src={image2} 
                  alt="Login dengan Google" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 mb-1 sm:mb-2">Masukkan Data yang Diminta</h3>
                <p className="text-gray-600">
                  Lengkapi data diri sesuai dengan informasi yang diminta
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 mb-1 sm:mb-2">Selamat! Kamu Berhasil Login</h3>
                <p className="text-gray-600 mb-3 sm:mb-4">
                  Jika sudah login, maka akan muncul halaman ini
                </p>
                <img 
                  src={image3} 
                  alt="Halaman setelah login" 
                  className="w-full rounded-lg shadow-lg mb-3 sm:mb-4"
                />
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 sm:p-4 space-y-2 sm:space-y-3">
                  <p className="text-gray-700">
                    <span className="text-purple-700">💡 Tips:</span> Pada bagian <strong>Skrining</strong>, kamu bisa melakukan <strong>Tes Kesehatan Mental</strong> dan <strong>Tes Minat & Bakat</strong> secara gratis.
                  </p>
                  <p className="text-gray-700">
                    Untuk melihat hasil tes, kamu dapat klik tombol <strong>"Lihat Detail"</strong> pada bagian <strong>Riwayat Tes Kamu</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <Button 
            className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto"
            size="lg"
            onClick={() => window.open('https://user.edu.riliv.co/login', '_blank')}
          >
            Mulai Sekarang
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-gray-500 mt-3 sm:mt-4">
            Klik tombol di atas untuk membuka halaman login
          </p>
        </div>
      </div>
    </div>
  );
}