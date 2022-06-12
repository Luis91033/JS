//Parámetros de un Arrow Function

const aprendiendo = function (tecnologia, tecnologia2) {
  console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
};
aprendiendo("JS", "NodeJS");

//Arrow Function
const aprendiendo2 = (tecnologia, tecnologia2) =>
  `Aprendiendo ${tecnologia} y ${tecnologia2}`; //Los paréntesis son opcionales si sólo hay un parámetro

console.log(aprendiendo2("JS", "NodeJS"));
