import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // 🔹 Jika ada hash (#section), tunggu sedikit agar halaman sempat render
      const targetId = hash.replace("#", "");
      const section = document.getElementById(targetId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        // Kalau elemen belum ada (misal masih loading), coba lagi sedikit kemudian
        setTimeout(() => {
          const retrySection = document.getElementById(targetId);
          if (retrySection) {
            retrySection.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      }
    } else {
      // 🔹 Jika tidak ada hash, scroll ke atas
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]); // jalan setiap route berubah

  return null;
}

