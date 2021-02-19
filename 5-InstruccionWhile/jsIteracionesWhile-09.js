/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimeroMax;
	var banderaDelPrimeroMin;
	var numeroIngresado;
	var numeroMaximo = 0;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
    
	banderaDelPrimeroMax="es el primero";
	banderaDelPrimeroMin="es el primero";
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		

		if(numeroIngresado>numeroMaximo || banderaDelPrimeroMax == "es el primero") //bandera solo sera vdd 1 vez
		{
			numeroMaximo = numeroIngresado;
			banderaDelPrimeroMax = "no";
		}
		if(numeroIngresado<numeroMinimo || banderaDelPrimeroMin == "es el primero")
		{
			numeroMinimo = numeroIngresado;
			banderaDelPrimeroMin = "no";
		}

		respuesta = prompt("Desea continuar?");
	}

	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;


}//FIN DE LA FUNCIÓN

/* bandera é quando nao surge outra forma de indicar algo.

*/