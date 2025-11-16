import { motion } from "motion/react";
import { CheckCircle, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Jurusan } from "./types/jurusan";

interface JurusanCardProps {
  jurusan: Jurusan;
  index: number;
}

export function JurusanCard({ jurusan, index }: JurusanCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="bg-white rounded-2xl p-6 shadow-[0px_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_24px_rgba(126,87,194,0.2)] hover:border hover:border-[#9575CD] transition-all duration-200 group"
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="mb-2">{jurusan.NamaJurusan}</h3>
        <span className="inline-block px-4 py-1.5 bg-[#EDE7F6] text-[#7E57C2] rounded-full text-sm">
          {jurusan.Type}
        </span>
      </div>

      {/* Pengetahuan Keahlian */}
      <div className="mb-5">
        <h4 className="flex items-center gap-2 mb-3 text-[#7E57C2]">
          <CheckCircle className="w-5 h-5" />
          Pengetahuan & Keahlian
        </h4>
        <ul className="space-y-2">
          {jurusan.PengetahuanKeahlian.slice(0, 4).map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-700">
              <span className="text-[#9575CD] mt-1">•</span>
              <span className="text-sm">{item.text}</span>
            </li>
          ))}
          {jurusan.PengetahuanKeahlian.length > 4 && (
            <li className="text-sm text-[#7E57C2] ml-4">
              +{jurusan.PengetahuanKeahlian.length - 4} lainnya
            </li>
          )}
        </ul>
      </div>

      {/* Prospek Kerja */}
      <div className="mb-5">
        <h4 className="flex items-center gap-2 mb-3 text-[#7E57C2]">
          <Briefcase className="w-5 h-5" />
          Prospek Kerja
        </h4>
        <ul className="space-y-2">
          {jurusan.ProspekKerja.slice(0, 4).map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-700">
              <span className="text-[#9575CD] mt-1">•</span>
              <span className="text-sm">{item.text}</span>
            </li>
          ))}
          {jurusan.ProspekKerja.length > 4 && (
            <li className="text-sm text-[#7E57C2] ml-4">
              +{jurusan.ProspekKerja.length - 4} lainnya
            </li>
          )}
        </ul>
      </div>

      {/* Button */}
      <Link to={`/jurusan/${jurusan.id}`}>
        <button className="w-full mt-4 py-3 bg-gradient-to-r from-[#7E57C2] via-[#8E6ED3] to-[#A487E0] text-white rounded-full hover:shadow-lg hover:shadow-[#7E57C2]/40 transition-all duration-200 flex items-center justify-center gap-2 group-hover:gap-3">
          Lihat Detail
          <ArrowRight className="w-5 h-5" />
        </button>
      </Link>
    </motion.div>
  );
}