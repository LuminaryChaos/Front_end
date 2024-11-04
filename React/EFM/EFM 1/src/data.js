import Evenements from "./Evenements.jsx";
import Formulaire from "./Formulaire.jsx";

function Data(){
    const expretsData = [
            {
            "id": 1,
            "nom_complet" : "ANASSRI Soufiane",
            "evenements" : [
                {
                    "theme" : "Developpement Web",
                    "data_debut" : "2024-03-02",
                    "data_fin" : "2024-03015",
                    "description" : "Introduction au developpement web moderne",
                    "cout_journalier" : 500,
                    "duree" : 13
                },
                {
                    "theme" : "Applications Mobiles",
                    "data_debut" : "2024-04-01",
                    "data_fin" : "2024-04-15",
                    "description" : "Conception et developpement d'applications mobiles",
                    "cout_journalier" : 700,
                    "duree" : 14
                }
                ]
            },
            {
                "id": 2,
                "nom_complet" : "NAJMI Othmane",
                "evenements" : [
                    {
                        "theme" : "Developpement Web",
                        "data_debut" : "2024-03-02",
                        "data_fin" : "2024-03015",
                        "description" : "Introduction au developpement web moderne",
                        "cout_journalier" : 500,
                        "duree" : 13
                    },
                    {
                        "theme" : "Applications Mobiles",
                        "data_debut" : "2024-04-01",
                        "data_fin" : "2024-04-15",
                        "description" : "Conception et developpement d'applications mobiles",
                        "cout_journalier" : 700,
                        "duree" : 14
                    }
                    ]
                }
        ]

    return (
        <>  
            <Evenements expretsData={expretsData}/>
            <Formulaire/>
        </>
    )
}

export default Data;