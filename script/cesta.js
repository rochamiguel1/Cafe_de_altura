// LLAMA LO QUE CONTIENE LA BASE DE DATOS

let carrito = JSON.parse(localStorage.getItem('carrito'))  //en la variable se llama y transforma el string en un objeto y se llama al Key que esta en el localStorage
const cestaProductos = document.querySelector(".cestaProductos")// se selecciona la clase desde el css con "."
console.log(carrito);                                           // muestra el array con las key (nombre precio img) del objeto 


carrito.forEach((e, i) => {      // recorre el array y se agrega el elemento (e) e indice (i)
                                 // se agrega la parte del html en la clase cestaProductos para que aparezca cada vez que se hizo click en el boton agregar en "home" y cada vez que lo recorra se sumara una vez con +=
                                 //  $array carrito[indice] y cada img
    cestaProductos.innerHTML += `     
    <div class="uno">
        <div class="productos1">
            <img src="../assest/heroicons-outline_minus-sm.png" class="signosMenos" alt="menos">
            <p class="countCesta">${e.cantidad}</p>
            <img src="../assest/heroicons-outline_plus-sm.png" class="signosMas" alt="mas">
            <img src="${e.img}" class="cafeSuma">  
            <div class="cestaprecio">
                <p><strong> ${e.nombre}</strong></p>
                <p>Paquete de café, 250 gr</p>
            </div>
        </div>
        <div class="letra">
            <h3>${Number(e.precio) * Number(e.cantidad)}</h3>  
        </div>
    </div>
    `

}); 

const cambioSubtotal = () => {
    let subtotalSuma = 0

carrito.forEach(element => {
    subtotalSuma += Number(element.cantidad) * Number(element.precio)
})

subtotal.innerText =  subtotalSuma + ",00 €"                         //multiplica el valor del producto con 

}


let signosMenos = document.querySelectorAll(".signosMenos");           //  llamamos a la imagen menos mediante la clase 
let signosMas = document.querySelectorAll(".signosMas"); 
let countCesta = document.querySelector(".countCesta");  
let uno = document.querySelector(".uno");
let inputEnvio = document.querySelectorAll (".inputEnvio")
let totalCarrito = document.querySelector(".totalCarrito");  
let carrito1 = document.querySelector(".carrito1") 
let subtotal = document.querySelector(".subtotal")
let precio = document.querySelector(".letra")
let imagen = document.querySelector('.cafeSuma')
let total = document.querySelector(".carrito3")
let envio = document.querySelector(".carrito2")



cambioSubtotal()
console.log(cambioSubtotal);
signosMenos.forEach((signoMenos) =>{
    signoMenos.addEventListener("click", () => { 
        if(countCesta.innerHTML >= 1 ) {
            signoMenos.nextElementSibling.innerHTML--; 
        } 
        else { 
            uno.remove()
        }
    }); 
})

signosMas.forEach((signoMas) =>{
    signoMas.addEventListener("click", () => { 
       
        signoMas.previousElementSibling.innerHTML++; 
        
        let indiceCarrito = carrito.findIndex(element => element.img === imagen.src)
        carrito[indiceCarrito].cantidad++
        // countCesta.innerHTML++;
        precio.children[0].innerText = Number(countCesta.innerText) *   carrito[indiceCarrito].precio
        cambioSubtotal()
    
    }); 
})

inputEnvio.forEach ((tipoEnvio) => {
    tipoEnvio.addEventListener ("click" , (event) =>{
        let formaEnvio =  event.target.value
        if( formaEnvio == 0) {
            console.log("soy un 0");
        } else if (formaEnvio == 9){
            console.log("soy un 9")
        }
        
    })
    
})


// carrito[indiceCarrito].precio

/*
signosMas.addEventListener("click", (signomas) => { 
    
    let indiceCarrito = carrito.findIndex(element => element.img === imagen.src)
    carrito[indiceCarrito].cantidad++
    countCesta.innerHTML++;
    precio.children[0].innerText = Number(countCesta.innerText) *  carrito[indiceCarrito].precio
    //  console.log(Number(precio));
    // let subtotalPrice = Number(countCesta.innerText) + Number(countCesta.innerText) *  carrito[indiceCarrito].precio
    cambioSubtotal()
})
*/



