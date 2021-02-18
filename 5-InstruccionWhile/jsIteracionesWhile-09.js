/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var edadIngresada;
	var nombreViejo;
	var nombreJoven;
	var numeroMaximo = 0;
	var numeroMinimo = 0;
	var respuesta;

	//iniciar variables
    
	banderaDelPrimero="es el primero";
	respuesta="si";

	while(respuesta=="si")
	{
		edadIngresada = prompt("Ingrese un numero");
		edadIngresada = parseInt(edadIngresada);
		

		if(edadIngresada>numeroMaximo || banderaDelPrimero == "es el primero") //bandera solo sera vdd 1 vez
		{
			numeroMaximo = edadIngresada;
			banderaDelPrimero = "no";
		}
		if(edadIngresada<numeroMinimo || banderaDelPrimero == "es el primero")
		{
			numeroMinimo = edadIngresada;
			banderaDelPrimero = "no";
		}

		respuesta = prompt("Desea continuar?");
	}

	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;


}//FIN DE LA FUNCIÓN

/* bandera é quando nao surge outra forma de indicar algo.

*/