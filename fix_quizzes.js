const fs = require('fs');
const path = require('path');

const files = [
    {
        name: 'geographie.js',
        varName: 'GEOGRAPHIE_DATA',
        questions: [
            {q:"Quelle est la capitale de la France ?",o:["Lyon","Marseille","Paris","Toulouse"],c:2,e:"Paris est la capitale et la ville la plus peuplée de France."},
            {q:"Qu'est-ce qu'une aire urbaine ?",o:["Un centre-ville","Un espace constitué d'un pôle urbain et d'une couronne périurbaine","Une zone rurale","Une banlieue"],c:1,e:"L'aire urbaine englobe le pôle urbain (ville-centre + banlieue) et les communes périurbaines."},
            {q:"Quel est le fleuve qui traverse Paris ?",o:["Le Rhône","La Garonne","La Seine","La Loire"],c:2,e:"La Seine traverse Paris."},
            {q:"Où se situe la mégalopole européenne ?",o:["De Londres à Milan","De Paris à Berlin","De Madrid à Rome","De Lisbonne à Varsovie"],c:0,e:"Elle s'étend du sud-est de l'Angleterre (Londres) au nord de l'Italie (Milan)."},
            {q:"Quel est le premier espace agricole français ?",o:["Le Bassin aquitain","Le Bassin parisien","Le couloir rhodanien","La Bretagne"],c:1,e:"Le Bassin parisien est la plus grande région de grande culture en France."},
            {q:"Que signifie la diagonale du vide ?",o:["Une zone très peuplée","Une zone de forte densité industrielle","Une zone de faible densité de population","Une région montagneuse"],c:2,e:"Elle traverse la France du nord-est au sud-ouest et se caractérise par de faibles densités de population."},
            {q:"Quelle région française est la plus touristique ?",o:["La Bretagne","L'Île-de-France","La région PACA","La Normandie"],c:1,e:"Grâce à Paris et Disneyland, c'est la 1ère région touristique."},
            {q:"Comment s'appelle l'ensemble géographique réunissant les DROM ?",o:["La France métropolitaine","La France d'outre-mer","La Francophonie","L'Hexagone"],c:1,e:"Il s'agit des territoires d'outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte)."},
            {q:"Quel pays européen est le principal partenaire économique de la France ?",o:["L'Italie","L'Espagne","L'Allemagne","Le Royaume-Uni"],c:2,e:"L'Allemagne est le premier partenaire commercial de la France."},
            {q:"Où se trouve le Parlement européen ?",o:["Paris","Bruxelles","Strasbourg","Genève"],c:2,e:"Le Parlement européen siège à Strasbourg (et à Bruxelles)."}
        ]
    },
    {
        name: 'emc.js',
        varName: 'EMC_DATA',
        questions: [
            {q:"Quelles sont les valeurs de la République française ?",o:["Liberté, Égalité, Fraternité","Travail, Famille, Patrie","Paix, Justice, Solidarité","Honneur et Patrie"],c:0,e:"C'est la devise de la République."},
            {q:"Quel principe garantit la neutralité de l'État face aux religions ?",o:["La démocratie","La laïcité","La souveraineté","L'indivisibilité"],c:1,e:"La laïcité sépare l'État et les organisations religieuses."},
            {q:"À quel âge obtient-on le droit de vote en France ?",o:["16 ans","18 ans","21 ans","Aucun des trois"],c:1,e:"La majorité civile et politique est fixée à 18 ans."},
            {q:"Qui élit le Président de la République en France ?",o:["Les députés","Les maires","L'ensemble des citoyens par suffrage universel direct","Le Sénat"],c:2,e:"Le Président est élu au suffrage universel direct depuis 1962."},
            {q:"Quel est l'hymne national français ?",o:["Le Chant des Partisans","La Marseillaise","L'Hymne à la joie","La Brabançonne"],c:1,e:"Composée par Rouget de Lisle, c'est l'hymne national."},
            {q:"Que célèbre le 14 juillet ?",o:["La fin de la 1ère Guerre Mondiale","La prise de la Bastille","La déclaration des Droits de l'Homme","L'élection du 1er président"],c:1,e:"C'est la Fête nationale, en référence à la prise de la Bastille en 1789 et à la fête de la Fédération en 1790."},
            {q:"Qui adopte les lois en France ?",o:["Le Président","Le Gouvernement","Le Parlement","Le Conseil Constitutionnel"],c:2,e:"Le Parlement (Assemblée nationale et Sénat) vote la loi."},
            {q:"Qu'est-ce que le SNU ?",o:["Service National Universel","Syndicat National Uni","Société Nationale d'Utilité","Système Numérique Universel"],c:0,e:"C'est un projet d'engagement pour les jeunes de 15 à 17 ans."},
            {q:"De quelle couleur est le drapeau de la France ?",o:["Bleu, Blanc, Rouge","Rouge, Blanc, Bleu","Bleu, Rouge, Blanc","Blanc, Bleu, Rouge"],c:0,e:"C'est l'emblème national de la République."},
            {q:"Quel texte de 1789 définit les droits naturels de l'homme ?",o:["La Constitution","La DDHC","La Convention de Genève","Le Code Civil"],c:1,e:"La Déclaration des Droits de l'Homme et du Citoyen."}
        ]
    },
    {
        name: 'svt.js',
        varName: 'SVT_DATA',
        questions: [
            {q:"Où se trouve l'information génétique dans une cellule animale ?",o:["Dans le cytoplasme","Dans la membrane","Dans le noyau","Dans les mitochondries"],c:2,e:"L'ADN est contenu dans le noyau des cellules."},
            {q:"Combien de chromosomes contient une cellule humaine normale ?",o:["23","46","48","24"],c:1,e:"Elle contient 46 chromosomes (23 paires)."},
            {q:"Comment s'appelle le phénomène par lequel les plaques tectoniques s'écartent ?",o:["La subduction","La collision","La divergence (ou accrétion)","L'érosion"],c:2,e:"Au niveau des dorsales océaniques, les plaques s'écartent."},
            {q:"Quelle cellule reproductrice est produite par l'homme ?",o:["L'ovule","Le spermatozoïde","Le pollen","Le zygote"],c:1,e:"C'est le gamète mâle."},
            {q:"Comment s'appelle le processus par lequel les plantes produisent leur nourriture ?",o:["La respiration","La digestion","La photosynthèse","La fermentation"],c:2,e:"Elles utilisent l'énergie solaire, le CO2 et l'eau pour produire de la matière organique."},
            {q:"Quel est le rôle des globules blancs ?",o:["Transporter l'oxygène","Coaguler le sang","Défendre l'organisme contre les infections","Transporter les nutriments"],c:2,e:"Ils font partie du système immunitaire."},
            {q:"Qu'est-ce qu'un séisme ?",o:["Une éruption volcanique","Un tremblement de terre causé par la rupture de roches","Un tsunami","Une tornade"],c:1,e:"Il libère de l'énergie sous forme d'ondes sismiques."},
            {q:"Qui a formulé la théorie de l'évolution par sélection naturelle ?",o:["Louis Pasteur","Charles Darwin","Gregor Mendel","Marie Curie"],c:1,e:"Darwin a publié cette théorie en 1859 dans L'Origine des espèces."},
            {q:"Quel gaz est absorbé lors de la respiration humaine ?",o:["Le dioxyde de carbone","L'azote","Le dioxygène","L'hydrogène"],c:2,e:"Le corps absorbe l'O2 et rejette le CO2."},
            {q:"Où a lieu la fécondation chez la femme ?",o:["Dans l'utérus","Dans le vagin","Dans les trompes de Fallope","Dans les ovaires"],c:2,e:"C'est là que le spermatozoïde rencontre l'ovule."}
        ]
    },
    {
        name: 'physique-chimie.js',
        varName: 'PHYSIQUE_CHIMIE_DATA',
        questions: [
            {q:"Quelle est la formule chimique de l'eau ?",o:["CO2","O2","H2O","H2SO4"],c:2,e:"Deux atomes d'hydrogène et un atome d'oxygène."},
            {q:"Quel est l'état de l'eau à 110°C à pression atmosphérique normale ?",o:["Solide","Liquide","Gazeux","Plasma"],c:2,e:"L'eau bout à 100°C et devient de la vapeur d'eau (gaz)."},
            {q:"Quelle est l'unité de mesure de la force ?",o:["Le Joule","Le Watt","Le Newton","Le Volt"],c:2,e:"Du nom d'Isaac Newton."},
            {q:"Quel est le symbole du dioxyde de carbone ?",o:["CO","CO2","C2O","HO2"],c:1,e:"Un atome de carbone et deux atomes d'oxygène."},
            {q:"Dans un atome, les électrons sont de charge :",o:["Positive","Négative","Neutre","Variable"],c:1,e:"Les protons sont positifs, les neutrons sont neutres et les électrons négatifs."},
            {q:"Quelle est la vitesse de la lumière dans le vide ?",o:["300 000 km/s","340 m/s","150 000 km/s","3 000 km/s"],c:0,e:"C'est une constante physique fondamentale."},
            {q:"Quel appareil mesure la tension électrique ?",o:["L'ampèremètre","Le voltmètre","L'ohmmètre","Le dynamomètre"],c:1,e:"Il se branche en dérivation et mesure en Volts."},
            {q:"La formule P = m x g relie le poids à la :",o:["Pression","Vitesse","Masse","Puissance"],c:2,e:"Poids = masse × intensité de la pesanteur."},
            {q:"Si le pH d'une solution est de 3, elle est :",o:["Acide","Basique","Neutre","Salée"],c:0,e:"Un pH inférieur à 7 caractérise une solution acide."},
            {q:"L'énergie cinétique d'un objet dépend de sa masse et de :",o:["Sa hauteur","Sa température","Sa vitesse","Son volume"],c:2,e:"Ec = 1/2 × m × v²."}
        ]
    },
    {
        name: 'technologie.js',
        varName: 'TECHNOLOGIE_DATA',
        questions: [
            {q:"Qu'est-ce qu'un algorithme ?",o:["Un robot","Une suite logique d'instructions","Un composant électronique","Un langage de programmation"],c:1,e:"Il permet de résoudre un problème étape par étape."},
            {q:"À quoi sert un capteur ?",o:["À agir sur l'environnement","À stocker de l'énergie","À acquérir une information","À traiter des données"],c:2,e:"Il transforme une grandeur physique en signal (souvent électrique)."},
            {q:"Que signifie l'acronyme CAO ?",o:["Conception Assistée par Ordinateur","Création Animée par Ordinateur","Commande Automatique d'Ouverture","Contrôle Aéronautique Opérationnel"],c:0,e:"C'est l'utilisation de logiciels pour modéliser des objets."},
            {q:"Lequel de ces éléments est un actionneur ?",o:["Un bouton poussoir","Une thermistance","Un moteur","Une LED infrarouge (récepteur)"],c:2,e:"Il convertit une énergie pour réaliser une action physique (ex: mouvement)."},
            {q:"Dans une chaîne d'information, quelle fonction réalise la carte programmable ?",o:["Acquérir","Traiter","Communiquer","Alimenter"],c:1,e:"Elle traite les informations envoyées par les capteurs."},
            {q:"Qu'est-ce que l'obsolescence programmée ?",o:["Un langage informatique","Une méthode de recyclage","La réduction volontaire de la durée de vie d'un produit","Un test de qualité"],c:2,e:"C'est une pratique visant à forcer le renouvellement des produits."},
            {q:"Qu'est-ce qu'une énergie renouvelable ?",o:["Une énergie issue du pétrole","Une énergie qui se reconstitue rapidement","L'énergie nucléaire","Une énergie qui coûte cher"],c:1,e:"Ex: solaire, éolien, hydraulique."},
            {q:"Quelle est la première étape du cycle de vie d'un produit ?",o:["Le recyclage","L'extraction des matières premières","La fabrication","L'utilisation"],c:1,e:"Il faut d'abord obtenir les matériaux nécessaires."},
            {q:"Qu'est-ce qu'un cahier des charges fonctionnel (CdCF) ?",o:["Un document listant les composants électroniques","Un document définissant les fonctions et contraintes d'un produit","Un manuel d'utilisation","Un logiciel de dessin"],c:1,e:"Il définit le besoin à satisfaire sans imposer de solution technique."},
            {q:"Comment nomme-t-on le croquis réalisé à main levée pour chercher des idées ?",o:["Un plan","Un schéma","Un croquis / Une esquisse","Une modélisation 3D"],c:2,e:"C'est la première représentation visuelle de l'idée."}
        ]
    }
];

files.forEach(f => {
    const filePath = path.join('C:/Users/mehdi/Desktop/ioi-med-dnb/js/data', f.name);
    if (!fs.existsSync(filePath)) {
        console.log(`Skipping ${f.name}, not found.`);
        return;
    }
    
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Find where the final quiz starts
    const finalId = f.name.replace('.js', '') + '-final';
    const idIdx = content.indexOf(`"id": "${finalId}"`);
    if (idIdx === -1) {
        console.log(`Cannot find ${finalId} in ${f.name}`);
        return;
    }
    
    const quizKeyword = '"quiz":';
    const quizIdx = content.indexOf(quizKeyword, idIdx);
    if (quizIdx === -1) {
        console.log(`Cannot find quiz array for ${finalId}`);
        return;
    }
    
    // Find start of the array
    const startBracketIdx = content.indexOf('[', quizIdx);
    if (startBracketIdx === -1) {
        console.log(`Cannot find start of quiz array for ${finalId}`);
        return;
    }
    
    // Find matching end bracket
    let bracketCount = 1;
    let endBracketIdx = -1;
    for (let i = startBracketIdx + 1; i < content.length; i++) {
        if (content[i] === '[') bracketCount++;
        else if (content[i] === ']') bracketCount--;
        
        if (bracketCount === 0) {
            endBracketIdx = i;
            break;
        }
    }
    
    if (endBracketIdx !== -1) {
        // Build new quiz string
        const newQuizStr = f.questions.map(q => {
            return `        {
            "q": ${JSON.stringify(q.q)},
            "o": ${JSON.stringify(q.o)},
            "c": ${q.c},
            "e": ${JSON.stringify(q.e)}
        }`;
        }).join(',\n');
        
        const newContent = content.substring(0, startBracketIdx + 1) + '\n' + newQuizStr + '\n    ' + content.substring(endBracketIdx);
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`Updated ${f.name} correctly`);
    } else {
        console.log(`Could not find matching bracket for ${f.name}`);
    }
});
