import { MapPin, Globe, Mail, Phone, GraduationCap, Award, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import { Campus } from './DataJurusanKampus';
import { Badge } from '../ui/badge';
import { useState } from 'react';

interface CampusCardProps {
  campus: Campus;
}

export function CampusCard({ campus }: CampusCardProps) {
  const getAkreditasiColor = (akreditasi: string) => {
    switch (akreditasi) {
      case 'Unggul':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Baik Sekali':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Baik':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'A':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'B':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'C':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Tidak Terakreditasi':
        return 'bg-gray-100 text-gray-600 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getJenisColor = (jenis: string) => {
    if (jenis.includes('Negeri')) {
      return 'bg-blue-100 text-blue-700 border-blue-200';
    } else if (jenis.includes('Swasta')) {
      return 'bg-purple-100 text-purple-700 border-purple-200';
    } else if (jenis === 'Kursus Bersertifikasi') {
      return 'bg-orange-100 text-orange-700 border-orange-200';
    } else {
      return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getJenisLabel = (jenis: string) => {
    return jenis;
  };

  
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 md:p-6 border border-gray-100">
      <div className="space-y-4">
        {/* Header - Campus Name & Location */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-indigo-600 mb-2">{campus.nama}</h3>
            <div className="flex items-center gap-1.5 text-gray-600">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>{campus.lokasi}</span>
            </div>
          </div>
          {/* Jenis Badge */}
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${getJenisColor(campus.jenis)} flex-shrink-0 self-start`}>
            <Building2 className="w-4 h-4" />
            <span>{getJenisLabel(campus.jenis)}</span>
          </div>
        </div>

        {/* Program Studi Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-700">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm">Program Studi ({campus.programStudi.length})</span>
          </div>
          {/* Program Studi Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-700">
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm">Program Studi ({campus.programStudi.length})</span>
            </div>

            {(() => {
              const [showAll, setShowAll] = useState(false);
              const displayed = showAll
                ? campus.programStudi
                : campus.programStudi.slice(0, 5);

              return (
                <>
                  {/* LIST PROGRAM STUDI */}
                  <div className="flex flex-wrap gap-2">
                    {displayed.map((prodi, index) => (
                      <div key={index} className="group relative">
                        <Badge
                          variant="secondary"
                          className="cursor-help hover:bg-gray-200 transition-colors"
                        >
                          {prodi.nama}
                          <Award
                            className={`ml-1.5 w-3 h-3 ${
                              prodi.akreditasi === 'A'
                                ? 'text-green-600'
                                : prodi.akreditasi === 'B'
                                ? 'text-blue-600'
                                : 'text-yellow-600'
                            }`}
                          />
                        </Badge>

                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-lg">
                          <div className="space-y-1">
                            <div>{prodi.fakultas}</div>
                            <div>Akreditasi: {prodi.akreditasi}</div>
                          </div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* TOMBOL EXPAND / COLLAPSE */}
                  {campus.programStudi.length > 5 && (
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="flex items-center gap-1 text-indigo-600 font-medium mt-2 hover:text-indigo-700 transition"
                    >
                      {showAll ? (
                        <>
                          Sembunyikan <ChevronUp size={16} />
                        </>
                      ) : (
                        <>
                          Lihat Semua ({campus.programStudi.length}) <ChevronDown size={16} />
                        </>
                      )}
                    </button>
                  )}
                </>
              );
            })()}
          </div>

        </div>

        {/* Contact Info */}
        <div className="pt-3 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 text-gray-600">
            <a 
              href={campus.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors group"
            >
              <Globe className="w-4 h-4 flex-shrink-0" />
              <span className="group-hover:underline truncate text-sm">
                {campus.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </span>
            </a>
            <a 
              href={`mailto:${campus.email}`}
              className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors group"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="group-hover:underline truncate text-sm">{campus.email}</span>
            </a>
            <a 
              href={`tel:${campus.noTelp}`}
              className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors group"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="group-hover:underline text-sm">{campus.noTelp}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}