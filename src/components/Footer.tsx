import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const handleGoToBeranda = () => {
    navigate("/#beranda")
  }
  const handleGoToTentang = () => {
    navigate("/#tentang")
  }
  const handleGoToPanduan = () => {
    navigate("/#panduan")
  }
  return (
    <footer id="kontak" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center">
                <span>📚</span>
              </div>
              <span>Panduan SMA</span>
            </div>
            <p className="text-gray-400">
              Platform edukasi modern untuk membantu siswa SMA meraih masa depan yang cerah.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-[#3B82F6] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-[#3B82F6] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-[#3B82F6] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-[#3B82F6] rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Menu Cepat */}
          <div>
            <h3 className="mb-4">Menu Cepat</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={handleGoToBeranda}
                  className="text-gray-400 hover:text-[#3B82F6] transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button 
                  onClick={handleGoToPanduan}
                  className="text-gray-400 hover:text-[#3B82F6] transition-colors"
                >
                  Panduan
                </button>
              </li>
              <li>
                <button 
                  onClick={handleGoToTentang}
                  className="text-gray-400 hover:text-[#3B82F6] transition-colors"
                >
                  Tentang
                </button>
              </li>
              <li>
                <button 
                  className="text-gray-400 hover:text-[#3B82F6] transition-colors"
                >
                  Kontak
                </button>
              </li>
            </ul>
          </div>

          {/* Kategori Panduan */}
          <div>
            <h3 className="mb-4">Kategori Panduan</h3>
            <ul className="space-y-2">
              <li>
                <a href="/ktp-sim" className="text-gray-400 hover:text-[#3B82F6] transition-colors">
                  KTP & SIM
                </a>
              </li>
              <li>
                <a href="/persiapan-kuliah" className="text-gray-400 hover:text-[#3B82F6] transition-colors">
                  Persiapan Kuliah
                </a>
              </li>
              <li>
                <a href="/persiapan-karir" className="text-gray-400 hover:text-[#3B82F6] transition-colors">
                  Perencanaan Karier
                </a>
              </li>
              <li>
                <a href="/belajar-efektif" className="text-gray-400 hover:text-[#3B82F6] transition-colors">
                  Belajar Efektif
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="mb-4">Hubungi Kami</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@panduansma.id" className="hover:text-[#3B82F6] transition-colors">
                  info@panduansma.id
                </a>
              </li>
              <li className="text-gray-400">
                Jakarta, Indonesia
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-gray-400 mb-2">Newsletter</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email Anda"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#3B82F6] text-white placeholder-gray-500"
                />
                <button className="px-4 py-2 bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-colors">
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400">
            <p>© 2025 Panduan SMA. Semua hak cipta dilindungi.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#3B82F6] transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:text-[#3B82F6] transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
