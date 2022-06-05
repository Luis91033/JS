const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si dos números son iguales

console.log(numero1 == numero3);
console.log(numero1 == numero2); //Se fija en el valor

// Comparador estricto
console.log(numero1 === numero2); //Se fija en el valor y en el tipo de dato
console.log(numero1 === parseInt(numero2));
console.log(typeof numero1);
console.log(typeof numero2);

//Diferente
const password2 = "admin";
const password1 = "Admin";

console.log(password1 != password2);
console.log(numero1 !== numero2);
