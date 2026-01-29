import logo from "../assets/logo.png";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Navbar */}
        <header className="relative z-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="ItHouse Logo" className="w-10 h-10" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                ItHouse Academy
              </h1>
            </div>

            <nav className="hidden md:flex gap-8 text-white font-medium">
              <a className="hover:text-purple-400 cursor-pointer">
                Cours
              </a>
              <a className="hover:text-purple-400 cursor-pointer">
                Formateurs
              </a>
              <a className="hover:text-purple-400 cursor-pointer">
                Communauté
              </a>
            </nav>

            <button className="px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90">
              Commencer
            </button>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <p className="uppercase tracking-widest text-sm text-purple-300 mb-4">
              ITHOUSE ACADEMY
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Développez vos compétences techniques
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              et préparez votre avenir digital.
              </span>
            </h2>
            <p className="text-gray-200 text-lg md:text-xl max-w-xl mb-8">
              Des formations variées dans plusieurs domaines technologiques,
              avec accompagnement, encadrement et opportunités d’application pratique.
            </p>


            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition">
                Commencer maintenant
              </button>
              <button className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition">
                Voir les formations
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* AVANTAGES SECTION */}
<section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-semibold text-center mb-20">
      Nos Avantages Uniques
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center">

      {/* Aide IA */}
      <div>
        <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-2xl">
          ⚡
        </div>
        <h3 className="text-xl font-semibold mb-4">
          Aide Vocale IA
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Évaluation instantanée et intelligente pour améliorer
          vos compétences techniques.
        </p>
      </div>

      {/* Parcours */}
      <div>
        <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-2xl">
          ❤️
        </div>
        <h3 className="text-xl font-semibold mb-4">
          Parcours Personnalisé
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Un parcours adapté à votre niveau, votre rythme
          et vos objectifs professionnels.
        </p>
      </div>

      {/* Sécurité */}
      <div>
        <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-2xl">
          🛡️
        </div>
        <h3 className="text-xl font-semibold mb-4">
          Environnement Sécurisé
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Un cadre professionnel avec accompagnement
          sérieux et structuré.
        </p>
      </div>

    </div>
  </div>
</section>
{/* SPECIALITES SECTION */}
<section className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-semibold text-center mb-16">
      Spécialités proposées
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      <div className="p-10 bg-white rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-3">
          Angular & Spring Boot
        </h3>
        <p className="text-gray-600">
          Applications web professionnelles avec
          architecture moderne et sécurisée.
        </p>
      </div>

      <div className="p-10 bg-white rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-3">
          MERN Stack
        </h3>
        <p className="text-gray-600">
          MongoDB, Express, React et Node.js
          pour des projets web complets.
        </p>
      </div>

      <div className="p-10 bg-white rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-3">
          Flutter
        </h3>
        <p className="text-gray-600">
          Développement d’applications mobiles
          Android et iOS.
        </p>
      </div>

      <div className="p-10 bg-white rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-3">
          Intelligence Artificielle & IoT
        </h3>
        <p className="text-gray-600">
          Projets innovants combinant IA,
          automatisation et objets connectés.
        </p>
      </div>

    </div>
  </div>
</section>
    </div>
  );
}


