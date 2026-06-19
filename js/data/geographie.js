const GEOGRAPHIE_DATA = {
  id: "geographie",
  name: "Géographie",
  icon: "🌍",
  color: "#27AE60",
  chapters: [
    // ========================
    // CHAPITRE 1 : Dynamiques territoriales de la France contemporaine
    // ========================
    {
      id: "dynamiques-territoriales",
      title: "Dynamiques territoriales de la France contemporaine",
      summary: "Les espaces productifs français et les espaces de faible densité : caractéristiques, dynamiques et enjeux.",
      fiches: [
        {
          title: "Les espaces productifs et leurs évolutions",
          content: `
<h3>🏭 Les trois types d'espaces productifs</h3>

<h4>1. Les espaces productifs industriels</h4>
<ul>
  <li><strong>Évolution :</strong> Déclin des industries traditionnelles (charbon, sidérurgie dans le Nord et l'Est) et essor des <strong>industries de haute technologie</strong> (aéronautique à Toulouse, numérique en Île-de-France).</li>
  <li><strong>Technopoles :</strong> Zones qui regroupent entreprises innovantes, universités et centres de recherche (ex : Sophia Antipolis près de Nice, Saclay en Île-de-France).</li>
  <li><strong>Mondialisation :</strong> Les industries françaises sont en concurrence mondiale. Certaines usines sont <strong>délocalisées</strong> vers des pays à main-d'œuvre moins coûteuse.</li>
  <li><strong>Métropolisation :</strong> Les activités industrielles de pointe se concentrent dans les <strong>métropoles</strong> et leurs périphéries.</li>
</ul>

<h4>2. Les espaces productifs agricoles</h4>
<ul>
  <li>La France est la <strong>1ʳᵉ puissance agricole de l'UE</strong>.</li>
  <li><strong>Agriculture intensive :</strong> Grandes exploitations céréalières (Beauce, Picardie), élevage intensif (Bretagne).</li>
  <li><strong>Agriculture spécialisée :</strong> Viticulture (Bordeaux, Bourgogne, Champagne), maraîchage (vallée du Rhône).</li>
  <li><strong>Défis actuels :</strong> Agriculture biologique en expansion, souci environnemental, PAC (Politique Agricole Commune) de l'UE.</li>
</ul>

<h4>3. Les espaces productifs de services (tertiaire)</h4>
<ul>
  <li>Le secteur tertiaire représente environ <strong>75 % des emplois</strong> en France.</li>
  <li><strong>Tourisme :</strong> La France est la <strong>1ʳᵉ destination touristique mondiale</strong> (Paris, Côte d'Azur, stations de ski).</li>
  <li>Concentration des services de haut niveau dans les <strong>grandes métropoles</strong> (finance, conseil, numérique).</li>
  <li>Les <strong>zones commerciales</strong> se développent en périphérie des villes (périurbanisation).</li>
</ul>
`
        },
        {
          title: "Les espaces de faible densité et leurs atouts",
          content: `
<h3>🌿 Qu'est-ce qu'un espace de faible densité ?</h3>
<p><strong>Définition :</strong> Un espace de faible densité est un territoire où la <strong>densité de population est inférieure à 30 hab./km²</strong>. Ces espaces représentent environ <strong>60 % du territoire métropolitain</strong> mais seulement <strong>10 à 15 % de la population</strong>.</p>

<h3>📍 Localisation</h3>
<ul>
  <li>La <strong>« diagonale du vide »</strong> (ou « diagonale des faibles densités ») s'étend des Ardennes aux Pyrénées en passant par le Massif central.</li>
  <li>Les zones de montagne : Alpes intérieures, Massif central, Pyrénées.</li>
  <li>Certaines zones rurales éloignées des métropoles.</li>
</ul>

<h3>⚠️ Les contraintes</h3>
<ul>
  <li><strong>Éloignement :</strong> Accès difficile aux services publics (hôpitaux, écoles, transports).</li>
  <li><strong>Déclin démographique :</strong> Exode rural, vieillissement de la population.</li>
  <li><strong>Fermeture de services :</strong> Commerces, bureaux de poste, médecins.</li>
  <li><strong>Désertification médicale :</strong> Manque de médecins dans les zones rurales.</li>
</ul>

<h3>💡 Les atouts et dynamiques positives</h3>
<ul>
  <li><strong>Tourisme vert :</strong> Randonnée, agritourisme, parcs naturels régionaux et nationaux.</li>
  <li><strong>Qualité de vie :</strong> Cadre de vie, calme, prix du foncier attractif.</li>
  <li><strong>Nouvelles technologies :</strong> Le télétravail et le numérique permettent de travailler à distance.</li>
  <li><strong>Énergies renouvelables :</strong> Parcs éoliens, panneaux solaires, biomasse.</li>
  <li><strong>Agriculture de qualité :</strong> AOC, AOP, circuits courts, agriculture biologique.</li>
  <li><strong>Néo-ruraux :</strong> Certaines personnes quittent les villes pour s'installer à la campagne (phénomène accentué depuis le Covid-19).</li>
</ul>
`
        },
        {
          title: "Les aires urbaines et la métropolisation",
          content: `
<h3>🏙️ L'urbanisation en France</h3>
<p>Environ <strong>85 % de la population française</strong> vit dans une <strong>aire d'attraction d'une ville</strong> (anciennement « aire urbaine »).</p>

<h3>📐 Organisation d'une aire urbaine</h3>
<table>
  <tr><th>Zone</th><th>Caractéristiques</th></tr>
  <tr><td><strong>Ville-centre</strong></td><td>Centre historique, commerces, services, emplois, logements denses</td></tr>
  <tr><td><strong>Banlieue</strong></td><td>Zones résidentielles et commerciales autour de la ville-centre</td></tr>
  <tr><td><strong>Couronne périurbaine</strong></td><td>Espaces ruraux gagnés par l'urbanisation, habitants travaillant en ville</td></tr>
</table>

<h3>🔄 L'étalement urbain (périurbanisation)</h3>
<p><strong>Causes :</strong></p>
<ul>
  <li>Prix du foncier plus bas en périphérie</li>
  <li>Recherche d'un cadre de vie plus agréable (maison individuelle, jardin)</li>
  <li>Développement des transports (autoroutes, TGV)</li>
</ul>
<p><strong>Conséquences :</strong></p>
<ul>
  <li>Augmentation des <strong>mobilités pendulaires</strong> (trajets domicile-travail)</li>
  <li><strong>Artificialisation des sols</strong> (terres agricoles remplacées par des constructions)</li>
  <li>Pollution et embouteillages</li>
</ul>

<h3>🏛️ La métropolisation</h3>
<p><strong>Définition :</strong> Concentration des populations, des activités et des pouvoirs de décision dans les <strong>grandes villes (métropoles)</strong>.</p>
<ul>
  <li><strong>Paris</strong> est une <strong>ville mondiale</strong> : elle concentre pouvoir politique, économique, culturel.</li>
  <li>Les <strong>métropoles régionales</strong> (Lyon, Marseille, Lille, Toulouse, Bordeaux, Nantes…) sont des relais importants.</li>
  <li><strong>Déséquilibre Paris / Province :</strong> Paris concentre une part disproportionnée des emplois et des richesses (macrocéphalie).</li>
</ul>
`
        }
      ],
      quiz: [
        {
          question: "Quel secteur représente environ 75 % des emplois en France ?",
          options: ["Le secteur primaire (agriculture)", "Le secteur secondaire (industrie)", "Le secteur tertiaire (services)", "Le secteur quaternaire (numérique)"],
          correct: 2,
          explanation: "Le secteur tertiaire (services : commerce, tourisme, administration, santé, éducation…) emploie environ 75 % des actifs en France."
        },
        {
          question: "Qu'est-ce que la « diagonale du vide » ?",
          options: [
            "Une autoroute traversant la France",
            "Une zone de faibles densités allant des Ardennes aux Pyrénées",
            "La frontière entre la France et l'Espagne",
            "Un axe commercial majeur"
          ],
          correct: 1,
          explanation: "La « diagonale du vide » désigne une bande de territoires à faible densité de population s'étendant du Nord-Est au Sud-Ouest de la France."
        },
        {
          question: "Qu'est-ce qu'une technopole ?",
          options: [
            "Une grande ville industrielle",
            "Un espace regroupant entreprises innovantes, universités et centres de recherche",
            "Un quartier d'affaires",
            "Un port maritime"
          ],
          correct: 1,
          explanation: "Une technopole est un espace qui concentre des activités de haute technologie, des centres de recherche et des universités (ex : Sophia Antipolis)."
        },
        {
          question: "Quel phénomène désigne l'extension des villes vers les espaces ruraux périphériques ?",
          options: ["La métropolisation", "La périurbanisation", "La gentrification", "La désindustrialisation"],
          correct: 1,
          explanation: "La périurbanisation (ou étalement urbain) est le processus d'extension des villes vers les campagnes environnantes."
        },
        {
          question: "Quel pourcentage de la population française vit dans une aire d'attraction d'une ville ?",
          options: ["50 %", "65 %", "75 %", "85 %"],
          correct: 3,
          explanation: "Environ 85 % de la population française vit dans une aire d'attraction d'une ville, ce qui montre le très fort taux d'urbanisation."
        },
        {
          question: "La France est la première puissance agricole de :",
          options: ["L'Europe", "L'Union européenne", "Le monde", "L'OTAN"],
          correct: 1,
          explanation: "La France est la première puissance agricole de l'Union européenne grâce à ses vastes surfaces cultivées et sa production diversifiée."
        }
      ]
    },

    // ========================
    // CHAPITRE 2 : Pourquoi et comment aménager le territoire ?
    // ========================
    {
      id: "amenager-territoire",
      title: "Pourquoi et comment aménager le territoire ?",
      summary: "L'aménagement du territoire français pour réduire les inégalités et les territoires ultra-marins français.",
      fiches: [
        {
          title: "Aménager pour réduire les inégalités territoriales",
          content: `
<h3>🎯 Pourquoi aménager le territoire ?</h3>
<p>L'aménagement du territoire vise à <strong>réduire les inégalités</strong> entre les différents espaces français et à assurer un <strong>développement équilibré</strong> du territoire.</p>

<h3>⚖️ Les inégalités territoriales</h3>
<ul>
  <li><strong>Inégalités entre métropoles et espaces ruraux :</strong> Concentration des emplois, des services et des richesses dans les grandes villes.</li>
  <li><strong>Inégalités entre régions :</strong> L'Île-de-France concentre environ 30 % du PIB national.</li>
  <li><strong>Inégalités d'accès aux services :</strong> Déserts médicaux, fermeture d'écoles en milieu rural.</li>
  <li><strong>Inégalités de connectivité :</strong> Zones blanches (sans réseau internet ou téléphone).</li>
</ul>

<h3>🏗️ Les acteurs de l'aménagement</h3>
<table>
  <tr><th>Acteur</th><th>Rôle</th></tr>
  <tr><td><strong>L'État</strong></td><td>Définit les grandes orientations, finance les infrastructures nationales (autoroutes, LGV)</td></tr>
  <tr><td><strong>Les collectivités territoriales</strong></td><td>Communes, départements, régions : aménagements locaux (transports, écoles, aides sociales)</td></tr>
  <tr><td><strong>L'Union européenne</strong></td><td>Fonds structurels (FEDER, FSE) pour les régions en difficulté</td></tr>
  <tr><td><strong>Les citoyens</strong></td><td>Consultations publiques, débats, associations</td></tr>
  <tr><td><strong>Les entreprises</strong></td><td>Investissements privés, partenariats public-privé</td></tr>
</table>

<h3>🛤️ Exemples d'aménagements</h3>
<ul>
  <li><strong>Transports :</strong> LGV (Lignes à Grande Vitesse) pour désenclaver les territoires, tramways dans les villes.</li>
  <li><strong>Numérique :</strong> Déploiement de la fibre optique et de la 4G/5G dans les zones rurales.</li>
  <li><strong>Santé :</strong> Maisons de santé pluridisciplinaires pour lutter contre les déserts médicaux.</li>
  <li><strong>Éducation :</strong> Ouverture de campus universitaires délocalisés.</li>
  <li><strong>Écoquartiers :</strong> Quartiers conçus dans une logique de <strong>développement durable</strong> (transports en commun, espaces verts, bâtiments économes en énergie).</li>
</ul>
`
        },
        {
          title: "Les territoires ultra-marins français",
          content: `
<h3>🌊 Présentation des territoires ultra-marins</h3>
<p>La France possède de nombreux <strong>territoires ultra-marins</strong> (anciennement DOM-TOM), répartis dans les océans Atlantique, Pacifique et Indien.</p>

<h3>📍 Les principaux territoires</h3>
<table>
  <tr><th>Territoire</th><th>Statut</th><th>Océan</th></tr>
  <tr><td>Guadeloupe</td><td>DROM</td><td>Atlantique (Caraïbes)</td></tr>
  <tr><td>Martinique</td><td>DROM</td><td>Atlantique (Caraïbes)</td></tr>
  <tr><td>Guyane</td><td>DROM</td><td>Atlantique (Amérique du Sud)</td></tr>
  <tr><td>La Réunion</td><td>DROM</td><td>Indien</td></tr>
  <tr><td>Mayotte</td><td>DROM</td><td>Indien</td></tr>
  <tr><td>Nouvelle-Calédonie</td><td>Collectivité <em>sui generis</em></td><td>Pacifique</td></tr>
  <tr><td>Polynésie française</td><td>COM</td><td>Pacifique</td></tr>
</table>
<p><strong>DROM :</strong> Département et Région d'Outre-Mer / <strong>COM :</strong> Collectivité d'Outre-Mer</p>

<h3>💎 Les atouts des territoires ultra-marins</h3>
<ul>
  <li><strong>ZEE (Zone Économique Exclusive) :</strong> La France possède la <strong>2ᵉ plus grande ZEE au monde</strong> (environ 11 millions de km²) grâce à ces territoires.</li>
  <li><strong>Biodiversité exceptionnelle :</strong> Forêt amazonienne (Guyane), récifs coralliens, faune et flore uniques.</li>
  <li><strong>Tourisme :</strong> Plages, climat tropical, patrimoine culturel.</li>
  <li><strong>Ressources :</strong> Nickel (Nouvelle-Calédonie), pêche, base spatiale de Kourou (Guyane).</li>
  <li><strong>Présence stratégique :</strong> Bases militaires, influence géopolitique mondiale.</li>
</ul>

<h3>⚠️ Les défis et difficultés</h3>
<ul>
  <li><strong>Éloignement</strong> de la métropole : coûts de transport élevés, <em>vie chère</em> (« sur-coût de la vie »).</li>
  <li><strong>Chômage</strong> souvent plus élevé qu'en métropole (surtout chez les jeunes).</li>
  <li><strong>Risques naturels :</strong> Cyclones, séismes, éruptions volcaniques, montée des eaux.</li>
  <li><strong>Dépendance économique</strong> vis-à-vis de la métropole et de l'UE.</li>
  <li><strong>Inégalités sociales</strong> parfois très marquées.</li>
</ul>

<h3>🏗️ Les aménagements spécifiques</h3>
<ul>
  <li>Aides de l'État et de l'UE (fonds européens FEDER).</li>
  <li>Développement des infrastructures : routes, ports, aéroports.</li>
  <li>Programmes de formation et d'insertion professionnelle.</li>
  <li>Coopération régionale avec les pays voisins.</li>
</ul>
`
        }
      ],
      quiz: [
        {
          question: "Quel est l'objectif principal de l'aménagement du territoire ?",
          options: [
            "Augmenter la population",
            "Réduire les inégalités entre les territoires",
            "Construire plus de logements",
            "Développer l'industrie militaire"
          ],
          correct: 1,
          explanation: "L'aménagement du territoire vise principalement à réduire les inégalités territoriales et à assurer un développement équilibré."
        },
        {
          question: "Grâce à ses territoires ultra-marins, la France possède la :",
          options: [
            "1ʳᵉ ZEE mondiale",
            "2ᵉ ZEE mondiale",
            "3ᵉ ZEE mondiale",
            "5ᵉ ZEE mondiale"
          ],
          correct: 1,
          explanation: "La France possède la 2ᵉ plus grande Zone Économique Exclusive (ZEE) au monde, environ 11 millions de km², grâce à ses territoires ultra-marins."
        },
        {
          question: "Qu'est-ce qu'un « désert médical » ?",
          options: [
            "Un hôpital abandonné",
            "Un territoire où l'accès aux soins est très difficile",
            "Une zone sans pharmacie",
            "Un désert dans lequel il n'y a pas de médecin"
          ],
          correct: 1,
          explanation: "Un désert médical est un territoire où la densité de médecins est très faible et où les habitants ont des difficultés d'accès aux soins."
        },
        {
          question: "Quel territoire ultra-marin abrite la base spatiale de Kourou ?",
          options: ["La Martinique", "La Réunion", "La Guyane", "La Nouvelle-Calédonie"],
          correct: 2,
          explanation: "La base spatiale de Kourou, utilisée par l'Agence spatiale européenne (ESA) pour les lancements de fusées, se trouve en Guyane."
        },
        {
          question: "Quel fonds européen aide au développement des régions en difficulté ?",
          options: ["Le FMI", "Le FEDER", "L'ONU", "L'OTAN"],
          correct: 1,
          explanation: "Le FEDER (Fonds Européen de Développement Régional) est un fonds de l'UE destiné à réduire les disparités entre les régions européennes."
        }
      ]
    },

    // ========================
    // CHAPITRE 3 : La France et l'Union européenne
    // ========================
    {
      id: "france-ue",
      title: "La France et l'Union européenne",
      summary: "L'Union européenne comme territoire de référence et la place de la France et de l'Europe dans le monde.",
      fiches: [
        {
          title: "L'Union européenne, un nouveau territoire de référence",
          content: `
<h3>🇪🇺 Construction de l'Union européenne</h3>
<table>
  <tr><th>Date</th><th>Événement</th></tr>
  <tr><td><strong>1951</strong></td><td>CECA (Communauté Européenne du Charbon et de l'Acier) — 6 pays fondateurs</td></tr>
  <tr><td><strong>1957</strong></td><td>Traité de Rome — création de la CEE (Communauté Économique Européenne)</td></tr>
  <tr><td><strong>1992</strong></td><td>Traité de Maastricht — naissance de l'Union européenne, citoyenneté européenne</td></tr>
  <tr><td><strong>2002</strong></td><td>Mise en circulation de l'<strong>euro</strong> (monnaie unique)</td></tr>
  <tr><td><strong>2007</strong></td><td>Traité de Lisbonne — réformes institutionnelles</td></tr>
  <tr><td><strong>2020</strong></td><td>Brexit — le Royaume-Uni quitte l'UE</td></tr>
</table>
<p>L'UE compte aujourd'hui <strong>27 États membres</strong>.</p>

<h3>🏛️ Les institutions européennes</h3>
<table>
  <tr><th>Institution</th><th>Rôle</th><th>Siège</th></tr>
  <tr><td><strong>Parlement européen</strong></td><td>Vote les lois, contrôle la Commission</td><td>Strasbourg</td></tr>
  <tr><td><strong>Commission européenne</strong></td><td>Propose les lois, exécute les décisions</td><td>Bruxelles</td></tr>
  <tr><td><strong>Conseil de l'UE</strong></td><td>Représente les gouvernements des États membres</td><td>Bruxelles</td></tr>
  <tr><td><strong>Cour de justice de l'UE</strong></td><td>Veille au respect du droit européen</td><td>Luxembourg</td></tr>
  <tr><td><strong>BCE (Banque Centrale Européenne)</strong></td><td>Gère la politique monétaire de la zone euro</td><td>Francfort</td></tr>
</table>

<h3>🌐 Les grandes libertés européennes</h3>
<p>Le <strong>marché unique</strong> repose sur quatre libertés fondamentales :</p>
<ul>
  <li>Libre circulation des <strong>personnes</strong> (espace Schengen)</li>
  <li>Libre circulation des <strong>marchandises</strong></li>
  <li>Libre circulation des <strong>services</strong></li>
  <li>Libre circulation des <strong>capitaux</strong></li>
</ul>

<h3>⚠️ Les défis de l'UE</h3>
<ul>
  <li><strong>Inégalités entre États membres :</strong> Écart de développement entre l'Ouest et l'Est de l'Europe.</li>
  <li><strong>Montée de l'euroscepticisme :</strong> Critiques sur la perte de souveraineté nationale.</li>
  <li><strong>Gestion des crises :</strong> Crise migratoire, crise sanitaire (Covid-19), guerre en Ukraine.</li>
  <li><strong>Transition écologique :</strong> Pacte vert européen pour la neutralité carbone en 2050.</li>
</ul>
`
        },
        {
          title: "La France et l'Europe dans le monde",
          content: `
<h3>🌍 La place de la France dans le monde</h3>
<p>La France est une <strong>puissance mondiale</strong> grâce à plusieurs atouts :</p>

<h4>💪 Puissance politique et militaire</h4>
<ul>
  <li>Membre permanent du <strong>Conseil de sécurité de l'ONU</strong> (avec droit de veto).</li>
  <li>Puissance nucléaire (force de dissuasion).</li>
  <li>Membre fondateur de l'UE, du G7 et de l'OTAN.</li>
  <li>Présence militaire sur plusieurs continents (bases en Afrique, dans l'océan Indien, dans le Pacifique).</li>
</ul>

<h4>💰 Puissance économique</h4>
<ul>
  <li>7ᵉ puissance économique mondiale (PIB).</li>
  <li>Grandes entreprises multinationales : TotalEnergies, LVMH, Airbus, Renault, L'Oréal…</li>
  <li>1ʳᵉ destination touristique mondiale (environ 90 millions de visiteurs par an).</li>
  <li>Exportations agricoles, aéronautiques, et de luxe.</li>
</ul>

<h4>🎭 Rayonnement culturel (soft power)</h4>
<ul>
  <li>La <strong>francophonie</strong> : environ 300 millions de locuteurs francophones dans le monde.</li>
  <li>Réseau d'Alliances françaises, lycées français à l'étranger.</li>
  <li>Patrimoine culturel : musées (Le Louvre), gastronomie, mode, cinéma.</li>
  <li>Événements sportifs internationaux : JO Paris 2024, Coupe du monde de football.</li>
</ul>

<h3>🇪🇺 La place de l'Europe dans le monde</h3>
<ul>
  <li>L'UE est la <strong>1ʳᵉ puissance commerciale mondiale</strong> (échanges de biens et services).</li>
  <li>Elle représente environ <strong>15 % du PIB mondial</strong>.</li>
  <li>L'UE est le <strong>1ᵉʳ donateur mondial</strong> d'aide au développement.</li>
  <li>Cependant, l'UE n'a pas de <strong>politique étrangère et de défense commune véritablement unifiée</strong>.</li>
</ul>

<h3>🗺️ L'interface méditerranéenne</h3>
<ul>
  <li>La Méditerranée est un espace d'<strong>échanges</strong> majeurs entre l'Europe, l'Afrique et le Moyen-Orient.</li>
  <li>Enjeux : flux migratoires, tourisme, commerce maritime, coopération Nord-Sud.</li>
  <li>Le port de Marseille est un point stratégique des échanges méditerranéens.</li>
</ul>
`
        },
        {
          title: "Les six pays fondateurs et l'élargissement",
          content: `
<h3>🏗️ Les six pays fondateurs (1951-1957)</h3>
<ul>
  <li>🇫🇷 <strong>France</strong></li>
  <li>🇩🇪 <strong>Allemagne</strong> (RFA à l'époque)</li>
  <li>🇮🇹 <strong>Italie</strong></li>
  <li>🇧🇪 <strong>Belgique</strong></li>
  <li>🇳🇱 <strong>Pays-Bas</strong></li>
  <li>🇱🇺 <strong>Luxembourg</strong></li>
</ul>
<p>L'objectif initial était de créer une <strong>paix durable</strong> en Europe après la Seconde Guerre mondiale, en liant les économies des pays (charbon et acier).</p>

<h3>📈 Les élargissements successifs</h3>
<table>
  <tr><th>Année</th><th>Pays intégrés</th></tr>
  <tr><td>1973</td><td>Royaume-Uni, Irlande, Danemark</td></tr>
  <tr><td>1981</td><td>Grèce</td></tr>
  <tr><td>1986</td><td>Espagne, Portugal</td></tr>
  <tr><td>1995</td><td>Autriche, Suède, Finlande</td></tr>
  <tr><td>2004</td><td>10 pays (dont Pologne, pays baltes, Malte, Chypre…)</td></tr>
  <tr><td>2007</td><td>Roumanie, Bulgarie</td></tr>
  <tr><td>2013</td><td>Croatie</td></tr>
</table>
<p>Après le <strong>Brexit</strong> (2020), l'UE est passée de 28 à <strong>27 membres</strong>.</p>

<h3>🔑 Critères d'adhésion (critères de Copenhague)</h3>
<ul>
  <li><strong>Critère politique :</strong> Démocratie, État de droit, respect des droits de l'Homme.</li>
  <li><strong>Critère économique :</strong> Économie de marché viable.</li>
  <li><strong>Critère juridique :</strong> Capacité à reprendre l'acquis communautaire (les lois de l'UE).</li>
</ul>

<h3>🗺️ Pays candidats actuels</h3>
<p>Plusieurs pays sont officiellement candidats à l'adhésion, notamment : la <strong>Turquie</strong>, la <strong>Serbie</strong>, le <strong>Monténégro</strong>, l'<strong>Albanie</strong>, la <strong>Macédoine du Nord</strong>, la <strong>Moldavie</strong> et l'<strong>Ukraine</strong>.</p>
`
        }
      ],
      quiz: [
        {
          question: "En quelle année le traité de Maastricht a-t-il créé l'Union européenne ?",
          options: ["1957", "1986", "1992", "2007"],
          correct: 2,
          explanation: "Le traité de Maastricht, signé en 1992, a créé l'Union européenne et instauré la citoyenneté européenne."
        },
        {
          question: "Combien d'États membres compte l'Union européenne actuellement ?",
          options: ["25", "27", "28", "30"],
          correct: 1,
          explanation: "Depuis le Brexit (2020), l'UE compte 27 États membres."
        },
        {
          question: "Où siège le Parlement européen ?",
          options: ["Bruxelles", "Luxembourg", "Strasbourg", "Francfort"],
          correct: 2,
          explanation: "Le Parlement européen siège à Strasbourg (les sessions plénières), bien que certains travaux se déroulent aussi à Bruxelles."
        },
        {
          question: "La France est membre permanent du :",
          options: [
            "Parlement européen",
            "Conseil de sécurité de l'ONU",
            "G20 uniquement",
            "Conseil de l'Europe uniquement"
          ],
          correct: 1,
          explanation: "La France est l'un des 5 membres permanents du Conseil de sécurité de l'ONU, avec un droit de veto."
        },
        {
          question: "Quels sont les six pays fondateurs de la construction européenne ?",
          options: [
            "France, Allemagne, Italie, Espagne, Portugal, Grèce",
            "France, Allemagne, Italie, Belgique, Pays-Bas, Luxembourg",
            "France, Royaume-Uni, Allemagne, Italie, Belgique, Pays-Bas",
            "France, Allemagne, Autriche, Suisse, Belgique, Luxembourg"
          ],
          correct: 1,
          explanation: "Les six pays fondateurs sont la France, l'Allemagne (RFA), l'Italie, la Belgique, les Pays-Bas et le Luxembourg."
        },
        {
          question: "L'UE est la première puissance mondiale en matière de :",
          options: ["Production industrielle", "Puissance militaire", "Échanges commerciaux", "Population"],
          correct: 2,
          explanation: "L'Union européenne est la 1ʳᵉ puissance commerciale mondiale en termes d'échanges de biens et services."
        }
      ]
    }
  ,
{
    "id": "geographie-supplementaire",
    "title": "Chapitre Supplémentaire : La France dans le monde",
    "summary": "L'influence culturelle, géopolitique et économique de la France à l'échelle mondiale.",
    "fiches": [
        {
            "title": "Le rayonnement de la France",
            "content": "<h3>Une puissance géopolitique et culturelle</h3><p>La France est membre permanent du Conseil de Sécurité de l'ONU. Elle possède le 2ème espace maritime mondial (ZEE). La francophonie et la culture (gastronomie, luxe) renforcent son influence.</p>"
        }
    ],
    "quiz": [
        {
            "question": "Quelle institution internationale accorde un siège permanent à la France ?",
            "options": [
                "L'UNICEF",
                "Le Conseil de Sécurité de l'ONU",
                "L'OMS",
                "Le FMI"
            ],
            "correct": 1,
            "explanation": "La France y possède un droit de véto."
        }
    ]
},
  {
    "id": "geographie-final",
    "title": "🎯 Grand Quiz Final Type Brevet",
    "summary": "Série de 10 questions de révision pour le Brevet.",
    "fiches": [],
    "quiz": [
        {
            "q": "Quelle est la capitale de la France ?",
            "o": ["Lyon","Marseille","Paris","Toulouse"],
            "c": 2,
            "e": "Paris est la capitale et la ville la plus peuplée de France."
        },
        {
            "q": "Qu'est-ce qu'une aire urbaine ?",
            "o": ["Un centre-ville","Un espace constitué d'un pôle urbain et d'une couronne périurbaine","Une zone rurale","Une banlieue"],
            "c": 1,
            "e": "L'aire urbaine englobe le pôle urbain (ville-centre + banlieue) et les communes périurbaines."
        },
        {
            "q": "Quel est le fleuve qui traverse Paris ?",
            "o": ["Le Rhône","La Garonne","La Seine","La Loire"],
            "c": 2,
            "e": "La Seine traverse Paris."
        },
        {
            "q": "Où se situe la mégalopole européenne ?",
            "o": ["De Londres à Milan","De Paris à Berlin","De Madrid à Rome","De Lisbonne à Varsovie"],
            "c": 0,
            "e": "Elle s'étend du sud-est de l'Angleterre (Londres) au nord de l'Italie (Milan)."
        },
        {
            "q": "Quel est le premier espace agricole français ?",
            "o": ["Le Bassin aquitain","Le Bassin parisien","Le couloir rhodanien","La Bretagne"],
            "c": 1,
            "e": "Le Bassin parisien est la plus grande région de grande culture en France."
        },
        {
            "q": "Que signifie la diagonale du vide ?",
            "o": ["Une zone très peuplée","Une zone de forte densité industrielle","Une zone de faible densité de population","Une région montagneuse"],
            "c": 2,
            "e": "Elle traverse la France du nord-est au sud-ouest et se caractérise par de faibles densités de population."
        },
        {
            "q": "Quelle région française est la plus touristique ?",
            "o": ["La Bretagne","L'Île-de-France","La région PACA","La Normandie"],
            "c": 1,
            "e": "Grâce à Paris et Disneyland, c'est la 1ère région touristique."
        },
        {
            "q": "Comment s'appelle l'ensemble géographique réunissant les DROM ?",
            "o": ["La France métropolitaine","La France d'outre-mer","La Francophonie","L'Hexagone"],
            "c": 1,
            "e": "Il s'agit des territoires d'outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte)."
        },
        {
            "q": "Quel pays européen est le principal partenaire économique de la France ?",
            "o": ["L'Italie","L'Espagne","L'Allemagne","Le Royaume-Uni"],
            "c": 2,
            "e": "L'Allemagne est le premier partenaire commercial de la France."
        },
        {
            "q": "Où se trouve le Parlement européen ?",
            "o": ["Paris","Bruxelles","Strasbourg","Genève"],
            "c": 2,
            "e": "Le Parlement européen siège à Strasbourg (et à Bruxelles)."
        }
    ]
}
  ]
};
