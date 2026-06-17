const FRANCAIS_DATA = {
  id: "francais",
  name: "Français",
  icon: "📖",
  color: "#E74C3C",
  chapters: [
    // ──────────────────────────────────────────────
    // CHAPITRE 1 – Grammaire et analyse
    // ──────────────────────────────────────────────
    {
      id: "grammaire",
      title: "Grammaire et analyse",
      summary: "Classes grammaticales, fonctions dans la phrase, propositions et conjugaison : les outils indispensables pour l'épreuve de grammaire du Brevet.",
      fiches: [
        {
          title: "Les classes grammaticales (natures)",
          content: `
<h3>🔤 Les classes grammaticales</h3>
<p>La <strong>classe grammaticale</strong> (ou <em>nature</em>) d'un mot est son identité : elle ne change jamais, quel que soit le contexte.</p>

<h4>Les classes variables</h4>
<table>
  <tr><th>Classe</th><th>Définition</th><th>Exemples</th></tr>
  <tr><td><strong>Nom</strong></td><td>Désigne un être, une chose, une idée</td><td>chat, liberté, Paris</td></tr>
  <tr><td><strong>Déterminant</strong></td><td>Précède le nom et le détermine</td><td>le, une, ces, mon, quelques</td></tr>
  <tr><td><strong>Adjectif qualificatif</strong></td><td>Qualifie ou caractérise le nom</td><td>grand, belle, intelligent</td></tr>
  <tr><td><strong>Pronom</strong></td><td>Remplace un nom ou un GN</td><td>il, celle-ci, dont, qui, le mien</td></tr>
  <tr><td><strong>Verbe</strong></td><td>Exprime une action ou un état</td><td>courir, être, sembler</td></tr>
</table>

<h4>Les classes invariables</h4>
<table>
  <tr><th>Classe</th><th>Définition</th><th>Exemples</th></tr>
  <tr><td><strong>Adverbe</strong></td><td>Modifie un verbe, un adjectif ou un autre adverbe</td><td>vite, très, ne…pas, hier</td></tr>
  <tr><td><strong>Préposition</strong></td><td>Introduit un complément</td><td>à, de, par, pour, sans, avec</td></tr>
  <tr><td><strong>Conjonction de coordination</strong></td><td>Relie deux éléments de même fonction</td><td>mais, ou, et, donc, or, ni, car</td></tr>
  <tr><td><strong>Conjonction de subordination</strong></td><td>Introduit une proposition subordonnée</td><td>que, quand, parce que, bien que</td></tr>
  <tr><td><strong>Interjection</strong></td><td>Exprime une émotion</td><td>hélas, oh, bravo</td></tr>
</table>

<h4>⚠️ Astuce Brevet</h4>
<p>Pour trouver la nature d'un mot, pose-toi la question : <em>« Ce mot, qu'est-ce que c'est dans le dictionnaire ? »</em>. Sa nature ne change jamais.</p>
<ul>
  <li><strong>« que »</strong> peut être pronom relatif, conjonction de subordination, adverbe exclamatif ou pronom interrogatif → bien analyser le contexte.</li>
  <li>Les <strong>pronoms relatifs</strong> : qui, que, quoi, dont, où, lequel…</li>
</ul>`
        },
        {
          title: "Les fonctions dans la phrase",
          content: `
<h3>⚙️ Les fonctions grammaticales</h3>
<p>La <strong>fonction</strong> d'un mot ou d'un groupe de mots est le <em>rôle</em> qu'il joue dans la phrase. Elle change selon la phrase.</p>

<h4>Fonctions par rapport au verbe</h4>
<table>
  <tr><th>Fonction</th><th>Question</th><th>Exemple</th></tr>
  <tr><td><strong>Sujet</strong></td><td>Qui est-ce qui + verbe ?</td><td><em>Le chat</em> dort.</td></tr>
  <tr><td><strong>COD</strong> (Complément d'objet direct)</td><td>Sujet + verbe + qui/quoi ?</td><td>Je mange <em>une pomme</em>.</td></tr>
  <tr><td><strong>COI</strong> (Complément d'objet indirect)</td><td>Sujet + verbe + à qui/de quoi ?</td><td>Il parle <em>à son ami</em>.</td></tr>
  <tr><td><strong>Attribut du sujet</strong></td><td>Après un verbe d'état (être, sembler, paraître…)</td><td>Elle est <em>heureuse</em>.</td></tr>
  <tr><td><strong>Complément d'agent</strong></td><td>Par qui ? (voix passive)</td><td>Le gâteau est mangé <em>par les enfants</em>.</td></tr>
</table>

<h4>Compléments circonstanciels</h4>
<ul>
  <li><strong>CC de temps</strong> : <em>Hier</em>, il est parti. (Quand ?)</li>
  <li><strong>CC de lieu</strong> : Il joue <em>dans le jardin</em>. (Où ?)</li>
  <li><strong>CC de manière</strong> : Elle chante <em>avec passion</em>. (Comment ?)</li>
  <li><strong>CC de cause</strong> : Il pleure <em>de joie</em>. (Pourquoi ?)</li>
  <li><strong>CC de but</strong> : Il travaille <em>pour réussir</em>. (Dans quel but ?)</li>
  <li><strong>CC de conséquence</strong> : Il est <em>si fatigué qu'il s'endort</em>.</li>
</ul>

<h4>Fonctions dans le groupe nominal</h4>
<ul>
  <li><strong>Épithète</strong> : adjectif directement lié au nom → un <em>grand</em> arbre</li>
  <li><strong>Complément du nom</strong> : introduit par une préposition → un livre <em>de cuisine</em></li>
  <li><strong>Apposition</strong> : séparé du nom par une virgule → <em>Paris, capitale de la France</em>, est belle.</li>
</ul>

<h4>⚠️ Ne pas confondre COD et attribut du sujet</h4>
<p>L'<strong>attribut du sujet</strong> suit un <strong>verbe d'état</strong> (être, paraître, sembler, devenir, demeurer, rester, avoir l'air…). Le <strong>COD</strong> suit un verbe d'action transitif direct.</p>`
        },
        {
          title: "Les propositions",
          content: `
<h3>📐 Les types de propositions</h3>
<p>Une <strong>proposition</strong> est un groupe de mots organisé autour d'un <strong>verbe conjugué</strong>. Une phrase peut contenir une ou plusieurs propositions.</p>

<h4>Phrase simple vs phrase complexe</h4>
<ul>
  <li><strong>Phrase simple</strong> = 1 seul verbe conjugué = 1 proposition.</li>
  <li><strong>Phrase complexe</strong> = 2 ou plusieurs verbes conjugués = 2 ou plusieurs propositions.</li>
</ul>

<h4>Les trois types de propositions</h4>
<table>
  <tr><th>Type</th><th>Définition</th><th>Exemple</th></tr>
  <tr><td><strong>Proposition indépendante</strong></td><td>Ne dépend d'aucune autre et aucune ne dépend d'elle</td><td><em>Le soleil brille.</em></td></tr>
  <tr><td><strong>Proposition principale</strong></td><td>Contient une subordonnée qui dépend d'elle</td><td><em>Je pense</em> qu'il viendra.</td></tr>
  <tr><td><strong>Proposition subordonnée</strong></td><td>Dépend de la principale, introduite par un mot subordonnant</td><td>Je pense <em>qu'il viendra</em>.</td></tr>
</table>

<h4>Les types de subordonnées</h4>
<ul>
  <li><strong>Subordonnée relative</strong> : introduite par un pronom relatif (qui, que, dont, où…). Complète un nom (fonction : complément de l'antécédent). → L'homme <em>qui court</em> est mon père.</li>
  <li><strong>Subordonnée conjonctive complétive</strong> : introduite par <em>que</em>. Fonction : COD du verbe principal. → Je sais <em>que tu as raison</em>.</li>
  <li><strong>Subordonnée conjonctive circonstancielle</strong> : introduite par une conjonction de subordination. Fonction : CC (temps, cause, but, conséquence, concession, condition…).
    <ul>
      <li>Temps : <em>quand, lorsque, avant que, après que…</em></li>
      <li>Cause : <em>parce que, puisque, comme…</em></li>
      <li>But : <em>pour que, afin que…</em></li>
      <li>Condition : <em>si…</em></li>
      <li>Concession : <em>bien que, même si…</em></li>
    </ul>
  </li>
  <li><strong>Subordonnée interrogative indirecte</strong> : introduite par <em>si, ce que, qui, comment, pourquoi…</em> → Je me demande <em>si tu viendras</em>.</li>
</ul>

<h4>Les liens entre propositions</h4>
<ul>
  <li><strong>Juxtaposition</strong> : séparées par une virgule ou un point-virgule → Il pleut, je reste chez moi.</li>
  <li><strong>Coordination</strong> : reliées par une conjonction de coordination → Il pleut <em>mais</em> je sors.</li>
  <li><strong>Subordination</strong> : une proposition dépend de l'autre → Je sors <em>bien qu'</em>il pleuve.</li>
</ul>`
        },
        {
          title: "La conjugaison : temps et valeurs",
          content: `
<h3>🕰️ Conjugaison – Les temps essentiels au Brevet</h3>

<h4>Les temps de l'indicatif</h4>
<table>
  <tr><th>Temps</th><th>Valeurs principales</th><th>Exemple</th></tr>
  <tr><td><strong>Présent</strong></td><td>Énonciation, habitude, vérité générale, narration</td><td>L'eau <em>bout</em> à 100 °C.</td></tr>
  <tr><td><strong>Imparfait</strong></td><td>Description, habitude passée, arrière-plan du récit</td><td>Il <em>faisait</em> beau ce jour-là.</td></tr>
  <tr><td><strong>Passé simple</strong></td><td>Action brève, premier plan du récit (langue écrite)</td><td>Soudain, il <em>cria</em>.</td></tr>
  <tr><td><strong>Passé composé</strong></td><td>Action achevée, résultat présent, récit oral</td><td>J'<em>ai mangé</em> une pomme.</td></tr>
  <tr><td><strong>Plus-que-parfait</strong></td><td>Action antérieure à une autre action passée</td><td>Il <em>avait fini</em> quand je suis arrivé.</td></tr>
  <tr><td><strong>Futur simple</strong></td><td>Action à venir, promesse, prédiction</td><td>Demain, il <em>pleuvra</em>.</td></tr>
  <tr><td><strong>Conditionnel présent</strong></td><td>Hypothèse, souhait, politesse, futur dans le passé</td><td>J'<em>aimerais</em> voyager.</td></tr>
</table>

<h4>Le subjonctif présent</h4>
<p>Utilisé après des verbes exprimant le <strong>souhait, le doute, la volonté, l'obligation, le sentiment</strong> et après certaines conjonctions (<em>bien que, pour que, avant que…</em>).</p>
<p>Exemple : Il faut que tu <em>fasses</em> tes devoirs.</p>

<h4>L'impératif présent</h4>
<p>Exprime un <strong>ordre, un conseil ou une interdiction</strong>. Pas de sujet exprimé. 3 personnes seulement (tu, nous, vous).</p>
<p>⚠️ Pas de <strong>-s</strong> à la 2<sup>e</sup> personne du singulier pour les verbes du 1<sup>er</sup> groupe : <em>Mange !</em> (sauf devant « en » et « y » : <em>Manges-en !</em>)</p>

<h4>Valeurs du présent (détail)</h4>
<ul>
  <li><strong>Présent d'énonciation</strong> : au moment où l'on parle → <em>Je te parle.</em></li>
  <li><strong>Présent de vérité générale</strong> : fait toujours vrai → <em>La Terre tourne autour du Soleil.</em></li>
  <li><strong>Présent d'habitude</strong> : action répétée → <em>Je me lève à 7 h.</em></li>
  <li><strong>Présent de narration</strong> : rend le récit vivant → <em>En 1789, le peuple prend la Bastille.</em></li>
</ul>

<h4>Imparfait vs passé simple</h4>
<ul>
  <li><strong>Imparfait</strong> = arrière-plan, description, durée, habitude.</li>
  <li><strong>Passé simple</strong> = premier plan, action brève, ponctuelle, succession.</li>
</ul>
<p>Exemple : <em>Il marchait</em> (imparfait : arrière-plan) <em>quand il entendit</em> (passé simple : action soudaine) un bruit.</p>`
        },
        {
          title: "Les manipulations syntaxiques",
          content: `
<h3>🔄 Les manipulations syntaxiques</h3>
<p>Pour analyser une phrase ou identifier la classe et la fonction d'un mot, on utilise <strong>4 manipulations syntaxiques</strong> principales.</p>

<h4>1. Le déplacement</h4>
<p>Permet d'identifier les compléments circonstanciels (CC), car ils sont généralement déplaçables.</p>
<ul>
  <li><em>Demain</em>, je partirai. → Je partirai <em>demain</em>. (Déplacement possible = "Demain" est un CC de temps)</li>
</ul>

<h4>2. L'effacement (ou suppression)</h4>
<p>Permet d'identifier ce qui est facultatif dans la phrase (comme les CC ou les adjectifs épithètes) par rapport à ce qui est essentiel (sujet, verbe, COD/COI).</p>
<ul>
  <li>Le <em>petit</em> chat noir dort <em>profondément</em>. → Le chat noir dort. (Effacement possible)</li>
  <li>Je mange <em>une pomme</em>. → Je mange. (Le sens change, "une pomme" est un complément essentiel, ici un COD)</li>
</ul>

<h4>3. Le remplacement (ou substitution)</h4>
<p>Permet de vérifier la classe grammaticale ou le genre/nombre en remplaçant un mot par un autre de la même classe.</p>
<ul>
  <li>Pour trouver le sujet : remplacer par <em>il</em> ou <em>elle</em>. → <em>La voiture</em> roule. → <em>Elle</em> roule.</li>
  <li>Pour trouver un adjectif : remplacer par un autre adjectif (ex: <em>vrai</em>).</li>
</ul>

<h4>4. L'encadrement</h4>
<p>Permet de trouver le sujet ou de mettre en évidence un élément.</p>
<ul>
  <li>Encadrement du sujet par <strong>C'est ... qui</strong> : <em>Le vent</em> souffle. → <strong>C'est</strong> <em>le vent</em> <strong>qui</strong> souffle.</li>
  <li>Encadrement d'un COD par <strong>C'est ... que</strong> : Je lis <em>un livre</em>. → <strong>C'est</strong> <em>un livre</em> <strong>que</strong> je lis.</li>
  <li>Encadrement de la négation : Je <strong>ne</strong> veux <strong>pas</strong> partir.</li>
</ul>`
        }
      ],
      quiz: [
        {
          question: "Quelle est la classe grammaticale du mot « rapidement » ?",
          options: ["Adjectif", "Adverbe", "Nom", "Préposition"],
          correct: 1,
          explanation: "« Rapidement » est un adverbe : il modifie un verbe (courir rapidement) et il est invariable."
        },
        {
          question: "Dans la phrase « Le chat mange la souris », quelle est la fonction de « la souris » ?",
          options: ["Sujet", "Complément d'objet indirect", "Complément d'objet direct", "Attribut du sujet"],
          correct: 2,
          explanation: "« La souris » est COD du verbe « mange ». On pose la question : Le chat mange quoi ? → la souris."
        },
        {
          question: "Dans « Je pense qu'il viendra demain », la proposition « qu'il viendra demain » est :",
          options: ["Une proposition indépendante", "Une subordonnée relative", "Une subordonnée conjonctive complétive", "Une subordonnée circonstancielle de temps"],
          correct: 2,
          explanation: "Introduite par la conjonction « que », elle complète le verbe « pense » (COD) : c'est une subordonnée conjonctive complétive."
        },
        {
          question: "Quel est le temps verbal dans « Il marchait tranquillement » ?",
          options: ["Passé simple", "Imparfait", "Plus-que-parfait", "Passé composé"],
          correct: 1,
          explanation: "« Marchait » est conjugué à l'imparfait de l'indicatif (terminaison -ait). Il exprime ici l'arrière-plan, une action en cours dans le passé."
        },
        {
          question: "Quel mot subordonnant introduit une subordonnée relative ?",
          options: ["Parce que", "Lorsque", "Dont", "Si"],
          correct: 2,
          explanation: "« Dont » est un pronom relatif. « Parce que » et « lorsque » sont des conjonctions de subordination (circonstancielles), « si » introduit une condition ou une interrogative indirecte."
        },
        {
          question: "Quelle est la valeur du présent dans « La Terre tourne autour du Soleil » ?",
          options: ["Présent de narration", "Présent d'habitude", "Présent de vérité générale", "Présent d'énonciation"],
          correct: 2,
          explanation: "Il s'agit d'un fait scientifique toujours vrai : c'est un présent de vérité générale."
        },
        {
          question: "Quelle manipulation syntaxique utilise-t-on avec « C'est ... qui » pour trouver le sujet ?",
          options: ["Le déplacement", "L'effacement", "Le remplacement", "L'encadrement"],
          correct: 3,
          explanation: "L'encadrement par « C'est ... qui » permet de mettre en évidence et d'identifier le sujet d'une phrase."
        }
      ]
    },

    // ──────────────────────────────────────────────
    // CHAPITRE 2 – Orthographe et dictée
    // ──────────────────────────────────────────────
    {
      id: "orthographe",
      title: "Orthographe et dictée",
      summary: "Accords, homophones grammaticaux et participes passés : les règles essentielles pour réussir la dictée du Brevet.",
      fiches: [
        {
          title: "Les accords fondamentaux",
          content: `
<h3>✅ Les règles d'accord</h3>

<h4>1. Accord sujet-verbe</h4>
<p>Le verbe s'accorde toujours en <strong>nombre</strong> et en <strong>personne</strong> avec son sujet.</p>
<ul>
  <li>Attention aux sujets inversés : <em>Dans le jardin <strong>jouent</strong> les enfants.</em></li>
  <li>Sujet éloigné du verbe : <em>Les fleurs que j'ai plantées <strong>poussent</strong> bien.</em></li>
  <li>Plusieurs sujets coordonnés par « et » → verbe au <strong>pluriel</strong> : <em>Pierre et Marie <strong>chantent</strong>.</em></li>
  <li>Sujets coordonnés par « ou » ou « ni » → singulier ou pluriel selon le sens.</li>
</ul>

<h4>2. Accord de l'adjectif qualificatif</h4>
<p>L'adjectif s'accorde en <strong>genre</strong> et en <strong>nombre</strong> avec le nom qu'il qualifie.</p>
<ul>
  <li>Adjectif se rapportant à plusieurs noms → <strong>pluriel</strong> (masculin l'emporte si genres mélangés).</li>
  <li>Adjectifs de <strong>couleur</strong> composés ou issus de noms → <strong>invariables</strong> : des yeux <em>bleu clair</em>, des robes <em>orange</em>.</li>
  <li>Exception : <em>rose, mauve, pourpre, écarlate, fauve</em> s'accordent.</li>
</ul>

<h4>3. Accord du déterminant</h4>
<p>Le déterminant s'accorde en genre et en nombre avec le nom qu'il accompagne : <em>ces livres, cette maison, mon ami</em>.</p>

<h4>⚠️ Pièges fréquents au Brevet</h4>
<ul>
  <li><strong>« Leur »</strong> pronom personnel (devant un verbe) → invariable : <em>Je <strong>leur</strong> parle.</em></li>
  <li><strong>« Leur(s) »</strong> déterminant possessif → s'accorde : <em><strong>Leurs</strong> enfants jouent.</em></li>
  <li><strong>« Tout »</strong> : adjectif → s'accorde ; adverbe → invariable (sauf devant adj. féminin commençant par une consonne : <em>Elle est <strong>toute</strong> contente</em>).</li>
</ul>`
        },
        {
          title: "Les homophones grammaticaux",
          content: `
<h3>🔀 Les homophones à maîtriser</h3>

<table>
  <tr><th>Homophones</th><th>Astuce pour les distinguer</th></tr>
  <tr>
    <td><strong>a / à</strong></td>
    <td><em>a</em> = verbe avoir (remplaçable par « avait ») ; <em>à</em> = préposition.</td>
  </tr>
  <tr>
    <td><strong>est / et</strong></td>
    <td><em>est</em> = verbe être (remplaçable par « était ») ; <em>et</em> = conjonction (remplaçable par « et puis »).</td>
  </tr>
  <tr>
    <td><strong>son / sont</strong></td>
    <td><em>son</em> = déterminant possessif (remplaçable par « mon ») ; <em>sont</em> = verbe être (remplaçable par « étaient »).</td>
  </tr>
  <tr>
    <td><strong>on / ont</strong></td>
    <td><em>on</em> = pronom (remplaçable par « il ») ; <em>ont</em> = verbe avoir (remplaçable par « avaient »).</td>
  </tr>
  <tr>
    <td><strong>ou / où</strong></td>
    <td><em>ou</em> = conjonction (remplaçable par « ou bien ») ; <em>où</em> = pronom relatif ou adverbe de lieu.</td>
  </tr>
  <tr>
    <td><strong>ce / se</strong></td>
    <td><em>ce</em> = déterminant ou pronom démonstratif (devant un nom ou « qui/que ») ; <em>se</em> = pronom réfléchi (devant un verbe).</td>
  </tr>
  <tr>
    <td><strong>ces / ses / c'est / s'est / sait</strong></td>
    <td><em>ces</em> = dém. pluriel (ceux-là) ; <em>ses</em> = possessif (les siens) ; <em>c'est</em> = cela est ; <em>s'est</em> = il s'est (verbe pronominal) ; <em>sait</em> = verbe savoir.</td>
  </tr>
  <tr>
    <td><strong>la / là / l'a</strong></td>
    <td><em>la</em> = article ou pronom ; <em>là</em> = adverbe de lieu ; <em>l'a</em> = le/la + a (remplaçable par « l'avait »).</td>
  </tr>
  <tr>
    <td><strong>quand / quant / qu'en</strong></td>
    <td><em>quand</em> = conjonction de temps (lorsque) ; <em>quant</em> = quant à (en ce qui concerne) ; <em>qu'en</em> = que + en.</td>
  </tr>
  <tr>
    <td><strong>sans / s'en / sens / sent</strong></td>
    <td><em>sans</em> = préposition (contraire de « avec ») ; <em>s'en</em> = se + en ; <em>sens/sent</em> = verbe sentir.</td>
  </tr>
</table>

<h4>💡 Méthode au Brevet</h4>
<p>Pour chaque homophone, essaie de <strong>remplacer</strong> par un synonyme ou une autre forme du même mot. Si le remplacement fonctionne, tu as trouvé la bonne graphie.</p>`
        },
        {
          title: "Les participes passés",
          content: `
<h3>📏 Accord du participe passé</h3>

<h4>1. Participe passé employé avec « être »</h4>
<p>Il s'accorde en <strong>genre et en nombre avec le sujet</strong>.</p>
<ul>
  <li><em>Elle est <strong>partie</strong>.</em> (féminin singulier)</li>
  <li><em>Ils sont <strong>arrivés</strong>.</em> (masculin pluriel)</li>
  <li><em>Elles sont <strong>venues</strong>.</em> (féminin pluriel)</li>
</ul>

<h4>2. Participe passé employé avec « avoir »</h4>
<p>Il s'accorde avec le <strong>COD</strong> si celui-ci est placé <strong>avant</strong> le verbe. Sinon, il reste <strong>invariable</strong>.</p>
<ul>
  <li>COD après → invariable : <em>J'ai mangé <strong>des pommes</strong>.</em></li>
  <li>COD avant → accord : <em>Les pommes que j'ai <strong>mangées</strong>.</em></li>
  <li>Pronom COD avant : <em>Je les ai <strong>vues</strong>.</em></li>
  <li>Pas de COD → invariable : <em>Elle a <strong>dormi</strong>.</em></li>
</ul>

<h4>3. Participe passé des verbes pronominaux</h4>
<p>On regarde si le pronom réfléchi est <strong>COD ou COI</strong> :</p>
<ul>
  <li>Pronom = COD → accord avec le sujet : <em>Elle s'est <strong>lavée</strong>.</em> (s' = COD)</li>
  <li>Pronom = COI → pas d'accord : <em>Elle s'est <strong>lavé</strong> les mains.</em> (s' = COI, « les mains » = COD après)</li>
  <li>Verbes essentiellement pronominaux (s'enfuir, se souvenir…) → accord avec le sujet : <em>Elles se sont <strong>enfuies</strong>.</em></li>
</ul>

<h4>4. Cas particuliers</h4>
<ul>
  <li>Participe passé suivi d'un <strong>infinitif</strong> : accord si le COD fait l'action de l'infinitif → <em>Les enfants que j'ai <strong>vus</strong> jouer</em> (les enfants jouent).</li>
  <li><strong>« Fait »</strong> suivi d'un infinitif → toujours invariable : <em>Elle s'est <strong>fait</strong> couper les cheveux.</em></li>
  <li>Les participes <strong>« coûté, pesé, valu, vécu, duré, régné »</strong> sont invariables quand le complément est un CC de mesure (pas un vrai COD) : <em>Les vingt euros que ce livre a <strong>coûté</strong>.</em></li>
</ul>

<h4>⚠️ Astuce dictée</h4>
<p>Avec <strong>avoir</strong>, cherche toujours le COD et sa position. Question : <em>sujet + verbe + qui/quoi ?</em></p>`
        }
      ],
      quiz: [
        {
          question: "Complétez : « Les fleurs que j'ai … sont magnifiques. » (cueillir)",
          options: ["cueilli", "cueillis", "cueillies", "cueillie"],
          correct: 2,
          explanation: "Avec « avoir », le participe passé s'accorde avec le COD placé avant : « que » reprend « les fleurs » (féminin pluriel) → cueillies."
        },
        {
          question: "Quel homophone convient ? « Il … parti ce matin. »",
          options: ["est", "et", "ai", "es"],
          correct: 0,
          explanation: "On peut remplacer par « était » : « Il était parti ce matin » → c'est le verbe « être » conjugué : est."
        },
        {
          question: "Complétez : « Elle s'est … les mains. » (laver)",
          options: ["lavée", "lavé", "lavés", "lavées"],
          correct: 1,
          explanation: "Le pronom « s' » est COI (elle a lavé les mains à elle-même), et le COD « les mains » est placé après → pas d'accord : lavé."
        },
        {
          question: "Quel homophone convient ? « … livre est passionnant. »",
          options: ["Se", "Ce", "Ceux", "Sais"],
          correct: 1,
          explanation: "Devant un nom, on utilise le déterminant démonstratif « ce ». « Se » est un pronom réfléchi (devant un verbe)."
        },
        {
          question: "Complétez : « Les oiseaux … dans le ciel. » (voler, présent)",
          options: ["vole", "voles", "volent", "vol"],
          correct: 2,
          explanation: "Le sujet « les oiseaux » est à la 3e personne du pluriel → le verbe prend la terminaison -ent : volent."
        },
        {
          question: "« Des robes orange » : « orange » est-il bien orthographié ?",
          options: ["Oui, car les adjectifs de couleur issus d'un nom sont invariables", "Non, il faut écrire « oranges »", "Non, il faut écrire « orangées »", "Oui, car les adjectifs de couleur sont toujours invariables"],
          correct: 0,
          explanation: "« Orange » est un nom utilisé comme adjectif de couleur → il reste invariable. On écrit « des robes orange »."
        }
      ]
    },

    // ──────────────────────────────────────────────
    // CHAPITRE 3 – Compréhension de texte
    // ──────────────────────────────────────────────
    {
      id: "comprehension",
      title: "Compréhension de texte",
      summary: "Figures de style, genres littéraires, points de vue narratifs et champs lexicaux : les clés pour analyser un texte au Brevet.",
      fiches: [
        {
          title: "Les figures de style",
          content: `
<h3>🎨 Les figures de style essentielles</h3>
<p>Une <strong>figure de style</strong> est un procédé d'écriture qui s'écarte de l'usage ordinaire de la langue pour produire un <strong>effet</strong> sur le lecteur.</p>

<h4>Figures d'analogie (comparaison / ressemblance)</h4>
<table>
  <tr><th>Figure</th><th>Définition</th><th>Exemple</th></tr>
  <tr><td><strong>Comparaison</strong></td><td>Rapprochement de deux éléments avec un outil de comparaison (comme, tel, semblable à…)</td><td><em>Il est rusé <strong>comme</strong> un renard.</em></td></tr>
  <tr><td><strong>Métaphore</strong></td><td>Comparaison sans outil de comparaison</td><td><em>Cet homme est <strong>un renard</strong>.</em></td></tr>
  <tr><td><strong>Personnification</strong></td><td>Attribuer des caractéristiques humaines à un objet, un animal ou une idée</td><td><em>Le vent <strong>gémit</strong> dans les arbres.</em></td></tr>
  <tr><td><strong>Allégorie</strong></td><td>Représentation concrète d'une idée abstraite</td><td><em>La Justice est représentée par une femme aux yeux bandés.</em></td></tr>
</table>

<h4>Figures d'amplification et d'atténuation</h4>
<table>
  <tr><th>Figure</th><th>Définition</th><th>Exemple</th></tr>
  <tr><td><strong>Hyperbole</strong></td><td>Exagération pour frapper l'esprit</td><td><em>Je meurs de faim.</em></td></tr>
  <tr><td><strong>Euphémisme</strong></td><td>Atténuation d'une réalité dure</td><td><em>Il nous a quittés</em> (= il est mort).</td></tr>
  <tr><td><strong>Litote</strong></td><td>Dire moins pour suggérer plus</td><td><em>Ce n'est pas mal</em> (= c'est très bien).</td></tr>
  <tr><td><strong>Gradation</strong></td><td>Suite de termes d'intensité croissante ou décroissante</td><td><em>Je le vis, je rougis, je pâlis à sa vue.</em> (Racine)</td></tr>
</table>

<h4>Figures d'opposition</h4>
<table>
  <tr><th>Figure</th><th>Définition</th><th>Exemple</th></tr>
  <tr><td><strong>Antithèse</strong></td><td>Opposition de deux termes ou idées</td><td><em>Je vis, je meurs</em> (Louise Labé).</td></tr>
  <tr><td><strong>Oxymore</strong></td><td>Alliance de deux mots contradictoires</td><td><em>Cette <strong>obscure clarté</strong></em> (Corneille).</td></tr>
  <tr><td><strong>Antiphrase</strong></td><td>Dire le contraire de ce qu'on pense (ironie)</td><td><em>Quel <strong>beau</strong> temps !</em> (alors qu'il pleut)</td></tr>
</table>

<h4>Figures de répétition et de construction</h4>
<table>
  <tr><th>Figure</th><th>Définition</th><th>Exemple</th></tr>
  <tr><td><strong>Anaphore</strong></td><td>Répétition d'un mot en début de phrases ou de vers</td><td><em><strong>Moi,</strong> président… <strong>Moi,</strong> président…</em></td></tr>
  <tr><td><strong>Énumération</strong></td><td>Liste de termes</td><td><em>Il acheta des pommes, des poires, des cerises et des fraises.</em></td></tr>
  <tr><td><strong>Parallélisme</strong></td><td>Reprise d'une même construction syntaxique</td><td><em>La mer est calme, le ciel est bleu.</em></td></tr>
  <tr><td><strong>Chiasme</strong></td><td>Croisement de termes (AB / BA)</td><td><em>Il faut manger pour vivre et non vivre pour manger.</em></td></tr>
</table>`
        },
        {
          title: "Genres littéraires et types de textes",
          content: `
<h3>📚 Genres littéraires et types de textes</h3>

<h4>Les grands genres littéraires</h4>
<table>
  <tr><th>Genre</th><th>Caractéristiques</th><th>Exemples</th></tr>
  <tr><td><strong>Roman</strong></td><td>Récit fictif en prose, long, avec des personnages</td><td><em>L'Étranger</em> (Camus)</td></tr>
  <tr><td><strong>Nouvelle</strong></td><td>Récit bref en prose, chute finale souvent inattendue</td><td><em>La Parure</em> (Maupassant)</td></tr>
  <tr><td><strong>Théâtre</strong></td><td>Texte fait pour être joué : répliques, didascalies</td><td><em>Le Médecin malgré lui</em> (Molière)</td></tr>
  <tr><td><strong>Poésie</strong></td><td>Travail sur la langue, le rythme, les sonorités, les images</td><td><em>Les Fleurs du mal</em> (Baudelaire)</td></tr>
  <tr><td><strong>Autobiographie</strong></td><td>Récit où l'auteur raconte sa propre vie (auteur = narrateur = personnage)</td><td><em>Les Confessions</em> (Rousseau)</td></tr>
</table>

<h4>Les types de textes</h4>
<table>
  <tr><th>Type</th><th>Fonction</th><th>Indices</th></tr>
  <tr><td><strong>Narratif</strong></td><td>Raconter des événements</td><td>Passé simple / imparfait, connecteurs temporels, personnages</td></tr>
  <tr><td><strong>Descriptif</strong></td><td>Décrire un lieu, un personnage, un objet</td><td>Imparfait, adjectifs, expansions du nom, verbes de perception</td></tr>
  <tr><td><strong>Argumentatif</strong></td><td>Convaincre, persuader</td><td>Thèse, arguments, exemples, connecteurs logiques</td></tr>
  <tr><td><strong>Explicatif</strong></td><td>Informer, faire comprendre</td><td>Présent de vérité générale, vocabulaire technique</td></tr>
  <tr><td><strong>Injonctif</strong></td><td>Donner des ordres, des conseils</td><td>Impératif, infinitif, « il faut que »</td></tr>
  <tr><td><strong>Dialogué</strong></td><td>Rapporter des paroles</td><td>Tirets, guillemets, verbes de parole</td></tr>
</table>

<h4>Les formes de discours rapporté</h4>
<ul>
  <li><strong>Discours direct</strong> : paroles rapportées telles quelles → guillemets, tirets. <em>Il dit : « Je viendrai. »</em></li>
  <li><strong>Discours indirect</strong> : paroles intégrées dans une subordonnée → pas de guillemets. <em>Il dit qu'il viendrait.</em></li>
  <li><strong>Discours indirect libre</strong> : mélange des deux, sans verbe introducteur ni guillemets. <em>Il était décidé. Il viendrait demain.</em></li>
</ul>`
        },
        {
          title: "Points de vue narratifs et champs lexicaux",
          content: `
<h3>👁️ Les points de vue narratifs</h3>

<h4>Narrateur et focalisation</h4>
<table>
  <tr><th>Point de vue</th><th>Définition</th><th>Indices</th></tr>
  <tr><td><strong>Focalisation interne</strong></td><td>Le narrateur voit à travers les yeux d'un personnage, accède à ses pensées</td><td>Verbes de pensée et de perception, pronoms « je » ou « il » avec pensées</td></tr>
  <tr><td><strong>Focalisation externe</strong></td><td>Le narrateur est un témoin extérieur, ne connaît pas les pensées</td><td>Description objective, pas d'accès aux sentiments</td></tr>
  <tr><td><strong>Focalisation zéro (omnisciente)</strong></td><td>Le narrateur sait tout sur tous les personnages</td><td>Accès aux pensées de plusieurs personnages, commentaires du narrateur</td></tr>
</table>

<h4>Les types de narrateurs</h4>
<ul>
  <li><strong>Narrateur personnage</strong> (récit à la 1<sup>re</sup> personne) : « je » → participe à l'histoire.</li>
  <li><strong>Narrateur extérieur</strong> (récit à la 3<sup>e</sup> personne) : « il/elle » → ne participe pas à l'histoire.</li>
</ul>
<p>⚠️ Attention : <strong>l'auteur ≠ le narrateur</strong>. L'auteur est la personne réelle qui écrit. Le narrateur est celui qui raconte dans le texte.</p>

<h3>🔍 Les champs lexicaux</h3>
<p>Un <strong>champ lexical</strong> est un ensemble de mots se rapportant à un même thème.</p>
<ul>
  <li>Exemple – champ lexical de la <strong>peur</strong> : effroi, trembler, pâlir, terreur, angoisse, frissonner, sursauter.</li>
  <li>Exemple – champ lexical de la <strong>nature</strong> : arbre, fleur, rivière, vent, forêt, soleil.</li>
</ul>
<p>Au Brevet, on peut te demander de <strong>relever</strong> un champ lexical dans un texte et d'expliquer son <strong>effet</strong> : créer une atmosphère, révéler les émotions d'un personnage, soutenir un thème…</p>

<h4>Le registre (tonalité) du texte</h4>
<table>
  <tr><th>Registre</th><th>Effet visé</th><th>Procédés</th></tr>
  <tr><td><strong>Tragique</strong></td><td>Éveiller la compassion, la terreur</td><td>Fatalité, mort, champ lexical de la souffrance</td></tr>
  <tr><td><strong>Comique</strong></td><td>Faire rire</td><td>Quiproquos, exagération, jeux de mots</td></tr>
  <tr><td><strong>Lyrique</strong></td><td>Exprimer des sentiments intenses</td><td>« Je », exclamations, métaphores, musicalité</td></tr>
  <tr><td><strong>Pathétique</strong></td><td>Émouvoir, susciter la pitié</td><td>Champ lexical de la douleur, interjections, hyperboles</td></tr>
  <tr><td><strong>Polémique</strong></td><td>Critiquer avec violence</td><td>Ironie, antiphrases, questions rhétoriques</td></tr>
  <tr><td><strong>Satirique</strong></td><td>Critiquer en se moquant</td><td>Ironie, caricature, exagération</td></tr>
</table>`
        }
      ],
      quiz: [
        {
          question: "Quelle figure de style est utilisée dans « Il est fort comme un lion » ?",
          options: ["Métaphore", "Comparaison", "Hyperbole", "Personnification"],
          correct: 1,
          explanation: "Il y a un outil de comparaison (« comme ») qui relie les deux éléments → c'est une comparaison."
        },
        {
          question: "Quelle figure de style est « cette obscure clarté » ?",
          options: ["Antithèse", "Oxymore", "Métaphore", "Litote"],
          correct: 1,
          explanation: "« Obscure » et « clarté » sont deux mots contradictoires accolés dans un même groupe nominal → c'est un oxymore."
        },
        {
          question: "Quel point de vue narratif permet d'accéder aux pensées de tous les personnages ?",
          options: ["Focalisation interne", "Focalisation externe", "Focalisation zéro (omnisciente)", "Aucun"],
          correct: 2,
          explanation: "La focalisation zéro (ou point de vue omniscient) permet au narrateur de connaître les pensées et sentiments de tous les personnages."
        },
        {
          question: "Dans un texte argumentatif, on trouve principalement :",
          options: ["Des descriptions et de l'imparfait", "Une thèse, des arguments et des connecteurs logiques", "Des personnages et du passé simple", "Des rimes et des strophes"],
          correct: 1,
          explanation: "Le texte argumentatif vise à convaincre : il présente une thèse, appuyée par des arguments et des exemples, reliés par des connecteurs logiques."
        },
        {
          question: "Quelle est la figure de style dans « Je meurs de faim » ?",
          options: ["Euphémisme", "Litote", "Hyperbole", "Métaphore"],
          correct: 2,
          explanation: "On exagère volontairement (on ne meurt pas réellement de faim) pour frapper l'esprit → c'est une hyperbole."
        },
        {
          question: "Qu'est-ce qui distingue une autobiographie d'un roman ?",
          options: ["L'autobiographie est toujours en vers", "Dans l'autobiographie, auteur = narrateur = personnage", "L'autobiographie n'a jamais de narrateur", "L'autobiographie est toujours courte"],
          correct: 1,
          explanation: "Dans une autobiographie, l'auteur raconte sa propre vie : il est à la fois l'auteur, le narrateur et le personnage principal."
        }
      ]
    },

    // ──────────────────────────────────────────────
    // CHAPITRE 4 – Rédaction
    // ──────────────────────────────────────────────
    {
      id: "redaction",
      title: "Rédaction",
      summary: "Argumentation, récit, lettre, dialogue : les méthodes et techniques pour réussir le sujet de rédaction au Brevet.",
      fiches: [
        {
          title: "Le texte argumentatif",
          content: `
<h3>💬 Rédiger un texte argumentatif</h3>
<p>Au Brevet, on peut te demander de donner ton avis, de défendre une thèse, d'écrire un discours ou une lettre argumentée.</p>

<h4>Structure d'un texte argumentatif</h4>
<ol>
  <li><strong>Introduction</strong> : présenter le sujet, annoncer la thèse (= ton opinion).</li>
  <li><strong>Développement</strong> : 2 ou 3 paragraphes, chacun avec :
    <ul>
      <li>Un <strong>argument</strong> (idée qui soutient ta thèse)</li>
      <li>Un <strong>exemple</strong> précis (tiré de ta culture, de l'actualité, de la littérature…)</li>
    </ul>
  </li>
  <li><strong>Conclusion</strong> : résumer, réaffirmer la thèse, ouvrir (question, perspective).</li>
</ol>

<h4>Les connecteurs logiques indispensables</h4>
<table>
  <tr><th>Fonction</th><th>Connecteurs</th></tr>
  <tr><td>Addition</td><td>de plus, en outre, par ailleurs, également</td></tr>
  <tr><td>Opposition</td><td>cependant, néanmoins, toutefois, en revanche, mais</td></tr>
  <tr><td>Cause</td><td>car, en effet, parce que, puisque</td></tr>
  <tr><td>Conséquence</td><td>donc, ainsi, par conséquent, c'est pourquoi</td></tr>
  <tr><td>Concession</td><td>certes… mais, bien que, même si</td></tr>
  <tr><td>Conclusion</td><td>en conclusion, pour conclure, en définitive, finalement</td></tr>
</table>

<h4>Convaincre vs Persuader</h4>
<ul>
  <li><strong>Convaincre</strong> = faire appel à la <strong>raison</strong> (arguments logiques, exemples, chiffres).</li>
  <li><strong>Persuader</strong> = faire appel aux <strong>émotions</strong> (sentiments, images fortes, interpellation du lecteur).</li>
</ul>

<h4>⚠️ Conseils Brevet</h4>
<ul>
  <li>Rédige des <strong>paragraphes distincts</strong> avec un alinéa.</li>
  <li>Utilise un <strong>vocabulaire varié</strong> et soutenu.</li>
  <li>Soigne l'<strong>orthographe</strong> et la <strong>ponctuation</strong>.</li>
  <li>Relis-toi au moins une fois !</li>
</ul>`
        },
        {
          title: "Le récit et le dialogue",
          content: `
<h3>📝 Rédiger un récit</h3>

<h4>Structure du récit</h4>
<ol>
  <li><strong>Situation initiale</strong> : présenter le cadre (lieu, époque), le personnage, l'atmosphère.</li>
  <li><strong>Élément perturbateur</strong> : un événement qui vient bouleverser la situation (« soudain », « un jour »…).</li>
  <li><strong>Péripéties</strong> : enchaînement d'actions et de rebondissements.</li>
  <li><strong>Élément de résolution</strong> : résolution du problème.</li>
  <li><strong>Situation finale</strong> : nouvel équilibre.</li>
</ol>

<h4>Les temps du récit</h4>
<ul>
  <li><strong>Imparfait</strong> : descriptions, arrière-plan, habitudes.</li>
  <li><strong>Passé simple</strong> : actions principales, premier plan (récit au passé).</li>
  <li><strong>Présent de narration</strong> : rendre le récit vivant (récit au présent).</li>
  <li><strong>Plus-que-parfait</strong> : retours en arrière (flashbacks).</li>
</ul>

<h3>🗣️ Rédiger un dialogue</h3>

<h4>Règles de mise en forme</h4>
<ul>
  <li>Ouvrir les guillemets au début du dialogue : <strong>«</strong></li>
  <li>Utiliser un <strong>tiret</strong> à chaque changement d'interlocuteur.</li>
  <li>Fermer les guillemets à la fin : <strong>»</strong></li>
  <li>Varier les <strong>verbes de parole</strong> : dire, affirmer, s'exclamer, murmurer, répliquer, rétorquer, interroger…</li>
  <li>Insérer des <strong>incises</strong> : « Je refuse, <em>déclara-t-il</em>, de partir. »</li>
</ul>

<h4>Conseils pour un bon dialogue</h4>
<ul>
  <li>Le dialogue doit faire <strong>avancer l'action</strong> ou révéler le <strong>caractère</strong> des personnages.</li>
  <li>Adapter le <strong>niveau de langue</strong> au personnage (familier, courant, soutenu).</li>
  <li>Alterner dialogue et <strong>passages narratifs</strong> (descriptions, actions, pensées).</li>
</ul>`
        },
        {
          title: "La lettre et la méthode de rédaction",
          content: `
<h3>✉️ Rédiger une lettre</h3>

<h4>Présentation d'une lettre</h4>
<ul>
  <li><strong>Lieu et date</strong> en haut à droite : <em>Paris, le 15 mars 2025</em></li>
  <li><strong>Formule d'appel</strong> : <em>Cher ami, Madame la Directrice, Monsieur le Maire…</em></li>
  <li><strong>Corps de la lettre</strong> : paragraphes organisés.</li>
  <li><strong>Formule de politesse</strong> : <em>Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées.</em></li>
  <li><strong>Signature</strong></li>
</ul>

<h4>Lettre personnelle vs lettre officielle</h4>
<table>
  <tr><th></th><th>Lettre personnelle</th><th>Lettre officielle</th></tr>
  <tr><td><strong>Destinataire</strong></td><td>Ami, famille</td><td>Autorité, institution</td></tr>
  <tr><td><strong>Niveau de langue</strong></td><td>Courant</td><td>Soutenu</td></tr>
  <tr><td><strong>Formule de politesse</strong></td><td>Amicalement, À bientôt</td><td>Veuillez agréer…</td></tr>
  <tr><td><strong>Ton</strong></td><td>Libre, émotions</td><td>Formel, respectueux</td></tr>
</table>

<h3>📋 Méthode générale de rédaction au Brevet</h3>

<h4>Étape 1 – Lire le sujet (5 min)</h4>
<ul>
  <li>Souligner les <strong>mots-clés</strong> du sujet.</li>
  <li>Identifier la <strong>forme demandée</strong> : récit ? argumentation ? lettre ? dialogue ?</li>
  <li>Identifier les <strong>contraintes</strong> : point de vue, temps, longueur, thème.</li>
</ul>

<h4>Étape 2 – Faire un brouillon (10 min)</h4>
<ul>
  <li>Noter les idées au brouillon (brainstorming).</li>
  <li>Organiser les idées en un <strong>plan</strong>.</li>
  <li>Rédiger l'<strong>introduction</strong> et la <strong>conclusion</strong> au brouillon.</li>
</ul>

<h4>Étape 3 – Rédiger au propre (30 min)</h4>
<ul>
  <li>Écrire lisiblement, faire des <strong>paragraphes</strong>.</li>
  <li>Varier le vocabulaire et les structures de phrases.</li>
  <li>Utiliser des <strong>connecteurs</strong> pour lier les idées.</li>
</ul>

<h4>Étape 4 – Relire (5 min)</h4>
<ul>
  <li>Vérifier l'<strong>orthographe</strong> (accords, homophones, conjugaison).</li>
  <li>Vérifier la <strong>ponctuation</strong>.</li>
  <li>Vérifier la <strong>cohérence</strong> du texte (temps, point de vue).</li>
</ul>`
        }
      ],
      quiz: [
        {
          question: "Quel est l'ordre correct du schéma narratif ?",
          options: [
            "Péripéties → Situation initiale → Élément perturbateur → Résolution → Situation finale",
            "Situation initiale → Élément perturbateur → Péripéties → Résolution → Situation finale",
            "Élément perturbateur → Situation initiale → Résolution → Péripéties → Situation finale",
            "Situation initiale → Péripéties → Élément perturbateur → Situation finale → Résolution"
          ],
          correct: 1,
          explanation: "Le schéma narratif classique suit cet ordre : situation initiale → élément perturbateur → péripéties → élément de résolution → situation finale."
        },
        {
          question: "Quelle est la différence entre convaincre et persuader ?",
          options: [
            "Convaincre fait appel aux émotions, persuader à la raison",
            "Convaincre fait appel à la raison, persuader aux émotions",
            "Les deux sont identiques",
            "Convaincre est oral, persuader est écrit"
          ],
          correct: 1,
          explanation: "Convaincre = faire appel à la raison (arguments logiques) ; persuader = faire appel aux émotions (sentiments, images)."
        },
        {
          question: "Comment marque-t-on un changement d'interlocuteur dans un dialogue ?",
          options: ["Par un point-virgule", "Par un tiret", "Par des parenthèses", "Par un astérisque"],
          correct: 1,
          explanation: "Dans un dialogue, chaque changement d'interlocuteur est signalé par un tiret (—), après l'ouverture des guillemets."
        },
        {
          question: "Quel temps utilise-t-on pour les descriptions dans un récit au passé ?",
          options: ["Passé simple", "Imparfait", "Plus-que-parfait", "Futur simple"],
          correct: 1,
          explanation: "L'imparfait est le temps de la description, de l'arrière-plan et des habitudes dans un récit au passé."
        },
        {
          question: "Quel connecteur logique exprime la concession ?",
          options: ["Par conséquent", "Certes… mais", "En effet", "Donc"],
          correct: 1,
          explanation: "« Certes… mais » introduit une concession : on reconnaît l'argument adverse avant de le nuancer ou de le contredire."
        }
      ]
    },

    // ──────────────────────────────────────────────
    // CHAPITRE 5 – Œuvres et thèmes du programme
    // ──────────────────────────────────────────────
    {
      id: "oeuvres-themes",
      title: "Œuvres et thèmes du programme",
      summary: "Les quatre grandes thématiques du programme de 3ème : Se raconter, Dénoncer, Visions poétiques et Agir dans la cité.",
      fiches: [
        {
          title: "Se raconter, se représenter",
          content: `
<h3>📔 Se raconter, se représenter</h3>
<p>Ce thème explore l'<strong>écriture de soi</strong> : comment les auteurs parlent d'eux-mêmes, de leur vie, de leur identité.</p>

<h4>Les genres de l'écriture de soi</h4>
<table>
  <tr><th>Genre</th><th>Définition</th><th>Œuvre de référence</th></tr>
  <tr><td><strong>Autobiographie</strong></td><td>Récit rétrospectif de sa propre vie (auteur = narrateur = personnage)</td><td><em>Les Confessions</em> – Rousseau</td></tr>
  <tr><td><strong>Mémoires</strong></td><td>Récit de sa vie avec un regard sur l'Histoire</td><td><em>Mémoires de guerre</em> – De Gaulle</td></tr>
  <tr><td><strong>Journal intime</strong></td><td>Écriture au jour le jour, sans recul</td><td><em>Le Journal</em> – Anne Frank</td></tr>
  <tr><td><strong>Autoportrait</strong></td><td>Description de soi (physique, morale)</td><td><em>Essais</em> – Montaigne</td></tr>
  <tr><td><strong>Roman autobiographique</strong></td><td>Récit inspiré de la vie de l'auteur, mais avec des éléments fictifs</td><td><em>La Promesse de l'aube</em> – Romain Gary</td></tr>
</table>

<h4>Le pacte autobiographique (Philippe Lejeune)</h4>
<p>L'auteur s'engage à dire la <strong>vérité</strong> sur sa vie. Les trois instances (auteur, narrateur, personnage) portent le même nom. Ce pacte distingue l'autobiographie du roman autobiographique.</p>

<h4>Enjeux de l'écriture de soi</h4>
<ul>
  <li><strong>Se connaître</strong> : introspection, analyse de soi.</li>
  <li><strong>Témoigner</strong> : transmettre une expérience.</li>
  <li><strong>Se justifier</strong> : expliquer ses actes.</li>
  <li><strong>Laisser une trace</strong> : lutter contre l'oubli.</li>
  <li><strong>Créer une œuvre littéraire</strong> : la vie comme matière d'écriture.</li>
</ul>`
        },
        {
          title: "Dénoncer les travers de la société",
          content: `
<h3>⚖️ Dénoncer les travers de la société</h3>
<p>Ce thème étudie comment la littérature permet de <strong>critiquer</strong> la société, ses injustices, ses défauts.</p>

<h4>Les formes de la critique sociale</h4>
<table>
  <tr><th>Forme</th><th>Procédé</th><th>Exemple</th></tr>
  <tr><td><strong>La satire</strong></td><td>Critique moqueuse des défauts humains</td><td>Molière critique l'hypocrisie dans <em>Tartuffe</em></td></tr>
  <tr><td><strong>La fable</strong></td><td>Récit allégorique avec une morale</td><td>La Fontaine dénonce l'abus de pouvoir dans <em>Le Loup et l'Agneau</em></td></tr>
  <tr><td><strong>Le conte philosophique</strong></td><td>Récit fictif qui invite à réfléchir</td><td>Voltaire dénonce l'intolérance dans <em>Candide</em></td></tr>
  <tr><td><strong>La caricature</strong></td><td>Exagération des défauts pour critiquer</td><td>Daumier (dessins), Rabelais (textes)</td></tr>
  <tr><td><strong>Le pamphlet</strong></td><td>Texte virulent qui attaque directement</td><td>Voltaire, <em>Traité sur la tolérance</em></td></tr>
  <tr><td><strong>L'utopie / dystopie</strong></td><td>Société idéale ou cauchemardesque</td><td>George Orwell, <em>1984</em></td></tr>
</table>

<h4>Les procédés de la dénonciation</h4>
<ul>
  <li><strong>L'ironie</strong> : dire le contraire de ce qu'on pense pour critiquer (antiphrase).</li>
  <li><strong>L'humour</strong> : faire rire pour faire réfléchir.</li>
  <li><strong>L'argumentation directe</strong> : essai, discours, article.</li>
  <li><strong>L'argumentation indirecte</strong> : fable, conte, récit → la fiction porte le message.</li>
  <li><strong>Le registre polémique</strong> : ton violent, interpellation du lecteur, questions rhétoriques.</li>
</ul>

<h4>Thèmes de dénonciation fréquents</h4>
<ul>
  <li>L'esclavage et le racisme (Montesquieu, <em>De l'esprit des lois</em> – « De l'esclavage des nègres »)</li>
  <li>La guerre (textes de Céline, Barbusse, Otto Dix)</li>
  <li>L'injustice sociale (Victor Hugo, <em>Les Misérables</em>)</li>
  <li>L'intolérance et le fanatisme (Voltaire)</li>
</ul>`
        },
        {
          title: "Visions poétiques du monde / Agir dans la cité",
          content: `
<h3>🌸 Visions poétiques du monde</h3>
<p>Ce thème explore la façon dont les poètes <strong>regardent le monde</strong> et le <strong>transfigurent</strong> par le langage.</p>

<h4>Les fonctions de la poésie</h4>
<ul>
  <li><strong>Exprimer des sentiments</strong> (poésie lyrique) : amour, mélancolie, joie. → Ronsard, Hugo, Verlaine.</li>
  <li><strong>Célébrer la beauté du monde</strong> : la nature, les saisons, le quotidien. → Rimbaud, Ponge.</li>
  <li><strong>S'engager</strong> (poésie engagée) : dénoncer l'injustice, résister. → Éluard (<em>Liberté</em>), Aragon, Desnos.</li>
  <li><strong>Jouer avec la langue</strong> : jeux de mots, invention verbale. → Prévert, Queneau, Dada.</li>
</ul>

<h4>Les formes poétiques</h4>
<table>
  <tr><th>Forme</th><th>Caractéristiques</th></tr>
  <tr><td><strong>Sonnet</strong></td><td>14 vers : 2 quatrains + 2 tercets</td></tr>
  <tr><td><strong>Poème en vers libres</strong></td><td>Pas de schéma fixe de rimes ni de mètre</td></tr>
  <tr><td><strong>Poème en prose</strong></td><td>Pas de vers, mais un travail poétique sur la langue</td></tr>
  <tr><td><strong>Calligramme</strong></td><td>Le texte dessine une forme (Apollinaire)</td></tr>
  <tr><td><strong>Haïku</strong></td><td>Poème japonais très court (3 vers : 5/7/5 syllabes)</td></tr>
</table>

<h4>Versification</h4>
<ul>
  <li><strong>Alexandrin</strong> = 12 syllabes ; <strong>décasyllabe</strong> = 10 ; <strong>octosyllabe</strong> = 8.</li>
  <li>Rimes : <strong>plates</strong> (AABB), <strong>croisées</strong> (ABAB), <strong>embrassées</strong> (ABBA).</li>
  <li><strong>Enjambement</strong> : la phrase déborde sur le vers suivant.</li>
  <li><strong>Rejet</strong> : un élément court est rejeté au début du vers suivant.</li>
  <li><strong>Contre-rejet</strong> : un élément court est placé à la fin du vers précédent.</li>
</ul>

<hr>

<h3>✊ Agir dans la cité : individu et pouvoir</h3>
<p>Ce thème étudie les rapports entre <strong>l'individu et la société, le pouvoir et l'engagement</strong>.</p>

<h4>Les formes de l'engagement littéraire</h4>
<ul>
  <li><strong>Le discours</strong> : prise de parole publique pour défendre une cause. → Victor Hugo, discours contre la peine de mort.</li>
  <li><strong>La lettre ouverte</strong> : texte adressé publiquement. → Zola, <em>J'accuse…!</em> (affaire Dreyfus).</li>
  <li><strong>Le théâtre engagé</strong> : mettre en scène des questions politiques et sociales. → Anouilh, <em>Antigone</em> (résistance face au pouvoir).</li>
  <li><strong>Le roman engagé</strong> : raconter pour dénoncer. → Primo Levi, <em>Si c'est un homme</em>.</li>
  <li><strong>La poésie engagée</strong> : chanter la liberté, la résistance. → Éluard, Aragon.</li>
</ul>

<h4>Œuvres clés du programme</h4>
<table>
  <tr><th>Œuvre</th><th>Auteur</th><th>Thème</th></tr>
  <tr><td><em>Antigone</em></td><td>Anouilh (1944)</td><td>Résistance individuelle face au pouvoir tyrannique</td></tr>
  <tr><td><em>1984</em></td><td>Orwell (1949)</td><td>Dystopie, totalitarisme, surveillance</td></tr>
  <tr><td><em>Si c'est un homme</em></td><td>Primo Levi (1947)</td><td>Témoignage sur la déshumanisation dans les camps</td></tr>
  <tr><td><em>J'accuse…!</em></td><td>Zola (1898)</td><td>Engagement de l'intellectuel, justice</td></tr>
</table>

<h4>Questions clés pour l'analyse</h4>
<ul>
  <li>Quelle est la <strong>cause défendue</strong> par l'auteur ?</li>
  <li>Quels <strong>procédés</strong> utilise-t-il pour convaincre ou émouvoir ?</li>
  <li>Quel est le <strong>contexte historique</strong> de l'œuvre ?</li>
  <li>En quoi l'œuvre reste-t-elle <strong>actuelle</strong> ?</li>
</ul>`
        }
      ],
      quiz: [
        {
          question: "Qu'est-ce que le pacte autobiographique ?",
          options: [
            "Un contrat entre l'éditeur et l'auteur",
            "L'engagement de l'auteur à dire la vérité sur sa vie (auteur = narrateur = personnage)",
            "Un accord entre le lecteur et le libraire",
            "Une figure de style propre à l'autobiographie"
          ],
          correct: 1,
          explanation: "Le pacte autobiographique (Philippe Lejeune) est l'engagement de l'auteur à raconter véridiquement sa propre vie, avec identité auteur = narrateur = personnage."
        },
        {
          question: "Quel procédé consiste à dire le contraire de ce qu'on pense pour critiquer ?",
          options: ["L'hyperbole", "La métaphore", "L'ironie (antiphrase)", "L'euphémisme"],
          correct: 2,
          explanation: "L'ironie, et plus spécifiquement l'antiphrase, consiste à dire le contraire de ce qu'on pense dans une intention critique."
        },
        {
          question: "Combien de vers comporte un sonnet ?",
          options: ["10 vers", "12 vers", "14 vers", "16 vers"],
          correct: 2,
          explanation: "Le sonnet est composé de 14 vers : deux quatrains (4+4) et deux tercets (3+3)."
        },
        {
          question: "Qui a écrit « J'accuse…! » pour défendre Dreyfus ?",
          options: ["Victor Hugo", "Émile Zola", "Albert Camus", "Voltaire"],
          correct: 1,
          explanation: "Émile Zola a publié « J'accuse…! » dans le journal L'Aurore le 13 janvier 1898 pour dénoncer l'injustice faite au capitaine Dreyfus."
        },
        {
          question: "Quelle est la différence entre argumentation directe et indirecte ?",
          options: [
            "Directe = oral, indirecte = écrit",
            "Directe = l'auteur argumente en son nom (essai, discours) ; indirecte = la fiction porte le message (fable, conte)",
            "Directe = courte, indirecte = longue",
            "Il n'y a aucune différence"
          ],
          correct: 1,
          explanation: "L'argumentation directe expose les idées sans détour (essai, discours). L'argumentation indirecte passe par la fiction pour transmettre un message (fable, conte philosophique)."
        },
        {
          question: "Qu'est-ce qu'un alexandrin ?",
          options: ["Un vers de 8 syllabes", "Un vers de 10 syllabes", "Un vers de 12 syllabes", "Un vers sans rimes"],
          correct: 2,
          explanation: "L'alexandrin est un vers de 12 syllabes, le vers le plus noble de la poésie française classique."
        }
      ]
    }
  ,
{
    "id": "francais-final",
    "title": "🎯 Grand Quiz Final Type Brevet",
    "summary": "Série de 31 questions incluant un sujet type Brevet.",
    "fiches": [],
    "quiz": [
        {
            "q": "Quel est le mode de l'incertitude et du doute ?",
            "o": [
                "Indicatif",
                "Subjonctif",
                "Impératif",
                "Conditionnel"
            ],
            "c": 1,
            "e": "Le subjonctif exprime le doute, le souhait ou la volonté."
        },
        {
            "q": "Quelle figure de style compare sans outil de comparaison ?",
            "o": [
                "Métaphore",
                "Comparaison",
                "Métonymie",
                "Personnification"
            ],
            "c": 0,
            "e": "La métaphore est une comparaison implicite, sans outil comme 'tel' ou 'comme'."
        },
        {
            "q": "Dans 'Le chat mange la souris', quelle est la fonction de 'la souris' ?",
            "o": [
                "Sujet",
                "COD",
                "COI",
                "Attribut"
            ],
            "c": 1,
            "e": "COD car il répond à la question 'mange quoi ?'."
        },
        {
            "q": "Quel est l'antonyme de 'éphémère' ?",
            "o": [
                "Court",
                "Éternel",
                "Rapide",
                "Fragile"
            ],
            "c": 1,
            "e": "Éphémère signifie qui dure peu de temps. Son contraire est éternel ou durable."
        },
        {
            "q": "Qui a écrit 'Les Misérables' ?",
            "o": [
                "Molière",
                "Baudelaire",
                "Victor Hugo",
                "Zola"
            ],
            "c": 2,
            "e": "Victor Hugo a publié ce célèbre roman en 1862."
        },
        {
            "q": "Quel temps du passé exprime une action d'arrière-plan ?",
            "o": [
                "Passé simple",
                "Imparfait",
                "Passé composé",
                "Plus-que-parfait"
            ],
            "c": 1,
            "e": "L'imparfait sert aux descriptions et à l'arrière-plan."
        },
        {
            "q": "Identifiez le préfixe dans 'Insupportable'",
            "o": [
                "In",
                "Support",
                "Able",
                "Insupp"
            ],
            "c": 0,
            "e": "Le préfixe est 'In-', le radical 'support', le suffixe '-able'."
        },
        {
            "q": "Quelle proposition commence par 'que' ?",
            "o": [
                "Relative ou complétive",
                "Indépendante",
                "Principale",
                "Juxtaposée"
            ],
            "c": 0,
            "e": "Elle peut être relative (complète un nom) ou complétive (complète un verbe)."
        },
        {
            "q": "Comment appelle-t-on le narrateur qui sait tout ?",
            "o": [
                "Interne",
                "Externe",
                "Omniscient",
                "Héros"
            ],
            "c": 2,
            "e": "Le narrateur omniscient (focalisation zéro) connaît les pensées de tous les personnages."
        },
        {
            "q": "Quel est le pluriel de 'chou' ?",
            "o": [
                "Chous",
                "Choux",
                "Chouxes",
                "Chou"
            ],
            "c": 1,
            "e": "Bijou, caillou, chou, genou, hibou, joujou, pou prennent un 'x'."
        },
        {
            "q": "Complétez : 'Elles se sont...'",
            "o": [
                "Lavé",
                "Lavés",
                "Lavées",
                "Laver"
            ],
            "c": 2,
            "e": "Le participe passé s'accorde avec le sujet 'Elles' (verbe pronominal)."
        },
        {
            "q": "Quelle est la valeur du présent dans 'La Terre est ronde' ?",
            "o": [
                "Énonciation",
                "Vérité générale",
                "Habitude",
                "Narration"
            ],
            "c": 1,
            "e": "C'est un fait scientifique, donc vérité générale."
        },
        {
            "q": "Trouvez le synonyme de 'bavard'",
            "o": [
                "Taiseux",
                "Volubile",
                "Silencieux",
                "Apathique"
            ],
            "c": 1,
            "e": "Volubile signifie qui parle beaucoup."
        },
        {
            "q": "Quel mouvement littéraire est associé à Zola ?",
            "o": [
                "Romantisme",
                "Réalisme",
                "Naturalisme",
                "Surréalisme"
            ],
            "c": 2,
            "e": "Émile Zola est le chef de file du Naturalisme."
        },
        {
            "q": "Dans 'Je veux qu'il vienne', à quel temps est 'vienne' ?",
            "o": [
                "Présent de l'indicatif",
                "Présent du subjonctif",
                "Impératif",
                "Futur"
            ],
            "c": 1,
            "e": "Après 'je veux que', on emploie le subjonctif."
        },
        {
            "q": "Qu'est-ce qu'un champ lexical ?",
            "o": [
                "Une règle de grammaire",
                "Des mots liés au même thème",
                "Une rime",
                "Une figure de style"
            ],
            "c": 1,
            "e": "Le champ lexical est l'ensemble des mots se rapportant à un même thème."
        },
        {
            "q": "Quelle est la fonction d'un adjectif juste à côté du nom ?",
            "o": [
                "Épithète",
                "Attribut",
                "Apposition",
                "Complément du nom"
            ],
            "c": 0,
            "e": "L'adjectif épithète est lié directement au nom qu'il qualifie."
        },
        {
            "q": "Qu'est-ce qu'une phrase complexe ?",
            "o": [
                "Une phrase très longue",
                "Une phrase avec des mots difficiles",
                "Une phrase contenant plusieurs verbes conjugués",
                "Une phrase sans ponctuation"
            ],
            "c": 2,
            "e": "Une phrase est complexe dès qu'elle a au moins deux propositions (deux verbes conjugués)."
        },
        {
            "q": "Quel est le registre de langue de 'bagnole' ?",
            "o": [
                "Soutenu",
                "Courant",
                "Familier",
                "Argot"
            ],
            "c": 2,
            "e": "C'est un mot du registre familier pour désigner une voiture."
        },
        {
            "q": "Quel type de texte vise à convaincre ?",
            "o": [
                "Narratif",
                "Descriptif",
                "Argumentatif",
                "Explicatif"
            ],
            "c": 2,
            "e": "Le texte argumentatif défend une thèse avec des arguments."
        },
        {
            "q": "Qu'exprime la conjonction 'mais' ?",
            "o": [
                "La cause",
                "L'opposition",
                "La conséquence",
                "L'addition"
            ],
            "c": 1,
            "e": "'Mais' marque une opposition ou une restriction."
        },
        {
            "q": "Dans un poème, comment appelle-t-on une strophe de 4 vers ?",
            "o": [
                "Tercet",
                "Quatrain",
                "Sizain",
                "Sonnet"
            ],
            "c": 1,
            "e": "Un quatrain compte quatre vers."
        },
        {
            "q": "Qu'est-ce qu'une autobiographie ?",
            "o": [
                "Un récit de voyage",
                "L'auteur raconte sa propre vie",
                "Une biographie d'un personnage célèbre",
                "Un roman fantastique"
            ],
            "c": 1,
            "e": "L'auteur, le narrateur et le personnage principal sont la même personne."
        },
        {
            "q": "Quelle figure de style consiste à exagérer ?",
            "o": [
                "Hyperbole",
                "Euphémisme",
                "Litote",
                "Antithèse"
            ],
            "c": 0,
            "e": "L'hyperbole exagère la réalité ('Je meurs de faim')."
        },
        {
            "q": "Quel est le mode des ordres ou conseils ?",
            "o": [
                "Subjonctif",
                "Indicatif",
                "Conditionnel",
                "Impératif"
            ],
            "c": 3,
            "e": "L'impératif donne un ordre (ex: Viens ici !)."
        },
        {
            "q": "Comment conjuguer 'aller' au futur simple (1ère pers. singulier) ?",
            "o": [
                "J'allerais",
                "J'irai",
                "J'irais",
                "Je vais"
            ],
            "c": 1,
            "e": "Au futur simple : j'irai. (J'irais = conditionnel)."
        },
        {
            "q": "Dans 'La fille dont je te parle', 'dont' remplace un complément...",
            "o": [
                "De temps",
                "Introduit par 'de'",
                "Introduit par 'à'",
                "COD"
            ],
            "c": 1,
            "e": "Le pronom 'dont' remplace toujours un groupe introduit par la préposition 'de'."
        },
        {
            "q": "Quel genre littéraire se joue sur scène ?",
            "o": [
                "Le roman",
                "La poésie",
                "Le théâtre",
                "L'essai"
            ],
            "c": 2,
            "e": "Le théâtre est écrit pour être représenté par des comédiens."
        },
        {
            "q": "Comment appelle-t-on la répétition de consonnes dans un vers ?",
            "o": [
                "Assonance",
                "Allitération",
                "Anaphore",
                "Chiasme"
            ],
            "c": 1,
            "e": "L'allitération est la répétition de sons consonantiques (consonnes)."
        },
        {
            "q": "Quel temps s'emploie pour une action future par rapport au passé ?",
            "o": [
                "Futur simple",
                "Futur antérieur",
                "Conditionnel présent",
                "Imparfait"
            ],
            "c": 2,
            "e": "Le conditionnel a une valeur de futur dans le passé (Il disait qu'il viendrait)."
        },
        {
            "q": "[SUJET TYPE BREVET] Dans un texte littéraire, vous relevez : 'Le ciel pleurait des larmes de sang'. Quelle est cette figure de style et son but ?",
            "o": [
                "Une métaphore pour montrer la joie",
                "Une personnification et métaphore soulignant le drame",
                "Une comparaison",
                "Un euphémisme atténuant la tristesse"
            ],
            "c": 1,
            "e": "Le ciel a des comportements humains (pleurer) = personnification, et 'larmes de sang' intensifie l'horreur de la scène."
        }
    ]
}
  ]
};
