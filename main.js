/*

Crear un formulario que sirva para crear productos:
    nombre
    descripción
    precio
    imagen ( sólo la url de la imagen)

crear la lista de productos usando cards de bootstrap

cada producto debe tener un botón de "agregar al carrito"

Cada que se agregue un producto al carrito, actualizar la información del carrito de compras ("shopping cart label").
*/


let productsList = [
    {
    name:"Producto 1",
    description:"Descripcion producto 1",
    price: 100,
    image:"https://picsum.photos/id/6/400",

   },
   {
    name:"Producto 2",
    description:"Descripcion producto 2",
    price: 200,
    image:"https://picsum.photos/id/7/400",

   },
   {
    name:"Producto 3",
    description:"prod 3",
    price: 300,
    image:"https://picsum.photos/id/8/400",

   },
   {
    name:"Producto 4",
    description:"prod 4",
    price: 100,
    image:"https://picsum.photos/id/9/400",

   },

];
let shoppingCart = []; //Mi carrito de compras

let saveProduct = document.getElementById("save-product");
let productsContainer = document.getElementById("products-container");
let cartInfo = document.getElementById("cart-info");


saveProduct.addEventListener("click", () => {
    let name = document.getElementById
    ("product-name").value;
    let description = document.getElementById
    ("product-description").value;
    let price = document.getElementById
    ("product-price").value;
    let image = document.getElementById
    ("product-image").value;
    let productObject = { name, description, price, image};
    productsList.push(productObject);
    console.log(productsList);
    printAllProducts(productsList);
});

const createCard = (productData, index) => {
    let {name,description,image,price} = productData; // Esto es una deconstruction las diferentes propiedades del producto para despues usarlas

    let cardWrapper = document.createElement("div");
    cardWrapper.classList.add("col");

    let card = document.createElement("div");
    card.classList.add("card");

    let cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top");
    cardImage.src = image;

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    let cardTitleText = document.createTextNode(name);
    cardTitle.appendChild(cardTitleText);
    


    
    let cardDescription = document.createElement("p");
    cardDescription.classList.add("card-text");
    let descriptionText = document.createTextNode(description);
    cardDescription.appendChild(descriptionText);



    let cardPrice = document.createElement
    ("p");
    cardPrice.classList.add("card-text");
    let priceText = document.createTextNode(`$${price}MXN`);
    cardPrice.appendChild(priceText);

    let saveButton = document.createElement("button");
    saveButton.classList.add("btn","btn-info");
    let saveButtonText = document.createTextNode
    ("Agregar al carrito");

    saveButton.appendChild(saveButtonText);
    saveButton.addEventListener("click", () => {
        shoppingCart.push(productsList[index]);
        let totalPrice = shoppingCart.reduce((accum, current) => accum + Number(current.price),0);
        cartInfo.innerText = `Tu carrito tiene ${shoppingCart.length} productos,
        y el precio total es de $${totalPrice} MXN`;

    });

    cardBody.appendChild(cardTitle, cardDescription,
    cardPrice, cardImage, saveButton);

    card.append(cardImage,cardBody);

    cardWrapper.append(card);

    return cardWrapper;

};

const printAllProducts = (productsList) => {
    while (productsContainer.firstChild){
        productsContainer.removeChild(productsContainer.firstChild);//Mientras productsContainer tenga hijos se los vamos a remover
    };
    productsList.forEach((product, index) => { 
        let productCard = createCard(product, index);
        console.log(productCard);
        productsContainer.append(productCard);
    });
};

printAllProducts(productsList);


    

