const HISTOIRE_DATA = {
  id: "histoire",
  name: "Histoire",
  icon: "🏛️",
  color: "#8E44AD",
  chapters: [
    // ──────────────────────────────────────────────
    // CHAPITRE 1 – La Première Guerre mondiale
    // ──────────────────────────────────────────────
    {
      id: "premiere-guerre-mondiale",
      title: "Civils et militaires dans la Première Guerre mondiale (1914-1918)",
      summary: "Les causes, le déroulement, l'expérience combattante et les conséquences de la Grande Guerre.",
      fiches: [
        {
          title: "Les grandes phases de la guerre",
          content: `
<h3>⚔️ Les grandes phases de la Première Guerre mondiale</h3>

<h4>Les causes du conflit</h4>
<ul>
  <li><strong>Rivalités entre puissances européennes</strong> : tensions coloniales, nationalisme, course aux armements.</li>
  <li><strong>Système d'alliances</strong> :
    <ul>
      <li><strong>Triple Entente</strong> : France, Royaume-Uni, Russie</li>
      <li><strong>Triple Alliance (Empires centraux)</strong> : Allemagne, Autriche-Hongrie, Empire ottoman</li>
    </ul>
  </li>
  <li><strong>Élément déclencheur</strong> : assassinat de l'archiduc François-Ferdinand d'Autriche à Sarajevo, le <strong>28 juin 1914</strong>.</li>
</ul>

<h4>Les trois phases</h4>
<table>
  <tr><th>Phase</th><th>Période</th><th>Caractéristiques</th></tr>
  <tr><td><strong>Guerre de mouvement</strong></td><td>Août – nov. 1914</td><td>Offensives rapides, bataille de la Marne (sept. 1914), échec du plan Schlieffen allemand</td></tr>
  <tr><td><strong>Guerre de position (tranchées)</strong></td><td>Fin 1914 – début 1918</td><td>Front stabilisé, tranchées, batailles meurtrières : <strong>Verdun</strong> (fév.-déc. 1916), <strong>la Somme</strong> (juil.-nov. 1916)</td></tr>
  <tr><td><strong>Retour à la guerre de mouvement</strong></td><td>1918</td><td>Entrée en guerre des <strong>États-Unis</strong> (avril 1917), offensives allemandes puis contre-offensives alliées</td></tr>
</table>

<h4>Dates clés</h4>
<ul>
  <li><strong>28 juin 1914</strong> : assassinat de François-Ferdinand à Sarajevo</li>
  <li><strong>3 août 1914</strong> : l'Allemagne déclare la guerre à la France</li>
  <li><strong>Septembre 1914</strong> : bataille de la Marne</li>
  <li><strong>Février-décembre 1916</strong> : bataille de Verdun</li>
  <li><strong>Avril 1917</strong> : entrée en guerre des États-Unis</li>
  <li><strong>11 novembre 1918</strong> : <strong>Armistice</strong></li>
  <li><strong>28 juin 1919</strong> : <strong>Traité de Versailles</strong></li>
</ul>`
        },
        {
          title: "L'expérience combattante et la guerre totale",
          content: `
<h3>🪖 L'expérience combattante</h3>

<h4>La vie dans les tranchées</h4>
<ul>
  <li><strong>Conditions effroyables</strong> : boue, rats, poux, froid, maladies, manque d'hygiène.</li>
  <li><strong>Violence de masse</strong> : obus, gaz (ypérite), mitrailleuses, lance-flammes → des millions de morts.</li>
  <li><strong>Traumatismes</strong> : les « gueules cassées », les névroses de guerre (shell shock).</li>
  <li><strong>Fraternisations</strong> (Noël 1914) et <strong>mutineries</strong> (1917, après l'échec du Chemin des Dames).</li>
</ul>

<h4>La guerre totale</h4>
<p>La Première Guerre mondiale est une <strong>guerre totale</strong> : elle mobilise toutes les ressources des sociétés.</p>
<table>
  <tr><th>Dimension</th><th>Manifestation</th></tr>
  <tr><td><strong>Militaire</strong></td><td>Mobilisation massive (8 millions de Français), nouvelles armes (chars, avions, gaz)</td></tr>
  <tr><td><strong>Économique</strong></td><td>Reconversion des usines (armement), emprunts nationaux, rationnement</td></tr>
  <tr><td><strong>Sociale</strong></td><td>Les femmes remplacent les hommes à l'usine et aux champs (les « munitionnettes »)</td></tr>
  <tr><td><strong>Morale / Culturelle</strong></td><td>Propagande, censure (le « bourrage de crâne »), culte du héros</td></tr>
</table>

<h4>Le génocide des Arméniens (1915-1916)</h4>
<p>L'Empire ottoman organise l'extermination systématique des <strong>Arméniens</strong> : déportations, massacres, marches de la mort. Environ <strong>1,5 million de victimes</strong>. C'est le <strong>premier génocide du XXe siècle</strong>.</p>

<h4>Le bilan de la guerre</h4>
<ul>
  <li><strong>10 millions de morts</strong>, 20 millions de blessés, 6 millions d'invalides.</li>
  <li>Destructions matérielles considérables (nord-est de la France ravagé).</li>
  <li><strong>Traité de Versailles (28 juin 1919)</strong> : l'Allemagne jugée responsable, perd des territoires (Alsace-Lorraine rendue à la France), doit payer de lourdes <strong>réparations</strong>.</li>
  <li>Création de la <strong>Société des Nations (SDN)</strong> en 1920.</li>
  <li>Disparition des empires : ottoman, austro-hongrois, russe, allemand.</li>
</ul>`
        }
      ],
      quiz: [
        {
          question: "Quel événement déclenche la Première Guerre mondiale ?",
          options: [
            "L'invasion de la Belgique par l'Allemagne",
            "L'assassinat de l'archiduc François-Ferdinand à Sarajevo le 28 juin 1914",
            "La bataille de Verdun",
            "Le naufrage du Lusitania"
          ],
          correct: 1,
          explanation: "L'assassinat de l'archiduc François-Ferdinand d'Autriche à Sarajevo le 28 juin 1914 est l'élément déclencheur du conflit."
        },
        {
          question: "Quelle bataille symbolise la violence de la guerre de position en 1916 ?",
          options: ["La bataille de la Marne", "La bataille de Verdun", "La bataille de Stalingrad", "La bataille d'Angleterre"],
          correct: 1,
          explanation: "La bataille de Verdun (février-décembre 1916) est le symbole de la guerre de tranchées : plus de 300 000 morts des deux côtés."
        },
        {
          question: "Qu'est-ce que la « guerre totale » ?",
          options: [
            "Une guerre qui se déroule sur tous les continents",
            "Une guerre qui mobilise toutes les ressources d'une société (militaires, économiques, sociales, morales)",
            "Une guerre uniquement entre militaires",
            "Une guerre sans règles"
          ],
          correct: 1,
          explanation: "La guerre totale mobilise l'ensemble des ressources d'un pays : armée, industrie, population civile, propagande."
        },
        {
          question: "Quand a lieu l'armistice de la Première Guerre mondiale ?",
          options: ["Le 8 mai 1918", "Le 11 novembre 1918", "Le 28 juin 1919", "Le 2 septembre 1918"],
          correct: 1,
          explanation: "L'armistice est signé le 11 novembre 1918 dans un wagon à Rethondes, mettant fin aux combats."
        },
        {
          question: "Quel peuple est victime d'un génocide pendant la Première Guerre mondiale ?",
          options: ["Les Juifs", "Les Arméniens", "Les Kurdes", "Les Grecs"],
          correct: 1,
          explanation: "Le génocide des Arméniens (1915-1916), perpétré par l'Empire ottoman, fait environ 1,5 million de victimes. C'est le premier génocide du XXe siècle."
        },
        {
          question: "Que prévoit le traité de Versailles pour l'Allemagne ?",
          options: [
            "L'Allemagne reçoit de nouveaux territoires",
            "L'Allemagne est déclarée responsable, perd des territoires et doit payer des réparations",
            "L'Allemagne est divisée en deux",
            "L'Allemagne rejoint la Société des Nations"
          ],
          correct: 1,
          explanation: "Le traité de Versailles (28 juin 1919) impose à l'Allemagne la responsabilité de la guerre, la perte de territoires (dont l'Alsace-Lorraine) et de lourdes réparations financières."
        }
      ]
    },

    // ──────────────────────────────────────────────
    // CHAPITRE 2 – Démocraties fragilisées et totalitarismes
    // ──────────────────────────────────────────────
    {
      id: "totalitarismes",
      title: "Démocraties fragilisées et expériences totalitaires (1919-1939)",
      summary: "La montée des régimes totalitaires (URSS, Allemagne nazie, Italie fasciste) et la crise des démocraties dans l'entre-deux-guerres.",
      fiches: [
        {
          title: "Les régimes totalitaires",
          content: `
<h3>🔴 Les trois régimes totalitaires</h3>

<h4>Définition du totalitarisme</h4>
<p>Un <strong>régime totalitaire</strong> est un régime politique dans lequel l'État cherche à contrôler la <strong>totalité</strong> de la vie sociale, politique, économique et culturelle. Il repose sur :</p>
<ul>
  <li>Un <strong>parti unique</strong> dirigé par un chef tout-puissant.</li>
  <li>Une <strong>idéologie officielle</strong> imposée à tous.</li>
  <li>La <strong>terreur</strong> : police politique, camps, purges.</li>
  <li>Le contrôle de l'<strong>information</strong> : propagande, censure.</li>
  <li>L'embrigadement de la <strong>jeunesse</strong> et de la société.</li>
</ul>

<h4>Comparaison des trois régimes</h4>
<table>
  <tr><th></th><th>URSS</th><th>Italie fasciste</th><th>Allemagne nazie</th></tr>
  <tr><td><strong>Chef</strong></td><td>Staline</td><td>Mussolini (le « Duce »)</td><td>Hitler (le « Führer »)</td></tr>
  <tr><td><strong>Parti</strong></td><td>Parti communiste</td><td>Parti national fasciste</td><td>NSDAP (parti nazi)</td></tr>
  <tr><td><strong>Au pouvoir</strong></td><td>1924-1953</td><td>1922-1943</td><td>1933-1945</td></tr>
  <tr><td><strong>Idéologie</strong></td><td>Communisme (société sans classes, collectivisation)</td><td>Nationalisme extrême, corporatisme, grandeur de l'État</td><td>Racisme (« race aryenne »), antisémitisme, espace vital (Lebensraum)</td></tr>
  <tr><td><strong>Police politique</strong></td><td>NKVD</td><td>OVRA</td><td>Gestapo, SS</td></tr>
  <tr><td><strong>Terreur</strong></td><td>Goulag, Grandes Purges (1936-1938)</td><td>Squadrisme, emprisonnement des opposants</td><td>Camps de concentration dès 1933, Nuit de Cristal (1938)</td></tr>
  <tr><td><strong>Jeunesse</strong></td><td>Komsomols, Pionniers</td><td>Balillas</td><td>Jeunesses hitlériennes</td></tr>
</table>

<h4>⚠️ Point commun essentiel</h4>
<p>Les trois régimes utilisent la <strong>propagande de masse</strong> (affiches, radio, cinéma, rassemblements) et le <strong>culte du chef</strong> pour contrôler la population.</p>

<h4>⚠️ Différence fondamentale</h4>
<p>Le nazisme se distingue par son <strong>racisme biologique</strong> : l'antisémitisme est au cœur de l'idéologie, conduisant au génocide des Juifs.</p>`
        },
        {
          title: "La crise des démocraties et le Front populaire",
          content: `
<h3>🇫🇷 La France des années 1930</h3>

<h4>La crise économique</h4>
<ul>
  <li><strong>1929</strong> : krach de Wall Street → crise économique mondiale.</li>
  <li>La crise touche la France à partir de <strong>1931</strong> : chômage, baisse de la production, faillites.</li>
  <li>Montée de l'<strong>antiparlementarisme</strong> et de l'extrême droite.</li>
</ul>

<h4>Le 6 février 1934</h4>
<p>Des <strong>ligues d'extrême droite</strong> manifestent devant la Chambre des députés → violences, 15 morts. La République semble menacée.</p>

<h4>Le Front populaire (1936)</h4>
<p>Alliance de la gauche (<strong>SFIO, Parti radical, PCF</strong>) pour défendre la République face à la menace fasciste.</p>
<ul>
  <li><strong>Mai 1936</strong> : victoire électorale du Front populaire.</li>
  <li><strong>Léon Blum</strong> devient président du Conseil.</li>
  <li><strong>Juin 1936</strong> : <strong>Accords de Matignon</strong> → grandes réformes sociales :
    <ul>
      <li>Semaine de <strong>40 heures</strong> (au lieu de 48).</li>
      <li><strong>2 semaines de congés payés</strong>.</li>
      <li>Hausse des salaires (7 à 15 %).</li>
      <li>Conventions collectives.</li>
    </ul>
  </li>
  <li>Le Front populaire prend fin en <strong>1938</strong> face aux difficultés économiques et aux divisions.</li>
</ul>

<h4>L'Allemagne : de Weimar à Hitler</h4>
<ul>
  <li><strong>1919</strong> : République de Weimar → démocratie fragile (crise économique, humiliation du traité de Versailles).</li>
  <li><strong>30 janvier 1933</strong> : Hitler est nommé <strong>chancelier</strong>.</li>
  <li><strong>Février 1933</strong> : incendie du Reichstag → prétexte pour supprimer les libertés.</li>
  <li><strong>Mars 1933</strong> : pleins pouvoirs à Hitler.</li>
  <li>Mise en place de la dictature : parti unique, lois de Nuremberg (1935) contre les Juifs, Nuit de Cristal (9-10 nov. 1938).</li>
</ul>`
        }
      ],
      quiz: [
        {
          question: "Quelles sont les caractéristiques d'un régime totalitaire ?",
          options: [
            "Multipartisme, liberté de la presse, élections libres",
            "Parti unique, culte du chef, propagande, terreur policière",
            "Monarchie absolue avec un roi de droit divin",
            "Démocratie directe avec référendums fréquents"
          ],
          correct: 1,
          explanation: "Un régime totalitaire se caractérise par un parti unique, un chef tout-puissant, une propagande omniprésente, une police politique et la terreur."
        },
        {
          question: "Quand Hitler arrive-t-il au pouvoir ?",
          options: ["1929", "1933", "1936", "1939"],
          correct: 1,
          explanation: "Hitler est nommé chancelier d'Allemagne le 30 janvier 1933."
        },
        {
          question: "Qu'est-ce que le Front populaire ?",
          options: [
            "Un mouvement d'extrême droite en France",
            "Une alliance de gauche (SFIO, Radicaux, PCF) qui gouverne la France en 1936",
            "Un parti politique allemand",
            "Une organisation internationale"
          ],
          correct: 1,
          explanation: "Le Front populaire est une coalition de gauche qui remporte les élections en mai 1936 et met en place d'importantes réformes sociales (congés payés, 40 heures)."
        },
        {
          question: "Quelle réforme majeure apportent les Accords de Matignon (1936) ?",
          options: [
            "Le droit de vote des femmes",
            "Les 2 semaines de congés payés et la semaine de 40 heures",
            "L'abolition de l'esclavage",
            "La création de la Sécurité sociale"
          ],
          correct: 1,
          explanation: "Les Accords de Matignon (juin 1936) instaurent 2 semaines de congés payés, la semaine de 40 heures et une hausse des salaires."
        },
        {
          question: "Qu'est-ce qui distingue fondamentalement le nazisme des autres totalitarismes ?",
          options: [
            "L'utilisation de la propagande",
            "Le racisme biologique et l'antisémitisme au cœur de l'idéologie",
            "Le parti unique",
            "Le culte du chef"
          ],
          correct: 1,
          explanation: "Le nazisme se distingue par son racisme biologique : la notion de « race aryenne » supérieure et l'antisémitisme violent qui conduira au génocide."
        }
      ]
    },

    // ──────────────────────────────────────────────
    // CHAPITRE 3 – La Deuxième Guerre mondiale
    // ──────────────────────────────────────────────
    {
      id: "seconde-guerre-mondiale",
      title: "La Deuxième Guerre mondiale, une guerre d'anéantissement (1939-1945)",
      summary: "Une guerre mondiale et totale marquée par des violences de masse sans précédent, dont la Shoah.",
      fiches: [
        {
          title: "Les grandes phases du conflit",
          content: `
<h3>🌍 Les grandes phases de la Seconde Guerre mondiale</h3>

<h4>Les causes</h4>
<ul>
  <li>La politique expansionniste d'<strong>Hitler</strong> : remilitarisation de la Rhénanie (1936), Anschluss (1938), annexion des Sudètes puis de la Tchécoslovaquie.</li>
  <li>L'échec de la politique d'<strong>apaisement</strong> (accords de Munich, sept. 1938).</li>
  <li>Le <strong>pacte germano-soviétique</strong> (23 août 1939) : pacte de non-agression entre Hitler et Staline.</li>
</ul>

<h4>Les phases du conflit</h4>
<table>
  <tr><th>Phase</th><th>Période</th><th>Événements clés</th></tr>
  <tr><td><strong>Les victoires de l'Axe</strong></td><td>1939-1942</td><td>Invasion de la Pologne (1<sup>er</sup> sept. 1939), Blitzkrieg, chute de la France (juin 1940), bataille d'Angleterre, invasion de l'URSS (juin 1941, opération Barbarossa), Pearl Harbor (7 déc. 1941)</td></tr>
  <tr><td><strong>Le tournant</strong></td><td>1942-1943</td><td>Bataille de Stalingrad (sept. 1942 – fév. 1943), El-Alamein, Midway, débarquement en Afrique du Nord</td></tr>
  <tr><td><strong>La victoire des Alliés</strong></td><td>1943-1945</td><td>Débarquement en Normandie (<strong>6 juin 1944</strong>), débarquement en Provence (15 août 1944), libération de Paris (25 août 1944), capitulation allemande (<strong>8 mai 1945</strong>), bombes atomiques sur Hiroshima et Nagasaki (6 et 9 août 1945), capitulation du Japon (<strong>2 septembre 1945</strong>)</td></tr>
</table>

<h4>Dates clés à retenir</h4>
<ul>
  <li><strong>1<sup>er</sup> septembre 1939</strong> : invasion de la Pologne par l'Allemagne → début de la guerre</li>
  <li><strong>Juin 1940</strong> : défaite et armistice français</li>
  <li><strong>22 juin 1941</strong> : opération Barbarossa (attaque de l'URSS)</li>
  <li><strong>7 décembre 1941</strong> : attaque de Pearl Harbor → entrée en guerre des États-Unis</li>
  <li><strong>Février 1943</strong> : victoire soviétique à Stalingrad</li>
  <li><strong>6 juin 1944</strong> : débarquement en Normandie (D-Day)</li>
  <li><strong>8 mai 1945</strong> : capitulation de l'Allemagne</li>
  <li><strong>6 et 9 août 1945</strong> : bombes atomiques sur Hiroshima et Nagasaki</li>
  <li><strong>2 septembre 1945</strong> : capitulation du Japon → fin de la guerre</li>
</ul>`
        },
        {
          title: "La Shoah et les violences de masse",
          content: `
<h3>✡️ La Shoah – Le génocide des Juifs et des Tziganes</h3>

<h4>Les étapes de la persécution des Juifs</h4>
<ol>
  <li><strong>1933-1939 : Exclusion</strong>
    <ul>
      <li>Lois de Nuremberg (1935) : les Juifs perdent la citoyenneté allemande, interdiction des mariages mixtes.</li>
      <li>Nuit de Cristal (9-10 novembre 1938) : pogrom organisé, synagogues incendiées, magasins détruits.</li>
    </ul>
  </li>
  <li><strong>1939-1941 : Enfermement</strong>
    <ul>
      <li>Création des <strong>ghettos</strong> en Pologne (Varsovie, Łódź, Cracovie) : surpopulation, famine, maladies.</li>
    </ul>
  </li>
  <li><strong>1941-1945 : Extermination</strong>
    <ul>
      <li><strong>Einsatzgruppen</strong> : unités mobiles de tuerie en URSS → « Shoah par balles » (1,5 million de victimes).</li>
      <li><strong>Conférence de Wannsee</strong> (20 janvier 1942) : planification de la « Solution finale ».</li>
      <li><strong>Camps d'extermination</strong> : Auschwitz-Birkenau, Treblinka, Sobibor, Belzec, Chelmno, Majdanek → gazage systématique.</li>
    </ul>
  </li>
</ol>

<h4>Le bilan</h4>
<ul>
  <li><strong>6 millions de Juifs</strong> assassinés (dont 1,5 million d'enfants).</li>
  <li><strong>220 000 à 500 000 Tziganes</strong> (Roms et Sintis) exterminés (Porajmos).</li>
  <li>Des millions d'autres victimes : opposants politiques, handicapés (programme T4), homosexuels, prisonniers de guerre soviétiques.</li>
</ul>

<h4>Bilan global de la guerre</h4>
<ul>
  <li><strong>50 à 60 millions de morts</strong> (dont une majorité de civils).</li>
  <li>Destructions matérielles immenses, villes rasées (Dresde, Hiroshima).</li>
  <li><strong>Tribunal de Nuremberg</strong> (1945-1946) : jugement des criminels de guerre nazis → création du concept de <strong>crime contre l'humanité</strong>.</li>
  <li>Création de l'<strong>ONU</strong> (1945) et de la <strong>Déclaration universelle des droits de l'homme</strong> (1948).</li>
</ul>`
        }
      ],
      quiz: [
        {
          question: "Quand commence la Seconde Guerre mondiale ?",
          options: ["Le 28 juin 1939", "Le 1er septembre 1939", "Le 3 septembre 1939", "Le 10 mai 1940"],
          correct: 1,
          explanation: "La Seconde Guerre mondiale commence le 1er septembre 1939 avec l'invasion de la Pologne par l'Allemagne nazie."
        },
        {
          question: "Quelle bataille marque le tournant de la guerre à l'Est ?",
          options: ["La bataille d'Angleterre", "La bataille de Stalingrad", "Le débarquement en Normandie", "La bataille de Midway"],
          correct: 1,
          explanation: "La bataille de Stalingrad (sept. 1942 – fév. 1943) est le tournant majeur sur le front de l'Est : première grande défaite allemande."
        },
        {
          question: "Qu'est-ce que la « Solution finale » ?",
          options: [
            "Le plan de paix proposé par Hitler",
            "Le plan nazi d'extermination systématique des Juifs d'Europe",
            "La stratégie militaire pour vaincre l'URSS",
            "Le traité de paix de 1945"
          ],
          correct: 1,
          explanation: "La « Solution finale » est le plan nazi d'extermination systématique des Juifs d'Europe, décidé lors de la conférence de Wannsee (janvier 1942)."
        },
        {
          question: "Quand a lieu le débarquement en Normandie ?",
          options: ["Le 8 mai 1945", "Le 6 juin 1944", "Le 15 août 1944", "Le 25 août 1944"],
          correct: 1,
          explanation: "Le débarquement en Normandie (opération Overlord) a lieu le 6 juin 1944, le D-Day. C'est la plus grande opération amphibie de l'histoire."
        },
        {
          question: "Combien de Juifs ont été assassinés pendant la Shoah ?",
          options: ["1 million", "3 millions", "6 millions", "10 millions"],
          correct: 2,
          explanation: "Environ 6 millions de Juifs ont été assassinés pendant la Shoah, dont 1,5 million d'enfants."
        },
        {
          question: "Qu'est-ce que le tribunal de Nuremberg a créé comme concept juridique ?",
          options: ["Le crime de guerre", "Le crime contre l'humanité", "Le délit de fuite", "Le droit d'asile"],
          correct: 1,
          explanation: "Le tribunal de Nuremberg (1945-1946) a introduit le concept de « crime contre l'humanité » pour qualifier les actes de génocide et de persécution systématique."
        }
      ]
    },

    // ──────────────────────────────────────────────
    // CHAPITRE 4 – La France : Vichy, collaboration, Résistance
    // ──────────────────────────────────────────────
    {
      id: "france-vichy",
      title: "La France défaite et occupée : Régime de Vichy, collaboration, Résistance",
      summary: "La France sous l'Occupation : le régime de Vichy, la collaboration avec l'Allemagne nazie et la Résistance intérieure et extérieure.",
      fiches: [
        {
          title: "La défaite et le régime de Vichy",
          content: `
<h3>🇫🇷 La défaite de 1940 et le régime de Vichy</h3>

<h4>La défaite</h4>
<ul>
  <li><strong>10 mai 1940</strong> : offensive allemande (Blitzkrieg). Les Pays-Bas, la Belgique puis la France sont envahis.</li>
  <li><strong>Exode</strong> : des millions de Français fuient vers le sud.</li>
  <li><strong>17 juin 1940</strong> : le maréchal <strong>Pétain</strong> demande l'armistice.</li>
  <li><strong>22 juin 1940</strong> : signature de l'<strong>armistice</strong> à Rethondes.</li>
  <li>La France est coupée en deux : <strong>zone occupée</strong> (nord) et <strong>zone « libre »</strong> (sud), sous l'autorité du régime de Vichy.</li>
</ul>

<h4>Le régime de Vichy (1940-1944)</h4>
<ul>
  <li><strong>10 juillet 1940</strong> : Pétain obtient les pleins pouvoirs → fin de la IIIe République.</li>
  <li><strong>« État français »</strong> remplace la « République française ».</li>
  <li>Devise : <strong>« Travail, Famille, Patrie »</strong> (au lieu de « Liberté, Égalité, Fraternité »).</li>
  <li><strong>Révolution nationale</strong> : retour aux valeurs traditionnelles, autoritarisme, suppression des libertés.</li>
  <li><strong>Culte du maréchal Pétain</strong> : propagande, portrait dans les écoles.</li>
</ul>

<h4>La collaboration</h4>
<ul>
  <li><strong>24 octobre 1940</strong> : entrevue de <strong>Montoire</strong> entre Pétain et Hitler → la France s'engage dans la voie de la <strong>collaboration</strong>.</li>
  <li><strong>Collaboration d'État</strong> : le régime de Vichy aide l'Allemagne (STO, livraison de matières premières).</li>
  <li><strong>Persécution des Juifs</strong> :
    <ul>
      <li><strong>Statut des Juifs</strong> (octobre 1940) : exclusion de la fonction publique, des professions libérales.</li>
      <li><strong>Rafle du Vel d'Hiv</strong> (16-17 juillet 1942) : la police française arrête plus de <strong>13 000 Juifs</strong> à Paris (dont 4 000 enfants), déportés vers Auschwitz.</li>
      <li>Au total, <strong>76 000 Juifs</strong> déportés de France, dont seulement 2 500 survivants.</li>
    </ul>
  </li>
  <li><strong>STO</strong> (Service du travail obligatoire, 1943) : les jeunes Français sont envoyés travailler en Allemagne.</li>
</ul>`
        },
        {
          title: "La Résistance et la Libération",
          content: `
<h3>✊ La Résistance française</h3>

<h4>L'appel du 18 juin 1940</h4>
<p>Le <strong>18 juin 1940</strong>, le général <strong>Charles de Gaulle</strong> lance depuis Londres un appel sur la BBC, invitant les Français à continuer le combat. C'est l'acte fondateur de la <strong>France libre</strong>.</p>

<h4>La Résistance extérieure</h4>
<ul>
  <li><strong>Forces françaises libres (FFL)</strong> dirigées par de Gaulle depuis Londres puis Alger.</li>
  <li>Combat aux côtés des Alliés en Afrique du Nord, en Italie, lors du débarquement.</li>
  <li>De Gaulle crée le <strong>Comité français de libération nationale (CFLN)</strong> en 1943, puis le <strong>Gouvernement provisoire (GPRF)</strong> en 1944.</li>
</ul>

<h4>La Résistance intérieure</h4>
<ul>
  <li>Des mouvements clandestins : <strong>Combat, Libération, Franc-Tireur</strong> (zone sud) ; <strong>Défense de la France, OCM</strong> (zone nord).</li>
  <li>Actions : tracts, journaux clandestins, renseignement, sabotages, aide aux réfractaires du STO (les <strong>maquis</strong>).</li>
  <li><strong>Jean Moulin</strong> : envoyé par de Gaulle, il unifie la Résistance en créant le <strong>Conseil national de la Résistance (CNR)</strong> le <strong>27 mai 1943</strong>.</li>
  <li>Jean Moulin est arrêté le 21 juin 1943 à Caluire et meurt sous la torture.</li>
</ul>

<h4>Le programme du CNR</h4>
<p>Le CNR élabore un programme de réformes pour l'après-guerre :</p>
<ul>
  <li>Droit de vote des <strong>femmes</strong> (ordonnance du 21 avril 1944, appliquée en 1945).</li>
  <li>Création de la <strong>Sécurité sociale</strong> (1945).</li>
  <li>Nationalisations (Renault, EDF, grandes banques).</li>
  <li>Libertés fondamentales rétablies.</li>
</ul>

<h4>La Libération</h4>
<ul>
  <li><strong>6 juin 1944</strong> : débarquement en Normandie.</li>
  <li><strong>15 août 1944</strong> : débarquement en Provence.</li>
  <li><strong>19-25 août 1944</strong> : insurrection et <strong>libération de Paris</strong>.</li>
  <li>De Gaulle descend les Champs-Élysées le <strong>26 août 1944</strong>.</li>
  <li>L'<strong>épuration</strong> suit la Libération : jugement des collaborateurs (Pétain condamné à mort, peine commuée en prison à vie).</li>
</ul>`
        }
      ],
      quiz: [
        {
          question: "Quand le général de Gaulle lance-t-il son appel à la résistance ?",
          options: ["Le 17 juin 1940", "Le 18 juin 1940", "Le 22 juin 1940", "Le 14 juillet 1940"],
          correct: 1,
          explanation: "L'Appel du 18 juin 1940 est lancé par le général de Gaulle sur les ondes de la BBC à Londres."
        },
        {
          question: "Quelle est la devise du régime de Vichy ?",
          options: [
            "Liberté, Égalité, Fraternité",
            "Travail, Famille, Patrie",
            "Ordre, Discipline, Honneur",
            "Unité, Force, Progrès"
          ],
          correct: 1,
          explanation: "Le régime de Vichy remplace la devise républicaine par « Travail, Famille, Patrie »."
        },
        {
          question: "Qu'est-ce que la rafle du Vel d'Hiv ?",
          options: [
            "Une course cycliste",
            "L'arrestation de résistants en 1943",
            "L'arrestation de plus de 13 000 Juifs par la police française les 16-17 juillet 1942",
            "Un événement sportif organisé par Vichy"
          ],
          correct: 2,
          explanation: "Les 16-17 juillet 1942, la police française arrête plus de 13 000 Juifs à Paris, dont 4 000 enfants. Ils sont déportés vers Auschwitz."
        },
        {
          question: "Qui unifie les mouvements de Résistance en créant le CNR ?",
          options: ["Charles de Gaulle", "Jean Moulin", "Philippe Leclerc", "Pierre Brossolette"],
          correct: 1,
          explanation: "Jean Moulin, envoyé par de Gaulle, crée le Conseil national de la Résistance (CNR) le 27 mai 1943 pour unifier les mouvements de Résistance."
        },
        {
          question: "Quand Paris est-elle libérée ?",
          options: ["Le 6 juin 1944", "Le 15 août 1944", "Le 25 août 1944", "Le 8 mai 1945"],
          correct: 2,
          explanation: "Paris est libérée le 25 août 1944, après une insurrection menée par les FFI et l'arrivée de la 2e DB du général Leclerc."
        },
        {
          question: "Quelle grande réforme sociale est issue du programme du CNR ?",
          options: [
            "Les congés payés",
            "La Sécurité sociale",
            "L'abolition de la peine de mort",
            "La semaine de 35 heures"
          ],
          correct: 1,
          explanation: "La Sécurité sociale (1945) est l'une des grandes réformes issues du programme du CNR, avec le droit de vote des femmes et les nationalisations."
        }
      ]
    },

    // ──────────────────────────────────────────────
    // CHAPITRE 5 – Indépendances et nouveaux États
    // ──────────────────────────────────────────────
    {
      id: "independances",
      title: "Indépendances et construction de nouveaux États",
      summary: "La décolonisation après 1945 : les indépendances en Asie et en Afrique, avec un focus sur l'Inde et l'Algérie.",
      fiches: [
        {
          title: "Le mouvement de décolonisation",
          content: `
<h3>🌍 La décolonisation (1947-1962)</h3>

<h4>Les causes de la décolonisation</h4>
<ul>
  <li><strong>Affaiblissement des métropoles</strong> européennes après la Seconde Guerre mondiale.</li>
  <li><strong>Montée des nationalismes</strong> dans les colonies : les peuples revendiquent leur droit à l'autodétermination.</li>
  <li><strong>Rôle de l'ONU</strong> : la Charte (1945) affirme le droit des peuples à disposer d'eux-mêmes.</li>
  <li><strong>Contexte de la Guerre froide</strong> : USA et URSS soutiennent les mouvements indépendantistes (pour étendre leur influence).</li>
  <li><strong>Conférence de Bandung</strong> (1955) : 29 pays d'Asie et d'Afrique affirment leur solidarité et condamnent le colonialisme → naissance du <strong>Tiers Monde</strong>.</li>
</ul>

<h4>Deux formes de décolonisation</h4>
<table>
  <tr><th></th><th>Décolonisation négociée</th><th>Décolonisation par la guerre</th></tr>
  <tr><td><strong>Processus</strong></td><td>Négociations pacifiques entre la métropole et les nationalistes</td><td>Conflit armé pour obtenir l'indépendance</td></tr>
  <tr><td><strong>Exemple</strong></td><td>Inde (1947), Maroc et Tunisie (1956), Afrique noire française (1960)</td><td>Indochine (1946-1954), Algérie (1954-1962)</td></tr>
</table>

<h4>L'indépendance de l'Inde (1947)</h4>
<ul>
  <li><strong>Gandhi</strong> : leader du mouvement indépendantiste, prône la <strong>non-violence</strong> (désobéissance civile, boycott des produits britanniques).</li>
  <li><strong>15 août 1947</strong> : indépendance de l'Inde, mais <strong>partition</strong> entre l'<strong>Inde</strong> (hindoue) et le <strong>Pakistan</strong> (musulman) → violences intercommunautaires, 10 à 15 millions de déplacés.</li>
  <li>Gandhi est assassiné le <strong>30 janvier 1948</strong>.</li>
</ul>`
        },
        {
          title: "La guerre d'Algérie (1954-1962)",
          content: `
<h3>🇩🇿 La guerre d'Algérie</h3>

<h4>Le contexte</h4>
<ul>
  <li>L'Algérie est une <strong>colonie de peuplement</strong> française depuis 1830.</li>
  <li>Inégalités entre les <strong>Européens d'Algérie</strong> (les « pieds-noirs ») et la population <strong>musulmane</strong> (majorité privée de droits).</li>
  <li>Montée du nationalisme algérien : <strong>Messali Hadj</strong>, <strong>Ferhat Abbas</strong>.</li>
</ul>

<h4>Les grandes étapes</h4>
<table>
  <tr><th>Date</th><th>Événement</th></tr>
  <tr><td><strong>1<sup>er</sup> novembre 1954</strong></td><td>Toussaint rouge : série d'attentats du <strong>FLN</strong> (Front de libération nationale) → début de la guerre</td></tr>
  <tr><td><strong>1956-1957</strong></td><td><strong>Bataille d'Alger</strong> : le FLN mène des attentats en ville, l'armée française répond par la torture</td></tr>
  <tr><td><strong>13 mai 1958</strong></td><td>Crise politique en France → retour au pouvoir du général <strong>de Gaulle</strong>, création de la <strong>Ve République</strong></td></tr>
  <tr><td><strong>1959</strong></td><td>De Gaulle reconnaît le droit à l'<strong>autodétermination</strong> des Algériens</td></tr>
  <tr><td><strong>1961</strong></td><td>Putsch des généraux à Alger (échec) ; création de l'<strong>OAS</strong> (Organisation armée secrète)</td></tr>
  <tr><td><strong>18 mars 1962</strong></td><td><strong>Accords d'Évian</strong> : cessez-le-feu</td></tr>
  <tr><td><strong>5 juillet 1962</strong></td><td><strong>Indépendance de l'Algérie</strong></td></tr>
</table>

<h4>Les conséquences</h4>
<ul>
  <li><strong>Exode des pieds-noirs</strong> : environ 1 million d'Européens quittent l'Algérie pour la France.</li>
  <li>Sort tragique des <strong>harkis</strong> (Algériens ayant combattu pour la France) : beaucoup sont abandonnés et massacrés.</li>
  <li>Bilan humain lourd : plusieurs centaines de milliers de morts.</li>
  <li>La guerre d'Algérie reste un sujet de <strong>mémoire</strong> douloureux en France et en Algérie.</li>
  <li>La France ne reconnaît officiellement le terme de « guerre d'Algérie » qu'en <strong>1999</strong>.</li>
</ul>`
        }
      ],
      quiz: [
        {
          question: "Quelle conférence de 1955 marque la solidarité des peuples colonisés ?",
          options: ["La conférence de Yalta", "La conférence de Bandung", "La conférence de Potsdam", "La conférence de Munich"],
          correct: 1,
          explanation: "La conférence de Bandung (Indonésie, 1955) réunit 29 pays d'Asie et d'Afrique qui affirment leur solidarité et condamnent le colonialisme."
        },
        {
          question: "Comment l'Inde obtient-elle son indépendance ?",
          options: [
            "Par une guerre sanglante contre la Grande-Bretagne",
            "Par des négociations et la lutte non-violente menée par Gandhi",
            "Par un coup d'État militaire",
            "Par un vote à l'ONU"
          ],
          correct: 1,
          explanation: "Gandhi a mené un mouvement de désobéissance civile non-violente qui a conduit les Britanniques à accorder l'indépendance le 15 août 1947."
        },
        {
          question: "Quand commence la guerre d'Algérie ?",
          options: ["Le 8 mai 1945", "Le 1er novembre 1954", "Le 13 mai 1958", "Le 18 mars 1962"],
          correct: 1,
          explanation: "La guerre d'Algérie débute le 1er novembre 1954 (« Toussaint rouge ») avec une série d'attentats du FLN."
        },
        {
          question: "Quel accord met fin à la guerre d'Algérie ?",
          options: ["Les accords de Matignon", "Les accords d'Évian", "Les accords de Munich", "Les accords de Genève"],
          correct: 1,
          explanation: "Les accords d'Évian (18 mars 1962) instaurent un cessez-le-feu et préparent l'indépendance de l'Algérie (5 juillet 1962)."
        },
        {
          question: "Qui sont les « pieds-noirs » ?",
          options: [
            "Des soldats français",
            "Les Européens d'Algérie qui quittent le pays après l'indépendance",
            "Des résistants algériens",
            "Des diplomates français"
          ],
          correct: 1,
          explanation: "Les « pieds-noirs » sont les Européens (surtout Français) installés en Algérie depuis la colonisation. Environ 1 million d'entre eux quittent l'Algérie en 1962."
        }
      ]
    },

    // ──────────────────────────────────────────────
    // CHAPITRE 6 – La Guerre froide
    // ──────────────────────────────────────────────
    {
      id: "guerre-froide",
      title: "Un monde bipolaire au temps de la Guerre froide",
      summary: "L'affrontement Est-Ouest de 1947 à 1991 : les blocs, les crises majeures et la chute du mur de Berlin.",
      fiches: [
        {
          title: "Les deux blocs et les crises majeures",
          content: `
<h3>🌐 La Guerre froide (1947-1991)</h3>

<h4>Définition</h4>
<p>La <strong>Guerre froide</strong> est un affrontement <strong>indirect</strong> entre les États-Unis et l'URSS (1947-1991). Pas de conflit armé direct entre les deux superpuissances, mais des tensions permanentes, une course aux armements et des guerres locales.</p>

<h4>Les deux blocs</h4>
<table>
  <tr><th></th><th>Bloc de l'Ouest</th><th>Bloc de l'Est</th></tr>
  <tr><td><strong>Leader</strong></td><td>États-Unis</td><td>URSS</td></tr>
  <tr><td><strong>Idéologie</strong></td><td>Capitalisme, démocratie libérale</td><td>Communisme, économie planifiée</td></tr>
  <tr><td><strong>Alliance militaire</strong></td><td>OTAN (1949)</td><td>Pacte de Varsovie (1955)</td></tr>
  <tr><td><strong>Aide économique</strong></td><td>Plan Marshall (1947)</td><td>CAEM / Comecon</td></tr>
  <tr><td><strong>Doctrine</strong></td><td>Doctrine Truman (endiguement / containment)</td><td>Doctrine Jdanov (deux camps irréconciliables)</td></tr>
</table>

<h4>Les grandes crises</h4>
<table>
  <tr><th>Crise</th><th>Date</th><th>Description</th></tr>
  <tr><td><strong>Blocus de Berlin</strong></td><td>1948-1949</td><td>L'URSS bloque les accès terrestres à Berlin-Ouest → pont aérien américain. Création de la RFA et de la RDA en 1949.</td></tr>
  <tr><td><strong>Guerre de Corée</strong></td><td>1950-1953</td><td>Affrontement entre la Corée du Nord (soutenue par l'URSS et la Chine) et la Corée du Sud (soutenue par les USA). Armistice sans traité de paix.</td></tr>
  <tr><td><strong>Construction du mur de Berlin</strong></td><td>13 août 1961</td><td>La RDA construit un mur pour empêcher l'exode de sa population vers l'Ouest → symbole de la division du monde.</td></tr>
  <tr><td><strong>Crise de Cuba</strong></td><td>Octobre 1962</td><td>L'URSS installe des missiles nucléaires à Cuba → le monde au bord de la guerre nucléaire. Khrouchtchev recule. Apogée de la Guerre froide.</td></tr>
  <tr><td><strong>Guerre du Vietnam</strong></td><td>1955-1975</td><td>Les USA s'engagent pour empêcher la réunification communiste du Vietnam. Défaite américaine en 1975.</td></tr>
</table>

<h4>La fin de la Guerre froide</h4>
<ul>
  <li><strong>1985</strong> : arrivée de <strong>Gorbatchev</strong> au pouvoir en URSS → réformes : <strong>Glasnost</strong> (transparence) et <strong>Perestroïka</strong> (restructuration).</li>
  <li><strong>9 novembre 1989</strong> : <strong>chute du mur de Berlin</strong> → symbole de la fin de la Guerre froide.</li>
  <li><strong>3 octobre 1990</strong> : <strong>réunification allemande</strong>.</li>
  <li><strong>25 décembre 1991</strong> : <strong>dissolution de l'URSS</strong> → fin de la Guerre froide.</li>
</ul>`
        },
        {
          title: "Berlin, symbole de la Guerre froide",
          content: `
<h3>🧱 Berlin, cœur de la Guerre froide</h3>

<h4>Berlin divisée</h4>
<ul>
  <li>Après 1945, Berlin est divisée en <strong>4 zones d'occupation</strong> (américaine, britannique, française, soviétique), comme l'Allemagne.</li>
  <li><strong>1948-1949 : blocus de Berlin</strong> par l'URSS. Les Occidentaux organisent un <strong>pont aérien</strong> pour ravitailler Berlin-Ouest (11 mois).</li>
  <li><strong>1949</strong> : création de la <strong>RFA</strong> (République fédérale d'Allemagne, ouest, capitaliste) et de la <strong>RDA</strong> (République démocratique allemande, est, communiste).</li>
</ul>

<h4>Le mur de Berlin (1961-1989)</h4>
<ul>
  <li><strong>13 août 1961</strong> : construction du mur par la RDA pour stopper l'émigration vers l'Ouest (3,5 millions d'Allemands de l'Est avaient fui depuis 1949).</li>
  <li>Le mur mesure <strong>155 km</strong>, avec miradors, barbelés, zone de tir (« no man's land »).</li>
  <li>Au moins <strong>140 personnes</strong> sont mortes en tentant de le franchir.</li>
  <li><strong>Discours de Kennedy à Berlin</strong> (26 juin 1963) : <em>« Ich bin ein Berliner »</em> → soutien américain à Berlin-Ouest.</li>
  <li><strong>Discours de Reagan</strong> (12 juin 1987) : <em>« Mr. Gorbachev, tear down this wall! »</em></li>
</ul>

<h4>La chute du mur (9 novembre 1989)</h4>
<ul>
  <li>Manifestations en RDA, ouverture des frontières hongroises et tchèques.</li>
  <li>Le <strong>9 novembre 1989</strong>, le gouvernement de la RDA autorise le passage → des milliers de Berlinois se retrouvent et détruisent le mur.</li>
  <li><strong>3 octobre 1990</strong> : <strong>réunification de l'Allemagne</strong>.</li>
  <li>La chute du mur symbolise la <strong>fin du monde bipolaire</strong> et le triomphe des démocraties libérales.</li>
</ul>`
        }
      ],
      quiz: [
        {
          question: "Qu'est-ce que la Guerre froide ?",
          options: [
            "Un conflit armé direct entre les USA et l'URSS",
            "Un affrontement indirect entre les USA et l'URSS sans guerre directe entre eux",
            "Une guerre en Arctique",
            "Un conflit entre l'Europe et l'Asie"
          ],
          correct: 1,
          explanation: "La Guerre froide est un affrontement indirect entre les deux superpuissances (USA et URSS) : tensions, course aux armements, guerres par pays interposés, mais jamais de conflit armé direct."
        },
        {
          question: "Quand le mur de Berlin est-il construit ?",
          options: ["1949", "1955", "1961", "1989"],
          correct: 2,
          explanation: "Le mur de Berlin est construit dans la nuit du 12 au 13 août 1961 par la RDA pour empêcher l'émigration vers l'Ouest."
        },
        {
          question: "Quelle crise amène le monde au bord de la guerre nucléaire en 1962 ?",
          options: ["Le blocus de Berlin", "La guerre de Corée", "La crise de Cuba", "La guerre du Vietnam"],
          correct: 2,
          explanation: "La crise de Cuba (octobre 1962) est l'apogée de la Guerre froide : l'URSS installe des missiles nucléaires à Cuba, menaçant directement les États-Unis."
        },
        {
          question: "Quand le mur de Berlin tombe-t-il ?",
          options: ["Le 3 octobre 1989", "Le 9 novembre 1989", "Le 25 décembre 1991", "Le 1er janvier 1990"],
          correct: 1,
          explanation: "Le mur de Berlin tombe le 9 novembre 1989, marquant symboliquement la fin de la Guerre froide."
        },
        {
          question: "Que sont la Glasnost et la Perestroïka ?",
          options: [
            "Deux batailles de la Guerre froide",
            "Les réformes de Gorbatchev : transparence politique et restructuration économique",
            "Deux partis politiques soviétiques",
            "Deux villes soviétiques"
          ],
          correct: 1,
          explanation: "Glasnost (transparence) et Perestroïka (restructuration) sont les réformes lancées par Gorbatchev à partir de 1985 pour moderniser l'URSS."
        },
        {
          question: "Quand l'URSS disparaît-elle officiellement ?",
          options: ["1989", "1990", "1991", "1993"],
          correct: 2,
          explanation: "L'URSS est officiellement dissoute le 25 décembre 1991, marquant la fin définitive de la Guerre froide."
        }
      ]
    },

    // ──────────────────────────────────────────────
    // CHAPITRE 7 – Le projet européen
    // ──────────────────────────────────────────────
    {
      id: "construction-europeenne",
      title: "Affirmation et mise en œuvre du projet européen",
      summary: "De la réconciliation franco-allemande à l'Union européenne : les étapes de la construction européenne.",
      fiches: [
        {
          title: "Les étapes de la construction européenne",
          content: `
<h3>🇪🇺 La construction européenne</h3>

<h4>Les origines : pourquoi construire l'Europe ?</h4>
<ul>
  <li><strong>Maintenir la paix</strong> après deux guerres mondiales dévastatrices.</li>
  <li><strong>Réconciliation franco-allemande</strong> : le moteur de la construction européenne.</li>
  <li><strong>Faire face</strong> aux deux superpuissances (USA et URSS) dans le contexte de la Guerre froide.</li>
  <li><strong>Favoriser la prospérité économique</strong> par la coopération.</li>
</ul>

<h4>Les étapes clés</h4>
<table>
  <tr><th>Date</th><th>Événement</th><th>Signification</th></tr>
  <tr><td><strong>1950</strong></td><td><strong>Déclaration Schuman</strong> (9 mai)</td><td>Robert Schuman propose de mettre en commun les productions de charbon et d'acier de la France et de l'Allemagne. Le 9 mai est aujourd'hui la <strong>Journée de l'Europe</strong>.</td></tr>
  <tr><td><strong>1951</strong></td><td><strong>CECA</strong> (Communauté européenne du charbon et de l'acier)</td><td>6 pays fondateurs : France, Allemagne (RFA), Italie, Belgique, Pays-Bas, Luxembourg.</td></tr>
  <tr><td><strong>1957</strong></td><td><strong>Traité de Rome</strong> → <strong>CEE</strong> (Communauté économique européenne)</td><td>Marché commun : libre circulation des marchandises, des personnes, des services et des capitaux.</td></tr>
  <tr><td><strong>1992</strong></td><td><strong>Traité de Maastricht</strong> → <strong>Union européenne (UE)</strong></td><td>Citoyenneté européenne, union économique et monétaire (préparation de l'euro), politique étrangère commune.</td></tr>
  <tr><td><strong>2002</strong></td><td>Mise en circulation de l'<strong>euro</strong></td><td>Monnaie unique pour les pays de la zone euro.</td></tr>
</table>

<h4>Les élargissements</h4>
<ul>
  <li><strong>1957</strong> : 6 pays fondateurs</li>
  <li><strong>1973</strong> : Royaume-Uni, Irlande, Danemark (9)</li>
  <li><strong>1981</strong> : Grèce (10)</li>
  <li><strong>1986</strong> : Espagne, Portugal (12)</li>
  <li><strong>1995</strong> : Autriche, Finlande, Suède (15)</li>
  <li><strong>2004</strong> : 10 nouveaux membres (dont Pologne, Hongrie, pays baltes) → 25</li>
  <li><strong>2007</strong> : Roumanie, Bulgarie (27)</li>
  <li><strong>2013</strong> : Croatie (28)</li>
  <li><strong>2020</strong> : <strong>Brexit</strong> – le Royaume-Uni quitte l'UE (27)</li>
</ul>

<h4>Les personnalités clés</h4>
<ul>
  <li><strong>Robert Schuman</strong> : « père fondateur », à l'origine de la CECA.</li>
  <li><strong>Jean Monnet</strong> : inspirateur de la méthode communautaire, premier président de la CECA.</li>
  <li><strong>Konrad Adenauer</strong> : chancelier allemand, artisan de la réconciliation franco-allemande.</li>
</ul>`
        },
        {
          title: "Le fonctionnement et les défis de l'UE",
          content: `
<h3>⚙️ Le fonctionnement de l'Union européenne</h3>

<h4>Les institutions principales</h4>
<table>
  <tr><th>Institution</th><th>Rôle</th><th>Siège</th></tr>
  <tr><td><strong>Commission européenne</strong></td><td>Propose les lois, veille à l'application des traités, pouvoir exécutif</td><td>Bruxelles</td></tr>
  <tr><td><strong>Parlement européen</strong></td><td>Vote les lois et le budget, élu au suffrage universel direct (depuis 1979)</td><td>Strasbourg (sessions) / Bruxelles</td></tr>
  <tr><td><strong>Conseil de l'UE</strong> (Conseil des ministres)</td><td>Réunit les ministres des États membres, co-décide avec le Parlement</td><td>Bruxelles</td></tr>
  <tr><td><strong>Conseil européen</strong></td><td>Réunit les chefs d'État et de gouvernement, fixe les grandes orientations</td><td>Bruxelles</td></tr>
  <tr><td><strong>Cour de justice de l'UE</strong></td><td>Veille au respect du droit européen</td><td>Luxembourg</td></tr>
</table>

<h4>Les grandes réalisations</h4>
<ul>
  <li><strong>Espace Schengen</strong> (1985/1995) : suppression des contrôles aux frontières intérieures → libre circulation des personnes.</li>
  <li><strong>L'euro</strong> (2002) : monnaie unique partagée par 20 pays (2024).</li>
  <li><strong>Programme Erasmus</strong> (1987) : échange d'étudiants entre universités européennes.</li>
  <li><strong>Politique agricole commune (PAC)</strong> : soutien aux agriculteurs européens.</li>
</ul>

<h4>Les défis actuels</h4>
<ul>
  <li><strong>Le Brexit</strong> (2020) : le Royaume-Uni quitte l'UE → interrogations sur l'avenir du projet.</li>
  <li><strong>La crise migratoire</strong> : gestion des flux migratoires, solidarité entre États.</li>
  <li><strong>La montée de l'euroscepticisme</strong> : critiques envers la bureaucratie européenne et la perte de souveraineté nationale.</li>
  <li><strong>Les défis géopolitiques</strong> : guerre en Ukraine, défense européenne, relations avec la Chine et les États-Unis.</li>
  <li><strong>Le défi écologique</strong> : le « Pacte vert » pour la neutralité carbone en 2050.</li>
</ul>`
        }
      ],
      quiz: [
        {
          question: "Qui est à l'origine de la Déclaration du 9 mai 1950 ?",
          options: ["Jean Monnet", "Robert Schuman", "Charles de Gaulle", "Konrad Adenauer"],
          correct: 1,
          explanation: "Robert Schuman, ministre français des Affaires étrangères, prononce la Déclaration du 9 mai 1950, proposant la mise en commun du charbon et de l'acier."
        },
        {
          question: "Quel traité crée la Communauté économique européenne (CEE) ?",
          options: ["Le traité de Paris (1951)", "Le traité de Rome (1957)", "Le traité de Maastricht (1992)", "Le traité de Lisbonne (2007)"],
          correct: 1,
          explanation: "Le traité de Rome (1957) crée la CEE et le marché commun entre les 6 pays fondateurs."
        },
        {
          question: "Combien de pays fondent la CECA en 1951 ?",
          options: ["4", "6", "9", "12"],
          correct: 1,
          explanation: "6 pays fondent la CECA : France, Allemagne (RFA), Italie, Belgique, Pays-Bas, Luxembourg."
        },
        {
          question: "Quel traité transforme la CEE en Union européenne ?",
          options: ["Le traité de Rome", "Le traité de Maastricht (1992)", "Le traité de Nice", "Le traité de Lisbonne"],
          correct: 1,
          explanation: "Le traité de Maastricht (1992) crée l'Union européenne, avec la citoyenneté européenne et la préparation de la monnaie unique."
        },
        {
          question: "Qu'est-ce que l'espace Schengen ?",
          options: [
            "La zone où l'euro est utilisé",
            "L'espace de libre circulation des personnes sans contrôles aux frontières intérieures",
            "Le siège du Parlement européen",
            "Un programme d'échanges universitaires"
          ],
          correct: 1,
          explanation: "L'espace Schengen permet la libre circulation des personnes entre les pays signataires, sans contrôles aux frontières intérieures."
        }
      ]
    },

    // ──────────────────────────────────────────────
    // CHAPITRE 8 – Enjeux et conflits après 1989
    // ──────────────────────────────────────────────
    {
      id: "apres-1989",
      title: "Enjeux et conflits dans le monde après 1989",
      summary: "Le nouvel ordre mondial après la Guerre froide : hyperpuissance américaine, terrorisme, nouveaux conflits et défis du XXIe siècle.",
      fiches: [
        {
          title: "Un nouvel ordre mondial",
          content: `
<h3>🌐 Le monde après la Guerre froide</h3>

<h4>La fin du monde bipolaire</h4>
<ul>
  <li><strong>1991</strong> : dissolution de l'URSS → les États-Unis deviennent la seule <strong>superpuissance</strong> (« hyperpuissance »).</li>
  <li>Espoir d'un « nouvel ordre mondial » fondé sur la paix, la démocratie et le droit international.</li>
  <li>L'<strong>ONU</strong> joue un rôle accru : missions de maintien de la paix, tribunaux internationaux.</li>
</ul>

<h4>Vers un monde multipolaire</h4>
<p>Le monde évolue progressivement vers le <strong>multipolarisme</strong> avec l'émergence de nouvelles puissances :</p>
<ul>
  <li><strong>Chine</strong> : deuxième puissance économique mondiale, influence croissante.</li>
  <li><strong>Russie</strong> : retrouve une influence géopolitique (Poutine au pouvoir depuis 2000).</li>
  <li><strong>Puissances émergentes</strong> : Inde, Brésil (les « BRICS »).</li>
  <li><strong>Union européenne</strong> : puissance économique mais faiblesse politique et militaire.</li>
</ul>

<h4>Les nouveaux conflits</h4>
<table>
  <tr><th>Conflit</th><th>Date</th><th>Caractéristiques</th></tr>
  <tr><td><strong>Guerre du Golfe</strong></td><td>1990-1991</td><td>Coalition internationale (sous mandat de l'ONU) contre l'Irak de Saddam Hussein après l'invasion du Koweït.</td></tr>
  <tr><td><strong>Guerres de Yougoslavie</strong></td><td>1991-2001</td><td>Éclatement de la Yougoslavie, nettoyage ethnique en Bosnie (Srebrenica, 1995) et au Kosovo (1999). Intervention de l'OTAN.</td></tr>
  <tr><td><strong>Génocide au Rwanda</strong></td><td>1994</td><td>Génocide des Tutsis par les Hutus : environ 800 000 morts en 100 jours. L'ONU n'intervient pas à temps.</td></tr>
  <tr><td><strong>Guerre en Afghanistan</strong></td><td>2001-2021</td><td>Intervention américaine après les attentats du 11 septembre 2001 contre le régime taliban et Al-Qaïda.</td></tr>
  <tr><td><strong>Guerre en Irak</strong></td><td>2003-2011</td><td>Intervention américaine (sans mandat de l'ONU) pour renverser Saddam Hussein.</td></tr>
</table>`
        },
        {
          title: "Le terrorisme et les défis du XXIe siècle",
          content: `
<h3>💥 Le terrorisme international</h3>

<h4>Les attentats du 11 septembre 2001</h4>
<ul>
  <li><strong>11 septembre 2001</strong> : attaques terroristes d'<strong>Al-Qaïda</strong> contre les États-Unis (tours jumelles du World Trade Center à New York, Pentagone).</li>
  <li>Près de <strong>3 000 morts</strong>.</li>
  <li>Le président <strong>George W. Bush</strong> lance la « <strong>guerre contre le terrorisme</strong> » (War on Terror).</li>
  <li>Intervention en <strong>Afghanistan</strong> (2001) puis en <strong>Irak</strong> (2003).</li>
</ul>

<h4>Le terrorisme en France et en Europe</h4>
<ul>
  <li><strong>7 janvier 2015</strong> : attentat contre <strong>Charlie Hebdo</strong> (12 morts).</li>
  <li><strong>13 novembre 2015</strong> : attentats de Paris (Bataclan, terrasses, Stade de France) – <strong>130 morts</strong>, revendiqués par Daech.</li>
  <li><strong>14 juillet 2016</strong> : attentat de Nice – <strong>86 morts</strong>.</li>
  <li>Le terrorisme islamiste est une menace majeure pour les démocraties européennes → renforcement de la sécurité, état d'urgence.</li>
</ul>

<h4>Les défis du monde contemporain</h4>
<table>
  <tr><th>Défi</th><th>Description</th></tr>
  <tr><td><strong>Le changement climatique</strong></td><td>Réchauffement global, COP21 (Accord de Paris, 2015), urgence écologique</td></tr>
  <tr><td><strong>Les migrations</strong></td><td>Crises migratoires (réfugiés de Syrie, Afrique), tensions sur l'accueil</td></tr>
  <tr><td><strong>Les inégalités mondiales</strong></td><td>Écart croissant entre pays riches et pays pauvres, montée des inégalités</td></tr>
  <tr><td><strong>La montée des populismes</strong></td><td>Défiance envers les élites politiques, remise en question de la démocratie libérale</td></tr>
  <tr><td><strong>Les tensions géopolitiques</strong></td><td>Guerre en Ukraine (depuis 2022), tensions en mer de Chine, conflit israélo-palestinien</td></tr>
  <tr><td><strong>La révolution numérique</strong></td><td>Réseaux sociaux, fake news, protection des données, intelligence artificielle</td></tr>
</table>

<h4>⚠️ Ce qu'il faut retenir pour le Brevet</h4>
<p>Le monde après 1989 n'est plus bipolaire mais n'est pas non plus unipolaire de manière durable. Il est devenu <strong>multipolaire</strong>, marqué par de nouveaux types de conflits (terrorisme, guerres asymétriques, cybermenaces) et des défis globaux (climat, migrations, inégalités).</p>`
        }
      ],
      quiz: [
        {
          question: "Quel événement marque le début de la « guerre contre le terrorisme » ?",
          options: [
            "La guerre du Golfe (1991)",
            "Les attentats du 11 septembre 2001",
            "La chute du mur de Berlin (1989)",
            "Les attentats de Paris (2015)"
          ],
          correct: 1,
          explanation: "Les attentats du 11 septembre 2001 contre les États-Unis déclenchent la « guerre contre le terrorisme » lancée par George W. Bush."
        },
        {
          question: "Quel génocide a lieu au Rwanda en 1994 ?",
          options: [
            "Le génocide des Arméniens",
            "Le génocide des Tutsis par les Hutus",
            "La Shoah",
            "Le nettoyage ethnique en Bosnie"
          ],
          correct: 1,
          explanation: "En 1994, le génocide des Tutsis par les Hutus fait environ 800 000 morts en 100 jours au Rwanda."
        },
        {
          question: "Comment qualifie-t-on le monde actuel du point de vue géopolitique ?",
          options: ["Bipolaire", "Unipolaire", "Multipolaire", "Apolaire"],
          correct: 2,
          explanation: "Le monde est devenu multipolaire : plusieurs puissances (USA, Chine, Russie, UE, puissances émergentes) coexistent et rivalisent."
        },
        {
          question: "Quel accord international sur le climat est signé en 2015 ?",
          options: ["Le protocole de Kyoto", "L'Accord de Paris (COP21)", "Le traité de Maastricht", "La Charte de l'ONU"],
          correct: 1,
          explanation: "L'Accord de Paris, signé lors de la COP21 en décembre 2015, engage les pays à limiter le réchauffement climatique à moins de 2°C."
        },
        {
          question: "Quels attentats frappent Paris le 13 novembre 2015 ?",
          options: [
            "Des attentats dans le métro",
            "Des attentats au Bataclan, sur des terrasses et au Stade de France, faisant 130 morts",
            "Un attentat contre Charlie Hebdo",
            "Un attentat sur la Promenade des Anglais"
          ],
          correct: 1,
          explanation: "Le 13 novembre 2015, des terroristes de Daech attaquent le Bataclan, des terrasses de cafés et le Stade de France, faisant 130 morts."
        },
        {
          question: "Quel massacre a lieu à Srebrenica en 1995 ?",
          options: [
            "Un bombardement de l'OTAN",
            "Le massacre de plus de 8 000 Bosniaques musulmans par les forces serbes",
            "Un attentat terroriste",
            "Un coup d'État militaire"
          ],
          correct: 1,
          explanation: "Le massacre de Srebrenica (juillet 1995) est le plus grand massacre en Europe depuis la Seconde Guerre mondiale : plus de 8 000 Bosniaques musulmans sont exécutés par les forces serbes de Bosnie."
        }
      ]
    }
  ,
{
    "id": "histoire-supplementaire",
    "title": "Chapitre Supplémentaire : Enjeux et conflits depuis 1989",
    "summary": "Comprendre le monde contemporain de la chute du mur de Berlin à nos jours.",
    "fiches": [
        {
            "title": "La fin de la Guerre froide et ses conséquences",
            "content": "<h3>Un nouveau monde</h3><p>La chute du mur de Berlin (1989) et l'éclatement de l'URSS (1991) mettent fin au monde bipolaire. Les États-Unis deviennent la seule hyperpuissance avant l'émergence d'un monde multipolaire (Chine, etc.).</p>"
        }
    ],
    "quiz": [
        {
            "question": "En quelle année le mur de Berlin a-t-il chuté ?",
            "options": [
                "1961",
                "1989",
                "1991",
                "2001"
            ],
            "correct": 1,
            "explanation": "Il chute en novembre 1989, marquant la fin de la Guerre froide."
        }
    ]
},
  {
    "id": "histoire-final",
    "title": "🎯 Grand Quiz Final Type Brevet",
    "summary": "Série de 31 questions incluant un sujet type Brevet.",
    "fiches": [],
    "quiz": [
        {
            "q": "Quand a eu lieu la Première Guerre mondiale ?",
            "o": [
                "1870-1871",
                "1914-1918",
                "1939-1945",
                "1945-1954"
            ],
            "c": 1,
            "e": "La Grande Guerre a duré de l'été 1914 à l'armistice du 11 novembre 1918."
        },
        {
            "q": "Comment appelle-t-on les soldats dans les tranchées ?",
            "o": [
                "Les Grognards",
                "Les Poilus",
                "Les GI",
                "Les Résistants"
            ],
            "c": 1,
            "e": "On les appelait les Poilus en raison de leurs conditions de vie très rudes."
        },
        {
            "q": "Quelle bataille terrible se déroule en 1916 ?",
            "o": [
                "Waterloo",
                "Verdun",
                "Stalingrad",
                "Normandie"
            ],
            "c": 1,
            "e": "La bataille de Verdun a fait des centaines de milliers de morts en 1916."
        },
        {
            "q": "Qui prend le pouvoir en Russie lors de la Révolution de 1917 ?",
            "o": [
                "Le Tsar Nicolas II",
                "Staline",
                "Lénine",
                "Trotski"
            ],
            "c": 2,
            "e": "Lénine mène la Révolution bolchevique d'octobre 1917."
        },
        {
            "q": "Comment s'appelle le traité de paix signé en 1919 ?",
            "o": [
                "Traité de Rome",
                "Traité de Versailles",
                "Traité de Paris",
                "Traité de Maastricht"
            ],
            "c": 1,
            "e": "Le Traité de Versailles met fin officiellement à la Première Guerre mondiale, imposant de lourdes sanctions à l'Allemagne."
        },
        {
            "q": "Quand Adolf Hitler devient-il Chancelier d'Allemagne ?",
            "o": [
                "1929",
                "1933",
                "1939",
                "1945"
            ],
            "c": 1,
            "e": "Hitler arrive au pouvoir légalement en janvier 1933."
        },
        {
            "q": "Quel est le nom du parti de Hitler ?",
            "o": [
                "NSDAP (Nazi)",
                "PCF",
                "SFIO",
                "Fasciste"
            ],
            "c": 0,
            "e": "Le parti nazi s'appuyait sur une idéologie raciste et antisémite."
        },
        {
            "q": "Qui est le dirigeant totalitaire de l'URSS à partir de la fin des années 1920 ?",
            "o": [
                "Lénine",
                "Gagarine",
                "Staline",
                "Gorbatchev"
            ],
            "c": 2,
            "e": "Joseph Staline instaure un régime totalitaire d'une extrême violence."
        },
        {
            "q": "Que met en place Staline pour collectiviser l'économie ?",
            "o": [
                "Le Front Populaire",
                "La planification et les kolkhozes",
                "La Gestapo",
                "La NEP"
            ],
            "c": 1,
            "e": "La collectivisation force les paysans à entrer dans des fermes collectives (les kolkhozes)."
        },
        {
            "q": "Quelle alliance gagne les élections en France en 1936 ?",
            "o": [
                "L'Action Française",
                "Le Front Populaire",
                "Le régime de Vichy",
                "Les Bolcheviks"
            ],
            "c": 1,
            "e": "Le Front Populaire, dirigé par Léon Blum, instaure les congés payés et les 40h."
        },
        {
            "q": "Quel événement déclenche la Seconde Guerre mondiale en Europe ?",
            "o": [
                "L'invasion de la Pologne par l'Allemagne (1939)",
                "L'attaque de Pearl Harbor (1941)",
                "L'assassinat de François-Ferdinand",
                "La crise de 1929"
            ],
            "c": 0,
            "e": "L'Allemagne attaque la Pologne le 1er septembre 1939, ce qui pousse la France et le RU à déclarer la guerre."
        },
        {
            "q": "Où se situe l'attaque japonaise surprise du 7 décembre 1941 ?",
            "o": [
                "Hiroshima",
                "Pearl Harbor",
                "Midway",
                "Okinawa"
            ],
            "c": 1,
            "e": "Cette attaque contre la base militaire américaine provoque l'entrée en guerre des États-Unis."
        },
        {
            "q": "Qui lance l'appel à la Résistance depuis Londres le 18 juin 1940 ?",
            "o": [
                "Pétain",
                "Churchill",
                "De Gaulle",
                "Jean Moulin"
            ],
            "c": 2,
            "e": "Le général de Gaulle refuse l'armistice et appelle à poursuivre le combat."
        },
        {
            "q": "Qui dirige le régime de Vichy en France ?",
            "o": [
                "De Gaulle",
                "Le Maréchal Pétain",
                "Jean Moulin",
                "Hitler"
            ],
            "c": 1,
            "e": "Le Maréchal Pétain obtient les pleins pouvoirs en 1940 et instaure un régime collaborant avec l'Allemagne nazie."
        },
        {
            "q": "Qu'est-ce que la 'Solution finale' ?",
            "o": [
                "La bombe atomique",
                "Le plan d'extermination des Juifs d'Europe par les nazis",
                "La libération de Paris",
                "L'alliance des Soviétiques et des Américains"
            ],
            "c": 1,
            "e": "Elle fut décidée à la conférence de Wannsee en 1942 et aboutit à l'Holocauste (Shoah)."
        },
        {
            "q": "Où ont eu lieu les deux bombardements atomiques en août 1945 ?",
            "o": [
                "Tokyo et Kyoto",
                "Hiroshima et Nagasaki",
                "Berlin et Dresde",
                "Pearl Harbor"
            ],
            "c": 1,
            "e": "Les Américains ont utilisé l'arme atomique pour forcer le Japon à capituler."
        },
        {
            "q": "Comment s'appelle l'affrontement idéologique entre les USA et l'URSS (1947-1991) ?",
            "o": [
                "La Seconde Guerre mondiale",
                "La Guerre de Trente Ans",
                "La Guerre Froide",
                "La Guerre d'Indochine"
            ],
            "c": 2,
            "e": "Guerre 'Froide' car il n'y a pas eu d'affrontement militaire direct entre les deux superpuissances."
        },
        {
            "q": "Quelles sont les deux alliances militaires pendant la Guerre Froide ?",
            "o": [
                "Axe et Alliés",
                "OTAN et Pacte de Varsovie",
                "Triple Entente et Triple Alliance",
                "CEE et ALENA"
            ],
            "c": 1,
            "e": "L'OTAN (mené par les USA) et le Pacte de Varsovie (mené par l'URSS)."
        },
        {
            "q": "Quand le Mur de Berlin a-t-il été construit ?",
            "o": [
                "1945",
                "1961",
                "1989",
                "1991"
            ],
            "c": 1,
            "e": "Le mur a été érigé en 1961 pour empêcher la fuite des Allemands de l'Est vers l'Ouest."
        },
        {
            "q": "Et quand le Mur de Berlin a-t-il chuté ?",
            "o": [
                "1968",
                "1989",
                "1991",
                "2001"
            ],
            "c": 1,
            "e": "Sa chute en novembre 1989 marque la fin de la Guerre froide et le début de la réunification allemande."
        },
        {
            "q": "Qu'est-ce que la décolonisation ?",
            "o": [
                "L'exploration de l'espace",
                "L'installation des Européens en Afrique",
                "L'accès à l'indépendance des anciennes colonies",
                "La fin de la Guerre froide"
            ],
            "c": 2,
            "e": "Processus d'indépendance, notamment en Asie et en Afrique (ex: Inde en 1947, Algérie en 1962)."
        },
        {
            "q": "Qui a été la figure majeure de l'indépendance de l'Inde ?",
            "o": [
                "Nelson Mandela",
                "Gandhi",
                "Hô Chi Minh",
                "Martin Luther King"
            ],
            "c": 1,
            "e": "Gandhi a prôné la désobéissance civile et la non-violence."
        },
        {
            "q": "En quelle année s'achève la guerre d'Algérie ?",
            "o": [
                "1945",
                "1954",
                "1962",
                "1981"
            ],
            "c": 2,
            "e": "L'Algérie devient indépendante en 1962 après les Accords d'Évian."
        },
        {
            "q": "Qu'est-ce que la CECA (créée en 1951) ?",
            "o": [
                "Une armée européenne",
                "Communauté Européenne du Charbon et de l'Acier",
                "Un parti politique",
                "Une monnaie unique"
            ],
            "c": 1,
            "e": "C'est l'ancêtre de l'Union européenne, initiée par la France et l'Allemagne de l'Ouest."
        },
        {
            "q": "Quel traité fonde la Communauté Économique Européenne (CEE) en 1957 ?",
            "o": [
                "Traité de Versailles",
                "Traité de Rome",
                "Traité de Maastricht",
                "Traité de Lisbonne"
            ],
            "c": 1,
            "e": "Le Traité de Rome crée un marché commun européen."
        },
        {
            "q": "En quelle année le Traité de Maastricht (qui crée l'Union européenne) est-il signé ?",
            "o": [
                "1957",
                "1989",
                "1992",
                "2002"
            ],
            "c": 2,
            "e": "Il crée l'Union Européenne et prévoit la mise en place d'une monnaie unique (l'euro)."
        },
        {
            "q": "En 1958, qui devient le premier président de la Ve République ?",
            "o": [
                "François Mitterrand",
                "Georges Pompidou",
                "Charles de Gaulle",
                "Jacques Chirac"
            ],
            "c": 2,
            "e": "De Gaulle revient au pouvoir lors de la crise algérienne et fait adopter une nouvelle constitution."
        },
        {
            "q": "Qu'est-ce qui caractérise la Ve République ?",
            "o": [
                "Le pouvoir du Parlement est tout-puissant",
                "Le pouvoir exécutif (Président) est renforcé",
                "Il n'y a plus de président",
                "Le roi revient au pouvoir"
            ],
            "c": 1,
            "e": "La Ve République donne un rôle central et très fort au Président de la République."
        },
        {
            "q": "Quel événement social majeur secoue la France en 1968 ?",
            "o": [
                "La Seconde Guerre mondiale",
                "Mai 68",
                "La fin de la Guerre d'Algérie",
                "Les gilets jaunes"
            ],
            "c": 1,
            "e": "Mouvement étudiant et grève générale des travailleurs pour plus de libertés."
        },
        {
            "q": "Qui remporte l'élection présidentielle en 1981 en France ?",
            "o": [
                "Valéry Giscard d'Estaing",
                "François Mitterrand",
                "Jacques Chirac",
                "Charles de Gaulle"
            ],
            "c": 1,
            "e": "C'est la première alternance politique de la Ve République (la gauche arrive au pouvoir)."
        },
        {
            "q": "[SUJET TYPE BREVET] Expliquez en 2-3 phrases pourquoi la Première Guerre mondiale est considérée comme une 'Guerre totale'.",
            "o": [
                "Car elle a détruit toute la planète",
                "Car elle mobilise toutes les ressources (militaires, économiques, humaines, idéologiques) de l'État",
                "Car tous les pays du monde y ont participé sans exception",
                "Car c'était la dernière guerre de l'Histoire"
            ],
            "c": 1,
            "e": "L'économie entière est tournée vers la guerre, les civils travaillent à l'arrière, et la propagande mobilise les esprits."
        }
    ]
}
  ]
};
