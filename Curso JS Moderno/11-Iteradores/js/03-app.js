//Ejercicio de Fizz Buzz - 100 Números

// 3 6 9 12 .. fizz
// 5 10 15 .. buzz
// 15 30 45 FIZZBUZZ!

for (i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`Número ${i}: FIZZBUZZ`);
    continue;
  }
  if (i % 3 === 0) {
    console.log(`Número ${i}: Fizz`);
    continue;
  }
  if (i % 5 === 0) {
    console.log(`Número ${i}: Buzz`);
    continue;
  }

  console.log(`Número ${i}: normal`);
}
