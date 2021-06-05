const carro = new Carrito (); 
  const carrito = document.getElementById("carrito");
 
  //declaro variable para div que tiene lista de productos
  const productos = document.getElementById("lista-productos");
 

  const listaProductos = document.querySelectorAll("#lista-carrito")

  //declaro variable para vaciar carrito
  const vaciarCarrito = document.getElementById("vaciar-carrito");


  cargarEventos()

 //function para agregar event "click"
  function cargarEventos(){
      productos.addEventListener("click", (e) => {carro.comprarProducto(e)});


     carrito.addEventListener("click", (e) =>{carro.eliminarProducto(e)});  
 

    vaciarCarrito.addEventListener('click', (e) => {carro.vaciarCarrito(e)});
 }
