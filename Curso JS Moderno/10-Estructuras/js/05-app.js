//Switch

const pago = "Efectivo";

switch (pago) {
  case "Efectivo": {
    console.log(`Pagaste con ${pago}`);
    break;
  }
  case "cheque": {
    console.log(`Pagaste con ${pago}`);
    break;
  }
  default: {
    console.log("Método de pago no procesado");
  }
}
