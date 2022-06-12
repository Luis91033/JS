//Else If

const dinero = 300;
const total = 500;
const tarjeta = true;

if (dinero >= total) {
  console.log("Sí puedes pagar");
} else if (tarjeta) {
  console.log("Sí puedo pagar");
} else {
  console.log("Fondos insuficientes");
}
