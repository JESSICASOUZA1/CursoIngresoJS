/*
da silva de souza, jessica
A-ingrese nombre , sexo , edad (validar que si es mujer debe ser adolescente 
y si el hombre debe ser niño), altura (validar), temperatura corporal

B- necesitamos saber: el nombre y el sexo de la persona mas alta , 
de las mujeres el nombre de la mas joven ,--de los hombre el nombre del mas bajito ,solo si los hay.

C - 10 el promedio de edad entre los hombre ,el promedio de edad entre las mujeres, la cantidad de personas que miden mas de 1,60 metros, 
y el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts.

 */
function mostrar()
{
	//A
    var i;
	var nombre;
	var sexo;
	var edad;
	var altura;
	var tempCorporal;

	//B
	var nombreMasAlto;
	var sexoMasAlto;
	var bandera = 0;
	var masAlto;
	var edadMin;
	var nombreMasJoven;
	var nombreMasBajito;
	var masBajo;
	var banderaExisteM = 0;	
	var banderaExisteF = 0;	

	//C
    var contF = 0;
	var contM = 0;
	var promF = 0;
	var promM = 0;
	var acumuF = 0;
	var acumuM = 0;
	var contPers16 = 0;
	var contF16 = 0;
	var porcentajeF = 0;



	for(i=0; i<5; i++)
	{

		nombre = prompt("Ingrese nombre");
		sexo = prompt("Ingrese sexo (M O F)");
    
    while(!(sexo == "M" || sexo =="m" || sexo == "F" || sexo =="f"))
	{
		sexo = prompt("Error, Ingrese sexo valido (M O F)");
	}

	edad = parseInt(prompt("Ingrese edad"));
	while(edad<1 || edad>120)
	{
		edad = parseInt(prompt("Error, Ingrese edad valida"));
	}

	switch(sexo)
	{
		case "F":
		case "f":
			while(edad<13 || edad>18)
			{
				edad = parseInt(prompt("Error, la mujer debe ser adolescente."));
			}
			break;

        case "M":
		case "m":
			while(edad>12)
			{
				edad = parseInt(prompt("Error,el hombre debe ser niño."));
			}
			break;
	}

    altura = parseFloat(prompt("Ingrese altura"));
	while(altura<0.5 || altura>3)
	{
		altura = parseFloat(prompt("Error, Ingrese altura valida"));
	}

	tempCorporal = parseFloat(prompt("Ingrese temperatura corporal"))
	while(tempCorporal<16 || tempCorporal>40)
	{
		tempCorporal = parseFloat(prompt("Error,Ingrese temperatura corporal valida"))
	}
    
	if(bandera == 0)
	{
		masAlto = altura;
		nombreMasAlto = nombre;
		sexoMasAlto = sexo;
		bandera = 1;
	}

	if(altura>masAlto)
	{
		masAlto = altura;
		nombreMasAlto = nombre;
		sexoMasAlto = sexo;
	}
////////////////////////////////////////////////////////////
	switch(sexo)
	{
	case "F":
	case "f":
		if(banderaExisteF == 0)
		{
			edadMin = edad;
			nombreMasJoven = nombre;			
		}
		banderaExisteF = 1;
		contF++;
		acumuF = acumuF + edad;  //C
		if(edad<edadMin)
		{
		edadMin = edad;
		nombreMasJoven = nombre;
	    }		
		break;

	case "M":
	case "m":
		if(banderaExisteM == 0)
		{
			nombreMasBajito = nombre;
			masBajo = altura;			
		}
		banderaExisteM = 1;	
		contM++;   //C
		acumuM = acumuM + edad;  //C
		if(altura<masBajo)
		{
		nombreMasBajito = nombre;
	    masBajo = altura;
	    }	
	    break;
    }

	if(altura>1.6)
	{
		contPers16++;
		if(sexo == "F" || sexo == "f")
		{
			contF16++;
		}
	}

///////////////////////////////////////////////////////////////////	
}
    promF = acumuF/contF;
	promM = acumuM/contM;

	porcentajeF = (contF16/contF)*100;

	document.write("El nombre de la persona mas alta es: "+nombreMasAlto+ " y el sexo es: "+sexoMasAlto+"<br>");

	if(banderaExisteF == 1)
	{
		document.write("El nombre de la mujer mas joven es: "+nombreMasJoven+"<br>");
		document.write("El promedio de edad de mujeres es: "+promF+" años<br>");
	}
	else
	{
		document.write("No existe mujer"+"<br>");
	}

	if(banderaExisteM == 1)
	{
		document.write("El nombre del hombre mas bajo es: "+nombreMasBajito+"<br>");
		document.write("El promedio de edad de hombres es: "+promM+" años<br>");

	}
	else
	{
		document.write("No existe hombre mas bajito"+"<br>");
	}

	document.write("La cantidad de personas que miden mas de 1,60 metros es "+contPers16+"<br>");
	document.write("El porcentaje de mujeres que miden mas de 1,60 metros es de "+contF16+"%<br>");

}//FIN DE LA FUNCIÓN

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
9-Diferencia entre positivos y negativos, (positvos-negativos).

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

*/



//usar isNaN para verificar se é um numero

//document.write("Suma de los negativos es :"+sumaNegativos+" "+CantidadNegativos+" "+PromedioNegativos);
//document.write("Suma de los positivos es :"+sumaPositivos+" "+CantidadPositivos+" "+PromedioPositivos);