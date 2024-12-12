let section = document.getElementById("section");
let carritoCompra = document.getElementById("carrito");

const products = [
    {
        nombre: "Katana",
        cultura: "Japon",
        descripcion: "Espada curva, ligera y extremadamente afilada, usada por samuráis en combate.",
        precio: 3000, stock: 30,
        image: "./assets/katana.webp"
    },

    {
        nombre: "Gladius",
        cultura: "Roma",
        descripcion: "Espada corta de uso militar romano, diseñada para estocar y cortar en batalla.",
        precio: 500,
        stock: 20,
        image: "./assets/gladius.jpeg"
    },

    {
        nombre: "Claymore",
        cultura: "Escocia",
        descripcion: "Espada larga de doble filo, símbolo de la fuerza escocesa en el campo de batalla.",
        precio: 1500,
        stock: 20,
        image: "./assets/claymore.jpg"
    },

    {
        nombre: "Cutlass",
        cultura: "Europa marítima",
        descripcion: "Espada corta con filo curvado, famosa entre los piratas y marineros.",
        precio: 400,
        stock: 10,
        image: "./assets/cutlass.jpg"
    },

    {
        nombre: "Ulfberht",
        cultura: "Vikingos",
        descripcion: "Espada vikinga de acero superior, símbolo de poder y estatus.",
        precio: 4000,
        stock: 15,
        image: "./assets/ulfberht.jpg"
    },

    {
        nombre: "Shamshir",
        cultura: "Persia",
        descripcion: "Espada curva y ligera, ideal para cortes rápidos en caballería.",
        precio: 2000,
        stock: 35,
        image: "./assets/shamshir.jpeg"
    },

    {
        nombre: "Tizona",
        cultura: "España",
        descripcion: "Espada del Cid Campeador, usada en batallas de la Reconquista.",
        precio: 3000,
        stock: 10,
        image: "./assets/tizona.jpg"
    },

    {
        nombre: "Khopesh",
        cultura: "Egipto",
        descripcion: "Espada con hoja curva en forma de hoz, usada por faraones y soldados.",
        precio: 1000,
        stock: 25,
        image: "./assets/khopesh.jpeg"
    },

    {
        nombre: "Zweihänder",
        cultura: "Alemania",
        descripcion: "Espada gigante de dos manos, utilizada para romper formaciones.",
        precio: 2500, 
        stock: 26, 
        image: "./assets/zweihänder.webp"
    },

    {
        nombre: "Rapier",
        cultura: "Europa Renacentista",
        descripcion: "Espada delgada y ligera, diseñada para duelos y ataques rápidos.",
        precio: 1200,
        stock: 30,
        image: "./assets/rapier.webp"
    },

    { 
        nombre: "Kris", 
        cultura: "Sureste Asiático", 
        descripcion: "Espada ceremonial y de combate con hoja ondulada.", 
        precio: 700, 
        stock: 10, 
        image: "./assets/kris.jpg" 
    },

    { 
        nombre: "Dao", 
        cultura: "China", 
        descripcion: "Espada china de un solo filo, utilizada en artes marciales y guerra.",
        precio: 1500, 
        stock: 25, 
        image: "./assets/dao.jpg" 
    },

    { 
        nombre: "Nodachi", 
        cultura: "japon", 
        descripcion: "Gran espada japonesa, usada en combates de campo abierto.", 
        precio: 4000, 
        stock: 30, 
        image: "./assets/nodachi.jpg" 
    },

    { 
        nombre: "Haladie", 
        cultura: "India/Siria", 
        descripcion: "Daga de doble filo, con hojas curvas unidas a un único mango.", 
        precio: 800, 
        stock: 10, 
        image: "./assets/haladie.webp" 
    },

    { 
        nombre: "Zulfiqar", 
        cultura: "Islam",
        descripcion: "Espada bifurcada, legendaria en la cultura islámica y símbolo de justicia.", 
        precio: 5000, 
        stock: 2, 
        image: "./assets/zulfiqar.jpg" 
    },

    { 
        nombre: "Spatha", 
        cultura: "Roma tardía", 
        descripcion: "Espada larga usada por caballería romana y bárbaros aliados.", 
        precio: 700, 
        stock: 25, 
        image: "./assets/spatha.webp" 
    },

    { 
        nombre: "Seax", 
        cultura: "Anglosajones", 
        descripcion: "Daga larga o espada corta, símbolo de los guerreros anglosajones.", 
        precio: 300, 
        stock: 15, 
        image: "./assets/seax.jpg" 
    },

    { 
        nombre: "Bastard Sword", 
        cultura: "Europa medieval", 
        descripcion: "Espada versátil usada con una o dos manos.", precio: 2000, 
        stock: 30, 
        image: "./assets/bastard.jpg" 
    },

    { 
        nombre: "Macuahuitl", 
        cultura: "Mesoamérica", 
        descripcion: "Espada de madera con obsidiana, usada por guerreros aztecas.", 
        precio: 600, 
        stock: 8, 
        image: "./assets/macuahuitl.jpg" 
    },

    { 
        nombre: "Sword of Mercy", 
        cultura: "Reino Unido", 
        descripcion: "Espada ceremonial con punta rota, símbolo de clemencia real.", 
        precio: 5000, 
        stock: 5, 
        image: "./assets/sword-of-mercy.jpg" 
    },
];
const cart = [];

function getProducts(arrayProducts) {
    for (let i = 0; i < arrayProducts.length; i++) {
        section.innerHTML += `<article class="article">
        <header><img src="${arrayProducts[i].image}"></header>
        <content>
        <h2>${arrayProducts[i].nombre}</h2>
        <h3>${arrayProducts[i].cultura}</h3>
        <p class="description">${arrayProducts[i].descripcion}</p>
        </content>
        <footer>
        <span>Stock: </span><span id="stock${i}">${arrayProducts[i].stock}</span>
        <h3 class="precio">Precio: ${arrayProducts[i].precio}usd.</h3>
        <button class="btnCart" id="btn${i}">Add cart</button>
        </footer>
        </article>`
    }

    for(let i = 0; i < arrayProducts.length; i++){
        document.getElementById(`btn${i}`).addEventListener("click", () => {
            addToCart(i, cart);       
        });
    }
}
getProducts(products);


let total = 0;

function addToCart(index, array){
    let precio = products[index].precio;
    let stock = products[index].stock;
    let spanStock = document.getElementById(`stock${index}`);
    let totalSpan = document.getElementById("totalSpan");

    if(stock > 0){
        array.push(products[index]);
        total += precio;
        products[index].stock--;
        spanStock.innerHTML = products[index].stock;
        viewCart(products[index]);
    }else alert("No se pueden comprar mas articulos de este tipo")

    totalSpan.innerHTML = `${total} usd
    <button id="btnFinish" class="btnFinish">Confirmar compra</button>`;
    cleanCart();
}

function viewCart(product){
    carritoCompra.innerHTML += `<article class="articleCart">   
    <h2>${product.nombre}</h2>
    <h3 class="precio">${product.precio} usd</h3>
    </article>` 
}

function cleanArrCart(){
    cart.length = 0;
    carritoCompra.innerHTML = `<h1 class="cartTitle">Carrito de compras</h1>`;
    document.getElementById("totalSpan").innerHTML = ``;
    alert("Compra finalizada")
}

function cleanCart(){
    document.getElementById("btnFinish").addEventListener("click", cleanArrCart);
    
};
