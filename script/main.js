
//*****************HOME************/

//EN PREGUNTAS FRECUENTAS LAS FLECHAS MUESTRAN Y ESCONDEN COMENTARIO 

const arrows = document.querySelectorAll(".arrowQuestions")                //llama a la clase de los 2 iconos
const comments = document.querySelectorAll(".questions__frecuency__coffee p")  // llama a las "p" de la clase 
arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
        // console.log(arrow.parentNode.parentNode.children); 
        arrow.parentNode.parentNode.children[1].classList.toggle("showHide");    //agrega y esconde la clase seleccionada
        arrow.classList.toggle("rotated")
        // console.log("tres");
    })
})

// DESDE "novedades" CLICK  AÑADIR Y QUE APAREZCA EN EL CONTADOR DE LA CESTA Y LOCALSTORAGE


const botonesAdd = document.querySelectorAll(".btnAdd")              //  declarouna variable y llamo a los todos los botones
let carrito = [];    //se crea el array que contendra el valor del objeto cuando ocurra el evento click()
botonesAdd.forEach((botonAdd) => {      //recorre todos los botones del array y b/p el elemento es el singular 
    botonAdd.addEventListener("click", (e) => {     // añade un escucha del evento "click" y se ejecutara la funcion asociada
        let producto = {          // se declara el objeto
            cantidad: 1,
            nombre: botonAdd.parentNode.children[1].innerText,    // key del objeto,selecciona cada boton hasta llegar a la posicion (index)
            precio: botonAdd.parentNode.children[2].innerText,
            img: botonAdd.parentNode.children[0].src,
        }

        let indice = carrito.findIndex(element => element.nombre === producto.nombre)  // itera y te devuelve el indice del elemento

        if (indice == -1) {             // si la posicion no existe (-1)
            carrito.push(producto)      // se ingresa el objeto en el array
        } else {
            carrito[indice].cantidad++
        }

        localStorage.setItem("carrito", JSON.stringify(carrito))  //se guarda en el localstorage y se covierte en string
    })
})





 










