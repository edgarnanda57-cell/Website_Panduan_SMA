import { CreditCard, GraduationCap, Briefcase, BookOpen, Users, TrendingUp, FileText, Award, Heart } from 'lucide-react';
import { Card } from './ui/card';
import { Route, useNavigate } from "react-router-dom";

interface PanduanGridProps {
  onScrollToSection?: (section: string) => void;
}

const panduanCategories = [
  {
    icon: CreditCard,
    title: "KTP & SIM",
    description: "Panduan lengkap membuat KTP dan SIM untuk siswa yang baru berusia 17 tahun ke atas.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    route: "ktp-sim"
  },
  {
    icon: GraduationCap,
    title: "Persiapan Kuliah",
    description: "Tips memilih jurusan, universitas, dan persiapan menghadapi ujian masuk perguruan tinggi.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    route: "persiapan-kuliah"
  },
  {
    icon: Briefcase,
    title: "Perencanaan Karier",
    description: "Eksplorasi karier masa depan, skill yang dibutuhkan, dan cara meraih pekerjaan impian.",
    color: "bg-green-50",
    iconColor: "text-green-600",
    route: "persiapan-karir"
  },
  {
    icon: BookOpen,
    title: "Belajar Efektif",
    description: "Metode belajar yang terbukti efektif untuk meningkatkan prestasi akademik di sekolah.",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    route: "belajar-efektif"
  },
  //{
  //  icon: Users,
  //  title: "Organisasi & Leadership",
  //  description: "Mengembangkan jiwa kepemimpinan melalui kegiatan organisasi dan ekstrakurikuler.",
  //  color: "bg-pink-50",
  //  iconColor: "text-pink-600"
  //},
  //{
  //  icon: TrendingUp,
  //  title: "Manajemen Keuangan",
  //  description: "Belajar mengelola uang saku, menabung, dan memulai investasi sejak dini.",
  //  color: "bg-yellow-50",
  //  iconColor: "text-yellow-600"
  //},
  {
    icon: FileText,
    title: "Jurusan",
    description: "Panduan lengkap jurusan perguruan tinggi yang mencakup deskripsi program studi, bidang keilmuan, serta prospek karier lulusan.",
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
    route: "jurusan"
  },
  //{
  //  icon: Award,
  //  title: "Kompetisi & Prestasi",
  //  description: "Tips mengikuti berbagai kompetisi untuk mengasah kemampuan dan meraih prestasi.",
  //  color: "bg-red-50",
  //  iconColor: "text-red-600"
  //},
  {
    icon: Heart,
    title: "Kesehatan Mental",
    description: "Menjaga kesehatan mental, mengelola stress, dan menemukan keseimbangan hidup.",
    color: "bg-teal-50",
    iconColor: "text-teal-600",
    route: "kesehatan-mental"
  }
];

export default function PanduanGrid({ onScrollToSection }: PanduanGridProps) {
  const navigate = useNavigate();
  const handleCardClick = (category: typeof panduanCategories[0]) => {
    if (category.route) {
      navigate(category.route);
    } else if (onScrollToSection) {
      onScrollToSection("tentang");
    }
  };

  return (
    <section id="panduan" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-[#EFF6FF] rounded-full mb-4">
            <span className="text-[#3B82F6]">Panduan Lengkap</span>
          </div>
          <h2 className="text-gray-900 mb-4">
            Eksplorasi Berbagai Kategori Panduan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan panduan yang sesuai dengan kebutuhanmu. Setiap kategori dirancang khusus untuk membantu siswa SMA berkembang maksimal.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {panduanCategories.map((category, index) => (
            <Card 
              key={index}
              onClick={() => handleCardClick(category)}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-gray-200 group"
            >
              <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className={`w-7 h-7 ${category.iconColor}`} />
              </div>
              <h3 className="text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600">
                {category.description}
              </p>
              <div className="mt-4 flex items-center text-[#3B82F6] group-hover:gap-2 transition-all">
                <span>Pelajari</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
