import { useState, useMemo, useEffect } from "react";
import { Search, Filter, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { JurusanCard } from "./JurusanCard";
import { jurusanData } from "../data/jurusan";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { Breadcrumb } from "../BelajarEfektif/Breadcrumb";

export default function JurusanList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("Semua");
  const [visibleCount, setVisibleCount] = useState(10);
  const [isSticky, setIsSticky] = useState(false);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Jurusan" },
  ];
  const url = "https://campus.quipper.com/majors";
  // Get unique types
  const types = useMemo(() => {
    const typeSet = new Set(jurusanData.map((j) => j.Type));
    return ["Semua", ...Array.from(typeSet)];
  }, []);

  // Filter jurusan
  const filteredJurusan = useMemo(() => {
    return jurusanData.filter((jurusan) => {
      const matchesSearch = jurusan.NamaJurusan.toLowerCase().includes(
        searchQuery.toLowerCase()
      );
      const matchesType =
        selectedType === "Semua" || jurusan.Type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [searchQuery, selectedType]);

  // Visible jurusan with lazy load
  const visibleJurusan = filteredJurusan.slice(0, visibleCount);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="pt-12 min-h-screen bg-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 pt-16 pb-12">
        <Breadcrumb items={breadcrumbItems} />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="mb-4">Jurusan</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Temukan informasi jurusan yang sesuai minat kamu.
            </p>
            
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1619918456523-268fbe7eee44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZWR1Y2F0aW9uJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2MzEyODUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Education Illustration"
                  className="w-full max-w-md h-64 object-cover rounded-3xl shadow-lg"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#7E57C2] via-[#9C7BDF] to-[#A487E0] rounded-full flex items-center justify-center"
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Search & Filter Section - Sticky */}
      <div
        className={`${
          isSticky
            ? "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md"
            : "relative"
        } transition-all duration-300`}
      >
        <div className={`container mx-auto px-4 ${isSticky ? "py-3" : "py-6"}`}>
          <div className="max-w-7xl mx-auto">
            {/* Search Bar */}
            <div className={`relative ${isSticky ? "mb-3" : "mb-6"}`}>
              <Search className={`absolute left-5 top-1/2 -translate-y-1/2 ${isSticky ? "w-4 h-4" : "w-5 h-5"} text-[#9575CD]`} />
              <input
                type="text"
                placeholder="Cari jurusan…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full ${isSticky ? "pl-12 pr-4 py-2.5 text-sm" : "pl-14 pr-6 py-4"} bg-white border-2 border-[#E0D4F7] rounded-full focus:outline-none focus:border-[#7E57C2] focus:shadow-[0_0_0_4px_rgba(126,87,194,0.1)] transition-all duration-200`}
              />
            </div>
            <div className="text-gray-500 text-xs">
              Sumber:{' '}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-600"
              >
                {url}
              </a>
            </div>
            {/* Filter Section */}
            <div className={`flex items-center gap-3 flex-wrap ${isSticky ? "mb-2" : ""}`}>
              <div className="flex items-center gap-2 text-gray-600">
                <Filter className="w-4 h-4 text-[#7E57C2]" />
                <span className="text-sm">Filter:</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`${isSticky ? "px-3 py-1 text-xs" : "px-5 py-2 text-sm"} rounded-full transition-all duration-200 ${
                      selectedType === type
                        ? "relative z-10 bg-gradient-to-r from-[#7E57C2] from-10% via-[#916ED4] via-50% to-[#A487E0] text-white shadow-md bg-clip-padding"
                        : "bg-[#F5F3F7] text-gray-700 hover:bg-[#EDE7F6] hover:text-[#7E57C2]"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Result Count */}
            {!isSticky && (
              <div className="mt-4 text-sm text-gray-500">
                Menampilkan {visibleJurusan.length} dari {filteredJurusan.length}{" "}
                jurusan
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card List Section */}
      <div className={`container mx-auto px-4 ${isSticky ? "mt-32" : "mt-8"} pb-16`}>
        <div className="max-w-7xl mx-auto">
          {filteredJurusan.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="mb-2">Tidak ada jurusan ditemukan</h3>
              <p className="text-gray-500">
                Coba ubah kata kunci pencarian atau filter
              </p>
            </motion.div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {visibleJurusan.map((jurusan, index) => (
                  <JurusanCard
                    key={jurusan.id}
                    jurusan={jurusan}
                    index={index}
                  />
                ))}
              </div>

              {/* Load More Button */}
              {visibleCount < filteredJurusan.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-center mt-12"
                >
                  <button
                    onClick={handleLoadMore}
                    className="px-10 py-4 bg-gradient-to-r from-[#7E57C2] via-[#8E6ED3] to-[#A487E0] text-white rounded-full hover:shadow-xl hover:shadow-[#7E57C2]/40 transition-all duration-200 active:scale-95 relative z-10"
                  >
                    Muat Lebih Banyak
                  </button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}