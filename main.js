const bienvenida = alert(" Bienvenido a su tienda de calzado. \n A continuacion seleccione de la lista  los productos que desea comprar.")


class producto {
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
    }
}

const calzado1 = new producto(1, "Zapatilla Fila Rojo", 28000, "img/7-fila-rojo.jpg");
const calzado2 = new producto(2, "Zapatilla Fila Rosa", 28000, "img/8-fila-rosa.jpg");
const calzado3 = new producto(3, "Zapatilla Fila Celeste", 28000, "img/9-fila-celeste.jpg");
const calzado4 = new producto(4, "Zapatilla Fila Blanco", 28000, "img/10-fila-blanco.jpg");
const calzado5 = new producto(5, "Zapatilla Fila Negro", 28000, "img/11-fila-negro.jfif");
const calzado6 = new producto(6, "Zapatilla Fila Amarillo", 28000, "img/12-fila-amarillo.JPG");


const productos = [calzado1,calzado2,calzado3,calzado4,calzado5,calzado6];



const tienda = productos.forEach((producto) => {
    let mostrarCarrito = document.createElement("div");
        mostrarCarrito.innerHTML= `<div>
                                    <p> ${producto.id} - ${producto.nombre} $ ${producto.precio}</p>
                                        <button id="boton-${producto.id}">comprar</button>
                                    </div>`
        document.body.append(mostrarCarrito);

        const boton = document.getElementById(`boton-${producto.id}`);
        boton.addEventListener("click", () => {
        console.log("seleccionaste el calzado : "+ producto.nombre);
        alert("seleccionaste : " + producto.nombre)
    })
    
}) 
