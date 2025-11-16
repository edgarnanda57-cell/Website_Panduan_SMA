import Hero from "./Hero";
import PanduanGrid from './PanduanGrid';
import Tentang from './Tentang';


export default function HomePage() {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className='flex flex-col gap-10'>
      <section id="beranda">
        <Hero onScrollToSection={handleScrollToSection} />
      </section>

      <section id="panduan">
        <PanduanGrid />
      </section>

      <section id="tentang">
        <Tentang />
      </section>
    </main>
  );
}


