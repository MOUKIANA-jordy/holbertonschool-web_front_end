// 1-nested_functions.js

const globalVariable = 'Welcome';

function outer() {
  alert(globalVariable); // First alert: "Welcome"

  const course = 'Holberton';

  function inner() {
    alert(globalVariable + ' ' + course); // Second alert: "Welcome Holberton"

    const exclamation = '!';

    function inception() {
      alert(globalVariable + ' ' + course + exclamation); // Third alert: "Welcome Holberton!"
    }

    inception(); // Call inception inside inner
  }

  inner(); // Call inner inside outer
}

outer(); // Call outer from the main code
