import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-9 h-9" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            ItHouse Academy
          </span>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-purple-500">Accueil</Link>
          <Link to="/cours" className="hover:text-purple-500">Cours</Link>
          <Link to="/formateurs" className="hover:text-purple-500">Formateurs</Link>
          <Link to="/planning" className="hover:text-purple-500">Planning</Link>
          <Link to="/contact" className="hover:text-purple-500">Contact</Link>
        </nav>

        {/* Button */}
        <Link
          to="/inscription"
          className="px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90"
        >
          Commencer
        </Link>
      </div>
    </header>
  );
}

