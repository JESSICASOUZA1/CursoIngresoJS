/*
A- ingresar edad y nombre (hasta que el user quiera) , informar el nombre de la persona mas vieja y 
    la mas joven.

B - promedio de edad de todas las personas y el promedio de edad de las personas mayores de 18 anos. 

C - Nombre del divorciado mas viejo, y el nombre y sexo del viudo mas joven se hay.

*/
function mostrar()
{
  
var nombre;
var edad = 0;
var sexo;
var estadoCivil;
var edadMasVieja = 0;
var edadMasJoven = 0;
var bandera = 0;
var nMasVieja;
var nMasJoven;
var contedad18 = 0;

var contTodos = 0;
var promedioTodos = 0;
var promedio18 = 0;
var acumuladorEdadTodos = 0;
var acumulador18 = 0;
var contsoltero = 0;

var banderaDivMasV = 0;
var nDivMasViejo;
var edadDivMasViejo = 0;

var banderaViuMasJoven = 0;
var nombreViudoMasJoven;
var sexoViudoMasJoven;
var edadViudoMasJoven = 0;


var respuesta = "si";

 while( respuesta == "si")
 { 

    edad = parseInt(prompt("Ingrese edad"));
    while(edad<1 || edad>110)
    {
		edad = parseInt(prompt("Error, Ingrese edad valida"));
    }
	
	nombre = prompt("Ingrese nombre");

	sexo = prompt("Ingrese sexo (F o M)");
	while(!(sexo == "F" || sexo =="f" || sexo =="M" || sexo == "m"))
	{
		sexo = prompt("Error, Ingrese sexo valido (F o M)");
	}
    switch(sexo)
	{
		case "F":
		case "f":
			sexo = "femenino";
		break;

		case "M":
		case "m":
			sexo = "masculino";
		break;
	}


	estadoCivil = parseInt(prompt("Ingrese un numero para estado civil (1-soltero, 2-casado, 3-divorciado, 4-viudo)"));
	while(estadoCivil<1 || estadoCivil>4)
	{
		estadoCivil = parseInt(prompt("Error,Ingrese un numero para estado civil valido (1-soltero, 2-casado, 3-divorciado, 4-viudo)"));
	}
	switch(estadoCivil)
	{
		case 1: 
		    estadoCivil = "soltero";
			contsoltero++;
		break;

		case 2:
			estadoCivil = "casado";
		break;

		case 3:
			estadoCivil = "divorciado";
			if(banderaDivMasV == 0)
			{
				nDivMasViejo = nombre;
				edadDivMasViejo = edad;
				banderaDivMasV = 1;
			}
			if(edad>edadDivMasViejo)
			{
				nDivMasViejo = nombre;
				edadDivMasViejo = edad;
			}
		break;

		case 4:
			estadoCivil = "viudo";
			if(banderaViuMasJoven == 0)
			{
				edadViudoMasJoven = edad;
				nombreViudoMasJoven = nombre;
				sexoViudoMasJoven = sexo;
				banderaViuMasJoven = 1;
			}
			if(edad<edadViudoMasJoven)
			{
				edadViudoMasJoven = edad;
				nombreViudoMasJoven = nombre;
				sexoViudoMasJoven = sexo;
			}
		break;
	}
	
	if(bandera == 0)
	{
		nMasVieja = nombre;
		edadMasVieja = edad;
		nMasJoven = nombre;
	    edadMasJoven = edad;
		bandera = 1;
	}
	
	if(edad>edadMasVieja) //Encontrando maximo e minimo
    {
    nMasVieja = nombre; 
	edadMasVieja = edad;
	}

	if(edad<edadMasJoven)
    {
	nMasJoven = nombre;
	edadMasJoven = edad;
    }
    
	if(edad>18) //para contar numero de pessoas com idade maior a 18.
	{
		contedad18++;
		acumulador18 = acumulador18 + edad;
	}

	contTodos++;
	acumuladorEdadTodos = acumuladorEdadTodos + edad;
	respuesta = prompt("Desea continuar?");
}

promedioTodos = acumuladorEdadTodos/contTodos;
promedio18 = acumulador18/contedad18;

document.getElementById("txtIdSuma").value = nMasJoven;
document.getElementById("txtIdProducto").value = nMasVieja;

document.write("El promedio de edad de todas las personas es: " +promedioTodos+" y promedio de edad de las personas mayores de 18 anos es: "+promedio18+"<br>");

if(banderaDivMasV == 1)
{
	document.write("Nombre del divorciado mas viejo es: "+nDivMasViejo+"<br>");

}
else
{
	document.write("No hay divorciados"+"<br>");
}

if(edadViudoMasJoven == 1)
{
	document.write("Nombre del viudo mas joven es: "+nombreViudoMasJoven+" y el sexo es: "+sexoViudoMasJoven+"<br>");
}
else
{
	document.write("No hay viudos mas joven"+"<br>");

}


}












/*
outra forma de validar estado estado civil

	estadoCivil = prompt("Ingrese estado civil( soltero, casado, divorciado o viudo)");
	while(!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil =="divorciado" || estadoCivil =="viudo"))
	{
		estadoCivil = prompt("Ingrese estado civil valido ( soltero, casado, divorciado o viudo)");
	}

*/
























//prof disse pra criar so com uma

//si en edadJoven quieres guardar la ultima edad ingresada que debemos guardar
//en nombreJoven