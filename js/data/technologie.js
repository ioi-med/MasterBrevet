const TECHNOLOGIE_DATA = {
  id: "technologie",
  name: "Technologie",
  icon: "💻",
  color: "#9B59B6",
  chapters: [
    {
      id: "tech-ch1",
      title: "Informatique et programmation",
      summary: "Algorithmes, réseaux, protocoles...",
      fiches: [
        {
          title: "Les algorithmes",
          content: `<h3>Définition</h3><p>Un <strong>algorithme</strong> est une suite d'instructions précises et ordonnées permettant de résoudre un problème ou d'accomplir une tâche. Il est ensuite traduit dans un langage de programmation pour être exécuté par un ordinateur.</p>`
        }
      ],
      quiz: [
        {
          question: "Qu'est-ce qu'un algorithme ?",
          options: ["Un composant matériel de l'ordinateur", "Une suite logique d'instructions", "Un réseau sans fil", "Une erreur dans le code"],
          correct: 1,
          explanation: "Un algorithme est la méthode, la suite d'instructions pour résoudre un problème."
        },
        {
          question: "Quel rôle joue un 'capteur' dans un système automatisé ?",
          options: ["Il effectue une action physique (ex: tourner)", "Il acquiert une grandeur physique pour la transformer en signal (ex: température)", "Il stocke des données", "Il alimente le système en énergie"],
          correct: 1,
          explanation: "Un capteur acquiert l'information (ex: capteur de présence). L'actionneur effectue l'action (ex: moteur)."
        },
        {
          question: "À quoi sert l'adresse IP d'un ordinateur ?",
          options: ["À l'identifier sur le réseau Internet ou local", "À accélérer sa connexion", "À stocker ses mots de passe", "À le protéger des virus"],
          correct: 0,
          explanation: "L'adresse IP (Internet Protocol) est l'identifiant unique d'une machine sur un réseau informatique."
        }
      ]
    },
    {
      id: "tech-ch2",
      title: "Design, innovation et créativité",
      summary: "Cahier des charges, cycle de vie...",
      fiches: [
        {
          title: "Le besoin et le cahier des charges",
          content: `<h3>Le Cahier des Charges Fonctionnel (CdCF)</h3><p>C'est le document qui définit avec précision le besoin à satisfaire et les contraintes que le produit final devra respecter.</p>`
        }
      ],
      quiz: [
        {
          question: "Qu'est-ce qu'une 'contrainte' dans un cahier des charges ?",
          options: ["Une obligation à respecter (budget, normes, ergonomie)", "Une option facultative", "Le prix de vente final", "Le nom de l'entreprise"],
          correct: 0,
          explanation: "Une contrainte est une caractéristique que l'objet doit obligatoirement respecter pour répondre au besoin (ex: contrainte de poids, d'alimentation, environnementale)."
        },
        {
          question: "À quelle étape correspond le 'prototypage' ?",
          options: ["À la vente du produit", "Au recyclage du produit en fin de vie", "À la réalisation d'un premier exemplaire test avant la fabrication en série", "À l'emballage"],
          correct: 2,
          explanation: "Le prototype permet de valider les solutions techniques avant de lancer la production."
        },
        {
          question: "Quel outil utilise-t-on pour représenter graphiquement les fonctions d'un objet technique ?",
          options: ["Un tableur", "Le diagramme 'pieuvre' (ou graphe des interactions)", "Un traitement de texte", "Un navigateur web"],
          correct: 1,
          explanation: "Le diagramme 'pieuvre' permet de visualiser les fonctions principales et les contraintes de l'objet dans son environnement."
        }
      ]
    }
  ,
{
    "id": "tech-ch3",
    "title": "Modélisation et Simulation",
    "summary": "CAO, représentation 3D, tests virtuels...",
    "fiches": [
        {
            "title": "La modélisation numérique",
            "content": "<h3>La CAO (Conception Assistée par Ordinateur)</h3><p>La CAO permet de créer un modèle virtuel 3D de l'objet technique. Elle facilite les modifications et permet de générer automatiquement des plans 2D.</p>"
        },
        {
            "title": "La simulation",
            "content": "<h3>Pourquoi simuler ?</h3><p>La simulation virtuelle permet de tester le comportement du produit (résistance, aérodynamisme) sans avoir à fabriquer un prototype physique coûteux. Cela fait gagner du temps et de l'argent.</p>"
        }
    ],
    "quiz": [
        {
            "question": "Que signifie CAO ?",
            "options": ["Création Animée par Ordinateur", "Conception Assistée par Ordinateur", "Contrôle Automatique d'Ouverture", "Commande Assistée d'Outillage"],
            "correct": 1,
            "explanation": "La CAO englobe les logiciels et techniques pour concevoir et tester virtuellement un produit."
        },
        {
            "question": "Quel est le principal avantage de la simulation virtuelle ?",
            "options": ["Vendre le produit plus cher", "Remplacer les ouvriers", "Tester le produit sans fabriquer de prototype physique", "Imprimer en 3D plus vite"],
            "correct": 2,
            "explanation": "Simuler permet d'anticiper les défauts et valider les solutions très tôt dans le processus de conception."
        },
        {
            "question": "Quel outil permet d'imprimer un modèle 3D conçu par CAO ?",
            "options": ["Une imprimante 2D", "Un scanner 3D", "Une imprimante 3D", "Un vidéoprojecteur"],
            "correct": 2,
            "explanation": "L'imprimante 3D (ou machine de prototypage rapide) fabrique la pièce couche par couche à partir du fichier 3D."
        }
    ]
},
{
    "id": "technologie-supplementaire",
    "title": "Chapitre Supplémentaire : L'informatique et la programmation",
    "summary": "Algorithmique, réseaux informatiques et objets connectés.",
    "fiches": [
        {
            "title": "Les réseaux et objets connectés",
            "content": "<h3>Un réseau informatique</h3><p>Il relie des équipements pour échanger des données (via câble, Wi-Fi, etc.).</p><h3>L'adresse IP</h3><p>C'est l'identifiant unique d'un appareil sur un réseau.</p>"
        }
    ],
    "quiz": [
        {
            "question": "Qu'est-ce qu'une adresse IP ?",
            "options": [
                "Le prix d'un ordinateur",
                "Le mot de passe du Wi-Fi",
                "L'identifiant unique d'un équipement sur un réseau",
                "Un logiciel antivirus"
            ],
            "correct": 2,
            "explanation": "Chaque machine a une adresse IP pour communiquer sur le réseau."
        }
    ]
},
  {
    "id": "technologie-final",
    "title": "🎯 Grand Quiz Final Type Brevet",
    "summary": "Série de 10 questions de révision pour le Brevet.",
    "fiches": [],
    "quiz": [
        {
            "q": "Qu'est-ce qu'un algorithme ?",
            "o": ["Un robot","Une suite logique d'instructions","Un composant électronique","Un langage de programmation"],
            "c": 1,
            "e": "Il permet de résoudre un problème étape par étape."
        },
        {
            "q": "À quoi sert un capteur ?",
            "o": ["À agir sur l'environnement","À stocker de l'énergie","À acquérir une information","À traiter des données"],
            "c": 2,
            "e": "Il transforme une grandeur physique en signal (souvent électrique)."
        },
        {
            "q": "Que signifie l'acronyme CAO ?",
            "o": ["Conception Assistée par Ordinateur","Création Animée par Ordinateur","Commande Automatique d'Ouverture","Contrôle Aéronautique Opérationnel"],
            "c": 0,
            "e": "C'est l'utilisation de logiciels pour modéliser des objets."
        },
        {
            "q": "Lequel de ces éléments est un actionneur ?",
            "o": ["Un bouton poussoir","Une thermistance","Un moteur","Une LED infrarouge (récepteur)"],
            "c": 2,
            "e": "Il convertit une énergie pour réaliser une action physique (ex: mouvement)."
        },
        {
            "q": "Dans une chaîne d'information, quelle fonction réalise la carte programmable ?",
            "o": ["Acquérir","Traiter","Communiquer","Alimenter"],
            "c": 1,
            "e": "Elle traite les informations envoyées par les capteurs."
        },
        {
            "q": "Qu'est-ce que l'obsolescence programmée ?",
            "o": ["Un langage informatique","Une méthode de recyclage","La réduction volontaire de la durée de vie d'un produit","Un test de qualité"],
            "c": 2,
            "e": "C'est une pratique visant à forcer le renouvellement des produits."
        },
        {
            "q": "Qu'est-ce qu'une énergie renouvelable ?",
            "o": ["Une énergie issue du pétrole","Une énergie qui se reconstitue rapidement","L'énergie nucléaire","Une énergie qui coûte cher"],
            "c": 1,
            "e": "Ex: solaire, éolien, hydraulique."
        },
        {
            "q": "Quelle est la première étape du cycle de vie d'un produit ?",
            "o": ["Le recyclage","L'extraction des matières premières","La fabrication","L'utilisation"],
            "c": 1,
            "e": "Il faut d'abord obtenir les matériaux nécessaires."
        },
        {
            "q": "Qu'est-ce qu'un cahier des charges fonctionnel (CdCF) ?",
            "o": ["Un document listant les composants électroniques","Un document définissant les fonctions et contraintes d'un produit","Un manuel d'utilisation","Un logiciel de dessin"],
            "c": 1,
            "e": "Il définit le besoin à satisfaire sans imposer de solution technique."
        },
        {
            "q": "Comment nomme-t-on le croquis réalisé à main levée pour chercher des idées ?",
            "o": ["Un plan","Un schéma","Un croquis / Une esquisse","Une modélisation 3D"],
            "c": 2,
            "e": "C'est la première représentation visuelle de l'idée."
        }
    ]
}
  ]
};
