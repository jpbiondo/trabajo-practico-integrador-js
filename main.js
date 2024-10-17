import { setInLocalStorage } from "./src/persistence/localStorage";
import { renderCategories } from "./src/services/categories";
import { handleGetProductToStore } from "./src/views/store";
import './style.css';

// ==== APLICACION ====

handleGetProductToStore();
export let categoriaActiva = null;

export const setCategoriaActiva = (categoria) => {
    categoriaActiva = categoria;
};

export let productoActivo = null;

export const setProductoActivo = (producto) => {
    productoActivo = producto;
}


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
export const openModal = () => {
    const modal = document.querySelector("#modalPopUp");
    modal.style.display = 'flex';
    if(productoActivo) {
        const nombre = document.querySelector("#nombre");
        const img = document.querySelector("#img");
        const precio = document.querySelector("#precio");
        const categoria = document.querySelector("#categoria");
        
        nombre.value = productoActivo.nombre;
        categoria.value = productoActivo.categoria;
        img.value = productoActivo.img;
        precio.value = productoActivo.precio;
    }
}

export const closeModal = () => {
    const modal = document.querySelector("#modalPopUp");
    modal.style.display = 'none';
    setProductoActivo(null);
    resetModal();
}

const resetModal = () => {
    const nombre = document.querySelector("#nombre");
    const img = document.querySelector("#img");
    const precio = document.querySelector("#precio");
    const categoria = document.querySelector("#categoria");
    
    nombre.value = '';
    img.value = '';
    precio.value = 0;
    categoria.value = 'Seleccione una categoria';

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
