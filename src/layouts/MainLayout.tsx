import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCallback } from "react";

export default function MainLayout() {
    const location = useLocation();
    const navigate = useNavigate();

    //fungsi scroll di home
    const scrollToSection = useCallback(
        (sectionId: string) => {
            if (location.pathname === "/") {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offset = element.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: offset, behavior: "smooth"})
                }
            } else {
                //kalau bukan di home diarahkan ke home dengan hash
                navigate('/');
            }
        },
        [location.pathname, navigate]
    );

    return(
        <div className="flex flex-col min-h-screen">
            <Navbar onScrollToSection={scrollToSection} />
            <main className="flelx-1">
                <Outlet />
            </main>
            <Footer onScrollToSection={scrollToSection}/>
        </div>
    );
}

