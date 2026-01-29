import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Accueil from "./pages/Accueil";
import Cours from "./pages/Courses";
import Formateurs from "./pages/Formateurs";
import Formations from "./pages/Formations";
import Planning from "./pages/planning";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/cours" element={<Cours />} />
        <Route path="/formateurs" element={<Formateurs />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}


