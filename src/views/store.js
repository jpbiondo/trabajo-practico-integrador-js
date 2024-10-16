import { handleGetProductLocalStorage } from "../persistence/localStorage"

// ==== STORE ====
export const handleGetProductToStore = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
}

export const handleRenderList = (products) => {
    const buguers = products.filter((el) => el.categoria === "Hamburguesas");
    const papas = products.filter((el) => el.categoria === "Papas");
    const gaseosas = products.filter((el) => el.categoria === "Gaseosas");

    const renderProductGroup = (products, title) => {
        if(products.length === 0) return "";
       
        const productsHTML = products.map((product, index) => {
            return `
                <div id="product-${product.categoria}-${index}">
                    <div>
                        <img src =${product.img}>
                        <div>
                            <h2> ${product.nombre}
                        </div>
                        <div>
                            <p> <b>Precio:</b> ${product.precio}</p>
                            <p> <b>Categoria:</b> ${product.categoria}</p>
                        </div>
                    </div>
                </div>
            `
        });

        return `
            <section>
                <h3>${title}</h3>
                ${productsHTML.join("")}
            </section>
        `;
    };

    const appContainer = document.querySelector("#storeContainer");
    appContainer.innerHTML = `
        ${renderProductGroup(buguers, "Hamburguesas")}
        ${renderProductGroup(papas, "Papas")}
        ${renderProductGroup(gaseosas, "Gaseosas")}

    `;

    const addEvent = (products) => {
        if(products.length === 0) return;

        products.forEach((product, index) => {
            const productContainer = document.querySelector(`#product-${product.categoria}-${index}`);
            console.log(`product-${product.categoria}-${index}`);
            productContainer.addEventListener("click", () => {
                console.log("productoActive", product)
            })
        });         
    };

    addEvent(buguers);
    addEvent(papas);
    addEvent(gaseosas);
    
};