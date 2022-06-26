//Detener event bubbling con delegation
const card = document.querySelector(".card");

card.addEventListener("click", (e) => {
  if (e.target.classList.contains("titulo")) {
    console.log("diste click en título");
  }
  if (e.target.classList.contains("precio")) {
    console.log("diste click en precio");
  }
  if (e.target.classList.contains("card")) {
    console.log("diste click en card");
  }
});
