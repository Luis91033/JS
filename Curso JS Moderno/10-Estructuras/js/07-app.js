//Operador OR ||

const efectivo = 300;
const credito = 1000;
const disponible = efectivo + credito;
const pagar = 600;

if (efectivo > pagar || credito > pagar) {
  console.log("Sí podemos pagar");
} else {
  console.log("Fondos insuficientes");
}
