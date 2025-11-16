import { useState, useEffect, useRef, useCallback } from 'react';
import { CampusCard } from './FuctionandwebDatajurusanKampus';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Search, MapPin, GraduationCap, ArrowLeft } from 'lucide-react';
import { campusData } from './data/data-kampus';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { Breadcrumb } from "./BelajarEfektif/Breadcrumb";
import { sortedJurusan } from "./data/dataFilterJurusan";

export interface ProgramStudi {
  nama: string;
  fakultas: string;
  akreditasi: string;
}

export interface Campus {
  id: string;
  nama: string;
  lokasi: string;
  jenis: 'Akademi Negeri' | 'Akademi Swasta' | 'Institut Negeri' | 'Institut Swasta' | 'Kursus Bersertifikasi' | 'Lainnya' | 'Politeknik Negeri' | 'Politeknik Swasta' | 'Sekolah Tinggi Negeri' | 'Sekolah Tinggi Swasta' | 'Universitas Negeri' | 'Universitas Swasta';
  noTelp: string;
  programStudi: ProgramStudi[];
}

const ITEMS_PER_PAGE = 10;

export default function JurusanKampus() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterJurusan, setFilterJurusan] = useState('all');
  const [filterLokasi, setFilterLokasi] = useState('all');
  const [filterFakultas, setFilterFakultas] = useState('all');
  const [filterJenis, setFilterJenis] = useState('all');
  const [displayedData, setDisplayedData] = useState<Campus[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef(null);
  const navigate = useNavigate();
  // Get unique values for filters
  const jurusanList = Array.from(
    new Set(sortedJurusan.flatMap(item => item.JurusanListKampus))
  ).sort();
  const lokasiList = Array.from(new Set(campusData.map(c => c.lokasi))).sort();
  const fakultasList = Array.from(
    new Set(campusData.flatMap(c => c.programStudi.map(p => p.fakultas)))
  ).sort();

  // Filter data based on search and filters
  const getFilteredData = useCallback(() => {
    return campusData.filter(campus => {
      const matchSearch = 
        campus.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campus.lokasi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campus.programStudi.some(p => 
          p.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.fakultas.toLowerCase().includes(searchQuery.toLowerCase())
        );
      
      const matchJurusan = filterJurusan === 'all' || 
        campus.programStudi.some(p => p.nama === filterJurusan);
      const matchLokasi = filterLokasi === 'all' || campus.lokasi === filterLokasi;
      const matchFakultas = filterFakultas === 'all' || 
        campus.programStudi.some(p => p.fakultas === filterFakultas);
      const matchJenis = filterJenis === 'all' || campus.jenis === filterJenis;

      return matchSearch && matchJurusan && matchLokasi && matchFakultas && matchJenis;
    });
  }, [searchQuery, filterJurusan, filterLokasi, filterFakultas, filterJenis]);

  // Reset pagination when filters change
  useEffect(() => {
    const filtered = getFilteredData();
    setDisplayedData(filtered.slice(0, ITEMS_PER_PAGE));
    setPage(1);
    setHasMore(filtered.length > ITEMS_PER_PAGE);
  }, [searchQuery, filterJurusan, filterLokasi, filterFakultas, filterJenis, getFilteredData]);

  // Load more data
  const loadMore = useCallback(() => {
    const filtered = getFilteredData();
    const nextPage = page + 1;
    const startIndex = page * ITEMS_PER_PAGE;
    const endIndex = nextPage * ITEMS_PER_PAGE;
    const newData = filtered.slice(startIndex, endIndex);

    if (newData.length > 0) {
      setDisplayedData(prev => [...prev, ...newData]);
      setPage(nextPage);
      setHasMore(endIndex < filtered.length);
    } else {
      setHasMore(false);
    }
  }, [page, getFilteredData]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, loadMore]);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Persiapan Kuliah" },
  ];

  return (
    <div className="pt-12 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-6 md:py-10 max-w-6xl">
          <Breadcrumb items={breadcrumbItems} />
          {/* Header */}
          <div className="mb-6">
            <div className="text-center mb-8">
              <div className="mb-3">
                <h1 className="mb-1 text-indigo-600">KampusKu</h1>
                <h2 className="text-gray-700">Data Kampus Indonesia</h2>
              </div>
              <p className="text-gray-600">Cari kampus dan jurusan yang tepat untuk masa depanmu</p>
            </div>
          </div>
          {/* Search and Filters */}
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6 space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Cari kampus, program studi, fakultas, atau lokasi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              {/* Filters */}
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">

                  {/* Jenis Kampus */}
                  <div className="flex flex-col space-y-2">
                    <label className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                      <GraduationCap className="w-4 h-4" />
                      Jenis Kampus
                    </label>

                    <Select value={filterJenis} onValueChange={setFilterJenis}>
                      <SelectTrigger className="w-full h-10 rounded-md border border-gray-300 shadow-sm">
                        <SelectValue placeholder="Semua Jenis" />
                      </SelectTrigger>
                      <SelectContent className="bg-white mt-1">
                        <SelectItem value="all">Semua Jenis</SelectItem>
                        <SelectItem value="Akademi Negeri">Akademi Negeri</SelectItem>
                        <SelectItem value="Akademi Swasta">Akademi Swasta</SelectItem>
                        <SelectItem value="Institut Negeri">Institut Negeri</SelectItem>
                        <SelectItem value="Institut Swasta">Institut Swasta</SelectItem>
                        <SelectItem value="Kursus Bersertifikasi">Kursus Bersertifikasi</SelectItem>
                        <SelectItem value="Politeknik Negeri">Politeknik Negeri</SelectItem>
                        <SelectItem value="Politeknik Swasta">Politeknik Swasta</SelectItem>
                        <SelectItem value="Sekolah Tinggi Negeri">Sekolah Tinggi Negeri</SelectItem>
                        <SelectItem value="Sekolah Tinggi Swasta">Sekolah Tinggi Swasta</SelectItem>
                        <SelectItem value="Universitas Negeri">Universitas Negeri</SelectItem>
                        <SelectItem value="Universitas Swasta">Universitas Swasta</SelectItem>
                        <SelectItem value="Lainnya">Lainnya</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Program Studi */}
                  <div className="flex flex-col space-y-2">
                    <label className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                      <GraduationCap className="w-4 h-4" />
                      Program Studi
                    </label>

                    <Select value={filterJurusan} onValueChange={setFilterJurusan}>
                      <SelectTrigger className="w-full h-10 rounded-md border border-gray-300 shadow-sm">
                        <SelectValue placeholder="Semua Program Studi" />
                      </SelectTrigger>
                      <SelectContent className="bg-white mt-1">
                        <SelectItem value="all">Semua Program Studi</SelectItem>
                        {jurusanList.map(jurusan => (
                          <SelectItem key={jurusan} value={jurusan}>{jurusan}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Lokasi */}
                  <div className="flex flex-col space-y-2">
                    <label className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                      <MapPin className="w-4 h-4" />
                      Lokasi
                    </label>

                    <Select value={filterLokasi} onValueChange={setFilterLokasi}>
                      <SelectTrigger className="w-full h-10 rounded-md border border-gray-300 shadow-sm">
                        <SelectValue placeholder="Semua Lokasi" />
                      </SelectTrigger>
                      <SelectContent className="bg-white mt-1">
                        <SelectItem value="all">Semua Lokasi</SelectItem>
                        {lokasiList.map(lokasi => (
                          <SelectItem key={lokasi} value={lokasi}>{lokasi}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-4 text-gray-600">
            Menampilkan {displayedData.length} dari {getFilteredData().length} kampus
          </div>

          {/* Campus Cards */}
          <div className="space-y-4 mb-8">
            {displayedData.length > 0 ? (
              displayedData.map((campus) => (
                <CampusCard key={campus.id} campus={campus} />
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <p className="text-gray-500">Tidak ada data kampus yang sesuai dengan pencarian</p>
              </div>
            )}
          </div>

          {/* Infinite Scroll Trigger */}
          {hasMore && displayedData.length > 0 && (
            <div ref={observerTarget} className="text-center py-4">
              <div className="inline-block w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* End of Results */}
          {!hasMore && displayedData.length > 0 && (
            <div className="text-center py-4 text-gray-500">
              Semua data telah ditampilkan
            </div>
          )}
        </div>
      </div>
    </div>
  );
}