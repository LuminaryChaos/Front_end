import { useEffect, useState } from "react";



function Formulaire() {
  const [theme, setTheme] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [coutJournalier, setCoutJournalier] = useState(0);
  const [duree, setDuree] = useState(0);
  const [formulaire, setFormulaire] = useState({
    theme: "",
    data_debut: "",
    data_fin: "",
    cout_journalier: 0,
    duree: 0,
  });

  useEffect(() => {

    fetch("/api/events")
      .then(response => response.json())
      .then(data => {
        // Process data if necessary
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  function confirm() {
    setFormulaire({
      ...formulaire,
      theme: theme,
      data_debut: dateDebut,
      data_fin: dateFin,
      cout_journalier: coutJournalier,
      duree: duree,
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center w-4/4">
      <div className="max-w-xl mx-auto p-8 bg-gradient-to-br from-blue-400 to-blue-200 shadow-lg rounded-lg space-y-6">
        <h2 className="text-3xl font-semibold text-center mb-6 text-white">Formulaire de l'événement</h2>
        
        <div>
          <label htmlFor="theme" className="block text-sm font-medium text-white mb-2">
            Thème
          </label>
          <input
            placeholder="Thème"
            type="text"
            onChange={(event) => setTheme(event.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="dateDebut" className="block text-sm font-medium text-white mb-2">
            Date de début
          </label>
          <input
            type="date"
            onChange={(event) => setDateDebut(event.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="dateFin" className="block text-sm font-medium text-white mb-2">
            Date de fin
          </label>
          <input
            type="date"
            onChange={(event) => setDateFin(event.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="coutJournalier" className="block text-sm font-medium text-white mb-2">
            Coût Journalier
          </label>
          <input
            type="text"
            placeholder="Coût Journalier"
            onChange={(event) => setCoutJournalier(event.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="duree" className="block text-sm font-medium text-white mb-2">
            Durée
          </label>
          <input
            type="text"
            placeholder="Durée"
            onChange={(event) => setDuree(event.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
          />
        </div>

        <button
          onClick={confirm}
          className="w-full py-3 bg-gradient-to-br from-blue-500 to-blue-200 text-white rounded-lg font-semibold hover:shadow-lg hover:bg-opacity-70 transition duration-300 backdrop-blur-sm"
        >
          Confirmer
        </button>

        <p className="text-white text-sm mt-6">
          <span className="font-medium">Thème</span>: {formulaire.theme}
          <br />
          <span className="font-medium">Date de début</span>: {formulaire.data_debut}
          <br />
          <span className="font-medium">Date de fin</span>: {formulaire.data_fin}
          <br />
          <span className="font-medium">Coût Journalier</span>: {formulaire.cout_journalier}
          <br />
          <span className="font-medium">Durée</span>: {formulaire.duree}
        </p>
      </div>
    </div>
  );
}

export default Formulaire;
