const EMC_DATA = {
  id: "emc",
  name: "EMC",
  icon: "⚖️",
  color: "#E67E22",
  chapters: [
    {
      id: "emc-ch1",
      title: "Valeurs et principes de la République",
      summary: "Liberté, égalité, fraternité, laïcité, symboles...",
      fiches: [
        {
          title: "Les valeurs et symboles",
          content: `<h3>Les piliers de la République</h3><ul><li><strong>Valeurs</strong> (Devise) : Liberté, Égalité, Fraternité.</li><li><strong>Principes</strong> : Indivisible, Laïque, Démocratique et Sociale.</li><li><strong>Symboles</strong> : Le drapeau tricolore, l'hymne (La Marseillaise), l'effigie (Marianne), la fête nationale (14 juillet).</li></ul>`
        }
      ],
      quiz: [
        {
          question: "Quelle est la devise de la République française ?",
          options: ["Travail, Famille, Patrie", "Liberté, Égalité, Fraternité", "Paix, Travail, Justice", "Liberté, Laïcité, Solidarité"],
          correct: 1,
          explanation: "La devise officielle est Liberté, Égalité, Fraternité. Elle figure sur les bâtiments publics."
        },
        {
          question: "Que signifie le principe de laïcité ?",
          options: ["L'interdiction de toute religion en France", "La neutralité de l'État et la liberté de conscience", "L'obligation de croire en Dieu", "La séparation de la France en plusieurs régions"],
          correct: 1,
          explanation: "La laïcité garantit la liberté de conscience et impose la neutralité religieuse de l'État (loi de séparation des Églises et de l'État de 1905)."
        },
        {
          question: "Parmi ces éléments, lequel n'est PAS un symbole de la République française ?",
          options: ["La Marseillaise", "Le drapeau tricolore", "Le coq gaulois", "La couronne royale"],
          correct: 3,
          explanation: "La couronne est le symbole de la monarchie, pas de la République. Le coq est parfois utilisé comme emblème mais n'est pas un symbole officiel inscrit dans la Constitution."
        }
      ]
    },
    {
      id: "emc-ch2",
      title: "La citoyenneté",
      summary: "Droits, devoirs, nationalité française et citoyenneté européenne...",
      fiches: [
        {
          title: "Être citoyen",
          content: `<h3>Droits et devoirs</h3><p>La citoyenneté donne des <strong>droits politiques</strong> (droit de vote, d'éligibilité) en échange de <strong>devoirs</strong> (respecter les lois, payer des impôts, être juré, service national/JDC).</p>`
        }
      ],
      quiz: [
        {
          question: "À quel âge obtient-on le droit de vote en France ?",
          options: ["16 ans", "18 ans", "21 ans", "25 ans"],
          correct: 1,
          explanation: "La majorité civile et politique est fixée à 18 ans en France depuis 1974."
        },
        {
          question: "Quel droit est accordé par la citoyenneté européenne (Traité de Maastricht, 1992) ?",
          options: ["Ne pas payer d'impôts", "Le droit de vote aux élections présidentielles d'un autre pays européen", "La libre circulation dans l'Union européenne", "Avoir un passeport gratuit"],
          correct: 2,
          explanation: "La citoyenneté européenne permet la libre circulation, le droit de séjour et le droit de vote aux élections municipales et européennes dans le pays de résidence."
        },
        {
          question: "Comment un étranger majeur peut-il devenir français ?",
          options: ["Par le droit du sang", "Par le droit du sol exclusif", "Par naturalisation", "Il ne peut pas"],
          correct: 2,
          explanation: "Un adulte étranger résidant en France depuis plusieurs années peut demander à acquérir la nationalité française par la procédure de naturalisation."
        }
      ]
    }
  ,
{
    "id": "emc-supplementaire",
    "title": "Chapitre Supplémentaire : La Défense et l'action internationale de la France",
    "summary": "Comprendre le rôle de la France dans le monde et l'organisation de sa Défense nationale.",
    "fiches": [
        {
            "title": "L'organisation de la Défense",
            "content": "<h3>La Défense nationale</h3><p>La Défense est globale : militaire, civile, économique et culturelle. Le Président de la République est le chef des armées.</p><h4>Les missions</h4><ul><li>Protéger le territoire et la population</li><li>Participer à la sécurité internationale (ONU, OTAN)</li><li>Intervenir en cas de catastrophes naturelles</li></ul>"
        }
    ],
    "quiz": [
        {
            "question": "Qui est le chef des armées en France ?",
            "options": [
                "Le Premier Ministre",
                "Le Ministre de la Défense",
                "Le Président de la République",
                "Le Général en chef"
            ],
            "correct": 2,
            "explanation": "La Constitution donne ce rôle au Président de la République."
        }
    ]
},
  {
    "id": "emc-final",
    "title": "🎯 Grand Quiz Final Type Brevet",
    "summary": "Série de 10 questions de révision pour le Brevet.",
    "fiches": [],
    "quiz": [
        {
            "q": "Quelles sont les valeurs de la République française ?",
            "o": ["Liberté, Égalité, Fraternité","Travail, Famille, Patrie","Paix, Justice, Solidarité","Honneur et Patrie"],
            "c": 0,
            "e": "C'est la devise de la République."
        },
        {
            "q": "Quel principe garantit la neutralité de l'État face aux religions ?",
            "o": ["La démocratie","La laïcité","La souveraineté","L'indivisibilité"],
            "c": 1,
            "e": "La laïcité sépare l'État et les organisations religieuses."
        },
        {
            "q": "À quel âge obtient-on le droit de vote en France ?",
            "o": ["16 ans","18 ans","21 ans","Aucun des trois"],
            "c": 1,
            "e": "La majorité civile et politique est fixée à 18 ans."
        },
        {
            "q": "Qui élit le Président de la République en France ?",
            "o": ["Les députés","Les maires","L'ensemble des citoyens par suffrage universel direct","Le Sénat"],
            "c": 2,
            "e": "Le Président est élu au suffrage universel direct depuis 1962."
        },
        {
            "q": "Quel est l'hymne national français ?",
            "o": ["Le Chant des Partisans","La Marseillaise","L'Hymne à la joie","La Brabançonne"],
            "c": 1,
            "e": "Composée par Rouget de Lisle, c'est l'hymne national."
        },
        {
            "q": "Que célèbre le 14 juillet ?",
            "o": ["La fin de la 1ère Guerre Mondiale","La prise de la Bastille","La déclaration des Droits de l'Homme","L'élection du 1er président"],
            "c": 1,
            "e": "C'est la Fête nationale, en référence à la prise de la Bastille en 1789 et à la fête de la Fédération en 1790."
        },
        {
            "q": "Qui adopte les lois en France ?",
            "o": ["Le Président","Le Gouvernement","Le Parlement","Le Conseil Constitutionnel"],
            "c": 2,
            "e": "Le Parlement (Assemblée nationale et Sénat) vote la loi."
        },
        {
            "q": "Qu'est-ce que le SNU ?",
            "o": ["Service National Universel","Syndicat National Uni","Société Nationale d'Utilité","Système Numérique Universel"],
            "c": 0,
            "e": "C'est un projet d'engagement pour les jeunes de 15 à 17 ans."
        },
        {
            "q": "De quelle couleur est le drapeau de la France ?",
            "o": ["Bleu, Blanc, Rouge","Rouge, Blanc, Bleu","Bleu, Rouge, Blanc","Blanc, Bleu, Rouge"],
            "c": 0,
            "e": "C'est l'emblème national de la République."
        },
        {
            "q": "Quel texte de 1789 définit les droits naturels de l'homme ?",
            "o": ["La Constitution","La DDHC","La Convention de Genève","Le Code Civil"],
            "c": 1,
            "e": "La Déclaration des Droits de l'Homme et du Citoyen."
        }
    ]
}
  ]
};
