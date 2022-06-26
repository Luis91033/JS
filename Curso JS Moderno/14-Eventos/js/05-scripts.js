//Eventos con el scroll
window.addEventListener("scroll", () => {
  const premium = document.querySelector(".premium");
  const ubicacion = premium.getBoundingClientRect();
  if (ubicacion.top < 100) {
    console.log("Ya llegaste");
  }
});
