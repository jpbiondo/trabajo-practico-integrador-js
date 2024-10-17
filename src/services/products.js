//save or modify elements

import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/modal";
import { handleGetProductToStore, handleRenderList } from "../views/store";

// ==== PRODUCT ====
const btnAccept = document.querySelector("#acceptBtn");

btnAccept.addEventListener("click", () => {
    console.log("here");
    handleSaveOrModifyElements();
})

const handleSaveOrModifyElements = () => {
    const nombre = document.querySelector("#nombre").value;
    const img = document.querySelector("#img").value;
    const precio = document.querySelector("#precio").value;
    const categoria = document.querySelector("#categoria").value;

    let obj = null;

    if(productoActivo) {
        obj = {
            ...productoActivo,
            nombre,
            img,
            precio,
            categoria,
        };
    } else {
        obj = {
            id:new Date().toISOString(),
            nombre,
            img,
            precio,
            categoria,
        };
    }

    

    setInLocalStorage(obj);
    handleGetProductToStore();
    closeModal();
}

//delete product
export const handleDeleteProduct = () => {
    const products = handleGetProductLocalStorage();
    console.log(products);
    const result = products.filter((el) => el.id !== productoActivo.id);
    localStorage.setItem("products", JSON.stringify(result));

    handleRenderList(handleGetProductLocalStorage());
};
