function countPrimeNumbers() {
  let count = 0;

  for (let number = 2; number <= 100; number++) {
    let isPrime = true;

    for (
      let divisor = 2;
      divisor < number;
      divisor++
    ) {
      if (number % divisor === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      count++;
    }
  }

  return count;
}

const startTime = performance.now();

for (let i = 0; i < 100; i++) {
  setTimeout(countPrimeNumbers, 0);
}

const endTime = performance.now();

console.log(
  `Execution time of calculating prime numbers 100 times was ${
    endTime - startTime
  } milliseconds.`
);
