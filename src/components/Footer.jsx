export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            ItHouse Academy
          </h3>
          <p className="text-sm">
            Plateforme de formation moderne pour développer
            vos compétences digitales.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>Accueil</li>
            <li>Cours</li>
            <li>Formateurs</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm">contact@ithouse.tn</p>
          <p className="text-sm">+216 XX XXX XXX</p>
        </div>

      </div>
    </footer>
  );
}
