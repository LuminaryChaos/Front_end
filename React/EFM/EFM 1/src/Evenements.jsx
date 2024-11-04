function Evenements({ expretsData }) {
  let total = 0;
  return (
    <>
      {expretsData.map((user, i) => (
        <div className="my-10 bg-blue-100 p-6 shadow-lg rounded-lg">
          <ul className="list-outside list-disc pl-5 mb-4">
            <li className="text-xl font-semibold text-blue-900">
              {user.nom_complet}
            </li>
          </ul>
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-blue-200">
              <tr>
                {[
                  "Theme",
                  "Date de debut",
                  "Date de fin",
                  "Description",
                  "Cout journalier",
                  "Duree",
                  "Cout Total Evenement",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 border-b border-gray-300 text-blue-800 text-left font-semibold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {user.evenements.map((item, index) => {
                let cout_total = Number(item.duree) * Number(item.cout_journalier);
                total += cout_total;
                return (
                  <tr key={index} className="hover:bg-gray-50 transition duration-200">
                    <td className="border-b border-gray-300 px-4 py-2 text-gray-700">
                      {item.theme}
                    </td>
                    <td className="border-b border-gray-300 px-4 py-2 text-gray-700">
                      {item.data_debut}
                    </td>
                    <td className="border-b border-gray-300 px-4 py-2 text-gray-700">
                      {item.data_fin}
                    </td>
                    <td className="border-b border-gray-300 px-4 py-2 text-gray-700">
                      {item.description}
                    </td>
                    <td className="border-b border-gray-300 px-4 py-2 text-gray-700">
                      {item.cout_journalier} DH
                    </td>
                    <td className="border-b border-gray-300 px-4 py-2 text-gray-700">
                      {item.duree}
                    </td>
                    <td className="border-b border-gray-300 px-4 py-2 text-gray-700">
                      {cout_total} DH
                    </td>
                  </tr>
                );
              })}
              <tr className="bg-blue-200 font-semibold">
                <td colSpan={6} className="px-4 py-3 text-blue-900">
                  Total des coûts des événements assurés est :
                </td>
                <td className="border-l border-gray-300 px-4 py-3 text-blue-900">
                  {total} DH
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
}

export default Evenements;
