const MATHS_DATA = {
  id: "maths",
  name: "Mathématiques",
  icon: "📐",
  color: "#3498DB",
  chapters: [
    // ========================
    // CHAPITRE 1 : Nombres et calculs
    // ========================
    {
      id: "nombres-calculs",
      title: "Nombres et calculs",
      summary: "Fractions, puissances, racines carrées, calcul littéral, identités remarquables et équations.",
      fiches: [
        {
          title: "Fractions et puissances",
          content: `
<h3>🔢 Les fractions</h3>
<p><strong>Addition / Soustraction :</strong> Il faut mettre les fractions au <em>même dénominateur</em>.</p>
<p>Exemple : <strong>1/3 + 2/5 = 5/15 + 6/15 = 11/15</strong></p>

<p><strong>Multiplication :</strong> On multiplie les numérateurs entre eux et les dénominateurs entre eux.</p>
<p>Exemple : <strong>2/3 × 4/7 = 8/21</strong></p>

<p><strong>Division :</strong> Diviser par une fraction revient à multiplier par son <em>inverse</em>.</p>
<p>Exemple : <strong>3/5 ÷ 2/7 = 3/5 × 7/2 = 21/10</strong></p>

<h3>🔢 Les puissances</h3>
<table>
  <tr><th>Règle</th><th>Formule</th><th>Exemple</th></tr>
  <tr><td>Produit de puissances</td><td>aⁿ × aᵐ = aⁿ⁺ᵐ</td><td>2³ × 2⁴ = 2⁷ = 128</td></tr>
  <tr><td>Quotient de puissances</td><td>aⁿ ÷ aᵐ = aⁿ⁻ᵐ</td><td>5⁶ ÷ 5² = 5⁴ = 625</td></tr>
  <tr><td>Puissance d'une puissance</td><td>(aⁿ)ᵐ = aⁿˣᵐ</td><td>(3²)³ = 3⁶ = 729</td></tr>
  <tr><td>Puissance de 0</td><td>a⁰ = 1 (a ≠ 0)</td><td>7⁰ = 1</td></tr>
  <tr><td>Puissance négative</td><td>a⁻ⁿ = 1/aⁿ</td><td>2⁻³ = 1/8</td></tr>
</table>

<h3>📝 Notation scientifique</h3>
<p>Un nombre est en <strong>notation scientifique</strong> s'il est écrit sous la forme <strong>a × 10ⁿ</strong> avec <strong>1 ≤ a &lt; 10</strong>.</p>
<p>Exemple : 45 000 = <strong>4,5 × 10⁴</strong> ; 0,0032 = <strong>3,2 × 10⁻³</strong></p>
`
        },
        {
          title: "Racines carrées",
          content: `
<h3>√ Racines carrées</h3>
<p><strong>Définition :</strong> La racine carrée d'un nombre positif <em>a</em> est le nombre positif dont le carré vaut <em>a</em>. On la note <strong>√a</strong>.</p>
<p>Exemples : √25 = 5 ; √2 ≈ 1,414 ; √0 = 0</p>

<h3>📐 Propriétés</h3>
<table>
  <tr><th>Propriété</th><th>Formule</th><th>Exemple</th></tr>
  <tr><td>Produit</td><td>√a × √b = √(a × b)</td><td>√2 × √8 = √16 = 4</td></tr>
  <tr><td>Quotient</td><td>√a ÷ √b = √(a/b)</td><td>√50 ÷ √2 = √25 = 5</td></tr>
  <tr><td>Carré</td><td>(√a)² = a</td><td>(√7)² = 7</td></tr>
</table>

<h3>✏️ Simplification</h3>
<p>On cherche le plus grand carré parfait qui divise le nombre sous la racine.</p>
<ul>
  <li>√12 = √(4 × 3) = 2√3</li>
  <li>√75 = √(25 × 3) = 5√3</li>
  <li>√48 = √(16 × 3) = 4√3</li>
  <li>√72 = √(36 × 2) = 6√2</li>
</ul>

<p><strong>⚠️ Attention :</strong> √(a + b) ≠ √a + √b ! Par exemple : √(9 + 16) = √25 = 5, mais √9 + √16 = 3 + 4 = 7.</p>
`
        },
        {
          title: "Calcul littéral et identités remarquables",
          content: `
<h3>📝 Calcul littéral</h3>
<p><strong>Développer :</strong> Transformer un produit en somme.</p>
<ul>
  <li>k(a + b) = ka + kb</li>
  <li>(a + b)(c + d) = ac + ad + bc + bd</li>
</ul>
<p>Exemple : 3(2x + 5) = 6x + 15</p>
<p>Exemple : (x + 3)(2x − 1) = 2x² − x + 6x − 3 = 2x² + 5x − 3</p>

<p><strong>Factoriser :</strong> Transformer une somme en produit (opération inverse).</p>
<p>Exemple : 6x + 15 = 3(2x + 5)</p>

<h3>⭐ Les trois identités remarquables</h3>
<table>
  <tr><th>Identité</th><th>Développement</th></tr>
  <tr><td><strong>(a + b)² = a² + 2ab + b²</strong></td><td>(x + 3)² = x² + 6x + 9</td></tr>
  <tr><td><strong>(a − b)² = a² − 2ab + b²</strong></td><td>(x − 5)² = x² − 10x + 25</td></tr>
  <tr><td><strong>(a + b)(a − b) = a² − b²</strong></td><td>(x + 4)(x − 4) = x² − 16</td></tr>
</table>

<h3>💡 Méthode pour reconnaître une identité remarquable</h3>
<ul>
  <li>Si l'expression est de la forme <strong>x² + 2×a×x + a²</strong> → c'est <strong>(x + a)²</strong></li>
  <li>Si l'expression est de la forme <strong>x² − 2×a×x + a²</strong> → c'est <strong>(x − a)²</strong></li>
  <li>Si l'expression est de la forme <strong>x² − a²</strong> → c'est <strong>(x + a)(x − a)</strong></li>
</ul>
<p>Exemple : x² − 9 = x² − 3² = (x + 3)(x − 3)</p>
`
        },
        {
          title: "Équations du premier degré",
          content: `
<h3>⚖️ Résolution d'une équation</h3>
<p><strong>Principe :</strong> Isoler l'inconnue x d'un côté du signe « = ».</p>
<p><strong>Règles :</strong></p>
<ul>
  <li>On peut <strong>ajouter</strong> ou <strong>soustraire</strong> le même nombre des deux côtés.</li>
  <li>On peut <strong>multiplier</strong> ou <strong>diviser</strong> les deux côtés par un même nombre <em>non nul</em>.</li>
</ul>

<h3>📋 Méthode étape par étape</h3>
<p><strong>Exemple :</strong> Résoudre 3x + 7 = 2x − 5</p>
<ol>
  <li>Regrouper les termes en x à gauche : 3x − 2x = −5 − 7</li>
  <li>Simplifier : x = −12</li>
  <li>Vérification : 3(−12) + 7 = −36 + 7 = −29 et 2(−12) − 5 = −24 − 5 = −29 ✓</li>
</ol>

<h3>📋 Équation produit nul</h3>
<p><strong>Propriété :</strong> Si A × B = 0, alors A = 0 ou B = 0.</p>
<p><strong>Exemple :</strong> (2x − 6)(x + 4) = 0</p>
<ul>
  <li>2x − 6 = 0 → x = 3</li>
  <li>ou x + 4 = 0 → x = −4</li>
</ul>
<p>Les solutions sont <strong>x = 3</strong> et <strong>x = −4</strong>.</p>

<h3>📋 Mise en équation d'un problème</h3>
<p><strong>Méthode :</strong></p>
<ol>
  <li>Choisir l'inconnue et la nommer (ex : x)</li>
  <li>Mettre le problème en équation</li>
  <li>Résoudre l'équation</li>
  <li>Vérifier et conclure avec une phrase</li>
</ol>
`
        }
      ],
      quiz: [
        {
          question: "Quel est le résultat de 2/3 + 3/4 ?",
          options: ["5/7", "17/12", "5/12", "6/7"],
          correct: 1,
          explanation: "2/3 + 3/4 = 8/12 + 9/12 = 17/12."
        },
        {
          question: "Que vaut 10⁻³ ?",
          options: ["−30", "1 000", "0,001", "−1 000"],
          correct: 2,
          explanation: "10⁻³ = 1/10³ = 1/1000 = 0,001."
        },
        {
          question: "Quelle est la forme simplifiée de √50 ?",
          options: ["5√2", "25√2", "2√5", "10√5"],
          correct: 0,
          explanation: "√50 = √(25 × 2) = √25 × √2 = 5√2."
        },
        {
          question: "Quel est le développement de (x + 5)² ?",
          options: ["x² + 25", "x² + 5x + 25", "x² + 10x + 25", "x² − 10x + 25"],
          correct: 2,
          explanation: "(x + 5)² = x² + 2 × x × 5 + 5² = x² + 10x + 25."
        },
        {
          question: "Quelle est la solution de l'équation 4x − 3 = 2x + 7 ?",
          options: ["x = 2", "x = 5", "x = −5", "x = 10"],
          correct: 1,
          explanation: "4x − 3 = 2x + 7 → 4x − 2x = 7 + 3 → 2x = 10 → x = 5."
        },
        {
          question: "Factoriser x² − 49 :",
          options: ["(x − 7)²", "(x + 7)²", "(x + 7)(x − 7)", "(x − 49)(x + 1)"],
          correct: 2,
          explanation: "x² − 49 = x² − 7² = (x + 7)(x − 7) (identité remarquable a² − b²)."
        }
      ]
    },

    // ========================
    // CHAPITRE 2 : Organisation et gestion de données
    // ========================
    {
      id: "gestion-donnees",
      title: "Organisation et gestion de données",
      summary: "Proportionnalité, pourcentages, statistiques et probabilités.",
      fiches: [
        {
          title: "Proportionnalité et pourcentages",
          content: `
<h3>📊 Proportionnalité</h3>
<p><strong>Définition :</strong> Deux grandeurs sont <em>proportionnelles</em> si on passe de l'une à l'autre en multipliant toujours par le <strong>même nombre</strong> (le <em>coefficient de proportionnalité</em>).</p>

<p><strong>Reconnaître la proportionnalité :</strong></p>
<ul>
  <li>Dans un tableau : vérifier que le <strong>quotient</strong> (2ᵉ ligne ÷ 1ʳᵉ ligne) est constant.</li>
  <li>Sur un graphique : les points sont <strong>alignés avec l'origine</strong>.</li>
</ul>

<h3>🔧 Produit en croix</h3>
<p>Si a/b = c/d, alors <strong>a × d = b × c</strong>.</p>
<p>Exemple : Si 3 kg de pommes coûtent 4,50 €, combien coûtent 5 kg ?</p>
<p>3/4,50 = 5/x → x = (5 × 4,50) / 3 = <strong>7,50 €</strong></p>

<h3>💰 Pourcentages</h3>
<p><strong>Calculer t % d'une quantité Q :</strong> (t / 100) × Q</p>
<p>Exemple : 15 % de 200 = 0,15 × 200 = <strong>30</strong></p>

<p><strong>Augmentation de t % :</strong> Multiplier par <strong>(1 + t/100)</strong></p>
<p>Exemple : Augmentation de 20 % → coefficient multiplicateur = 1,20</p>

<p><strong>Diminution de t % :</strong> Multiplier par <strong>(1 − t/100)</strong></p>
<p>Exemple : Réduction de 30 % → coefficient multiplicateur = 0,70</p>

<h3>⚠️ Attention aux pourcentages successifs</h3>
<p>Une hausse de 10 % suivie d'une baisse de 10 % ne ramène <strong>PAS</strong> au prix initial !</p>
<p>100 × 1,10 × 0,90 = 99 (on perd 1 %)</p>
`
        },
        {
          title: "Statistiques",
          content: `
<h3>📈 Vocabulaire des statistiques</h3>
<ul>
  <li><strong>Population :</strong> l'ensemble des individus étudiés.</li>
  <li><strong>Caractère :</strong> la propriété étudiée (quantitatif ou qualitatif).</li>
  <li><strong>Effectif :</strong> nombre d'individus ayant une même valeur.</li>
  <li><strong>Fréquence :</strong> effectif ÷ effectif total (souvent en %).</li>
</ul>

<h3>📊 Indicateurs statistiques</h3>
<table>
  <tr><th>Indicateur</th><th>Définition</th><th>Exemple (série : 3, 5, 7, 7, 8)</th></tr>
  <tr><td><strong>Moyenne</strong></td><td>Somme des valeurs ÷ nombre de valeurs</td><td>(3+5+7+7+8)/5 = 6</td></tr>
  <tr><td><strong>Médiane</strong></td><td>Valeur qui partage la série ordonnée en deux moitiés égales</td><td>7 (3ᵉ valeur sur 5)</td></tr>
  <tr><td><strong>Étendue</strong></td><td>Valeur max − Valeur min</td><td>8 − 3 = 5</td></tr>
</table>

<h3>📋 Calculer la médiane</h3>
<ul>
  <li><strong>Effectif total impair (n) :</strong> La médiane est la valeur de rang (n + 1) / 2.</li>
  <li><strong>Effectif total pair (n) :</strong> La médiane est la demi-somme des valeurs de rang n/2 et n/2 + 1.</li>
</ul>
<p>Exemple (série ordonnée de 6 valeurs : 2, 4, 5, 8, 10, 12) :</p>
<p>Médiane = (5 + 8) / 2 = <strong>6,5</strong></p>

<h3>📊 Moyenne avec un tableau de fréquences</h3>
<p>Moyenne = Σ (valeur × effectif) / effectif total</p>
`
        },
        {
          title: "Probabilités",
          content: `
<h3>🎲 Vocabulaire des probabilités</h3>
<ul>
  <li><strong>Expérience aléatoire :</strong> expérience dont on ne peut pas prévoir le résultat à l'avance.</li>
  <li><strong>Issue :</strong> résultat possible de l'expérience.</li>
  <li><strong>Univers (Ω) :</strong> ensemble de toutes les issues possibles.</li>
  <li><strong>Événement :</strong> sous-ensemble de l'univers.</li>
</ul>

<h3>📐 Propriétés fondamentales</h3>
<ul>
  <li>La probabilité d'un événement est un nombre compris entre <strong>0 et 1</strong>.</li>
  <li>La somme des probabilités de toutes les issues = <strong>1</strong>.</li>
  <li>P(événement impossible) = <strong>0</strong> ; P(événement certain) = <strong>1</strong>.</li>
  <li>P(événement contraire de A) = <strong>1 − P(A)</strong>.</li>
</ul>

<h3>🎯 Calcul de probabilité (équiprobabilité)</h3>
<p><strong>Formule :</strong> P(A) = Nombre d'issues favorables / Nombre total d'issues</p>
<p>Exemple : On lance un dé à 6 faces. Quelle est la probabilité d'obtenir un nombre pair ?</p>
<p>Issues favorables : {2, 4, 6} → 3 issues.</p>
<p>P(pair) = 3/6 = <strong>1/2</strong></p>

<h3>🌳 Arbre de probabilités</h3>
<p>Pour des expériences à <strong>plusieurs étapes</strong>, on utilise un arbre :</p>
<ul>
  <li>On <strong>multiplie</strong> les probabilités le long d'une branche.</li>
  <li>On <strong>additionne</strong> les probabilités des branches qui mènent à l'événement souhaité.</li>
</ul>
`
        }
      ],
      quiz: [
        {
          question: "Un article coûte 80 € et bénéficie d'une réduction de 25 %. Quel est son nouveau prix ?",
          options: ["55 €", "60 €", "65 €", "20 €"],
          correct: 1,
          explanation: "Réduction : 25 % de 80 = 20 €. Nouveau prix : 80 − 20 = 60 €. Ou bien : 80 × 0,75 = 60 €."
        },
        {
          question: "Quelle est la moyenne de la série : 12, 8, 15, 10, 5 ?",
          options: ["8", "10", "12", "50"],
          correct: 1,
          explanation: "Moyenne = (12 + 8 + 15 + 10 + 5) / 5 = 50 / 5 = 10."
        },
        {
          question: "Quelle est la médiane de la série ordonnée : 3, 5, 7, 9, 11 ?",
          options: ["5", "7", "9", "35"],
          correct: 1,
          explanation: "La série a 5 valeurs (impair). La médiane est la 3ᵉ valeur : 7."
        },
        {
          question: "On tire une carte au hasard dans un jeu de 52 cartes. Quelle est la probabilité de tirer un as ?",
          options: ["1/13", "1/52", "4/52", "1/4"],
          correct: 0,
          explanation: "Il y a 4 as dans un jeu de 52 cartes. P(as) = 4/52 = 1/13."
        },
        {
          question: "Un prix augmente de 10 % puis diminue de 10 %. Le prix final est :",
          options: ["Identique au prix initial", "Inférieur au prix initial", "Supérieur au prix initial", "On ne peut pas savoir"],
          correct: 1,
          explanation: "Coefficient : 1,10 × 0,90 = 0,99. Le prix final est 99 % du prix initial, donc inférieur."
        },
        {
          question: "Quelle est la probabilité de l'événement contraire si P(A) = 0,3 ?",
          options: ["0,3", "0,7", "0,03", "1,3"],
          correct: 1,
          explanation: "P(contraire de A) = 1 − P(A) = 1 − 0,3 = 0,7."
        }
      ]
    },

    // ========================
    // CHAPITRE 3 : Fonctions
    // ========================
    {
      id: "fonctions",
      title: "Fonctions",
      summary: "Notion de fonction, fonctions linéaires et affines, représentation graphique.",
      fiches: [
        {
          title: "Notion de fonction",
          content: `
<h3>🔗 Qu'est-ce qu'une fonction ?</h3>
<p><strong>Définition :</strong> Une fonction est un processus qui, à un nombre donné, associe <strong>un unique nombre</strong>.</p>
<p>On note : <strong>f : x ↦ f(x)</strong></p>
<ul>
  <li><strong>x</strong> est la variable (l'antécédent)</li>
  <li><strong>f(x)</strong> est l'image de x par f</li>
</ul>

<h3>📖 Vocabulaire</h3>
<table>
  <tr><th>Terme</th><th>Signification</th><th>Exemple (f(x) = 2x + 3)</th></tr>
  <tr><td>Image</td><td>Résultat de f(x)</td><td>f(4) = 2×4+3 = 11. L'image de 4 est 11.</td></tr>
  <tr><td>Antécédent</td><td>Nombre dont l'image est donnée</td><td>f(x) = 7 → 2x+3=7 → x=2. L'antécédent de 7 est 2.</td></tr>
</table>

<h3>📊 Lecture graphique</h3>
<ul>
  <li>Pour trouver l'<strong>image</strong> de x₀ : on part de x₀ sur l'axe des abscisses, on monte (ou descend) jusqu'à la courbe, puis on lit la valeur sur l'axe des ordonnées.</li>
  <li>Pour trouver le(s) <strong>antécédent(s)</strong> de y₀ : on part de y₀ sur l'axe des ordonnées, on trace une horizontale et on lit le(s) abscisse(s) des points d'intersection avec la courbe.</li>
</ul>

<p><strong>⚠️ Important :</strong> Un nombre peut avoir <strong>plusieurs antécédents</strong>, mais une fonction ne donne qu'<strong>une seule image</strong> pour chaque antécédent.</p>
`
        },
        {
          title: "Fonction linéaire",
          content: `
<h3>📏 Fonction linéaire</h3>
<p><strong>Définition :</strong> Une fonction linéaire est de la forme <strong>f(x) = ax</strong> où <em>a</em> est un nombre fixé appelé <strong>coefficient</strong>.</p>

<h3>📐 Propriétés</h3>
<ul>
  <li>Sa représentation graphique est une <strong>droite passant par l'origine</strong> O(0 ; 0).</li>
  <li>Le coefficient <em>a</em> est le <strong>coefficient directeur</strong> de la droite.</li>
  <li>f(0) = 0 toujours.</li>
</ul>

<h3>📊 Déterminer le coefficient a</h3>
<p>Si on connaît un point A(x_A ; y_A) de la droite (avec x_A ≠ 0) :</p>
<p><strong>a = y_A / x_A</strong></p>
<p>Exemple : La droite passe par A(2 ; 6). Alors a = 6/2 = 3, donc f(x) = 3x.</p>

<h3>🔗 Lien avec la proportionnalité</h3>
<p>La fonction linéaire <strong>traduit une situation de proportionnalité</strong>.</p>
<p>Exemple : Le prix est proportionnel au nombre de kg. Si 1 kg coûte 3 €, alors le prix est f(x) = 3x.</p>

<table>
  <tr><th>Signe de a</th><th>Sens de variation</th><th>Allure de la droite</th></tr>
  <tr><td>a &gt; 0</td><td>Croissante</td><td>La droite « monte »</td></tr>
  <tr><td>a &lt; 0</td><td>Décroissante</td><td>La droite « descend »</td></tr>
  <tr><td>a = 0</td><td>Constante</td><td>Confondue avec l'axe des abscisses</td></tr>
</table>
`
        },
        {
          title: "Fonction affine",
          content: `
<h3>📏 Fonction affine</h3>
<p><strong>Définition :</strong> Une fonction affine est de la forme <strong>f(x) = ax + b</strong> où :</p>
<ul>
  <li><strong>a</strong> est le <strong>coefficient directeur</strong> (pente de la droite)</li>
  <li><strong>b</strong> est l'<strong>ordonnée à l'origine</strong> (valeur de f(0))</li>
</ul>

<h3>📐 Cas particuliers</h3>
<table>
  <tr><th>Condition</th><th>Type de fonction</th><th>Exemple</th></tr>
  <tr><td>b = 0</td><td>Fonction linéaire</td><td>f(x) = 3x</td></tr>
  <tr><td>a = 0</td><td>Fonction constante</td><td>f(x) = 5</td></tr>
</table>

<h3>📊 Représentation graphique</h3>
<p>La représentation graphique d'une fonction affine est une <strong>droite</strong>.</p>
<p>Pour la tracer, il suffit de <strong>deux points</strong> :</p>
<ul>
  <li>Le point (0 ; b) — ordonnée à l'origine</li>
  <li>Un autre point, par exemple (1 ; a + b)</li>
</ul>

<h3>🔧 Déterminer a et b</h3>
<p><strong>Calcul du coefficient directeur a</strong> à partir de deux points A(x₁ ; y₁) et B(x₂ ; y₂) :</p>
<p><strong>a = (y₂ − y₁) / (x₂ − x₁)</strong></p>
<p>Puis on trouve <strong>b</strong> en remplaçant dans f(x) = ax + b avec les coordonnées d'un point.</p>
<p>Exemple : A(1 ; 4) et B(3 ; 10).</p>
<p>a = (10 − 4) / (3 − 1) = 6/2 = 3.</p>
<p>f(1) = 3×1 + b = 4, donc b = 1. Ainsi <strong>f(x) = 3x + 1</strong>.</p>
`
        }
      ],
      quiz: [
        {
          question: "Soit f(x) = 5x − 2. Quelle est l'image de 3 par f ?",
          options: ["7", "13", "17", "−7"],
          correct: 1,
          explanation: "f(3) = 5 × 3 − 2 = 15 − 2 = 13."
        },
        {
          question: "La représentation graphique d'une fonction linéaire est :",
          options: ["Une parabole", "Une droite passant par l'origine", "Un cercle", "Une droite quelconque"],
          correct: 1,
          explanation: "f(x) = ax passe toujours par O(0 ; 0), c'est une droite passant par l'origine."
        },
        {
          question: "Soit f(x) = 2x + 3. Quel est l'antécédent de 9 ?",
          options: ["21", "3", "6", "15"],
          correct: 1,
          explanation: "On résout f(x) = 9 : 2x + 3 = 9 → 2x = 6 → x = 3."
        },
        {
          question: "Pour la fonction affine f(x) = −4x + 7, quelle est l'ordonnée à l'origine ?",
          options: ["−4", "4", "7", "−7"],
          correct: 2,
          explanation: "L'ordonnée à l'origine est b = 7 (la valeur de f(0))."
        },
        {
          question: "Quel est le coefficient directeur de la droite passant par A(1 ; 2) et B(4 ; 11) ?",
          options: ["3", "9", "4,5", "13"],
          correct: 0,
          explanation: "a = (11 − 2) / (4 − 1) = 9 / 3 = 3."
        },
        {
          question: "Si le coefficient directeur a est négatif, la fonction affine est :",
          options: ["Croissante", "Décroissante", "Constante", "Nulle"],
          correct: 1,
          explanation: "Si a < 0, la droite « descend » : la fonction est décroissante."
        }
      ]
    },

    // ========================
    // CHAPITRE 4 : Espace et géométrie
    // ========================
    {
      id: "geometrie",
      title: "Espace et géométrie",
      summary: "Théorèmes de Pythagore et de Thalès, trigonométrie, transformations et volumes.",
      fiches: [
        {
          title: "Théorème de Pythagore",
          content: `
<h3>📐 Théorème de Pythagore</h3>
<p><strong>Énoncé :</strong> Dans un triangle <strong>rectangle</strong>, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.</p>
<p><strong>Formule :</strong> Si le triangle ABC est rectangle en C :</p>
<p style="text-align:center; font-size:1.2em;"><strong>AB² = AC² + BC²</strong></p>
<p>(AB est l'hypoténuse, le côté le plus long, opposé à l'angle droit.)</p>

<h3>✏️ Exemple : Calculer une longueur</h3>
<p>Triangle rectangle en C avec AC = 3 cm et BC = 4 cm.</p>
<p>AB² = 3² + 4² = 9 + 16 = 25, donc <strong>AB = √25 = 5 cm</strong>.</p>

<h3>🔄 Réciproque du théorème de Pythagore</h3>
<p><strong>Énoncé :</strong> Si dans un triangle ABC, on a AB² = AC² + BC², alors le triangle est <strong>rectangle en C</strong>.</p>
<p><strong>Utilité :</strong> Prouver qu'un triangle est (ou n'est pas) rectangle.</p>

<h3>✏️ Exemple : Démontrer qu'un triangle est rectangle</h3>
<p>Triangle avec AB = 13, AC = 5, BC = 12.</p>
<ul>
  <li>AB² = 169</li>
  <li>AC² + BC² = 25 + 144 = 169</li>
  <li>AB² = AC² + BC², donc par la <strong>réciproque du théorème de Pythagore</strong>, le triangle ABC est rectangle en C.</li>
</ul>
`
        },
        {
          title: "Théorème de Thalès",
          content: `
<h3>📐 Théorème de Thalès</h3>
<p><strong>Configuration :</strong> Deux droites sécantes coupées par deux droites parallèles.</p>
<p>Si (BC) // (DE), alors :</p>
<p style="text-align:center; font-size:1.1em;"><strong>AB/AD = AC/AE = BC/DE</strong></p>

<h3>✏️ Exemple de calcul</h3>
<p>Dans un triangle ADE, B est sur [AD] et C est sur [AE], avec (BC) // (DE).</p>
<p>AB = 3, AD = 5, AC = 4. Calculer AE.</p>
<p>D'après le théorème de Thalès : AB/AD = AC/AE</p>
<p>3/5 = 4/AE → AE = (4 × 5) / 3 = <strong>20/3 ≈ 6,67</strong></p>

<h3>🔄 Réciproque du théorème de Thalès</h3>
<p>Si <strong>AB/AD = AC/AE</strong> et si les points B, A, D d'une part et C, A, E d'autre part sont alignés <strong>dans le même ordre</strong>, alors <strong>(BC) // (DE)</strong>.</p>

<h3>📝 Rédaction au Brevet</h3>
<ol>
  <li>Identifier la configuration (triangle ou papillon)</li>
  <li>Citer le théorème : « D'après le théorème de Thalès dans le triangle… »</li>
  <li>Écrire les rapports égaux</li>
  <li>Effectuer le calcul (produit en croix)</li>
  <li>Conclure</li>
</ol>
`
        },
        {
          title: "Trigonométrie",
          content: `
<h3>📐 Trigonométrie dans le triangle rectangle</h3>
<p>Dans un triangle rectangle, on définit trois rapports trigonométriques pour un angle aigu :</p>
<table>
  <tr><th>Rapport</th><th>Formule</th><th>Moyen mnémotechnique</th></tr>
  <tr><td><strong>Cosinus</strong></td><td>cos(α) = côté adjacent / hypoténuse</td><td><strong>CAH</strong></td></tr>
  <tr><td><strong>Sinus</strong></td><td>sin(α) = côté opposé / hypoténuse</td><td><strong>SOH</strong></td></tr>
  <tr><td><strong>Tangente</strong></td><td>tan(α) = côté opposé / côté adjacent</td><td><strong>TOA</strong></td></tr>
</table>
<p><strong>Moyen mnémotechnique :</strong> <em>« SOH-CAH-TOA »</em></p>

<h3>✏️ Exemple : Calculer un côté</h3>
<p>Triangle ABC rectangle en B. Angle A = 35°, AB = 8 cm. Calculer BC.</p>
<p>tan(35°) = BC / AB = BC / 8</p>
<p>BC = 8 × tan(35°) ≈ 8 × 0,700 ≈ <strong>5,6 cm</strong></p>

<h3>✏️ Exemple : Calculer un angle</h3>
<p>Triangle rectangle en C. AC = 5 cm, BC = 3 cm. Calculer l'angle A.</p>
<p>tan(A) = BC / AC = 3/5 = 0,6</p>
<p>A = arctan(0,6) ≈ <strong>31°</strong></p>

<h3>📋 Valeurs remarquables</h3>
<table>
  <tr><th>Angle</th><th>cos</th><th>sin</th><th>tan</th></tr>
  <tr><td>30°</td><td>√3/2 ≈ 0,866</td><td>1/2 = 0,5</td><td>√3/3 ≈ 0,577</td></tr>
  <tr><td>45°</td><td>√2/2 ≈ 0,707</td><td>√2/2 ≈ 0,707</td><td>1</td></tr>
  <tr><td>60°</td><td>1/2 = 0,5</td><td>√3/2 ≈ 0,866</td><td>√3 ≈ 1,732</td></tr>
</table>
`
        },
        {
          title: "Transformations et volumes",
          content: `
<h3>🔄 Les transformations du plan</h3>
<table>
  <tr><th>Transformation</th><th>Propriété principale</th></tr>
  <tr><td><strong>Symétrie axiale</strong></td><td>L'axe est la médiatrice de chaque segment [MM']</td></tr>
  <tr><td><strong>Symétrie centrale</strong></td><td>Le centre est le milieu de chaque segment [MM']</td></tr>
  <tr><td><strong>Translation</strong></td><td>Chaque point est déplacé de la même direction, même sens, même distance</td></tr>
  <tr><td><strong>Rotation</strong></td><td>Chaque point tourne d'un même angle autour d'un centre</td></tr>
  <tr><td><strong>Homothétie</strong></td><td>Agrandissement ou réduction de rapport k depuis un centre</td></tr>
</table>
<p><strong>Homothétie de rapport k :</strong> Les longueurs sont multipliées par |k|, les aires par k², les volumes par |k|³.</p>

<h3>📦 Volumes des solides</h3>
<table>
  <tr><th>Solide</th><th>Formule du volume</th></tr>
  <tr><td>Cube (côté a)</td><td>V = a³</td></tr>
  <tr><td>Pavé droit (L × l × h)</td><td>V = L × l × h</td></tr>
  <tr><td>Cylindre (rayon r, hauteur h)</td><td>V = π × r² × h</td></tr>
  <tr><td>Prisme droit</td><td>V = Aire de la base × h</td></tr>
  <tr><td>Cône (rayon r, hauteur h)</td><td>V = (1/3) × π × r² × h</td></tr>
  <tr><td>Pyramide</td><td>V = (1/3) × Aire de la base × h</td></tr>
  <tr><td>Sphère (rayon r)</td><td>V = (4/3) × π × r³</td></tr>
</table>

<h3>🔵 Aire de la sphère</h3>
<p><strong>A = 4 × π × r²</strong></p>
`
        }
      ],
      quiz: [
        {
          question: "Dans un triangle rectangle, l'hypoténuse mesure 10 cm et un côté mesure 6 cm. Quelle est la longueur du troisième côté ?",
          options: ["4 cm", "8 cm", "√136 cm", "16 cm"],
          correct: 1,
          explanation: "c² = 10² − 6² = 100 − 36 = 64, donc c = √64 = 8 cm."
        },
        {
          question: "Quelle formule correspond au sinus d'un angle ?",
          options: ["Adjacent / Hypoténuse", "Opposé / Hypoténuse", "Opposé / Adjacent", "Hypoténuse / Opposé"],
          correct: 1,
          explanation: "sin(α) = côté opposé / hypoténuse (SOH dans SOH-CAH-TOA)."
        },
        {
          question: "Si (BC) // (DE) avec AB/AD = 2/5 et BC = 4, que vaut DE ?",
          options: ["8", "10", "1,6", "20"],
          correct: 1,
          explanation: "D'après Thalès : BC/DE = AB/AD, soit 4/DE = 2/5, donc DE = 4×5/2 = 10."
        },
        {
          question: "Quel est le volume d'une sphère de rayon 3 cm ? (en termes de π)",
          options: ["36π cm³", "27π cm³", "12π cm³", "108π cm³"],
          correct: 0,
          explanation: "V = (4/3) × π × 3³ = (4/3) × 27π = 36π cm³."
        },
        {
          question: "Quel est le volume d'un cône de rayon 6 cm et de hauteur 10 cm ? (en termes de π)",
          options: ["360π cm³", "120π cm³", "60π cm³", "240π cm³"],
          correct: 1,
          explanation: "V = (1/3) × π × 6² × 10 = (1/3) × 360π = 120π cm³."
        },
        {
          question: "Dans une homothétie de rapport 3, par combien l'aire est-elle multipliée ?",
          options: ["3", "6", "9", "27"],
          correct: 2,
          explanation: "Dans une homothétie de rapport k, les aires sont multipliées par k² = 3² = 9."
        }
      ]
    },

    // ========================
    // CHAPITRE 5 : Algorithmique et programmation
    // ========================
    {
      id: "algorithmique",
      title: "Algorithmique et programmation",
      summary: "Bases de la programmation avec Scratch : variables, boucles, conditions et algorithmes.",
      fiches: [
        {
          title: "Les bases de Scratch",
          content: `
<h3>🖥️ L'environnement Scratch</h3>
<p><strong>Scratch</strong> est un langage de programmation visuel où l'on assemble des <strong>blocs</strong> pour créer des programmes.</p>

<h3>🧱 Les catégories de blocs</h3>
<table>
  <tr><th>Catégorie</th><th>Couleur</th><th>Exemples</th></tr>
  <tr><td>Mouvement</td><td>Bleu</td><td>Avancer, tourner, aller à x/y</td></tr>
  <tr><td>Apparence</td><td>Violet</td><td>Dire, changer de costume</td></tr>
  <tr><td>Son</td><td>Rose</td><td>Jouer un son</td></tr>
  <tr><td>Événements</td><td>Jaune</td><td>Quand le drapeau vert est cliqué</td></tr>
  <tr><td>Contrôle</td><td>Orange</td><td>Si…alors, répéter, attendre</td></tr>
  <tr><td>Capteurs</td><td>Bleu clair</td><td>Touche pressée, souris</td></tr>
  <tr><td>Opérateurs</td><td>Vert</td><td>+, −, ×, /, =, et, ou</td></tr>
  <tr><td>Variables</td><td>Orange foncé</td><td>Créer, modifier une variable</td></tr>
</table>

<h3>📝 Variables</h3>
<p>Une <strong>variable</strong> est un espace mémoire qui stocke une valeur (nombre ou texte).</p>
<ul>
  <li><strong>Mettre [variable] à [valeur]</strong> : initialiser ou remplacer la valeur</li>
  <li><strong>Ajouter [valeur] à [variable]</strong> : modifier la valeur existante</li>
</ul>
`
        },
        {
          title: "Boucles, conditions et algorithmes",
          content: `
<h3>🔁 Les boucles</h3>
<p>Les boucles permettent de <strong>répéter</strong> des instructions.</p>
<table>
  <tr><th>Bloc Scratch</th><th>Description</th></tr>
  <tr><td><strong>Répéter [n] fois</strong></td><td>Exécute les instructions n fois</td></tr>
  <tr><td><strong>Répéter indéfiniment</strong></td><td>Boucle infinie (jusqu'à arrêt du programme)</td></tr>
  <tr><td><strong>Répéter jusqu'à [condition]</strong></td><td>Répète tant que la condition n'est pas vraie</td></tr>
</table>

<h3>❓ Les conditions (instructions conditionnelles)</h3>
<table>
  <tr><th>Bloc Scratch</th><th>Description</th></tr>
  <tr><td><strong>Si [condition] alors</strong></td><td>Exécute les instructions si la condition est vraie</td></tr>
  <tr><td><strong>Si [condition] alors … sinon</strong></td><td>Deux blocs d'instructions selon que la condition est vraie ou fausse</td></tr>
</table>

<h3>⚙️ Algorithmes classiques au Brevet</h3>
<ul>
  <li><strong>Tracer un carré :</strong> Répéter 4 fois { Avancer de L ; Tourner de 90° }</li>
  <li><strong>Tracer un triangle équilatéral :</strong> Répéter 3 fois { Avancer de L ; Tourner de 120° }</li>
  <li><strong>Tracer un polygone régulier à n côtés :</strong> Répéter n fois { Avancer de L ; Tourner de 360/n degrés }</li>
</ul>

<h3>💡 Astuce pour le Brevet</h3>
<p>Pour comprendre un programme Scratch :</p>
<ol>
  <li><strong>Suivre les instructions pas à pas</strong> en notant les valeurs des variables</li>
  <li>Faire un <strong>tableau de suivi</strong> des variables à chaque étape</li>
  <li>Repérer les <strong>boucles</strong> et compter les itérations</li>
  <li>Vérifier les <strong>conditions</strong> à chaque passage</li>
</ol>

<h3>📋 Exemple de suivi de programme</h3>
<p>Programme : Mettre x à 1. Répéter 4 fois { Ajouter 3 à x }.</p>
<table>
  <tr><th>Étape</th><th>Valeur de x</th></tr>
  <tr><td>Initialisation</td><td>1</td></tr>
  <tr><td>Après 1ʳᵉ répétition</td><td>4</td></tr>
  <tr><td>Après 2ᵉ répétition</td><td>7</td></tr>
  <tr><td>Après 3ᵉ répétition</td><td>10</td></tr>
  <tr><td>Après 4ᵉ répétition</td><td>13</td></tr>
</table>
<p>Valeur finale de x : <strong>13</strong></p>
`
        }
      ],
      quiz: [
        {
          question: "Quel angle de rotation faut-il utiliser pour tracer un hexagone régulier dans Scratch ?",
          options: ["30°", "45°", "60°", "90°"],
          correct: 2,
          explanation: "Pour un polygone régulier à n côtés, l'angle est 360°/n. Pour un hexagone : 360/6 = 60°."
        },
        {
          question: "Que fait le bloc « Répéter jusqu'à [condition] » ?",
          options: [
            "Il répète tant que la condition est vraie",
            "Il répète tant que la condition est fausse",
            "Il exécute une seule fois",
            "Il ne fait rien"
          ],
          correct: 1,
          explanation: "« Répéter jusqu'à [condition] » répète les instructions tant que la condition n'est PAS encore vraie (c'est-à-dire tant qu'elle est fausse)."
        },
        {
          question: "Programme : Mettre x à 5. Répéter 3 fois { Ajouter 2 à x }. Quelle est la valeur finale de x ?",
          options: ["7", "9", "11", "13"],
          correct: 2,
          explanation: "Départ : x = 5. Après 1ʳᵉ boucle : 7. Après 2ᵉ : 9. Après 3ᵉ : 11."
        },
        {
          question: "Quelle est la différence entre « Si…alors » et « Si…alors…sinon » ?",
          options: [
            "Il n'y a pas de différence",
            "« Si…alors…sinon » permet de gérer le cas où la condition est fausse",
            "« Si…alors » est plus rapide",
            "« Si…alors…sinon » ne fonctionne que dans les boucles"
          ],
          correct: 1,
          explanation: "« Si…alors…sinon » comporte deux blocs : un pour la condition vraie et un pour la condition fausse."
        },
        {
          question: "Pour tracer un carré de côté 100 dans Scratch, combien de fois faut-il répéter les instructions « Avancer de 100 » et « Tourner de 90° » ?",
          options: ["2 fois", "3 fois", "4 fois", "5 fois"],
          correct: 2,
          explanation: "Un carré a 4 côtés, il faut donc répéter 4 fois les instructions Avancer + Tourner."
        }
      ]
    }
  ,
{
    "id": "maths-supplementaire",
    "title": "Chapitre Supplémentaire : Probabilités et Statistiques",
    "summary": "Calculer des probabilités simples, moyennes, médianes et analyser des séries statistiques.",
    "fiches": [
        {
            "title": "Les Probabilités",
            "content": "<h3>Probabilités simples</h3><p>La probabilité d'un événement est comprise entre 0 et 1. C'est le nombre d'issues favorables divisé par le nombre total d'issues.</p><h3>La Médiane</h3><p>C'est la valeur qui partage une série statistique ordonnée en deux groupes de même effectif.</p>"
        }
    ],
    "quiz": [
        {
            "question": "Quelle est la probabilité d'obtenir un nombre pair avec un dé classique à 6 faces ?",
            "options": [
                "1/6",
                "1/2",
                "1/3",
                "2/3"
            ],
            "correct": 1,
            "explanation": "Il y a 3 nombres pairs (2, 4, 6) sur 6 faces, donc 3/6 = 1/2."
        }
    ]
},
  {
    "id": "maths-final",
    "title": "🎯 Grand Quiz Final Type Brevet",
    "summary": "Série de 31 questions incluant un sujet type Brevet.",
    "fiches": [],
    "quiz": [
        {
            "q": "Quelle est la valeur de √144 ?",
            "o": [
                "10",
                "12",
                "14",
                "144"
            ],
            "c": 1,
            "e": "12 × 12 = 144."
        },
        {
            "q": "Comment s'appelle le côté le plus long d'un triangle rectangle ?",
            "o": [
                "L'hypoténuse",
                "La cathète",
                "L'apothème",
                "La diagonale"
            ],
            "c": 0,
            "e": "L'hypoténuse est le côté opposé à l'angle droit."
        },
        {
            "q": "Développer : (a+b)² =",
            "o": [
                "a² + b²",
                "a² - 2ab + b²",
                "a² + 2ab + b²",
                "a² + b"
            ],
            "c": 2,
            "e": "C'est la 1ère identité remarquable : (a+b)² = a² + 2ab + b²."
        },
        {
            "q": "Que dit le théorème de Pythagore ?",
            "o": [
                "AB + BC = AC",
                "AB² + BC² = AC²",
                "AB/AC = BC/AB",
                "AB = BC"
            ],
            "c": 1,
            "e": "Dans un triangle rectangle en B, le carré de l'hypoténuse égale la somme des carrés des autres côtés."
        },
        {
            "q": "Un article à 50€ subit une remise de 20%. Quel est son nouveau prix ?",
            "o": [
                "30€",
                "40€",
                "45€",
                "60€"
            ],
            "c": 1,
            "e": "20% de 50€ = 10€. 50 - 10 = 40€."
        },
        {
            "q": "Comment s'écrit 0,00045 en notation scientifique ?",
            "o": [
                "45 × 10^-5",
                "4,5 × 10^-4",
                "4,5 × 10^4",
                "4.5 × 10^-3"
            ],
            "c": 1,
            "e": "On décale la virgule de 4 crans vers la droite, donc 4,5 × 10^(-4)."
        },
        {
            "q": "Que vaut 3^4 ?",
            "o": [
                "12",
                "81",
                "27",
                "64"
            ],
            "c": 1,
            "e": "3 × 3 × 3 × 3 = 9 × 9 = 81."
        },
        {
            "q": "Le théorème de Thalès sert principalement à...",
            "o": [
                "Calculer des angles",
                "Calculer des longueurs proportionnelles",
                "Calculer des aires",
                "Calculer des probabilités"
            ],
            "c": 1,
            "e": "Thalès est utilisé pour calculer des longueurs dans des triangles avec des droites parallèles."
        },
        {
            "q": "Dans une fonction linéaire f(x) = ax, que représente 'a' ?",
            "o": [
                "L'ordonnée à l'origine",
                "Le coefficient directeur",
                "L'antécédent",
                "L'image"
            ],
            "c": 1,
            "e": "Dans une fonction linéaire ou affine, 'a' est le coefficient directeur ou la pente."
        },
        {
            "q": "Si la probabilité d'un événement est de 0,2, quelle est celle de son événement contraire ?",
            "o": [
                "0,8",
                "1,2",
                "0,5",
                "0,2"
            ],
            "c": 0,
            "e": "La somme des probabilités est 1. Donc 1 - 0,2 = 0,8."
        },
        {
            "q": "Laquelle de ces fractions est irréductible ?",
            "o": [
                "4/6",
                "5/10",
                "3/7",
                "8/12"
            ],
            "c": 2,
            "e": "3 et 7 sont premiers entre eux, on ne peut plus diviser."
        },
        {
            "q": "Quel est le volume d'un cylindre de rayon r et de hauteur h ?",
            "o": [
                "2 × π × r × h",
                "π × r² × h",
                "(1/3) × π × r² × h",
                "π × r × h"
            ],
            "c": 1,
            "e": "Volume d'un prisme ou cylindre = Aire de la base (π × r²) × hauteur."
        },
        {
            "q": "Résoudre l'équation 2x + 4 = 10",
            "o": [
                "x = 2",
                "x = 3",
                "x = 6",
                "x = 7"
            ],
            "c": 1,
            "e": "2x = 10 - 4 = 6. Donc x = 6/2 = 3."
        },
        {
            "q": "Quelle est la somme des angles d'un triangle ?",
            "o": [
                "90°",
                "180°",
                "360°",
                "Dépend du triangle"
            ],
            "c": 1,
            "e": "Dans la géométrie euclidienne, la somme des angles d'un triangle vaut toujours 180°."
        },
        {
            "q": "Quelle est la formule du cosinus dans un triangle rectangle ?",
            "o": [
                "Opposé / Hypoténuse",
                "Opposé / Adjacent",
                "Adjacent / Hypoténuse",
                "Hypoténuse / Adjacent"
            ],
            "c": 2,
            "e": "Moyen mnémotechnique : CAH (Cosinus = Adjacent / Hypoténuse). SOH CAH TOA."
        },
        {
            "q": "Quel est le PGCD de 12 et 18 ?",
            "o": [
                "2",
                "3",
                "6",
                "36"
            ],
            "c": 2,
            "e": "Les diviseurs communs sont 1, 2, 3, 6. Le Plus Grand est 6."
        },
        {
            "q": "Factoriser : x² - 9",
            "o": [
                "x(x-9)",
                "(x-3)²",
                "(x-3)(x+3)",
                "(x+9)(x-1)"
            ],
            "c": 2,
            "e": "Identité remarquable a² - b² = (a-b)(a+b), ici avec a=x et b=3."
        },
        {
            "q": "Si une voiture roule à 120 km/h, combien de kilomètres parcourt-elle en 15 minutes ?",
            "o": [
                "15 km",
                "20 km",
                "30 km",
                "40 km"
            ],
            "c": 2,
            "e": "15 minutes = 1/4 d'heure. 120 / 4 = 30 km."
        },
        {
            "q": "Une fonction affine est de la forme...",
            "o": [
                "f(x) = x²",
                "f(x) = ax + b",
                "f(x) = a/x",
                "f(x) = ax"
            ],
            "c": 1,
            "e": "Une fonction affine a la forme ax + b (droite ne passant pas forcément par l'origine)."
        },
        {
            "q": "Comment calcule-t-on la moyenne d'une série statistique ?",
            "o": [
                "Somme des valeurs / Effectif total",
                "Plus grande valeur - plus petite",
                "Valeur du milieu",
                "Valeur la plus fréquente"
            ],
            "c": 0,
            "e": "La moyenne se calcule en additionnant toutes les valeurs et en divisant par l'effectif total."
        },
        {
            "q": "Qu'est-ce que la médiane d'une série statistique ?",
            "o": [
                "La moyenne",
                "L'étendue",
                "La valeur qui coupe la série ordonnée en deux moitiés égales",
                "La valeur la plus fréquente"
            ],
            "c": 2,
            "e": "La médiane sépare la population en deux groupes de même effectif."
        },
        {
            "q": "Que vaut 10^0 ?",
            "o": [
                "0",
                "1",
                "10",
                "Indéfini"
            ],
            "c": 1,
            "e": "Tout nombre non nul élevé à la puissance 0 vaut 1."
        },
        {
            "q": "Dans un tableur, par quel symbole commence une formule ?",
            "o": [
                "+",
                "-",
                "/",
                "="
            ],
            "c": 3,
            "e": "Une formule (comme =SOMME) commence toujours par le signe =."
        },
        {
            "q": "Que permet de calculer le cosinus d'un angle aigu ?",
            "o": [
                "Son aire",
                "Une longueur ou la mesure de l'angle",
                "Son volume",
                "Sa probabilité"
            ],
            "c": 1,
            "e": "La trigonométrie relie les angles et les longueurs dans un triangle rectangle."
        },
        {
            "q": "L'aire d'un disque de rayon r est :",
            "o": [
                "2 × π × r",
                "π × r²",
                "π × r",
                "r²"
            ],
            "c": 1,
            "e": "L'aire est π × r² (le périmètre est 2 × π × r)."
        },
        {
            "q": "Si un plan a pour échelle 1/100, cela signifie que :",
            "o": [
                "1 cm sur le plan = 100 m",
                "1 cm sur le plan = 1 m",
                "1 cm sur le plan = 100 km",
                "100 cm sur le plan = 1 cm réel"
            ],
            "c": 1,
            "e": "1 cm sur le plan représente 100 cm (soit 1 m) dans la réalité."
        },
        {
            "q": "L'étendue d'une série est :",
            "o": [
                "Valeur max - Valeur min",
                "La somme totale",
                "La valeur médiane",
                "Le produit des valeurs"
            ],
            "c": 0,
            "e": "L'étendue est la différence entre la plus grande et la plus petite valeur."
        },
        {
            "q": "Quel est le résultat de -5 × (-3) ?",
            "o": [
                "-15",
                "-8",
                "15",
                "8"
            ],
            "c": 2,
            "e": "Le produit de deux nombres négatifs est positif (- par - = +)."
        },
        {
            "q": "Un agrandissement de rapport k (k>1) multiplie les volumes par :",
            "o": [
                "k",
                "k²",
                "k³",
                "k+3"
            ],
            "c": 2,
            "e": "Les longueurs sont multipliées par k, les aires par k², les volumes par k³."
        },
        {
            "q": "Quelle instruction dans Scratch permet de répéter une action à l'infini ?",
            "o": [
                "répéter 10 fois",
                "répéter indéfiniment",
                "si... alors",
                "attendre"
            ],
            "c": 1,
            "e": "La boucle 'répéter indéfiniment' tourne sans s'arrêter."
        },
        {
            "q": "[SUJET TYPE BREVET] Un artisan veut poser du carrelage sur une terrasse rectangulaire de 4m par 5m. Les carreaux font 50cm de côté. Combien lui en faut-il au minimum ?",
            "o": [
                "20",
                "40",
                "80",
                "100"
            ],
            "c": 2,
            "e": "Aire de la terrasse = 4×5 = 20 m². Aire d'un carreau = 0,5×0,5 = 0,25 m². Nombre = 20 / 0,25 = 80 carreaux."
        }
    ]
}
  ]
};
