const SVT_DATA = {
  id: "svt",
  name: "SVT",
  icon: "🧬",
  color: "#1ABC9C",
  chapters: [
    {
      id: "svt-ch1",
      title: "Le vivant et son évolution",
      summary: "ADN, gènes, chromosomes, division cellulaire, évolution...",
      fiches: [
        {
          title: "L'information génétique",
          content: `<h3>La molécule d'ADN</h3><p>Chaque cellule humaine possède un noyau contenant l'information génétique sous forme de 46 chromosomes (23 paires).</p><p>Les chromosomes sont constitués d'ADN. Un gène est une portion d'ADN qui détermine un caractère héréditaire.</p>`
        }
      ],
      quiz: [
        {
          question: "Où se trouve l'information génétique dans une cellule animale ?",
          options: ["Dans le cytoplasme", "Dans le noyau", "Dans la membrane", "Dans les mitochondries"],
          correct: 1,
          explanation: "L'ADN est localisé dans le noyau des cellules eucaryotes."
        },
        {
          question: "Combien de chromosomes contient une cellule humaine normale (hors cellules sexuelles) ?",
          options: ["23 chromosomes", "46 chromosomes (23 paires)", "48 chromosomes", "21 chromosomes"],
          correct: 1,
          explanation: "L'espèce humaine possède 46 chromosomes répartis en 23 paires (dont la dernière détermine le sexe, XX ou XY)."
        },
        {
          question: "Qu'est-ce qu'un allèle ?",
          options: ["Une maladie génétique", "Une version d'un gène", "Une division cellulaire", "Un type de chromosome"],
          correct: 1,
          explanation: "Un allèle est l'une des différentes versions possibles d'un même gène (ex: les allèles A, B et O pour le gène du groupe sanguin)."
        }
      ]
    },
    {
      id: "svt-ch2",
      title: "Le corps humain et la santé",
      summary: "Système immunitaire, reproduction, système nerveux...",
      fiches: [
        {
          title: "Le système immunitaire",
          content: `<h3>Défense de l'organisme</h3><p>Les <strong>leucocytes</strong> (globules blancs) défendent le corps contre les micro-organismes (bactéries, virus).</p><p>La <strong>phagocytose</strong> est une réaction rapide : les phagocytes avalent et détruisent les microbes.</p>`
        }
      ],
      quiz: [
        {
          question: "Quelles cellules sont responsables de la défense de l'organisme ?",
          options: ["Les globules rouges (hématies)", "Les globules blancs (leucocytes)", "Les plaquettes", "Les neurones"],
          correct: 1,
          explanation: "Les leucocytes, ou globules blancs, sont les cellules immunitaires."
        },
        {
          question: "Comment appelle-t-on les micro-organismes qui rendent malade ?",
          options: ["Pathogènes", "Bénéfiques", "Symbiotiques", "Inoffensifs"],
          correct: 0,
          explanation: "Un organisme pathogène est un organisme qui provoque une maladie."
        },
        {
          question: "À quoi sert un vaccin ?",
          options: ["À guérir une maladie déclarée", "À stimuler la mémoire immunitaire de manière préventive", "À tuer les bactéries (comme un antibiotique)", "À calmer la douleur"],
          correct: 1,
          explanation: "Le vaccin introduit un agent inoffensif pour déclencher la production d'anticorps et créer des cellules mémoires."
        }
      ]
    }
  ,
{
    "id": "svt-ch3",
    "title": "La planète Terre, l'environnement et l'action humaine",
    "summary": "Météorologie, climatologie, risques naturels, gestion des ressources...",
    "fiches": [
        {
            "title": "Risques naturels et technologiques",
            "content": "<h3>Les séismes et volcans</h3><p>Les séismes sont dus à une rupture brutale des roches en profondeur, libérant de l'énergie sous forme d'ondes sismiques. Le volcanisme est l'arrivée en surface de magma contenant des gaz. L'activité humaine peut aussi engendrer des risques technologiques (pollution, accidents industriels).</p>"
        },
        {
            "title": "Changement climatique",
            "content": "<h3>L'impact humain</h3><p>L'augmentation de l'effet de serre, causée par les émissions de dioxyde de carbone (CO2) et de méthane, entraîne un réchauffement climatique global. Cela provoque la fonte des glaces, la montée du niveau de la mer et des événements météorologiques extrêmes.</p>"
        }
    ],
    "quiz": [
        {
            "question": "Quelle est la principale cause du réchauffement climatique actuel ?",
            "options": ["L'activité volcanique", "Les variations de l'orbite terrestre", "L'augmentation des gaz à effet de serre par l'activité humaine", "Le Soleil qui chauffe plus"],
            "correct": 2,
            "explanation": "Les activités humaines, principalement l'utilisation de combustibles fossiles, augmentent la concentration des gaz à effet de serre (comme le CO2) dans l'atmosphère."
        },
        {
            "question": "Qu'est-ce que l'épicentre d'un séisme ?",
            "options": ["Le point en profondeur où se produit la rupture", "Le point à la surface de la Terre situé à la verticale du foyer", "La zone la moins touchée par le séisme", "Le type d'onde sismique"],
            "correct": 1,
            "explanation": "L'épicentre est le point en surface où les secousses sont généralement les plus fortes, juste au-dessus du foyer."
        },
        {
            "question": "Quel comportement adopter en cas de séisme si l'on est à l'intérieur ?",
            "options": ["S'abriter sous une table solide", "Courir vers l'extérieur", "Prendre l'ascenseur", "Allumer un feu"],
            "correct": 0,
            "explanation": "Il faut s'abriter sous un meuble solide pour se protéger de la chute d'objets."
        }
    ]
},
{
    "id": "svt-supplementaire",
    "title": "Chapitre Supplémentaire : L'évolution du vivant",
    "summary": "L'histoire de la Terre, l'apparition de la vie et les mécanismes de l'évolution.",
    "fiches": [
        {
            "title": "La théorie de l'évolution",
            "content": "<h3>La sélection naturelle</h3><p>Les individus d'une espèce présentent des variations génétiques. L'environnement favorise ceux qui sont les mieux adaptés, qui survivent et se reproduisent. C'est le moteur de l'évolution.</p>"
        }
    ],
    "quiz": [
        {
            "question": "Qui a formulé la théorie de la sélection naturelle ?",
            "options": [
                "Pasteur",
                "Mendel",
                "Darwin",
                "Lamarck"
            ],
            "correct": 2,
            "explanation": "Charles Darwin a publié 'L'Origine des espèces' en 1859."
        }
    ]
},
  {
    "id": "svt-final",
    "title": "🎯 Grand Quiz Final Type Brevet",
    "summary": "Série de 10 questions de révision pour le Brevet.",
    "fiches": [],
    "quiz": [
        {
            "q": "Où se trouve l'information génétique dans une cellule animale ?",
            "o": ["Dans le cytoplasme","Dans la membrane","Dans le noyau","Dans les mitochondries"],
            "c": 2,
            "e": "L'ADN est contenu dans le noyau des cellules."
        },
        {
            "q": "Combien de chromosomes contient une cellule humaine normale ?",
            "o": ["23","46","48","24"],
            "c": 1,
            "e": "Elle contient 46 chromosomes (23 paires)."
        },
        {
            "q": "Comment s'appelle le phénomène par lequel les plaques tectoniques s'écartent ?",
            "o": ["La subduction","La collision","La divergence (ou accrétion)","L'érosion"],
            "c": 2,
            "e": "Au niveau des dorsales océaniques, les plaques s'écartent."
        },
        {
            "q": "Quelle cellule reproductrice est produite par l'homme ?",
            "o": ["L'ovule","Le spermatozoïde","Le pollen","Le zygote"],
            "c": 1,
            "e": "C'est le gamète mâle."
        },
        {
            "q": "Comment s'appelle le processus par lequel les plantes produisent leur nourriture ?",
            "o": ["La respiration","La digestion","La photosynthèse","La fermentation"],
            "c": 2,
            "e": "Elles utilisent l'énergie solaire, le CO2 et l'eau pour produire de la matière organique."
        },
        {
            "q": "Quel est le rôle des globules blancs ?",
            "o": ["Transporter l'oxygène","Coaguler le sang","Défendre l'organisme contre les infections","Transporter les nutriments"],
            "c": 2,
            "e": "Ils font partie du système immunitaire."
        },
        {
            "q": "Qu'est-ce qu'un séisme ?",
            "o": ["Une éruption volcanique","Un tremblement de terre causé par la rupture de roches","Un tsunami","Une tornade"],
            "c": 1,
            "e": "Il libère de l'énergie sous forme d'ondes sismiques."
        },
        {
            "q": "Qui a formulé la théorie de l'évolution par sélection naturelle ?",
            "o": ["Louis Pasteur","Charles Darwin","Gregor Mendel","Marie Curie"],
            "c": 1,
            "e": "Darwin a publié cette théorie en 1859 dans L'Origine des espèces."
        },
        {
            "q": "Quel gaz est absorbé lors de la respiration humaine ?",
            "o": ["Le dioxyde de carbone","L'azote","Le dioxygène","L'hydrogène"],
            "c": 2,
            "e": "Le corps absorbe l'O2 et rejette le CO2."
        },
        {
            "q": "Où a lieu la fécondation chez la femme ?",
            "o": ["Dans l'utérus","Dans le vagin","Dans les trompes de Fallope","Dans les ovaires"],
            "c": 2,
            "e": "C'est là que le spermatozoïde rencontre l'ovule."
        }
    ]
}
  ]
};
