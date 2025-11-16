import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {Suspense, lazy  } from "react";
import MainLayout from './layouts/MainLayout';
import { ScrollToTop } from "./components/ScrollToTop";
import { ThreeDot} from "react-loading-indicators"
const BelajarEfektif = lazy(() => import("./components/pages/BelajarEfektif/BelajarEfektif"));
const HomePage = lazy(() => import('./components/HomePage'));
const KTPSIMPage = lazy(() => import( './components/pages/KTPSIMPage'));
const PanduanKTPPage = lazy(() => import( './components/pages/PanduanKTPPage'));
const PanduanSIMPage = lazy(() => import( './components/pages/PanduanSIMPage'));
const JurusanKampus = lazy(() => import( "./components/pages/DataJurusanKampus"));
const PanduanKesehatanMental = lazy(() => import( "./components/pages/PanduanKesehatanMental"));
const HomePage1 = lazy(() => import( "./components/pages/Karier/HomePage1"));
const CareerDetail = lazy(() => import( "./components/pages/Karier/CareerDetail"))
const JurusanList = lazy(() => import( "./components/pages/Jurusan/JurusanList"));
const JurusanDetail = lazy(() => import( "./components/pages/Jurusan/JurusanDetail"))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="flex items-center justify-center h-screen"><ThreeDot variant="bounce" color="#3779e2" size="medium" text="" textColor="" /></div> }>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={<HomePage />} />
            <Route path="/ktp-sim" element={<KTPSIMPage />} />
            <Route path="/panduan-ktp" element={<PanduanKTPPage />} />
            <Route path="/panduan-sim" element={<PanduanSIMPage />} />
            <Route path="/persiapan-kuliah" element={<JurusanKampus />} />
            <Route path="/kesehatan-mental" element={<PanduanKesehatanMental />}/>
            <Route path="/persiapan-karir" element={<HomePage1 />} />
            <Route path="/persiapan-karir/:id" element={<CareerDetail />} />
            <Route path="/belajar-efektif" element={<BelajarEfektif/>}/>
            <Route path="/jurusan" element={<JurusanList/>} />
            <Route path="/jurusan/:id" element={<JurusanDetail/>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;