const params = new URLSearchParams(window.location.search);

let id = params.get("id");

if(id){
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

    const producto = listaProductos.find((producto) => producto.id == id);

    if(producto){

        let nombre = producto.nombre;
        let descripcion = producto.descripcion;
        let precio = producto.precio;
        let urlImagen = producto.urlImagen;

        $("#producto-nombre").text(nombre);
        $("#producto-descripcion").text(descripcion);
        $("#producto-precio").text(precio);

        $("#producto-imagen").attr("src", urlImagen);
        $("#producto-imagen").attr("alt", nombre);

        
    }else{
        
        let respuesta = `
            <header>
                <h1 class="text-center py-3">No se encuentra el recurso buscado.</h1>
            </header>
            <main class="container">
                <a href="/" class="btn btn-primary">Volver</a>
            </main>
        `
        $("body").html(respuesta );
    }

}else{
    
    //ACCIONES QUE REALIZAMOS CUANDO NO NOS MANDEN EL ID

    let respuesta = `
            <header>
                <h1 class="text-center py-3">Te perdiste...</h1>
            </header>
            <main class="container">
                <a href="/" class="btn btn-primary">Volver</a>
            </main>
        `
        $("body").html(respuesta );
}