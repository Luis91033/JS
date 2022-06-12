//Operador ternario

const autenticado = true;
const pagar = true;

//Es un if pero en una sola línea
console.log(autenticado && pagar ? "Sí puede pagar" : "No lo está");
console.log(autenticado || pagar ? "Sí puede pagar" : "No lo está");

//Doble if
console.log(
  autenticado
    ? pagar
      ? "Sí puede pagar"
      : "No está autenticado"
    : "No lo está"
);
