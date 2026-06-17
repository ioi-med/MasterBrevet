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
    "id": "physique-chimie-final",
    "title": "🎯 Grand Quiz Final Type Brevet",
    "summary": "Série de 31 questions incluant un sujet type Brevet.",
    "fiches": [],
    "quiz": [
        {
            "question": "Question de révision générale 1 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 3,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 2 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 1,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 3 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 3,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 4 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 2,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 5 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 1,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 6 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 2,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 7 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 1,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 8 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 3,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 9 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 2,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 10 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 2,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 11 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 2,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 12 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 2,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 13 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 3,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 14 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 0,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 15 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 1,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 16 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 0,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 17 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 1,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 18 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 2,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 19 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 1,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 20 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 3,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 21 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 2,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 22 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 0,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 23 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 0,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 24 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 2,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 25 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 3,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 26 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 2,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 27 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 3,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 28 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 1,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 29 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 2,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "Question de révision générale 30 (Physique-Chimie)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "correct": 2,
            "explanation": "La physique-chimie modélise la matière, les forces, et l'énergie."
        },
        {
            "question": "[SUJET TYPE BREVET] On dissout 5g de sel dans 200mL d'eau. Lors de la transformation chimique ou physique, que se passe-t-il pour la masse totale ?",
            "options": [
                "La masse diminue",
                "La masse augmente",
                "La masse se conserve (205g)",
                "On ne peut pas savoir"
            ],
            "correct": 2,
            "explanation": "Lors d'une dissolution ou transformation chimique, la masse totale se conserve (Loi de Lavoisier)."
        }
    ]
}
  ]
};
