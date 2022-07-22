//WeakSet
//Sólo agrega objetos

const weakSeat = new WeakSet();

const cliente = {
  cliente: "Lalo",
  saldo: 500,
};

weakSeat.add(cliente);

console.log(weakSeat);
