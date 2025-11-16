import { ArrowLeft, CreditCard, Car } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import ktp from "../Images/ktp.jpeg";
import sim from "../Images/sim.jpeg";
import { useNavigate } from "react-router-dom";
import { Breadcrumb } from "./BelajarEfektif/Breadcrumb";

export default function KTPSIMPage() {
  const navigate = useNavigate();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "KTP & SIM" },
  ];
  return (
    <div className="pt-12 min-h-screen bg-gradient-to-br from-[#F3F4F6] via-white to-[#EFF6FF]">
      {/* Header */}
      <div className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-12 md:mb-16">
            <Breadcrumb items={breadcrumbItems} />
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EFF6FF] rounded-full mb-4">
              <CreditCard className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-[#3B82F6]">Dokumen Penting</span>
            </div>
            
            <h1 className="text-gray-900 mb-4">
              KTP & SIM
            </h1>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Panduan lengkap membuat KTP dan SIM untuk siswa yang baru berusia 17 tahun ke atas. 
              Pelajari persyaratan, prosedur, dan tips untuk mendapatkan dokumen penting ini.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* KTP Card */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-gray-200">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={ktp}
                  alt="Contoh KTP"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-gray-900">
                    Kartu Tanda Penduduk (KTP)
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Pelajari cara membuat KTP elektronik (e-KTP) untuk warga negara Indonesia yang telah berusia 17 tahun atau sudah menikah.
                </p>
                <Button
                  onClick={() => navigate('/panduan-ktp')}
                  className="w-full bg-[#3B82F6] hover:bg-[#2563EB] group/btn"
                >
                  Pelajari
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </Button>
              </div>
            </Card>

            {/* SIM Card */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-gray-200">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={sim}
                  alt="Contoh SIM"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    <Car className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-gray-900">
                    Surat Izin Mengemudi (SIM)
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Pelajari cara membuat SIM C untuk sepeda motor atau SIM A untuk mobil. Ketahui persyaratan dan prosedur ujian yang harus dilalui.
                </p>
                <Button
                  onClick={() => navigate('/panduan-sim')}
                  className="w-full bg-[#3B82F6] hover:bg-[#2563EB] group/btn"
                >
                  Pelajari
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </Button>
              </div>
            </Card>
          </div>

          {/* Info Box */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-gray-900 mb-2">💡 Informasi Penting</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#3B82F6] mt-1">•</span>
                  <span>KTP dapat dibuat mulai usia 17 tahun atau sudah menikah</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3B82F6] mt-1">•</span>
                  <span>SIM C dapat dibuat mulai usia 17 tahun, SIM A mulai usia 18 tahun</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3B82F6] mt-1">•</span>
                  <span>Kedua dokumen ini sangat penting untuk berbagai keperluan administrasi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
