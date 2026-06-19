const PHYSIQUE_CHIMIE_DATA = {
  id: "physique-chimie",
  name: "Physique-Chimie",
  icon: "⚗️",
  color: "#F39C12",
  chapters: [
    {
      id: "pc-ch1",
      title: "Organisation de la matière",
      summary: "Atomes, molécules, ions, transformations chimiques...",
      fiches: [
        {
          title: "L'atome et la molécule",
          content: `<h3>Structure de l'atome</h3><p>Un atome est composé d'un noyau (protons positifs et neutrons) autour duquel gravitent des électrons (négatifs).</p><p>Une molécule est un assemblage d'atomes (ex: H2O = 2 atomes d'Hydrogène, 1 d'Oxygène).</p>`
        }
      ],
      quiz: [
        {
          question: "Quelle est la charge d'un électron ?",
          options: ["Positive", "Négative", "Neutre", "Variable"],
          correct: 1,
          explanation: "L'électron a une charge électrique négative. Le proton est positif."
        },
        {
          question: "De quoi est composé le noyau d'un atome ?",
          options: ["D'électrons et de protons", "Seulement de neutrons", "De protons et de neutrons", "Seulement d'électrons"],
          correct: 2,
          explanation: "Le noyau est constitué de nucléons : les protons et les neutrons."
        },
        {
          question: "Que signifie la formule de l'eau (H2O) ?",
          options: ["2 atomes d'hydrogène et 1 d'oxygène", "1 atome d'hydrogène et 2 d'oxygène", "2 atomes d'hélium et 1 d'oxygène", "2 atomes d'hydrogène et 2 d'oxygène"],
          correct: 0,
          explanation: "H2 signifie 2 atomes d'Hydrogène (H), et O signifie 1 atome d'Oxygène."
        }
      ]
    },
    {
      id: "pc-ch2",
      title: "Mouvements et interactions",
      summary: "Vitesse, forces, gravitation, poids et masse...",
      fiches: [
        {
          title: "Poids et masse",
          content: `<h3>Différence entre poids et masse</h3><p>La <strong>masse</strong> (en kg) est la quantité de matière, elle ne change pas. Le <strong>poids</strong> (en Newton N) est la force de gravité, il dépend de l'astre.</p><p>Formule : <span class="formula">P = m × g</span> (g sur Terre = 9,8 N/kg)</p>`
        }
      ],
      quiz: [
        {
          question: "Quelle est l'unité de la force (et donc du poids) ?",
          options: ["Le Kilogramme (kg)", "Le Newton (N)", "Le Joule (J)", "Le Watt (W)"],
          correct: 1,
          explanation: "Le poids est une force, il se mesure en Newton (N) avec un dynamomètre."
        },
        {
          question: "Quelle est la formule liant le poids P et la masse m ?",
          options: ["P = m + g", "m = P × g", "P = m × g", "P = m / g"],
          correct: 2,
          explanation: "Le poids (P) s'obtient en multipliant la masse (m) par l'intensité de la pesanteur (g)."
        },
        {
          question: "Si tu vas sur la Lune, qu'est-ce qui change ?",
          options: ["Ta masse", "Ton poids", "Ton poids et ta masse", "Rien"],
          correct: 1,
          explanation: "La masse reste la même partout, mais le poids change car la gravité (g) sur la Lune est plus faible que sur Terre."
        }
      ]
    }
  ,
{
    "id": "pc-ch3",
    "title": "L'énergie et ses conversions",
    "summary": "Énergie cinétique, potentielle, électrique, puissance...",
    "fiches": [
        {
            "title": "Les formes d'énergie",
            "content": "<h3>L'énergie cinétique et de position</h3><p>L'énergie cinétique (Ec) est liée à la vitesse d'un objet (Ec = 1/2 × m × v²). L'énergie potentielle de position (Ep) est liée à l'altitude. L'énergie mécanique (Em) est la somme des deux (Em = Ec + Ep).</p>"
        },
        {
            "title": "Électricité",
            "content": "<h3>Tension et intensité</h3><p>La tension (U) s'exprime en Volts et se mesure avec un voltmètre en dérivation. L'intensité (I) s'exprime en Ampères et se mesure avec un ampèremètre en série. Loi d'Ohm : <span class=\"formula\">U = R × I</span>.</p>"
        }
    ],
    "quiz": [
        {
            "question": "Quelle est l'unité de l'énergie ?",
            "options": ["Le Watt", "Le Joule", "Le Volt", "L'Ampère"],
            "correct": 1,
            "explanation": "L'énergie se mesure en Joules (J)."
        },
        {
            "question": "De quoi dépend l'énergie cinétique ?",
            "options": ["De la masse et de l'altitude", "De la masse et de la vitesse", "Uniquement de la vitesse", "De la température"],
            "correct": 1,
            "explanation": "La formule est Ec = 1/2 × m × v², elle dépend donc de la masse et de la vitesse au carré."
        },
        {
            "question": "Comment se branche un ampèremètre ?",
            "options": ["En série", "En dérivation", "En parallèle", "Sur n'importe quel fil"],
            "correct": 0,
            "explanation": "L'ampèremètre mesure le débit de courant, il doit donc être placé en série dans le circuit."
        }
    ]
},
{
    "id": "physique-chimie-supplementaire",
    "title": "Chapitre Supplémentaire : Les signaux (Son et Lumière)",
    "summary": "Comprendre la propagation du son et de la lumière, et leurs utilisations pour communiquer.",
    "fiches": [
        {
            "title": "Le son et la lumière",
            "content": "<h3>Le Son</h3><p>C'est une onde mécanique qui a besoin d'un milieu matériel pour se propager. Il ne se propage pas dans le vide. Sa vitesse dans l'air est d'environ 340 m/s.</p><h3>La Lumière</h3><p>Elle se propage dans le vide à 300 000 km/s. Elle permet de voir et de transmettre des informations (fibre optique).</p>"
        }
    ],
    "quiz": [
        {
            "question": "Dans quel milieu le son NE PEUT PAS se propager ?",
            "options": [
                "Dans l'eau",
                "Dans l'air",
                "Dans l'acier",
                "Dans le vide"
            ],
            "correct": 3,
            "explanation": "Le son est une onde mécanique, il a besoin de matière."
        }
    ]
},
  {
    "id": "physique-chimie-final",
    "title": "🎯 Grand Quiz Final Type Brevet",
    "summary": "Série de 10 questions de révision pour le Brevet.",
    "fiches": [],
    "quiz": [
        {
            "q": "Quelle est la formule chimique de l'eau ?",
            "o": ["CO2","O2","H2O","H2SO4"],
            "c": 2,
            "e": "Deux atomes d'hydrogène et un atome d'oxygène."
        },
        {
            "q": "Quel est l'état de l'eau à 110°C à pression atmosphérique normale ?",
            "o": ["Solide","Liquide","Gazeux","Plasma"],
            "c": 2,
            "e": "L'eau bout à 100°C et devient de la vapeur d'eau (gaz)."
        },
        {
            "q": "Quelle est l'unité de mesure de la force ?",
            "o": ["Le Joule","Le Watt","Le Newton","Le Volt"],
            "c": 2,
            "e": "Du nom d'Isaac Newton."
        },
        {
            "q": "Quel est le symbole du dioxyde de carbone ?",
            "o": ["CO","CO2","C2O","HO2"],
            "c": 1,
            "e": "Un atome de carbone et deux atomes d'oxygène."
        },
        {
            "q": "Dans un atome, les électrons sont de charge :",
            "o": ["Positive","Négative","Neutre","Variable"],
            "c": 1,
            "e": "Les protons sont positifs, les neutrons sont neutres et les électrons négatifs."
        },
        {
            "q": "Quelle est la vitesse de la lumière dans le vide ?",
            "o": ["300 000 km/s","340 m/s","150 000 km/s","3 000 km/s"],
            "c": 0,
            "e": "C'est une constante physique fondamentale."
        },
        {
            "q": "Quel appareil mesure la tension électrique ?",
            "o": ["L'ampèremètre","Le voltmètre","L'ohmmètre","Le dynamomètre"],
            "c": 1,
            "e": "Il se branche en dérivation et mesure en Volts."
        },
        {
            "q": "La formule P = m x g relie le poids à la :",
            "o": ["Pression","Vitesse","Masse","Puissance"],
            "c": 2,
            "e": "Poids = masse × intensité de la pesanteur."
        },
        {
            "q": "Si le pH d'une solution est de 3, elle est :",
            "o": ["Acide","Basique","Neutre","Salée"],
            "c": 0,
            "e": "Un pH inférieur à 7 caractérise une solution acide."
        },
        {
            "q": "L'énergie cinétique d'un objet dépend de sa masse et de :",
            "o": ["Sa hauteur","Sa température","Sa vitesse","Son volume"],
            "c": 2,
            "e": "Ec = 1/2 × m × v²."
        }
    ]
}
  ]
};
