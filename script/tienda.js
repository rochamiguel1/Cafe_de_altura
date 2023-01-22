
const botonesAdd = document.querySelectorAll (".btnAdd")              //  declarouna variable y llamo a los todos los botones
let carrito= [];    //se crea el array que contendra el valor del objeto cuando ocurra el evento click()
botonesAdd.forEach((botonAdd) =>{      //recorre todos los botones del array y b/p el elemento es el singular 
    botonAdd.addEventListener("click", (e)=>{     // añade un escucha del evento "click" y se ejecutara la funcion asociada
      let producto = {          // se declara el objeto
          nombre: botonAdd.parentNode.children[1].innerText,    // key del objeto,selecciona cada boton hasta llegar a la posicion (index)
          precio: botonAdd.parentNode.children[2].innerText,
          img: botonAdd.parentNode.children[0].src
      } 
       carrito.push(producto)  // se ingresa el objeto en el array
     localStorage.setItem("carrito", JSON.stringify(carrito))  //se guarda en el localstorage y se covierte en string
    })
})


