$(function() {
    
    $("#seccion-productos .card a").click(function(event){
        event.preventDefault();
        
        let continuar = confirm("Está seguro que quiere ir a la página de detalles");

        if(continuar){
            // SE EJECUTA SIEMPRE QUE SEA VERDADERO

            let url = $(this).attr("href");
            window.location.href = url;
        }
    });



    // INICIO LÓGICA PARA CREAR Y AGREGAR TARJETAS AL DOM DE FORMA DINÁMICA

    // function crearTarjeta(producto){
    //     let tarjeta = `
    //         <div class="col">
    //             <div class="card w-100">
    //                     <img src="${producto.urlImagen}" class="card-img-top ratio ratio-4x3" alt="${producto.nombre}">
    //                     <div class="card-body">
    //                         <h5 class="card-title">${producto.nombre}</h5>
    //                         <p class="card-text">${producto.descripcion}</p>
    //                         <p class="card-text">Precio: <strong>${producto.precio}</strong></p>
    //                         <a href="/detalle-producto.html?id=${producto.id}" class="btn btn-primary">Ver detalles</a>
    //                     </div>
    //             </div>
    //         </div>
    //     `;
    //     return tarjeta;
    // };





    // listaProductos.forEach(function(producto){
    //     let tarjeta = crearTarjeta(producto);

    //     $("#contenedor-tarjetas").append(tarjeta);

    // });


    function crearTarjetas(listaProductos){

        let tarjetas = "";
        listaProductos.forEach(function(producto){
        tarjetas +=
        `
            <div class="col">
                <div class="card w-100">
                        <img src="${producto.urlImagen}" class="card-img-top ratio ratio-4x3" alt="${producto.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <p class="card-text">Precio: <strong>${producto.precio}</strong></p>
                            <a href="/detalle-producto.html?id=${producto.id}" class="btn btn-primary">Ver detalles</a>
                        </div>
                </div>
            </div>
        `;
    });

        return tarjetas;
    };



    let tarjetas = crearTarjetas(listaProductos);

    $("#contenedor-tarjetas").append(tarjetas);





    // TERMINO LÓGICA PARA CREAR Y AGREGAR TARJETAS AL DOM DE FORMA DINÁMICA
    



});