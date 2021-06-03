
window.onload = function()
{
    console.log( "Hola" );
    comunicar();
}

function comunicar()
{
	//jQuery("#calc").click( function() //Apertura jquery
    //{        
        //cogemos el valor del input
        //var num = jQuery("#numero").val();
        
        //estas variables son necesarioas para el llamado dei input en el php.
        var num = document.getElementById("num").value;
        var num2 = document.getElementById("num2").value;
        
        
    //NOTA: las variables "var" siempre son importantes a la hora de agregar, utilizar o jejecutar el codigo, si hay una variable fatalte el codico "programa" no se ejecutara.
        //creamos array de parámetros que mandaremos por POST
        var params = {

    //NOTA: Si se agrega una variale nueva, cae en cuenta que no deben tener el mismo nombre, si no, el codigo no lo ejecutara, dale un nombre difrerente.
            "numFactorial" : num,
            "num2Factorial" : num2
            
        };
         
        //llamada al fichero PHP con AJAX
        $.ajax
        ({
            data:       params,
            url:        'c_jquery_response.php',
            dataType:   'html',
            type:       'post',
            beforeSend: function()
            {
                console.log( "Enviando........" );
                //mostramos gif "cargando"
                //jQuery('#loading_spinner').show();
                //antes de enviar la petición al fichero PHP, mostramos mensaje
                //jQuery("#resultado").html("Déjame pensar un poco...");
            },
            success: function( response )
            {
                //escondemos gif
                //jQuery('#loading_spinner').hide();
                //mostramos salida del PHP
                //jQuery("#resultado").html(response);
                
                console.log( response );
            }
        });
    //}); //Cierre jquery
}