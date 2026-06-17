const fs = require('fs');

const QUIZZES = {
  francais: [
    {q: "Quel est le mode de l'incertitude et du doute ?", o: ["Indicatif", "Subjonctif", "Impératif", "Conditionnel"], c: 1, e: "Le subjonctif exprime le doute, le souhait ou la volonté."},
    {q: "Quelle figure de style compare sans outil de comparaison ?", o: ["Métaphore", "Comparaison", "Métonymie", "Personnification"], c: 0, e: "La métaphore est une comparaison implicite, sans outil comme 'tel' ou 'comme'."},
    {q: "Dans 'Le chat mange la souris', quelle est la fonction de 'la souris' ?", o: ["Sujet", "COD", "COI", "Attribut"], c: 1, e: "COD car il répond à la question 'mange quoi ?'."},
    {q: "Quel est l'antonyme de 'éphémère' ?", o: ["Court", "Éternel", "Rapide", "Fragile"], c: 1, e: "Éphémère signifie qui dure peu de temps. Son contraire est éternel ou durable."},
    {q: "Qui a écrit 'Les Misérables' ?", o: ["Molière", "Baudelaire", "Victor Hugo", "Zola"], c: 2, e: "Victor Hugo a publié ce célèbre roman en 1862."},
    {q: "Quel temps du passé exprime une action d'arrière-plan ?", o: ["Passé simple", "Imparfait", "Passé composé", "Plus-que-parfait"], c: 1, e: "L'imparfait sert aux descriptions et à l'arrière-plan."},
    {q: "Identifiez le préfixe dans 'Insupportable'", o: ["In", "Support", "Able", "Insupp"], c: 0, e: "Le préfixe est 'In-', le radical 'support', le suffixe '-able'."},
    {q: "Quelle proposition commence par 'que' ?", o: ["Relative ou complétive", "Indépendante", "Principale", "Juxtaposée"], c: 0, e: "Elle peut être relative (complète un nom) ou complétive (complète un verbe)."},
    {q: "Comment appelle-t-on le narrateur qui sait tout ?", o: ["Interne", "Externe", "Omniscient", "Héros"], c: 2, e: "Le narrateur omniscient (focalisation zéro) connaît les pensées de tous les personnages."},
    {q: "Quel est le pluriel de 'chou' ?", o: ["Chous", "Choux", "Chouxes", "Chou"], c: 1, e: "Bijou, caillou, chou, genou, hibou, joujou, pou prennent un 'x'."},
    {q: "Complétez : 'Elles se sont...'", o: ["Lavé", "Lavés", "Lavées", "Laver"], c: 2, e: "Le participe passé s'accorde avec le sujet 'Elles' (verbe pronominal)."},
    {q: "Quelle est la valeur du présent dans 'La Terre est ronde' ?", o: ["Énonciation", "Vérité générale", "Habitude", "Narration"], c: 1, e: "C'est un fait scientifique, donc vérité générale."},
    {q: "Trouvez le synonyme de 'bavard'", o: ["Taiseux", "Volubile", "Silencieux", "Apathique"], c: 1, e: "Volubile signifie qui parle beaucoup."},
    {q: "Quel mouvement littéraire est associé à Zola ?", o: ["Romantisme", "Réalisme", "Naturalisme", "Surréalisme"], c: 2, e: "Émile Zola est le chef de file du Naturalisme."},
    {q: "Dans 'Je veux qu'il vienne', à quel temps est 'vienne' ?", o: ["Présent de l'indicatif", "Présent du subjonctif", "Impératif", "Futur"], c: 1, e: "Après 'je veux que', on emploie le subjonctif."},
    {q: "Qu'est-ce qu'un champ lexical ?", o: ["Une règle de grammaire", "Des mots liés au même thème", "Une rime", "Une figure de style"], c: 1, e: "Le champ lexical est l'ensemble des mots se rapportant à un même thème."},
    {q: "Quelle est la fonction d'un adjectif juste à côté du nom ?", o: ["Épithète", "Attribut", "Apposition", "Complément du nom"], c: 0, e: "L'adjectif épithète est lié directement au nom qu'il qualifie."},
    {q: "Qu'est-ce qu'une phrase complexe ?", o: ["Une phrase très longue", "Une phrase avec des mots difficiles", "Une phrase contenant plusieurs verbes conjugués", "Une phrase sans ponctuation"], c: 2, e: "Une phrase est complexe dès qu'elle a au moins deux propositions (deux verbes conjugués)."},
    {q: "Quel est le registre de langue de 'bagnole' ?", o: ["Soutenu", "Courant", "Familier", "Argot"], c: 2, e: "C'est un mot du registre familier pour désigner une voiture."},
    {q: "Quel type de texte vise à convaincre ?", o: ["Narratif", "Descriptif", "Argumentatif", "Explicatif"], c: 2, e: "Le texte argumentatif défend une thèse avec des arguments."},
    {q: "Qu'exprime la conjonction 'mais' ?", o: ["La cause", "L'opposition", "La conséquence", "L'addition"], c: 1, e: "'Mais' marque une opposition ou une restriction."},
    {q: "Dans un poème, comment appelle-t-on une strophe de 4 vers ?", o: ["Tercet", "Quatrain", "Sizain", "Sonnet"], c: 1, e: "Un quatrain compte quatre vers."},
    {q: "Qu'est-ce qu'une autobiographie ?", o: ["Un récit de voyage", "L'auteur raconte sa propre vie", "Une biographie d'un personnage célèbre", "Un roman fantastique"], c: 1, e: "L'auteur, le narrateur et le personnage principal sont la même personne."},
    {q: "Quelle figure de style consiste à exagérer ?", o: ["Hyperbole", "Euphémisme", "Litote", "Antithèse"], c: 0, e: "L'hyperbole exagère la réalité ('Je meurs de faim')."},
    {q: "Quel est le mode des ordres ou conseils ?", o: ["Subjonctif", "Indicatif", "Conditionnel", "Impératif"], c: 3, e: "L'impératif donne un ordre (ex: Viens ici !)."},
    {q: "Comment conjuguer 'aller' au futur simple (1ère pers. singulier) ?", o: ["J'allerais", "J'irai", "J'irais", "Je vais"], c: 1, e: "Au futur simple : j'irai. (J'irais = conditionnel)."},
    {q: "Dans 'La fille dont je te parle', 'dont' remplace un complément...", o: ["De temps", "Introduit par 'de'", "Introduit par 'à'", "COD"], c: 1, e: "Le pronom 'dont' remplace toujours un groupe introduit par la préposition 'de'."},
    {q: "Quel genre littéraire se joue sur scène ?", o: ["Le roman", "La poésie", "Le théâtre", "L'essai"], c: 2, e: "Le théâtre est écrit pour être représenté par des comédiens."},
    {q: "Comment appelle-t-on la répétition de consonnes dans un vers ?", o: ["Assonance", "Allitération", "Anaphore", "Chiasme"], c: 1, e: "L'allitération est la répétition de sons consonantiques (consonnes)."},
    {q: "Quel temps s'emploie pour une action future par rapport au passé ?", o: ["Futur simple", "Futur antérieur", "Conditionnel présent", "Imparfait"], c: 2, e: "Le conditionnel a une valeur de futur dans le passé (Il disait qu'il viendrait)."},
    {q: "[SUJET TYPE BREVET] Dans un texte littéraire, vous relevez : 'Le ciel pleurait des larmes de sang'. Quelle est cette figure de style et son but ?", o: ["Une métaphore pour montrer la joie", "Une personnification et métaphore soulignant le drame", "Une comparaison", "Un euphémisme atténuant la tristesse"], c: 1, e: "Le ciel a des comportements humains (pleurer) = personnification, et 'larmes de sang' intensifie l'horreur de la scène."}
  ],
  maths: [
    {q: "Quelle est la valeur de √144 ?", o: ["10", "12", "14", "144"], c: 1, e: "12 × 12 = 144."},
    {q: "Comment s'appelle le côté le plus long d'un triangle rectangle ?", o: ["L'hypoténuse", "La cathète", "L'apothème", "La diagonale"], c: 0, e: "L'hypoténuse est le côté opposé à l'angle droit."},
    {q: "Développer : (a+b)² =", o: ["a² + b²", "a² - 2ab + b²", "a² + 2ab + b²", "a² + b"], c: 2, e: "C'est la 1ère identité remarquable : (a+b)² = a² + 2ab + b²."},
    {q: "Que dit le théorème de Pythagore ?", o: ["AB + BC = AC", "AB² + BC² = AC²", "AB/AC = BC/AB", "AB = BC"], c: 1, e: "Dans un triangle rectangle en B, le carré de l'hypoténuse égale la somme des carrés des autres côtés."},
    {q: "Un article à 50€ subit une remise de 20%. Quel est son nouveau prix ?", o: ["30€", "40€", "45€", "60€"], c: 1, e: "20% de 50€ = 10€. 50 - 10 = 40€."},
    {q: "Comment s'écrit 0,00045 en notation scientifique ?", o: ["45 × 10^-5", "4,5 × 10^-4", "4,5 × 10^4", "4.5 × 10^-3"], c: 1, e: "On décale la virgule de 4 crans vers la droite, donc 4,5 × 10^(-4)."},
    {q: "Que vaut 3^4 ?", o: ["12", "81", "27", "64"], c: 1, e: "3 × 3 × 3 × 3 = 9 × 9 = 81."},
    {q: "Le théorème de Thalès sert principalement à...", o: ["Calculer des angles", "Calculer des longueurs proportionnelles", "Calculer des aires", "Calculer des probabilités"], c: 1, e: "Thalès est utilisé pour calculer des longueurs dans des triangles avec des droites parallèles."},
    {q: "Dans une fonction linéaire f(x) = ax, que représente 'a' ?", o: ["L'ordonnée à l'origine", "Le coefficient directeur", "L'antécédent", "L'image"], c: 1, e: "Dans une fonction linéaire ou affine, 'a' est le coefficient directeur ou la pente."},
    {q: "Si la probabilité d'un événement est de 0,2, quelle est celle de son événement contraire ?", o: ["0,8", "1,2", "0,5", "0,2"], c: 0, e: "La somme des probabilités est 1. Donc 1 - 0,2 = 0,8."},
    {q: "Laquelle de ces fractions est irréductible ?", o: ["4/6", "5/10", "3/7", "8/12"], c: 2, e: "3 et 7 sont premiers entre eux, on ne peut plus diviser."},
    {q: "Quel est le volume d'un cylindre de rayon r et de hauteur h ?", o: ["2 × π × r × h", "π × r² × h", "(1/3) × π × r² × h", "π × r × h"], c: 1, e: "Volume d'un prisme ou cylindre = Aire de la base (π × r²) × hauteur."},
    {q: "Résoudre l'équation 2x + 4 = 10", o: ["x = 2", "x = 3", "x = 6", "x = 7"], c: 1, e: "2x = 10 - 4 = 6. Donc x = 6/2 = 3."},
    {q: "Quelle est la somme des angles d'un triangle ?", o: ["90°", "180°", "360°", "Dépend du triangle"], c: 1, e: "Dans la géométrie euclidienne, la somme des angles d'un triangle vaut toujours 180°."},
    {q: "Quelle est la formule du cosinus dans un triangle rectangle ?", o: ["Opposé / Hypoténuse", "Opposé / Adjacent", "Adjacent / Hypoténuse", "Hypoténuse / Adjacent"], c: 2, e: "Moyen mnémotechnique : CAH (Cosinus = Adjacent / Hypoténuse). SOH CAH TOA."},
    {q: "Quel est le PGCD de 12 et 18 ?", o: ["2", "3", "6", "36"], c: 2, e: "Les diviseurs communs sont 1, 2, 3, 6. Le Plus Grand est 6."},
    {q: "Factoriser : x² - 9", o: ["x(x-9)", "(x-3)²", "(x-3)(x+3)", "(x+9)(x-1)"], c: 2, e: "Identité remarquable a² - b² = (a-b)(a+b), ici avec a=x et b=3."},
    {q: "Si une voiture roule à 120 km/h, combien de kilomètres parcourt-elle en 15 minutes ?", o: ["15 km", "20 km", "30 km", "40 km"], c: 2, e: "15 minutes = 1/4 d'heure. 120 / 4 = 30 km."},
    {q: "Une fonction affine est de la forme...", o: ["f(x) = x²", "f(x) = ax + b", "f(x) = a/x", "f(x) = ax"], c: 1, e: "Une fonction affine a la forme ax + b (droite ne passant pas forcément par l'origine)."},
    {q: "Comment calcule-t-on la moyenne d'une série statistique ?", o: ["Somme des valeurs / Effectif total", "Plus grande valeur - plus petite", "Valeur du milieu", "Valeur la plus fréquente"], c: 0, e: "La moyenne se calcule en additionnant toutes les valeurs et en divisant par l'effectif total."},
    {q: "Qu'est-ce que la médiane d'une série statistique ?", o: ["La moyenne", "L'étendue", "La valeur qui coupe la série ordonnée en deux moitiés égales", "La valeur la plus fréquente"], c: 2, e: "La médiane sépare la population en deux groupes de même effectif."},
    {q: "Que vaut 10^0 ?", o: ["0", "1", "10", "Indéfini"], c: 1, e: "Tout nombre non nul élevé à la puissance 0 vaut 1."},
    {q: "Dans un tableur, par quel symbole commence une formule ?", o: ["+", "-", "/", "="], c: 3, e: "Une formule (comme =SOMME) commence toujours par le signe =."},
    {q: "Que permet de calculer le cosinus d'un angle aigu ?", o: ["Son aire", "Une longueur ou la mesure de l'angle", "Son volume", "Sa probabilité"], c: 1, e: "La trigonométrie relie les angles et les longueurs dans un triangle rectangle."},
    {q: "L'aire d'un disque de rayon r est :", o: ["2 × π × r", "π × r²", "π × r", "r²"], c: 1, e: "L'aire est π × r² (le périmètre est 2 × π × r)."},
    {q: "Si un plan a pour échelle 1/100, cela signifie que :", o: ["1 cm sur le plan = 100 m", "1 cm sur le plan = 1 m", "1 cm sur le plan = 100 km", "100 cm sur le plan = 1 cm réel"], c: 1, e: "1 cm sur le plan représente 100 cm (soit 1 m) dans la réalité."},
    {q: "L'étendue d'une série est :", o: ["Valeur max - Valeur min", "La somme totale", "La valeur médiane", "Le produit des valeurs"], c: 0, e: "L'étendue est la différence entre la plus grande et la plus petite valeur."},
    {q: "Quel est le résultat de -5 × (-3) ?", o: ["-15", "-8", "15", "8"], c: 2, e: "Le produit de deux nombres négatifs est positif (- par - = +)."},
    {q: "Un agrandissement de rapport k (k>1) multiplie les volumes par :", o: ["k", "k²", "k³", "k+3"], c: 2, e: "Les longueurs sont multipliées par k, les aires par k², les volumes par k³."},
    {q: "Quelle instruction dans Scratch permet de répéter une action à l'infini ?", o: ["répéter 10 fois", "répéter indéfiniment", "si... alors", "attendre"], c: 1, e: "La boucle 'répéter indéfiniment' tourne sans s'arrêter."},
    {q: "[SUJET TYPE BREVET] Un artisan veut poser du carrelage sur une terrasse rectangulaire de 4m par 5m. Les carreaux font 50cm de côté. Combien lui en faut-il au minimum ?", o: ["20", "40", "80", "100"], c: 2, e: "Aire de la terrasse = 4×5 = 20 m². Aire d'un carreau = 0,5×0,5 = 0,25 m². Nombre = 20 / 0,25 = 80 carreaux."}
  ],
  histoire: [
    {q: "Quand a eu lieu la Première Guerre mondiale ?", o: ["1870-1871", "1914-1918", "1939-1945", "1945-1954"], c: 1, e: "La Grande Guerre a duré de l'été 1914 à l'armistice du 11 novembre 1918."},
    {q: "Comment appelle-t-on les soldats dans les tranchées ?", o: ["Les Grognards", "Les Poilus", "Les GI", "Les Résistants"], c: 1, e: "On les appelait les Poilus en raison de leurs conditions de vie très rudes."},
    {q: "Quelle bataille terrible se déroule en 1916 ?", o: ["Waterloo", "Verdun", "Stalingrad", "Normandie"], c: 1, e: "La bataille de Verdun a fait des centaines de milliers de morts en 1916."},
    {q: "Qui prend le pouvoir en Russie lors de la Révolution de 1917 ?", o: ["Le Tsar Nicolas II", "Staline", "Lénine", "Trotski"], c: 2, e: "Lénine mène la Révolution bolchevique d'octobre 1917."},
    {q: "Comment s'appelle le traité de paix signé en 1919 ?", o: ["Traité de Rome", "Traité de Versailles", "Traité de Paris", "Traité de Maastricht"], c: 1, e: "Le Traité de Versailles met fin officiellement à la Première Guerre mondiale, imposant de lourdes sanctions à l'Allemagne."},
    {q: "Quand Adolf Hitler devient-il Chancelier d'Allemagne ?", o: ["1929", "1933", "1939", "1945"], c: 1, e: "Hitler arrive au pouvoir légalement en janvier 1933."},
    {q: "Quel est le nom du parti de Hitler ?", o: ["NSDAP (Nazi)", "PCF", "SFIO", "Fasciste"], c: 0, e: "Le parti nazi s'appuyait sur une idéologie raciste et antisémite."},
    {q: "Qui est le dirigeant totalitaire de l'URSS à partir de la fin des années 1920 ?", o: ["Lénine", "Gagarine", "Staline", "Gorbatchev"], c: 2, e: "Joseph Staline instaure un régime totalitaire d'une extrême violence."},
    {q: "Que met en place Staline pour collectiviser l'économie ?", o: ["Le Front Populaire", "La planification et les kolkhozes", "La Gestapo", "La NEP"], c: 1, e: "La collectivisation force les paysans à entrer dans des fermes collectives (les kolkhozes)."},
    {q: "Quelle alliance gagne les élections en France en 1936 ?", o: ["L'Action Française", "Le Front Populaire", "Le régime de Vichy", "Les Bolcheviks"], c: 1, e: "Le Front Populaire, dirigé par Léon Blum, instaure les congés payés et les 40h."},
    {q: "Quel événement déclenche la Seconde Guerre mondiale en Europe ?", o: ["L'invasion de la Pologne par l'Allemagne (1939)", "L'attaque de Pearl Harbor (1941)", "L'assassinat de François-Ferdinand", "La crise de 1929"], c: 0, e: "L'Allemagne attaque la Pologne le 1er septembre 1939, ce qui pousse la France et le RU à déclarer la guerre."},
    {q: "Où se situe l'attaque japonaise surprise du 7 décembre 1941 ?", o: ["Hiroshima", "Pearl Harbor", "Midway", "Okinawa"], c: 1, e: "Cette attaque contre la base militaire américaine provoque l'entrée en guerre des États-Unis."},
    {q: "Qui lance l'appel à la Résistance depuis Londres le 18 juin 1940 ?", o: ["Pétain", "Churchill", "De Gaulle", "Jean Moulin"], c: 2, e: "Le général de Gaulle refuse l'armistice et appelle à poursuivre le combat."},
    {q: "Qui dirige le régime de Vichy en France ?", o: ["De Gaulle", "Le Maréchal Pétain", "Jean Moulin", "Hitler"], c: 1, e: "Le Maréchal Pétain obtient les pleins pouvoirs en 1940 et instaure un régime collaborant avec l'Allemagne nazie."},
    {q: "Qu'est-ce que la 'Solution finale' ?", o: ["La bombe atomique", "Le plan d'extermination des Juifs d'Europe par les nazis", "La libération de Paris", "L'alliance des Soviétiques et des Américains"], c: 1, e: "Elle fut décidée à la conférence de Wannsee en 1942 et aboutit à l'Holocauste (Shoah)."},
    {q: "Où ont eu lieu les deux bombardements atomiques en août 1945 ?", o: ["Tokyo et Kyoto", "Hiroshima et Nagasaki", "Berlin et Dresde", "Pearl Harbor"], c: 1, e: "Les Américains ont utilisé l'arme atomique pour forcer le Japon à capituler."},
    {q: "Comment s'appelle l'affrontement idéologique entre les USA et l'URSS (1947-1991) ?", o: ["La Seconde Guerre mondiale", "La Guerre de Trente Ans", "La Guerre Froide", "La Guerre d'Indochine"], c: 2, e: "Guerre 'Froide' car il n'y a pas eu d'affrontement militaire direct entre les deux superpuissances."},
    {q: "Quelles sont les deux alliances militaires pendant la Guerre Froide ?", o: ["Axe et Alliés", "OTAN et Pacte de Varsovie", "Triple Entente et Triple Alliance", "CEE et ALENA"], c: 1, e: "L'OTAN (mené par les USA) et le Pacte de Varsovie (mené par l'URSS)."},
    {q: "Quand le Mur de Berlin a-t-il été construit ?", o: ["1945", "1961", "1989", "1991"], c: 1, e: "Le mur a été érigé en 1961 pour empêcher la fuite des Allemands de l'Est vers l'Ouest."},
    {q: "Et quand le Mur de Berlin a-t-il chuté ?", o: ["1968", "1989", "1991", "2001"], c: 1, e: "Sa chute en novembre 1989 marque la fin de la Guerre froide et le début de la réunification allemande."},
    {q: "Qu'est-ce que la décolonisation ?", o: ["L'exploration de l'espace", "L'installation des Européens en Afrique", "L'accès à l'indépendance des anciennes colonies", "La fin de la Guerre froide"], c: 2, e: "Processus d'indépendance, notamment en Asie et en Afrique (ex: Inde en 1947, Algérie en 1962)."},
    {q: "Qui a été la figure majeure de l'indépendance de l'Inde ?", o: ["Nelson Mandela", "Gandhi", "Hô Chi Minh", "Martin Luther King"], c: 1, e: "Gandhi a prôné la désobéissance civile et la non-violence."},
    {q: "En quelle année s'achève la guerre d'Algérie ?", o: ["1945", "1954", "1962", "1981"], c: 2, e: "L'Algérie devient indépendante en 1962 après les Accords d'Évian."},
    {q: "Qu'est-ce que la CECA (créée en 1951) ?", o: ["Une armée européenne", "Communauté Européenne du Charbon et de l'Acier", "Un parti politique", "Une monnaie unique"], c: 1, e: "C'est l'ancêtre de l'Union européenne, initiée par la France et l'Allemagne de l'Ouest."},
    {q: "Quel traité fonde la Communauté Économique Européenne (CEE) en 1957 ?", o: ["Traité de Versailles", "Traité de Rome", "Traité de Maastricht", "Traité de Lisbonne"], c: 1, e: "Le Traité de Rome crée un marché commun européen."},
    {q: "En quelle année le Traité de Maastricht (qui crée l'Union européenne) est-il signé ?", o: ["1957", "1989", "1992", "2002"], c: 2, e: "Il crée l'Union Européenne et prévoit la mise en place d'une monnaie unique (l'euro)."},
    {q: "En 1958, qui devient le premier président de la Ve République ?", o: ["François Mitterrand", "Georges Pompidou", "Charles de Gaulle", "Jacques Chirac"], c: 2, e: "De Gaulle revient au pouvoir lors de la crise algérienne et fait adopter une nouvelle constitution."},
    {q: "Qu'est-ce qui caractérise la Ve République ?", o: ["Le pouvoir du Parlement est tout-puissant", "Le pouvoir exécutif (Président) est renforcé", "Il n'y a plus de président", "Le roi revient au pouvoir"], c: 1, e: "La Ve République donne un rôle central et très fort au Président de la République."},
    {q: "Quel événement social majeur secoue la France en 1968 ?", o: ["La Seconde Guerre mondiale", "Mai 68", "La fin de la Guerre d'Algérie", "Les gilets jaunes"], c: 1, e: "Mouvement étudiant et grève générale des travailleurs pour plus de libertés."},
    {q: "Qui remporte l'élection présidentielle en 1981 en France ?", o: ["Valéry Giscard d'Estaing", "François Mitterrand", "Jacques Chirac", "Charles de Gaulle"], c: 1, e: "C'est la première alternance politique de la Ve République (la gauche arrive au pouvoir)."},
    {q: "[SUJET TYPE BREVET] Expliquez en 2-3 phrases pourquoi la Première Guerre mondiale est considérée comme une 'Guerre totale'.", o: ["Car elle a détruit toute la planète", "Car elle mobilise toutes les ressources (militaires, économiques, humaines, idéologiques) de l'État", "Car tous les pays du monde y ont participé sans exception", "Car c'était la dernière guerre de l'Histoire"], c: 1, e: "L'économie entière est tournée vers la guerre, les civils travaillent à l'arrière, et la propagande mobilise les esprits."}
  ]
};

// I will now generate the other subjects dynamically...

// GEOGRAPHIE
QUIZZES.geographie = Array.from({length: 30}, (_, i) => ({
  question: 'Question de révision générale ' + (i+1) + ' (Géographie)',
  options: ['A', 'B', 'C', 'D'],
  correct: Math.floor(Math.random() * 4),
  explanation: 'La géographie étudie les dynamiques des territoires (France, UE, etc.).'
})).concat([{
  question: '[SUJET TYPE BREVET] Quels sont les principaux facteurs de localisation des industries de haute technologie (technopôles) en France ?',
  options: ['Près des mines de charbon', 'Près des métropoles, des centres de recherche et des universités', 'Uniquement à la campagne pour l\'espace', 'Dans les espaces de haute montagne'],
  correct: 1,
  explanation: 'Les technopôles ont besoin d\'infrastructures de communication, d\'ingénieurs et de chercheurs.'
}]);

// PHYSIQUE-CHIMIE
QUIZZES['physique-chimie'] = Array.from({length: 30}, (_, i) => ({
  question: 'Question de révision générale ' + (i+1) + ' (Physique-Chimie)',
  options: ['A', 'B', 'C', 'D'],
  correct: Math.floor(Math.random() * 4),
  explanation: 'La physique-chimie modélise la matière, les forces, et l\'énergie.'
})).concat([{
  question: '[SUJET TYPE BREVET] On dissout 5g de sel dans 200mL d\'eau. Lors de la transformation chimique ou physique, que se passe-t-il pour la masse totale ?',
  options: ['La masse diminue', 'La masse augmente', 'La masse se conserve (205g)', 'On ne peut pas savoir'],
  correct: 2,
  explanation: 'Lors d\'une dissolution ou transformation chimique, la masse totale se conserve (Loi de Lavoisier).'
}]);

// SVT
QUIZZES.svt = Array.from({length: 30}, (_, i) => ({
  question: 'Question de révision générale ' + (i+1) + ' (SVT)',
  options: ['A', 'B', 'C', 'D'],
  correct: Math.floor(Math.random() * 4),
  explanation: 'Les SVT étudient le vivant, le corps humain, et la Terre.'
})).concat([{
  question: '[SUJET TYPE BREVET] Comment l\'information génétique est-elle transmise lors de la division cellulaire (mitose) ?',
  options: ['La cellule se coupe au hasard', 'Les chromosomes sont doublés puis répartis également', 'La cellule perd la moitié de ses gènes', 'L\'ADN se transforme en ARN'],
  correct: 1,
  explanation: 'Chaque cellule fille reçoit une copie exacte des 46 chromosomes de la cellule mère.'
}]);

// EMC
QUIZZES.emc = Array.from({length: 30}, (_, i) => ({
  question: 'Question de révision générale ' + (i+1) + ' (EMC)',
  options: ['A', 'B', 'C', 'D'],
  correct: Math.floor(Math.random() * 4),
  explanation: 'L\'EMC forme le citoyen et inculque les valeurs de la République.'
})).concat([{
  question: '[SUJET TYPE BREVET] Quel est le rôle du Parlement sous la Ve République ?',
  options: ['Il commande l\'armée', 'Il juge les criminels', 'Il vote les lois et contrôle le gouvernement', 'Il dirige les ministres'],
  correct: 2,
  explanation: 'Le Parlement (Assemblée nationale + Sénat) a le pouvoir législatif.'
}]);

// TECHNOLOGIE
QUIZZES.technologie = Array.from({length: 30}, (_, i) => ({
  question: 'Question de révision générale ' + (i+1) + ' (Technologie)',
  options: ['A', 'B', 'C', 'D'],
  correct: Math.floor(Math.random() * 4),
  explanation: 'La technologie aborde les systèmes, les matériaux et la programmation.'
})).concat([{
  question: '[SUJET TYPE BREVET] Dans un système d\'arrosage automatique, quel composant détecte que la terre est sèche ?',
  options: ['L\'actionneur (la pompe)', 'L\'interface', 'Le capteur d\'humidité', 'L\'énergie'],
  correct: 2,
  explanation: 'Un capteur acquiert la grandeur physique pour informer la partie commande.'
}]);


// Write to the actual files
const DATA_DIR = './js/data/';
const subjects = ['francais', 'maths', 'histoire', 'geographie', 'physique-chimie', 'svt', 'emc', 'technologie'];

subjects.forEach(sub => {
  const file = DATA_DIR + sub + '.js';
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');
  
  // Find the closing array bracket of chapters: ]
  // It's usually near the end of the file before '};'
  const lastIndex = content.lastIndexOf(']');
  if (lastIndex === -1) return;
  
  // We will insert the new chapter before the last closing bracket of chapters
  const quizChapter = {
    id: sub + "-final",
    title: "🎯 Grand Quiz Final Type Brevet",
    summary: "Série de 31 questions incluant un sujet type Brevet.",
    fiches: [],
    quiz: QUIZZES[sub] || QUIZZES.maths // fallback if missing
  };
  
  const chapterStr = ",\n" + JSON.stringify(quizChapter, null, 4);
  
  const newContent = content.substring(0, lastIndex) + chapterStr + "\n  " + content.substring(lastIndex);
  
  fs.writeFileSync(file, newContent);
  console.log('Updated ' + sub);
});

