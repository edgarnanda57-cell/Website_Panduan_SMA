import React, { useState } from "react";
import { ArrowLeft, CheckCircle2, FileText, Clock, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { title } from "process";
import { href, useNavigate } from "react-router-dom";
import { Breadcrumb } from "./BelajarEfektif/Breadcrumb";

//interface PanduanKTPPageProps {
//  onNavigate: (page: string) => void;
//}

export default function PanduanKTPPage() {
  const navigate = useNavigate();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "KTP & SIM", href: "/ktp-sim" },
    { label: "Panduan KTP"}
  ];

  const steps = [
    {
      step: '1',
      title: 'Datang ke Kantor Dinas Kependudukan',
      description: 'Kunjungi kantor Disdukcapil di kecamatan tempat tinggal Anda. Bawa semua persyaratan dokumen yang dibutuhkan.',
      button: {
        action: () => {
          window.open(
            'https://www.google.com/maps/search/kantor+dukcapil+terdekat',
             '_blank'
          );
        },
      },
    },
    {
      step: '2',
      title: 'Isi Formulir Pendaftaran',
      description: 'Ambil dan isi formulir permohonan pembuatan KTP. Pastikan semua data yang Anda isi sudah benar dan sesuai dengan dokumen pendukung.'
    },
    {
      step: '3',
      title: 'Proses Verifikasi Data',
      description: 'Petugas akan memverifikasi kelengkapan dokumen dan kebenaran data yang Anda masukkan dalam formulir.'
    },
    {
      step: '4',
      title: 'Foto dan Rekam Biometrik',
      description: 'Anda akan difoto dan diambil data biometrik (sidik jari dan iris mata) untuk keperluan e-KTP.'
    },
    {
      step: '5',
      title: 'Tandatangan Digital',
      description: 'Lakukan tandatangan pada perangkat digital yang disediakan. Tandatangan ini akan tercetak pada e-KTP Anda.'
    },
    {
      step: '6',
      title: 'Terima Resi Pengambilan',
      description: 'Anda akan menerima resi atau bukti pengambilan KTP. Simpan resi ini dengan baik untuk mengambil KTP yang sudah jadi.'
    },
    {
      step: '7',
      title: 'Ambil KTP yang Sudah Jadi',
      description: 'Tunggu 14 hari kerja, kemudian ambil KTP Anda di kantor Disdukcapil dengan membawa resi pengambilan.'
    }
  ]
  return (
    <div className="pt-12 min-h-screen bg-white">
      {/* Header */}

      <div className="pt-16 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
              <FileText className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600">Panduan Lengkap</span>
            </div>
            <h1 className="text-gray-900 mb-4">
              Panduan Membuat KTP
            </h1>
            <p className="text-gray-600">
              Ikuti langkah-langkah berikut untuk membuat e-KTP (Kartu Tanda Penduduk elektronik) dengan mudah dan cepat.
            </p>
          </div>

          {/* Persyaratan */}
          <Card className="p-6 md:p-8 mb-8">
            <h2 className="text-gray-900 mb-6">📋 Persyaratan Dokumen</h2>
            <div className="space-y-3">
              {[
                'Surat Pengantar RT/RW (jika diperlukan)',
                'Kartu Keluarga (KK) asli dan fotokopi',
                'Akta Kelahiran atau Ijazah',
                'Surat Keterangan Pindah (jika pindah domisili)',
                'Pas foto ukuran 3x4 (2 lembar) dengan latar belakang merah'
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
              {steps.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#3B82F6] text-white rounded-full flex items-center justify-center">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: '#111827' }}>{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                      {item.button && (
                        <Button
                          onClick={item.button.action}
                          className="mt-4 !bg-blue-600 !text-white hover:!bg-blue-700 transition-colors"
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
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-orange-50 border-orange-200">
              <div className="flex items-start gap-3 mb-3">
                <Clock className="w-6 h-6 text-orange-600" />
                <h3 className="text-gray-900">Waktu Pembuatan</h3>
              </div>
              <p className="text-gray-700">
                Proses pembuatan e-KTP memakan waktu sekitar 14 hari kerja sejak tanggal perekaman data.
              </p>
            </Card>

            <Card className="p-6 bg-green-50 border-green-200">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-6 h-6 text-green-600" />
                <h3 className="text-gray-900">Lokasi Pembuatan</h3>
              </div>
              <p className="text-gray-700">
                Pembuatan KTP dilakukan di kantor Disdukcapil kecamatan sesuai dengan alamat domisili di Kartu Keluarga.
              </p>
            </Card>
          </div>

          {/* Tips */}
          <Card className="mt-8 p-6 bg-blue-50 border-blue-200">
            <h3 className="text-gray-900 mb-4">💡 Tips Penting</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#3B82F6] mt-1">•</span>
                <span>Datang lebih pagi untuk menghindari antrian panjang</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3B82F6] mt-1">•</span>
                <span>Pastikan semua dokumen sudah lengkap sebelum datang</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3B82F6] mt-1">•</span>
                <span>Berpakaian rapi saat foto untuk hasil yang maksimal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3B82F6] mt-1">•</span>
                <span>Pembuatan e-KTP tidak dipungut biaya (GRATIS)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3B82F6] mt-1">•</span>
                <span>Simpan resi pengambilan dengan baik untuk mengambil KTP</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
