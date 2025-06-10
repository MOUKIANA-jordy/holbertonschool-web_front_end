// 13-bind_user.js

const user = {
  hobby: 'Calligraphy',
  favoriteSport: 'Hockey',
  astrologicalSign: 'Aries',
  firstName: 'Guillaume',
  lastName: 'Johns',
  location: 'Netherlands',
  occupation: 'Engineer',
};

function logWelcomeUser(welcomeString) {
  console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
}

// On lie `this` de logWelcomeUser à l'objet user
const bindLogWelcomeUser = logWelcomeUser.bind(user);

// Appel avec la chaîne "Hello"
bindLogWelcomeUser('Hello');
