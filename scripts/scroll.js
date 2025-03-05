// Sélectionne le premier élément <svg> ayant la classe "squiggle" dans le document
const svg = document.querySelector('svg.squiggle');

// Sélectionne le premier élément <path> à l'intérieur de cet <svg>
const path = svg.querySelector('path');

// Définit une fonction qui sera exécutée lors du défilement de la page
const scroll = () => {
  // Récupère la distance de défilement verticale de la page
  const distance = window.scrollY;

  // Calcule la distance totale sur laquelle le SVG peut défiler
  const totalDistance = svg.clientHeight - window.innerHeight;

  // Calcule le pourcentage de défilement de la page
  const percentage = distance / totalDistance;

  // Obtient la longueur totale du chemin (path) du SVG
  const pathLength = path.getTotalLength();

  // Définit la propriété strokeDasharray pour que le chemin soit visible
  path.style.strokeDasharray = `${pathLength}`;

  // Modifie l'offset du trait (stroke) du chemin en fonction du défilement
  // Cela crée l'effet d'animation du chemin
  path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
}

// Exécute la fonction scroll immédiatement pour s'assurer que l'animation commence correctement
scroll();

// Ajoute un écouteur d'événement pour exécuter la fonction scroll à chaque fois que l'utilisateur fait défiler la page
window.addEventListener('scroll', scroll);
