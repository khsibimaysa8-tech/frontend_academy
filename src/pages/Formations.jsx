export default function Formations() {
  const formations = [
    {
      titre: "Angular & Spring Boot",
      desc: "Applications web robustes et sécurisées.",
      outils: [
        "https://angular.io/assets/images/logos/angular/angular.svg",
        "https://spring.io/images/spring-logo.svg",
        "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      ],
    },
    {
      titre: "MERN Stack & Flutter",
      desc: "Web et mobile avec des technologies modernes.",
      outils: [
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        "https://nodejs.org/static/images/logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
      ],
    },
    {
      titre: "Business Intelligence",
      desc: "Analyse et visualisation des données.",
      outils: [
        "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg",
      ],
    },
    {
      titre: "IA & IoT",
      desc: "Intelligence artificielle et objets connectés.",
      outils: [
        "https://upload.wikimedia.org/wikipedia/commons/1/11/TensorFlowLogo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        "https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg",
      ],
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">
          Nos formations
        </h1>
        <p className="text-gray-600 mb-12">
          4 parcours complets avec projets pratiques.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {formations.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow p-8 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {f.titre}
              </h3>

              <p className="text-gray-600 mb-4">{f.desc}</p>

              <div className="flex gap-4 mb-6">
                {f.outils.map((logo, idx) => (
                  <img
                    key={idx}
                    src={logo}
                    alt="outil"
                    className="w-10 h-10 object-contain"
                  />
                ))}
              </div>

              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold">
                Voir détails
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
