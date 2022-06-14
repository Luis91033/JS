//Break y Continue en Foor Loop

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Este es el número 5");
    break; //Rompe el ciclo y ya no se ejecuta nada
  }
  console.log(`Numero ${i}`);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Este es el número 5");
    continue; //Rompe el ciclo, hasta donde se llama y se vuelve a reiniciar
  }
  console.log(`Numero ${i}`);
}
