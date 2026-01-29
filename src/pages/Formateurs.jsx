export default function Formateurs() {
  const formateurs = [
    {
      nom: "Mohamed Ali",
      specialite: "Angular & Spring Boot",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      ],
    },
    {
      nom: "Sarra Ben Salah",
      specialite: "MERN Stack & Flutter",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      ],
    },
    {
      nom: "Yassine Trabelsi",
      specialite: "Business Intelligence",
      photo: "https://randomuser.me/api/portraits/men/56.jpg",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8c/Tableau_Logo.png",
      ],
    },
    {
      nom: "Amira Khlifi",
      specialite: "IA & IoT",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-14">Nos Formateurs</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {formateurs.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <img
                src={f.photo}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />

              <h3 className="font-semibold text-lg">{f.nom}</h3>
              <p className="text-gray-500 text-sm mb-4">{f.specialite}</p>

              <div className="flex justify-center gap-3 mb-6">
                {f.logos.map((logo, idx) => (
                  <img
                    key={idx}
                    src={logo}
                    className="w-8 h-8 object-contain"
                  />
                ))}
              </div>

              <button className="px-5 py-2 rounded-full bg-emerald-600 text-white text-sm hover:bg-emerald-700">
                Voir infos formateur
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
