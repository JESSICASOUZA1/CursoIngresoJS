/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';


	while(respuesta == "si")
		{
			numeroIngresado = prompt("Ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		    respuesta = prompt("Desea continuar?");

			if(numeroIngresado>0)
            {
				sumaPositivos = sumaPositivos + numeroIngresado;
			}
            else
			{
				multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
			}


		//	acumulador = acumulador + numeroIngresado;
			contador = contador + 1; //contador++
		
			console.log(contador);
		}
			

		   document.getElementById("txtIdSuma").value = sumaPositivos;
		   document.getElementById("txtIdProducto").value = multiplicacionNegativos;
		



}//FIN DE LA FUNCIÓN