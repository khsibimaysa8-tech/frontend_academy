import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Accueil() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("/courses")
      .then((res) => setCourses(res.data.slice(0, 4))) 
      .catch((err) => console.log(err));
  }, []);

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
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
          <div className="max-w-2xl text-white">
            <p className="uppercase tracking-widest text-sm text-purple-300 mb-4">
              ITHOUSE ACADEMY
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Développez vos compétences techniques
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                et préparez votre avenir digital.
              </span>
            </h1>

            <p className="text-gray-200 text-lg mb-8">
              Formations professionnelles, encadrement sérieux et préparation
              complète aux stages et carrières IT.
            </p>

            <div className="flex gap-4">
              <Link
                to="/formations"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 font-semibold hover:scale-105 transition"
              >
                Commencer maintenant
              </Link>

              <Link
                to="/formations"
                className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
              >
                Voir les formations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-20">
            Nos Avantages
          </h2>

          <div className="grid md:grid-cols-3 gap-16 text-center">
            {[
              {
                icon: "⚡",
                title: "Formation Continue",
                desc: "Suivi pédagogique et évolution continue.",
              },
              {
                icon: "❤️",
                title: "Encadrement",
                desc: "Accompagnement professionnel personnalisé.",
              },
              {
                icon: "🎓",
                title: "Pré-soutenance",
                desc: "Préparation complète aux soutenances PFE.",
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALITES (DYNAMIQUE) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-16">
            Nos Spécialités
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {courses.map((course) => (
              <div
                key={course._id}
                className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <img
                  src={`http://localhost:5000/${course.image}`}
                  alt={course.titre}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-semibold mb-2">
                  {course.titre}
                </h3>

                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>

                <Link
                  to={`/formations/${course._id}`}
                  className="text-purple-600 font-semibold"
                >
                  Découvrir →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

