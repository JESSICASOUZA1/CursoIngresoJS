/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.

(el menor de los pares y el mayor de los negativos ...solo si hay)

*/
function mostrar()
{	// declarar variables
	var bandera = 0;
	var numIngresado = 0;
	var numMax = 0;
	var numMin = 0;
	var menorPar = 2;
	var mayorNega = (-1);

	var respuesta;	

    respuesta="si";

	while(respuesta=="si")
	{
		numIngresado = prompt("Ingrese un numero");
		numIngresado = parseInt(numIngresado);
		
		if(bandera == 0)
		{
			numMax = numIngresado;
			numMin = numIngresado;
			bandera = 1;
		}

		if(numIngresado>numMax) //bandera solo sera vdd 1 vez
		{
			numMax = numIngresado;
		}
		if(numIngresado<numMi)
		{
			numMin = numIngresado;
		}

		if(numIngresado < 0)
		{
			if(numIngresado>mayorNega)
			{
				mayorNega = numIngresado;
			}
		}
		if(numIngresado%2 == 0)
		{
			if(numIngresado <= menorPar)
			{
				menorPar = numIngresado;
			}
		}
		
		respuesta = prompt("Desea continuar?");
	}

	document.getElementById("txtIdMaximo").value=numMax;
	document.getElementById("txtIdMinimo").value=numMin;
	alert("El menor de los pares es: "+menorPar+ " y el mayor de los negativos es: " +mayorNega);


}//FIN DE LA FUNCIÓN

/* bandera é quando nao surge outra forma de indicar algo.

*/