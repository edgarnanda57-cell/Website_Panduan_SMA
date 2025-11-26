import { motion } from "motion/react";
import { ArrowLeft, CheckCircle, Briefcase, Sparkles } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { jurusanData } from "../data/jurusan";

export default function JurusanDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const jurusan = jurusanData.find((j) => j.id === id);

  if (!jurusan) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Jurusan tidak ditemukan</h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gradient-to-r from-[#7E57C2] to-[#A487E0] text-white rounded-full"
          >
            Kembali ke Daftar Jurusan
          </button>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    navigate("/jurusan");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 pt-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBack}
            className="flex items-center gap-2 text-[#7E57C2] hover:text-[#6A48A8] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Daftar Jurusan
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="mb-3 bg-gradient-to-r from-[#7E57C2] to-[#A487E0] bg-clip-text text-transparent">
                  {jurusan.NamaJurusan}
                </h1>
                <span className="inline-block px-5 py-2 bg-[#EDE7F6] text-[#7E57C2] rounded-full">
                  {jurusan.Type}
                </span>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="hidden md:block w-16 h-16 bg-gradient-to-br from-[#7E57C2] to-[#A487E0] rounded-full flex-shrink-0"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid gap-8">
            {/* Pengetahuan & Keahlian */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-[#F5F3F7] to-white rounded-3xl p-8 shadow-md"
            >
              <h2 className="flex items-center gap-3 mb-6 text-[#7E57C2]">
                <div className="p-2 bg-[#EDE7F6] rounded-lg">
                  <CheckCircle className="w-6 h-6" />
                </div>
                Pengetahuan & Keahlian yang Dibutuhkan
              </h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {jurusan.PengetahuanKeahlian.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.05 }}
                    className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-[#7E57C2] to-[#A487E0] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Prospek Kerja */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-[#F5F3F7] to-white rounded-3xl p-8 shadow-md"
            >
              <h2 className="flex items-center gap-3 mb-6 text-[#7E57C2]">
                <div className="p-2 bg-[#EDE7F6] rounded-lg">
                  <Briefcase className="w-6 h-6" />
                </div>
                Prospek Karir
              </h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {jurusan.ProspekKerja.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                    className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-[#7E57C2] to-[#A487E0] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-r from-[#7E57C2] via-[#8E6ED3] to-[#A487E0] rounded-3xl p-8 text-white text-center"
            >
              <h3 className="mb-3">Tertarik dengan jurusan ini?</h3>
              <p className="mb-6 text-white/90">
                Pelajari lebih lanjut dan konsultasikan dengan guru BK kamu!
              </p>
              <button
                onClick={handleBack}
                className="px-8 py-3 bg-white text-[#7E57C2] rounded-full hover:shadow-xl transition-all duration-200 active:scale-95"
              >
                Lihat Jurusan Lainnya
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}