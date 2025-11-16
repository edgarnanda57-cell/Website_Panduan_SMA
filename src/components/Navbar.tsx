import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
  const handleGoToKontak = () => {
    navigate("/#kontak")
  }
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={handleGoToBeranda}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center">
                <span className="text-white">📚</span>
              </div>
              <span className="text-gray-900">Panduan SMA</span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={handleGoToBeranda}
              className="text-gray-700 hover:text-[#3B82F6] transition-colors"
            >
              Beranda
            </button>
            <button 
              onClick={handleGoToPanduan}
              className="text-gray-700 hover:text-[#3B82F6] transition-colors"
            >
              Panduan
            </button>
            <button 
              onClick={handleGoToTentang}
              className="text-gray-700 hover:text-[#3B82F6] transition-colors"
            >
              Tentang
            </button>
            <button 
              onClick={handleGoToKontak}
              className="text-gray-700 hover:text-[#3B82F6] transition-colors"
            >
              Kontak
            </button>
            <Button 
              onClick={handleGoToPanduan}
              className="bg-[#3B82F6] hover:bg-[#2563EB]"
            >
              Mulai Belajar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#3B82F6]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={handleGoToBeranda}
                className="text-gray-700 hover:text-[#3B82F6] transition-colors text-left"
              >
                Beranda
              </button>
              <button 
                onClick={handleGoToPanduan}
                className="text-gray-700 hover:text-[#3B82F6] transition-colors text-left"
              >
                Panduan
              </button>
              <button 
                onClick={handleGoToTentang}
                className="text-gray-700 hover:text-[#3B82F6] transition-colors text-left"
              >
                Tentang
              </button>
              <button 
                onClick={handleGoToKontak}
                className="text-gray-700 hover:text-[#3B82F6] transition-colors text-left"
              >
                Kontak
              </button>
              <Button 
                onClick={handleGoToPanduan}
                className="bg-[#3B82F6] hover:bg-[#2563EB] w-full"
              >
                Mulai Belajar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
