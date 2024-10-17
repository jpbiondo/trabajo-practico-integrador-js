import { productoActivo, setProductoActivo } from "../../main";

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