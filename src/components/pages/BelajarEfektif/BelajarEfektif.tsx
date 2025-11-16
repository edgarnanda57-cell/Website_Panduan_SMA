import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { Breadcrumb } from "./Breadcrumb";
import { LearningCard } from "./LearningCard";
import {
  Target,
  Calendar,
  Clock,
  BookOpen,
  Heart,
  Zap,
  Globe,
  Users,
  TrendingUp,
  Smile,
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";


export default function BelajarEfektif() {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navigate = useNavigate();

  // 2️⃣ Definisikan fungsi sebelum return
  const handleGoToPanduan = () => {
    navigate("/#panduan"); // pindah halaman lalu scroll ke id 'panduan'
  };
  const handleGoToTentang = () => {
    navigate("/#tentang");
  }
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior:"smooth"});
  };

  const learningTips = [
    {
      title: "Tetapkan tujuan belajar yang jelas",
      description: "Buat target spesifik untuk setiap sesi belajar agar lebih fokus dan terarah.",
      icon: Target,
    },
    {
      title: "Buat jadwal belajar yang konsisten",
      description: "Disiplin dengan waktu belajar membantu otak beradaptasi dan lebih mudah fokus.",
      icon: Calendar,
    },
    {
      title: "Gunakan teknik Pomodoro",
      description: "Belajar 25 menit, istirahat 5 menit. Teknik ini meningkatkan produktivitas.",
      icon: Clock,
    },
    {
      title: "Catat poin penting dengan metode Cornell",
      description: "Sistem pencatatan yang efektif untuk memudahkan review materi.",
      icon: BookOpen,
    },
    {
      title: "Istirahat cukup dan makan bergizi",
      description: "Kesehatan fisik berpengaruh langsung pada kemampuan belajar dan konsentrasi.",
      icon: Heart,
    },
    {
      title: "Hindari multitasking",
      description: "Fokus pada satu hal dalam satu waktu untuk hasil belajar yang maksimal.",
      icon: Zap,
    },
    {
      title: "Gunakan sumber belajar terpercaya",
      description: "Pilih referensi berkualitas dari buku, jurnal, atau platform edukasi terpercaya.",
      icon: Globe,
    },
    {
      title: "Diskusikan materi dengan teman",
      description: "Belajar bersama dan diskusi membantu memahami konsep lebih dalam.",
      icon: Users,
    },
    {
      title: "Evaluasi hasil belajar secara berkala",
      description: "Review progress secara rutin untuk mengetahui area yang perlu diperbaiki.",
      icon: TrendingUp,
    },
    {
      title: "Tetap semangat dan percaya diri",
      description: "Mental positif adalah kunci sukses. Percaya pada kemampuan diri sendiri.",
      icon: Smile,
    },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Belajar Efektif" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-[#7e57c2]/5 to-white pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb items={breadcrumbItems} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-4">Belajar Efektif</h1>
              <p className="text-lg text-gray-600 mb-8">
                Panduan belajar cerdas untuk siswa SMA menuju perguruan tinggi.
              </p>
              <button onClick={handleScroll}
              className="bg-[#7e57c2] text-white px-8 py-3 rounded-lg hover:bg-[#6a42b8] transition-all duration-300 flex items-center gap-2 group">
                Mulai Belajar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1690788210614-9052cffd8a14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBkZXNrfGVufDF8fHx8MTc2Mjk5MjAzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Siswa sedang belajar di meja"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#7e57c2]/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#9575cd]/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section with Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[linear-gradient(110deg,_#7e57c2_10%,_#8e63cc_55%,_#9575cd_100%)] rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 w-fit mb-4">
                  <Lightbulb className="w-5 h-5" />
                  <span className="text-sm">Tips Belajar Cerdas</span>
                </div>
                <h2 className="text-white mb-4">
                  Raih Prestasi Terbaik dengan Strategi yang Tepat
                </h2>
                <p className="text-white/90 text-lg mb-6">
                  Temukan cara belajar yang efektif dan efisien untuk mempersiapkan diri menuju jenjang pendidikan yang lebih tinggi.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                    <div className="text-3xl mb-1">10+</div>
                    <div className="text-sm text-white/80">Tips Efektif</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                    <div className="text-3xl mb-1">100%</div>
                    <div className="text-sm text-white/80">Praktis</div>
                  </div>
                </div>
              </div>
              
              <div className="h-full min-h-[400px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758612214848-04e700d192ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlciUyMGxhcHRvcCUyMGxlYXJuaW5nfGVufDF8fHx8MTc2Mjk5MjAzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Remaja belajar dengan laptop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Learning Tips Section */}
      <section ref={sectionRef} className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#7e57c2]/10 text-[#7e57c2] rounded-full px-4 py-2 mb-4">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm">Panduan Lengkap</span>
            </div>
            <h2 className="mb-4">10 Cara Belajar Efektif</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Terapkan strategi belajar yang terbukti efektif untuk meningkatkan produktivitas dan pemahaman materi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {learningTips.map((tip, index) => (
              <LearningCard
                key={index}
                number={index + 1}
                title={tip.title}
                description={tip.description}
                icon={tip.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Motivational Quote Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7e57c2]/5 to-[#9575cd]/5 rounded-3xl"></div>
            <div className="relative bg-white/60 backdrop-blur-sm border border-[#7e57c2]/20 rounded-3xl p-12 md:p-16 text-center">
              <div className="w-16 h-16 bg-[#7e57c2]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-[#7e57c2]" />
              </div>
              
              <blockquote className="text-2xl md:text-3xl text-gray-800 italic mb-6 leading-relaxed">
                "Belajar efektif bukan soal lama waktunya, tapi seberapa fokus kamu dalam menjalaninya."
              </blockquote>
              
              <div className="w-20 h-1 bg-gradient-to-r from-[#7e57c2] via-[#7e57c2] to-[#9575cd] mx-auto rounded-full"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#7e57c2]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#9575cd]/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[linear-gradient(110deg,_#7e57c2_10%,_#8e63cc_55%,_#9575cd_100%)] rounded-2xl overflow-hidden shadow-2xl">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1660794486110-7fca371c86b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RpdmF0ZWQlMjBzdHVkZW50fGVufDF8fHx8MTc2Mjk5MjAzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Siswa yang termotivasi"
              className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-white shadow-xl"
            />
          </div>
          
          <h2 className="text-white mb-4">
            Siap jadi pelajar yang lebih fokus?
          </h2>
          
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Mulai terapkan tips belajar efektif ini hari ini juga. Sukses di perguruan tinggi dimulai dari kebiasaan belajar yang baik sekarang!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
            onClick={handleGoToPanduan}
            className="bg-white text-[#7e57c2] px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg">
              Mulai Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
            onClick={handleGoToTentang}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300">
              Pelajari Lebih Lanjut
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl text-white mb-2">📚</div>
              <div className="text-white/80 text-sm">Materi Lengkap</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-white mb-2">🎯</div>
              <div className="text-white/80 text-sm">Target Jelas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-white mb-2">🚀</div>
              <div className="text-white/80 text-sm">Hasil Maksimal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-12 bg-white"></div>
    </div>
  );
}
