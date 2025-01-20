/** @format */

function iniciarApp() {
  const selectCategorias = document.querySelector("#categorias");
  const resultado = document.querySelector("#resultado");

  if (selectCategorias) {
    selectCategorias.addEventListener("change", seleccionarCate);
    obtenerCategorias();
  }

  const favoritosDiv = document.querySelector(".favoritos");
  if (favoritosDiv) {
    obtenerFav();
  }

  const modal = new bootstrap.Modal("#modal", {});

  function obtenerCategorias() {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => mostrarCategorias(data.categories));
  }

  function mostrarCategorias(categories = []) {
    categories.forEach((cat) => {
      const option = document.createElement("OPTION");
      option.value = cat.strCategory;
      option.textContent = cat.strCategory;
      selectCategorias.appendChild(option);
    });
  }

  function seleccionarCate(e) {
    const categoria = e.target.value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => mostrarRecetas(data.meals));
  }

  function mostrarRecetas(recetas = []) {
    limpiarHTML(resultado);

    const heading = document.querySelector("H2");
    heading.classList.add("text-center", "text-black", "my-5");
    heading.textContent = recetas.length ? "Resultados" : "No hay resultados";

    resultado.appendChild(heading);

    //Iterate on the results
    recetas.forEach((rec) => {
      const { idMeal, strMeal, strMealThumb } = rec;
      const contenedor = document.createElement("DIV");
      contenedor.classList.add("col-md-4");

      const recetaCard = document.createElement("DIV");
      recetaCard.classList.add("card", "mb-4");

      const img = document.createElement("IMG");
      img.classList.add("card-img-top");
      img.alt = `Imagen de la receta ${strMeal ?? rec.title}`;
      img.src = strMealThumb ?? rec.img;

      const recetaCardBody = document.createElement("DIV");
      recetaCardBody.classList.add("card-body");

      const recetaHeading = document.createElement("H3");
      recetaHeading.classList.add("card-title", "mb-3");
      recetaHeading.textContent = strMeal ?? rec.title;

      const recetaButton = document.createElement("BUTTON");
      recetaButton.classList.add("btn", "btn-danger", "w-100");
      recetaButton.textContent = "Ver receta";
      // recetaButton.dataset.bsTarget = "#modal";
      // recetaButton.dataset.bsToggle = "modal";
      recetaButton.onclick = () => {
        seleccionarReceta(idMeal ?? rec.id);
      };

      //Inyect on the HTML code
      recetaCardBody.appendChild(recetaHeading);
      recetaCardBody.appendChild(recetaButton);

      recetaCard.appendChild(img);
      recetaCard.appendChild(recetaCardBody);

      contenedor.appendChild(recetaCard);

      resultado.appendChild(contenedor);
    });
  }

  function seleccionarReceta(id) {
    const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => mostrarReceta(data.meals[0]));
  }

  function mostrarReceta(receta) {
    const { idMeal, strInstructions, strMeal, strMealThumb } = receta;
    //Add content modal
    const modalTitle = document.querySelector(".modal .modal-title");
    const modalBody = document.querySelector(".modal .modal-body");

    modalTitle.textContent = strMeal;
    modalBody.innerHTML = `
      <img class="img-fluid" src="${strMealThumb}" alt="${strMeal}" />
      <h3 class="my-3">Instrucciones</h3>
      <p>${strInstructions}</p>
      <h3 class="my-3">Ingredientes y Cantidades</h3>
    `;

    const listGroup = document.createElement("UL");
    listGroup.classList.add("list-group");
    //Show quantities and ingredientes
    for (let i = 1; i <= 20; i++) {
      if (receta[`strIngredient${i}`]) {
        const ingrediente = receta[`strIngredient${i}`];
        const cantidad = receta[`strMeasure${i}`];

        const ingredienteli = document.createElement("LI");
        ingredienteli.classList.add("list-group-item");
        ingredienteli.textContent = `${ingrediente} - ${cantidad}`;

        listGroup.appendChild(ingredienteli);
      }
    }

    modalBody.appendChild(listGroup);

    const modalFooter = document.querySelector(".modal-footer");

    limpiarHTML(modalFooter);

    //Close and Favorite Buttons
    const btnF = document.createElement("BUTTON");
    btnF.classList.add("btn", "btn-danger", "col");
    btnF.textContent = "Guardar Favorito";

    //LocalStorage
    btnF.onclick = () => {
      if (existeStorage(idMeal)) {
        eliminarFavoritos(idMeal);
        btnF.textContent = "Guardar Favorito";
        mostratToast("Eliminado Correctamente");
        return;
      }

      agregarFavorito({
        id: idMeal,
        title: strMeal,
        img: strMealThumb,
      });
      btnF.textContent = "Eliminar Favorito";
      mostratToast("Agregado Correctamente");
    };

    const btnC = document.createElement("BUTTON");
    btnC.classList.add("btn", "btn-secondary", "col");
    btnC.textContent = "Cerrar";

    btnC.onclick = () => {
      modal.hide();
    };

    modalFooter.appendChild(btnF);
    modalFooter.appendChild(btnC);

    //Show modal
    modal.show();
  }
  function agregarFavorito(receta) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];
    localStorage.setItem("favoritos", JSON.stringify([...favoritos, receta]));
  }

  function eliminarFavoritos(id) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];
    const nFavoritos = favoritos.filter((favorito) => favorito.id !== id);
    localStorage.setItem("favoritos", JSON.stringify(nFavoritos));
  }

  function existeStorage(id) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];
    return favoritos.some((favorito) => favorito.id === id);
  }

  function mostratToast(mensaje) {
    const toastDiv = document.querySelector("#toast");
    const toastBody = document.querySelector(".toast-body");
    const toast = new bootstrap.Toast(toastDiv);

    toastBody.textContent = mensaje;
    toast.show();
  }

  function obtenerFav() {
    const favoritos = JSON.parse(localStorage.getItem("favoritos") ?? []);
    if (favoritos.length) {
      mostrarRecetas(favoritos);
      return;
    }

    const noFav = document.createElement("P");
    noFav.textContent = "No hay favoritos";
    noFav.classList.add("fs-4", "text-center", "font-bold", "mt-5");
    resultado.appendChild(noFav);
  }

  function limpiarHTML(selector) {
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  }
}
document.addEventListener("DOMContentLoaded", iniciarApp);
