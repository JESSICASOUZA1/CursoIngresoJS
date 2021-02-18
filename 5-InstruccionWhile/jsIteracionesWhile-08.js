//A- edad y nombre , informar el nombre de la persona mas vieja y la mas joven
function mostrar()
{
    var edadIngresada;
    var nombreViejo;
	var nombreJoven;
    var contador;
    var numeroMax;
	var numeroMin;

    contador= 0;
	respuesta='si';

	edadIngresada = prompt("Ingrese una edad");
	edadIngresada = parseInt(edadIngresada);
    
	while(respuesta == "si")
		{
			if(edadIngresada>numeroMaximo || banderaDelPrimero == "es el primero") //bandera solo sera vdd 1 vez
            {
               numeroMaximo = edadIngresada;
			   banderaDelPrimero = "si";
			}
            contadoredadIngresada = contadoredadIngresada + 1; //contador++
		
		}
		

	nombre = prompt("Ingrese un nombre");
	nombre = parseInt(nombre);
	respuesta = prompt("Desea continuar?");

	while(respuesta == "si")
	{

	}































    /*   
	while(respuesta == "si") 
        {
		nombre = prompt("Ingrese un nombre");
		nombre = parseInt(nombre);
		respuesta = prompt("Desea continuar?");
        

		if(edad>0)
            {

			}
            else
			{
			}
			
			contadorEdad = contadorEdad + 1; //contador++
		
			console.log(contadorEdad);
		}
		
		document.getElementById("txtIdSuma").value = contadorEdad;
		document.getElementById("txtIdProducto").value = contadorNombre;
	
    
    		//	acumulador = acumulador + edad;
*/

}