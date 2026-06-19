# BrevetMaster 🎓

**BrevetMaster** est une application web interactive conçue pour aider les élèves à réviser le Diplôme National du Brevet (DNB) 2026. L'application propose des fiches de révision et des quiz interactifs sur l'ensemble des matières du programme.

## 🚀 Fonctionnalités Principales

- **Multi-matières** : Révisions complètes couvrant les Mathématiques, le Français, l'Histoire, la Géographie, l'EMC, la Physique-Chimie, les SVT et la Technologie.
- **Quiz Interactifs** : Testez vos connaissances avec des quiz dédiés à chaque chapitre, et même un "Grand Quiz DNB" mélangeant plusieurs matières.
- **Suivi de Progression** : Vos scores et l'avancement de vos révisions sont sauvegardés automatiquement sur votre navigateur (via `localStorage`), incluant une barre de progression globale.
- **Recherche Rapide** : Une barre de recherche intégrée permet de trouver rapidement un chapitre précis parmi toutes les matières.
- **Thème Clair/Sombre** : Une interface moderne (Glassmorphism) qui s'adapte à vos préférences visuelles d'un simple clic (☀️/🌙). Le thème s'ajuste même automatiquement selon les préférences de votre système.
- **Design Responsive** : Adapté pour être consulté aussi bien sur ordinateur que sur smartphone ou tablette.

## 🛠️ Technologies Utilisées

L'application a été construite sans utiliser de framework complexe afin de garantir des performances optimales et une structure légère :
- **HTML5** pour la structure des pages.
- **CSS3** (Vanilla) avec l'utilisation de variables pour les thèmes dynamiques et d'effets visuels modernes (Glassmorphism, gradients, transitions fluides).
- **JavaScript** (Vanilla) pour la logique de l'application, la gestion des quiz, de la recherche et du système de progression.

## 📂 Structure du Projet

```text
/
├── index.html            # La page principale de l'application
├── css/
│   └── style.css         # Tous les styles de l'application
├── js/
│   ├── app.js            # La logique principale (navigation, thèmes, progression)
│   └── data/             # Le contenu des cours et des quiz
│       ├── maths.js
│       ├── francais.js
│       ├── histoire.js
│       ├── geographie.js
│       ├── emc.js
│       ├── physique-chimie.js
│       ├── svt.js
│       ├── technologie.js
│       └── question-dnb.js
└── img/                  # Les ressources graphiques (logo, etc.)
```

## 💻 Installation & Utilisation

1. **Aucune installation n'est requise.** Il s'agit d'un projet web pur.
2. Ouvrez simplement le fichier `index.html` dans n'importe quel navigateur web moderne.
3. Explorez les matières, lisez les fiches de révision et testez-vous avec les quiz !

---
*Préparez votre Brevet dans les meilleures conditions avec BrevetMaster !*
