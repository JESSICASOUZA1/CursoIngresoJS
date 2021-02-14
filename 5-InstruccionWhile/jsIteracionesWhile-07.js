/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;

	contador=0;
	acumulador=0;
	respuesta="si";
    

	while(respuesta == "si")
		{
			numeroIngresado = prompt("Ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		    respuesta = prompt("Desea continuar?");


			acumulador = acumulador + numeroIngresado;
			contador = contador + 1; //contador++
		
			console.log(contador);
		}
			
		   promedio = acumulador/contador;
		   document.getElementById("txtIdSuma").value = acumulador;
		   document.getElementById("txtIdPromedio").value = promedio;
		

}//FIN DE LA FUNCIÓN
