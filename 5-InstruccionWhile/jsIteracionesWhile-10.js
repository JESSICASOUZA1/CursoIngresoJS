/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. acumulador +1
2-Suma de los positivos.
3-Cantidad de positivos. 
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{

	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNe;
	var sumaPo;
	var contadorPo;
	var contadorNe;
	var acumuladorPo;
	var acumuladorNe;
	var cantPares;
	var cantCeros;
	var promePo;
	var promeNe;
    var difPosNe = 0;

	//asignar valores a variables

	respuesta="si";
	sumaPo = 0;
	sumaNe = 0;
	acumuladorPo = 0;
	acumuladorNe = 0;
	contadorPo = 0;
	contadorNe = 0; //contador++ = 0;
	cantPares = 0;
    promePo = 0;
	promeNe = 0;
	cantCeros = 0;
	difPosNe = 0;



	//establecer loop

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		respuesta = prompt("Desea continuar?"); //ou colocar no final

		if(numeroIngresado>0)
		{
			sumaPo = sumaPo + numeroIngresado;
			acumuladorPo = acumuladorPo + 1;
		
            if (numeroIngresado % 2 == 0)
			{
				cantPares = canPares + 1;
			}
		}
		else if (numeroIngresado<0)
		{
			sumaNe = sumaNe + numeroIngresado;
			acumuladorNe = acumuladorNe + 1;

			if(numeroIngresado % 2 == 0)
			{
				cantPares = cantPares + 1;

			}
		}
	
		//console.log(contador);
	}
    
	document.write("Suma de los positivos es:" +sumaPo+"<br>"); 
	document.write("Suma de los negativos es:" +sumaNe+"<br>");
	document.write("Acumulador de los positivos es:"+acumuladorPo+"<br>");
	document.write("Acumulador de los negativos es:"+acumuladorNe+"<br>");
	//document.write("")
	document.write("La cantidad de pares es:"+cantPares+"<br>");
	document.write("Promedio de positivos es:"+promePo+"<br>");
	document.write("Promedio de negativos es:"+promeNe+"<br>");
	//document.write("")


	promePo = acumuladorPo/contadorPo;
	promeNe = acumuladorNe/contadorNe;

	document.write = promePo;
	//document.getElementById = promeNe;

    //CantNumerosPares = numeroIngresado % 2;


}//FIN DE LA FUNCIÓN


//usar isNaN para verificar se é um numero

//document.write("Suma de los negativos es :"+sumaNegativos+" "+CantidadNegativos+" "+PromedioNegativos);
//document.write("Suma de los positivos es :"+sumaPositivos+" "+CantidadPositivos+" "+PromedioPositivos);