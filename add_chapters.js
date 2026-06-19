const fs = require('fs');
const path = require('path');

const newChapters = {
    'emc.js': {
        id: "emc-supplementaire",
        title: "Chapitre Supplémentaire : La Défense et l'action internationale de la France",
        summary: "Comprendre le rôle de la France dans le monde et l'organisation de sa Défense nationale.",
        fiches: [
            {
                title: "L'organisation de la Défense",
                content: "<h3>La Défense nationale</h3><p>La Défense est globale : militaire, civile, économique et culturelle. Le Président de la République est le chef des armées.</p><h4>Les missions</h4><ul><li>Protéger le territoire et la population</li><li>Participer à la sécurité internationale (ONU, OTAN)</li><li>Intervenir en cas de catastrophes naturelles</li></ul>"
            }
        ],
        quiz: [
            {
                question: "Qui est le chef des armées en France ?",
                options: ["Le Premier Ministre", "Le Ministre de la Défense", "Le Président de la République", "Le Général en chef"],
                correct: 2,
                explanation: "La Constitution donne ce rôle au Président de la République."
            }
        ]
    },
    'francais.js': {
        id: "francais-supplementaire",
        title: "Chapitre Supplémentaire : La Poésie, du lyrisme à l'engagement",
        summary: "Découvrir comment la poésie exprime les sentiments personnels et s'engage dans les combats du siècle.",
        fiches: [
            {
                title: "Le Lyrisme et l'Engagement",
                content: "<h3>Le lyrisme</h3><p>C'est l'expression des sentiments personnels (amour, fuite du temps, tristesse) avec une musicalité particulière (rimes, rythme).</p><h3>La poésie engagée</h3><p>Les poètes utilisent leur art pour défendre une cause (ex: la Résistance pendant la 2nde Guerre Mondiale avec Paul Éluard ou Louis Aragon).</p>"
            }
        ],
        quiz: [
            {
                question: "Quel terme désigne l'expression des sentiments personnels en poésie ?",
                options: ["Le registre épique", "Le registre comique", "Le registre lyrique", "Le registre fantastique"],
                correct: 2,
                explanation: "Le lyrisme est caractérisé par l'expression des émotions."
            }
        ]
    },
    'geographie.js': {
        id: "geographie-supplementaire",
        title: "Chapitre Supplémentaire : La France dans le monde",
        summary: "L'influence culturelle, géopolitique et économique de la France à l'échelle mondiale.",
        fiches: [
            {
                title: "Le rayonnement de la France",
                content: "<h3>Une puissance géopolitique et culturelle</h3><p>La France est membre permanent du Conseil de Sécurité de l'ONU. Elle possède le 2ème espace maritime mondial (ZEE). La francophonie et la culture (gastronomie, luxe) renforcent son influence.</p>"
            }
        ],
        quiz: [
            {
                question: "Quelle institution internationale accorde un siège permanent à la France ?",
                options: ["L'UNICEF", "Le Conseil de Sécurité de l'ONU", "L'OMS", "Le FMI"],
                correct: 1,
                explanation: "La France y possède un droit de véto."
            }
        ]
    },
    'histoire.js': {
        id: "histoire-supplementaire",
        title: "Chapitre Supplémentaire : Enjeux et conflits depuis 1989",
        summary: "Comprendre le monde contemporain de la chute du mur de Berlin à nos jours.",
        fiches: [
            {
                title: "La fin de la Guerre froide et ses conséquences",
                content: "<h3>Un nouveau monde</h3><p>La chute du mur de Berlin (1989) et l'éclatement de l'URSS (1991) mettent fin au monde bipolaire. Les États-Unis deviennent la seule hyperpuissance avant l'émergence d'un monde multipolaire (Chine, etc.).</p>"
            }
        ],
        quiz: [
            {
                question: "En quelle année le mur de Berlin a-t-il chuté ?",
                options: ["1961", "1989", "1991", "2001"],
                correct: 1,
                explanation: "Il chute en novembre 1989, marquant la fin de la Guerre froide."
            }
        ]
    },
    'maths.js': {
        id: "maths-supplementaire",
        title: "Chapitre Supplémentaire : Probabilités et Statistiques",
        summary: "Calculer des probabilités simples, moyennes, médianes et analyser des séries statistiques.",
        fiches: [
            {
                title: "Les Probabilités",
                content: "<h3>Probabilités simples</h3><p>La probabilité d'un événement est comprise entre 0 et 1. C'est le nombre d'issues favorables divisé par le nombre total d'issues.</p><h3>La Médiane</h3><p>C'est la valeur qui partage une série statistique ordonnée en deux groupes de même effectif.</p>"
            }
        ],
        quiz: [
            {
                question: "Quelle est la probabilité d'obtenir un nombre pair avec un dé classique à 6 faces ?",
                options: ["1/6", "1/2", "1/3", "2/3"],
                correct: 1,
                explanation: "Il y a 3 nombres pairs (2, 4, 6) sur 6 faces, donc 3/6 = 1/2."
            }
        ]
    },
    'physique-chimie.js': {
        id: "physique-chimie-supplementaire",
        title: "Chapitre Supplémentaire : Les signaux (Son et Lumière)",
        summary: "Comprendre la propagation du son et de la lumière, et leurs utilisations pour communiquer.",
        fiches: [
            {
                title: "Le son et la lumière",
                content: "<h3>Le Son</h3><p>C'est une onde mécanique qui a besoin d'un milieu matériel pour se propager. Il ne se propage pas dans le vide. Sa vitesse dans l'air est d'environ 340 m/s.</p><h3>La Lumière</h3><p>Elle se propage dans le vide à 300 000 km/s. Elle permet de voir et de transmettre des informations (fibre optique).</p>"
            }
        ],
        quiz: [
            {
                question: "Dans quel milieu le son NE PEUT PAS se propager ?",
                options: ["Dans l'eau", "Dans l'air", "Dans l'acier", "Dans le vide"],
                correct: 3,
                explanation: "Le son est une onde mécanique, il a besoin de matière."
            }
        ]
    },
    'svt.js': {
        id: "svt-supplementaire",
        title: "Chapitre Supplémentaire : L'évolution du vivant",
        summary: "L'histoire de la Terre, l'apparition de la vie et les mécanismes de l'évolution.",
        fiches: [
            {
                title: "La théorie de l'évolution",
                content: "<h3>La sélection naturelle</h3><p>Les individus d'une espèce présentent des variations génétiques. L'environnement favorise ceux qui sont les mieux adaptés, qui survivent et se reproduisent. C'est le moteur de l'évolution.</p>"
            }
        ],
        quiz: [
            {
                question: "Qui a formulé la théorie de la sélection naturelle ?",
                options: ["Pasteur", "Mendel", "Darwin", "Lamarck"],
                correct: 2,
                explanation: "Charles Darwin a publié 'L'Origine des espèces' en 1859."
            }
        ]
    },
    'technologie.js': {
        id: "technologie-supplementaire",
        title: "Chapitre Supplémentaire : L'informatique et la programmation",
        summary: "Algorithmique, réseaux informatiques et objets connectés.",
        fiches: [
            {
                title: "Les réseaux et objets connectés",
                content: "<h3>Un réseau informatique</h3><p>Il relie des équipements pour échanger des données (via câble, Wi-Fi, etc.).</p><h3>L'adresse IP</h3><p>C'est l'identifiant unique d'un appareil sur un réseau.</p>"
            }
        ],
        quiz: [
            {
                question: "Qu'est-ce qu'une adresse IP ?",
                options: ["Le prix d'un ordinateur", "Le mot de passe du Wi-Fi", "L'identifiant unique d'un équipement sur un réseau", "Un logiciel antivirus"],
                correct: 2,
                explanation: "Chaque machine a une adresse IP pour communiquer sur le réseau."
            }
        ]
    }
};

Object.keys(newChapters).forEach(f => {
    const filePath = path.join('C:/Users/mehdi/Desktop/ioi-med-dnb/js/data', f);
    if (!fs.existsSync(filePath)) {
        console.log(`Skipping ${f}, not found.`);
        return;
    }
    
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // We insert the new chapter right before the final chapter
    const finalId = f.replace('.js', '') + '-final';
    const idIdx = content.indexOf(`"id": "${finalId}"`);
    if (idIdx === -1) {
        console.log(`Cannot find ${finalId} in ${f}`);
        return;
    }
    
    // Find the opening brace of the final chapter
    let insertIdx = idIdx;
    while(insertIdx > 0 && content[insertIdx] !== '{') {
        insertIdx--;
    }
    
    if (insertIdx > 0) {
        const newChapterStr = JSON.stringify(newChapters[f], null, 4) + ',\n  ';
        const newContent = content.substring(0, insertIdx) + newChapterStr + content.substring(insertIdx);
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`Added bonus chapter to ${f}`);
    } else {
        console.log(`Could not find insert point for ${f}`);
    }
});
