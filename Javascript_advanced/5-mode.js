// 5-mode.js

function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  // Création des closures avec les paramètres demandés
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  // Création et ajout du paragraphe
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Welcome Holberton!';
  document.body.appendChild(paragraph);

  // Fonction utilitaire pour créer un bouton avec un label et un handler
  function createButton(label, handler) {
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.style.marginRight = '10px';
    btn.addEventListener('click', handler);
    document.body.appendChild(btn);
  }

  // Création des boutons et association des closures en click handlers
  createButton('Spooky', spooky);
  createButton('Dark mode', darkMode);
  createButton('Scream mode', screamMode);
}

// Appel de la fonction principale
main();
