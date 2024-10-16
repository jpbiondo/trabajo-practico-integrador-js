import { setInLocalStorage } from "./src/persistence/localStorage";
import { renderCategories } from "./src/services/categories";
import { handleGetProductToStore } from "./src/views/store";
import './style.css';

// ==== APLICACION ====
handleGetProductToStore();



renderCategories();


// ==== PRODUCT ====
const btnAdd = document.querySelector(".buttonAdd");

btnAdd.addEventListener("click", () => {
    openModal();
});


// ==== POPUP ====
const btnCancel = document.querySelector("#cancelBtn");

btnCancel.addEventListener("click", () => {
    closeModal();
})


// open close modal functions
const openModal = () => {
    const modal = document.querySelector("#modalPopUp");
    modal.style.display = 'flex';
}

const closeModal = () => {
    const modal = document.querySelector("#modalPopUp");
    modal.style.display = 'none';
}

//save or modify elements

const btnAccept = document.querySelector("#acceptBtn");

btnAccept.addEventListener("click", () => {
    handleSaveOrModifyElements();
})

const handleSaveOrModifyElements = () => {
    const nombre = document.querySelector("#nombre").value;
    const img = document.querySelector("#img").value;
    const precio = document.querySelector("#precio").value;
    const categoria = document.querySelector("#categoria").value;

    let obj = {
        id:new Date().toISOString(),
        nombre,
        img,
        precio,
        categoria,
    }

    setInLocalStorage(obj);
    handleGetProductToStore();
    closeModal();
}
