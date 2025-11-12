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
    



});