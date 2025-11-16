import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Briefcase, GraduationCap, Award, BookOpen, Lightbulb, Target, AlertCircle } from 'lucide-react';
import { careerData } from '../data/careerData';

interface CareerType {
  id: number;
  NamaPekerjaan: string;
  Type: string;
  Gaji: string;
  PendidikanMinimum: string;
  sertifikasi: string;
  PeranTanggungJawab: string[];
  PengetahuanKeahlian: string[];
  JurusanTerkait: string[];
  WajibTahu: string[];
}

export default function CareerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [career, setCareer] = useState<CareerType | null>(null);

  useEffect(() => {
    const foundCareer = careerData.find(c => c.id === Number(id));
    if (foundCareer) {
      setCareer(foundCareer);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!career) {
    return (
      <div className="pt-12 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#777777] mb-4">Karier tidak ditemukan</p>
          <button
            onClick={() => navigate('/persiapan-karir')}
            className="text-[#6C63FF] hover:underline"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-12 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#6C63FF]/5 to-transparent py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate('/persiapan-karir')}
            className="flex items-center gap-2 text-[#333333] hover:text-[#6C63FF] transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Kembali</span>
          </button>
          
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-[#6C63FF] flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-[#333333] mb-2">
                {career.NamaPekerjaan}
              </h1>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-white rounded-full text-[#777777] border border-gray-200">
                  {career.Type}
                </span>
                <span className="px-3 py-1 bg-[#6C63FF]/10 rounded-full text-[#6C63FF]">
                  {career.Gaji}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Education & Certification */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-[#6C63FF]" />
              <h2 className="text-[#333333]">Pendidikan Minimum</h2>
            </div>
            <p className="text-[#777777]">{career.PendidikanMinimum}</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-[#6C63FF]" />
              <h2 className="text-[#333333]">Sertifikasi</h2>
            </div>
            <p className="text-[#777777]">{career.sertifikasi}</p>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-[#6C63FF]" />
            <h2 className="text-[#333333]">Peran & Tanggung Jawab</h2>
          </div>
          <ul className="space-y-3">
            {career.PeranTanggungJawab.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6C63FF] mt-2 flex-shrink-0"></div>
                <p className="text-[#777777]">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-6 h-6 text-[#6C63FF]" />
            <h2 className="text-[#333333]">Pengetahuan & Keahlian</h2>
          </div>
          <ul className="space-y-3">
            {career.PengetahuanKeahlian.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6C63FF] mt-2 flex-shrink-0"></div>
                <p className="text-[#777777]">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Related Majors */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-[#6C63FF]" />
            <h2 className="text-[#333333]">Jurusan Terkait</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {career.JurusanTerkait.map((jurusan, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#6C63FF]/10 rounded-lg text-[#6C63FF]"
              >
                {jurusan}
              </span>
            ))}
          </div>
        </div>

        {/* Important Info */}
        <div className="bg-[#6C63FF]/5 rounded-xl p-6 border border-[#6C63FF]/20">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-[#6C63FF]" />
            <h2 className="text-[#333333]">Wajib Kamu Tahu</h2>
          </div>
          <ul className="space-y-3">
            {career.WajibTahu.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6C63FF] mt-2 flex-shrink-0"></div>
                <p className="text-[#777777]">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}