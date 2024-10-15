//render de la vista categorias

export const renderCategories = () => {
    const ulList = document.querySelector("#listFilter");
    ulList.innerHTML = `
    <li id="todo"> Todos los elementos </li>
    <li id="hamburguesas"> Hamburguesas </li>
    <li id="papas"> Papas </li>
    <li id="gaseosas"> Gaseosas </li>
    <li id="mayorPrecio"> Mayor precio </li>
    <li id="menorPrecio"> Menor precio </li>
    `;

    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElem) => {
        liElem.addEventListener("click", () => {
            addLiActiveClass(liElem);
        });
    });

    const addLiActiveClass = (liElem) => {
        liElements.forEach((liEl) => {
            if(liEl.classList.contains("liActive")) {
                liEl.classList.remove("liActive");
            } else {
                if(liEl === liElem) {
                    liEl.classList.add("liActive");
                }
            }
        })
    }

};