function mostrar()
{
	/*
	Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
	*/

	var numeroIngresado;
	var contador;
	var acumulador;
    
	contador = 0;
    acumulador = 0;

    while(contador<5)
   {
	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);

	acumulador = acumulador + numeroIngresado;
	contador = contador + 1; //contador++

    console.log(contador);
   }
    
   promedio = acumulador/contador;
   document.getElementById("txtIdSuma").value = acumulador;
   document.getElementById("txtIdPromedio").value = promedio;

/*
	contador=0;
	acumulador=0;
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
*/

}//FIN DE LA FUNCIÓN

/* isNaN -> permite detectar se estamos ingresando um numero ou qualquer outra coisa
   NaN significa not a number

    while(isNaN(numeroIngresado)==true
   {
    numeroingresado = prompt("Error, ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);

   }

*/
//usar isNaN para verificar se é um numero
//Esta função retorna verdadeiro se o valor for igual a NaN. Caso contrário, ele retorna falso.

