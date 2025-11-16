import { ArrowLeft, CheckCircle2, FileText, Clock, AlertCircle, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { useNavigate } from "react-router-dom";
import { Breadcrumb } from "./BelajarEfektif/Breadcrumb";
//interface PanduanSIMPageProps {
//  onNavigate: (page: string) => void;
//}

export default function PanduanSIMPage() {
  const navigate = useNavigate();
  const breadcrumbItems = [
      { label: "Home", href: "/" },
      { label: "KTP & SIM", href: "/ktp-sim" },
      { label: "Panduan SIM"}
    ];

  return (
    <div className="pt-12 min-h-screen bg-white">
      {/* Header */}

      <div className="pt-16 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-4">
              <FileText className="w-4 h-4 text-green-600" />
              <span className="text-green-600">Panduan Lengkap</span>
            </div>
            <h1 className="text-gray-900 mb-4">
              Panduan Membuat SIM
            </h1>
            <p className="text-gray-600">
              Ikuti langkah-langkah berikut untuk membuat SIM (Surat Izin Mengemudi) C atau A dengan mudah.
            </p>
          </div>

          {/* Jenis SIM */}
          <Card className="p-6 md:p-8 mb-8 bg-gradient-to-br from-blue-50 to-white">
            <h2 className="text-gray-900 mb-4">🚗 Jenis-jenis SIM</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <h3 className="text-gray-900 mb-2">SIM C</h3>
                <p className="text-gray-600 mb-2">Untuk kendaraan roda dua (sepeda motor)</p>
                <p className="text-gray-500">Minimal usia: 17 tahun</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <h3 className="text-gray-900 mb-2">SIM A</h3>
                <p className="text-gray-600 mb-2">Untuk kendaraan roda empat (mobil)</p>
                <p className="text-gray-500">Minimal usia: 18 tahun</p>
              </div>
            </div>
          </Card>

          {/* Persyaratan */}
          <Card className="p-6 md:p-8 mb-8">
            <h2 className="text-gray-900 mb-6">📋 Persyaratan Dokumen</h2>
            <div className="space-y-3">
              {[
                'KTP asli dan fotokopi (1 lembar)',
                'Kartu Keluarga fotokopi (1 lembar)',
                'Surat Keterangan Sehat dari dokter pemerintah',
                'Mengisi formulir pendaftaran SIM',
                'Pas foto berwarna ukuran 4x6 (4 lembar) dengan latar belakang merah',
                'Usia minimal 17 tahun untuk SIM C, 18 tahun untuk SIM A'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Langkah-langkah */}
          <div className="mb-8">
            <h2 className="text-gray-900 mb-6">🔄 Langkah-langkah Pembuatan</h2>
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Persiapan Dokumen',
                  description: 'Siapkan semua dokumen yang diperlukan. Pastikan Anda sudah memiliki surat keterangan sehat dari dokter pemerintah atau puskesmas.'
                },
                {
                  step: '2',
                  title: 'Datang ke Satpas Polri',
                  description: 'Kunjungi kantor Satpas (Satuan Lalu Lintas) Polri terdekat. Datang pagi hari untuk menghindari antrian panjang.',
                  button: {
                    action: () => {
                      window.open(
                        'https://www.google.com/maps/search/Satpas+Polri+terdekat',
                        '_blank'
                      );
                    },
                  },
                },
                {
                  step: '3',
                  title: 'Daftar dan Isi Formulir',
                  description: 'Ambil nomor antrian dan isi formulir pendaftaran SIM. Serahkan semua dokumen persyaratan kepada petugas.'
                },
                {
                  step: '4',
                  title: 'Tes Kesehatan',
                  description: 'Ikuti tes kesehatan yang meliputi tes mata, tes buta warna, dan pemeriksaan fisik lainnya.'
                },
                {
                  step: '5',
                  title: 'Tes Tertulis (Teori)',
                  description: 'Kerjakan soal ujian tertulis tentang peraturan lalu lintas. Nilai minimal kelulusan adalah 60.'
                },
                {
                  step: '6',
                  title: 'Tes Praktik (Simulator)',
                  description: 'Ikuti ujian praktik menggunakan simulator berkendara. Tunjukkan kemampuan Anda dalam mengoperasikan kendaraan.'
                },
                {
                  step: '7',
                  title: 'Tes Praktik Lapangan',
                  description: 'Jika lulus tes simulator, Anda akan mengikuti tes praktik di lapangan dengan kendaraan sungguhan.'
                },
                {
                  step: '8',
                  title: 'Pembayaran dan Foto',
                  description: 'Setelah lulus semua tes, lakukan pembayaran dan foto untuk SIM. Biaya pembuatan SIM C sekitar Rp100.000 - Rp150.000.'
                },
                {
                  step: '9',
                  title: 'Terima SIM',
                  description: 'SIM Anda akan dicetak dan dapat diambil pada hari yang sama atau beberapa hari kemudian sesuai kebijakan Satpas setempat.'
                }
              ].map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: '#111827' }}>{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                      {item.button && (
                        <Button
                          onClick={item.button.action}
                          className="mt-4 !bg-blue-600 !text-white hover:!bg-blue-700"
                        >
                          <MapPin className="w-4 h-4 mr-2" />
                            Cari Lokasi Dukcapil
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Info Tambahan */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-orange-50 border-orange-200">
              <div className="flex items-start gap-3 mb-3">
                <Clock className="w-6 h-6 text-orange-600" />
                <h3 className="text-gray-900">Waktu Pembuatan</h3>
              </div>
              <p className="text-gray-700">
                Jika semua tes lulus, SIM dapat selesai dalam 1 hari. Namun, jika ada tes yang tidak lulus, harus mengulang di hari berikutnya.
              </p>
            </Card>

            <Card className="p-6 bg-purple-50 border-purple-200">
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="w-6 h-6 text-purple-600" />
                <h3 className="text-gray-900">Masa Berlaku</h3>
              </div>
              <p className="text-gray-700">
                SIM berlaku selama 5 tahun sejak tanggal penerbitan. Pastikan memperpanjang sebelum masa berlaku habis.
              </p>
            </Card>
          </div>

          {/* Tips Lulus Ujian */}
          <Card className="p-6 bg-blue-50 border-blue-200 mb-8">
            <h3 className="text-gray-900 mb-4">🎯 Tips Lulus Ujian SIM</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-[#3B82F6] mt-1">•</span>
                <span><strong>Pelajari Rambu Lalu Lintas:</strong> Hafalkan rambu-rambu lalu lintas dan peraturan berkendara sebelum tes tertulis</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#3B82F6] mt-1">•</span>
                <span><strong>Latihan Berkendara:</strong> Latihan berkendara terlebih dahulu agar lebih percaya diri saat tes praktik</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#3B82F6] mt-1">•</span>
                <span><strong>Tenang dan Fokus:</strong> Tetap tenang saat mengerjakan tes, baca soal dengan teliti</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#3B82F6] mt-1">•</span>
                <span><strong>Ikuti Instruksi:</strong> Dengarkan dan ikuti semua instruksi dari petugas dengan baik</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#3B82F6] mt-1">•</span>
                <span><strong>Jangan Terburu-buru:</strong> Kerjakan setiap tahapan dengan hati-hati dan tidak tergesa-gesa</span>
              </div>
            </div>
          </Card>

          {/* Catatan Penting */}
          <Card className="p-6 bg-red-50 border-red-200">
            <h3 className="text-gray-900 mb-4">⚠️ Catatan Penting</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Jangan menggunakan jasa calo atau percaloan dalam pembuatan SIM</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Pembuatan SIM harus melalui ujian yang sah dan tidak ada sistem "joki"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Pastikan Anda benar-benar bisa berkendara untuk keselamatan diri dan orang lain</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Biaya resmi sudah ditetapkan, jangan membayar lebih dari ketentuan</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
