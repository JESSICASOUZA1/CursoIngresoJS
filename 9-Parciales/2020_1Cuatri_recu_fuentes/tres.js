/*
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, 
sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.

a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.

*/
function mostrar()
{
	var nombre;
	var nacionalidad;
	var edad = 0;
	var sexo;
	var estadoCivil;
	var tempCorporal = 0;
	var respuesta = "si";

	var mayorTemp;
	var nacionalidadMayorTemp;
	var bandera = 0;

	var contTerceraEdad = 0;
	var cantidadTotalMujerSolteroViudo = 0;
	var acumuladorEdadMujerCasado = 0;
	var contMujerSoltero = 0;
	var contMujerViudo = 0;
	var contSolteroMayorEdad = 0;
	var promedio = 0;


	while(respuesta == "si")
    {
	    nombre = prompt("Ingrese nombre");
		while(isNaN(nombre) == false)
		{
			nombre = prompt("Error, ingrese nombre valido.");
		}

		nacionalidad = prompt("Ingrese nacionalidad");
		while(isNaN(nacionalidad) == false)
		{
			nacionalidad = prompt("Error,Ingrese nacionalidad valida");
		}

		edad = parseInt(prompt("Ingrese Edad"));
		while(isNaN(edad) == true || edad<1 || edad>120)
		{
			edad = parseInt(prompt("Error, Ingrese Edad valida"));
		}

		sexo = prompt("Ingrese sexo (M-femenino o M-masculino)");
		while(!(sexo =="f" || sexo =="F" || sexo =="m" || sexo =="M"))
		{
			sexo = prompt("Error, Ingrese sexo valido (M-femenino o M-masculino)");
		}

		estadoCivil = prompt("Ingrese estado civil (soltero, casado o viudo)");
		while(isNaN(estadoCivil) == false || estadoCivil=="soltero" || estadoCivil=="casado" || estadoCivil=="viudo")
		{
			estadoCivil = prompt("Error,Ingrese estado civil valido (soltero, casado o viudo)");
		}

		tempCorporal = parseFloat(prompt("Ingrese temperatura corporal"))
	    while(isNaN(tempCorporal) == true || tempCorpora<16 || tempCorporal>40)
	    {
		tempCorporal = parseFloat(prompt("Error,Ingrese temperatura corporal valida"))
	    }

		if(tempCorporal>mayorTemp || bandera == 0)
		{
			mayorTemp = tempCorporal;
			nacionalidadMayorTemp = nacionalidad; //A
			bandera = 1;
		}
		
		if(edad>=60 && tempCorporal>=38)
		{
			contTerceraEdad++;
		}

		if(edad>17 && estadoCivil == "soltero")
		{
			contSolteroMayorEdad++;
		}

		if(sexo == "F" || sexo == "f")
		{
		switch(estadoCivil)
		{
			case "soltero":
				contMujerSoltero++;

				break;
			case "casado":
				contadorEdadMujerCasado++;
				acumuladorEdadMujerCasado = acumuladorEdadMujerCasado + edad;

				break;
			case "viudo":
				contMujerViudo++;
				break;
		}
	    }
    respuesta = prompt("Desea ingresar otra persona?");

	}//Fim while 

	cantidadTotalMujerSolteroViudo = contMujerSoltero + contMujerViudo; //C

	promedio = acumuladorEdadMujerCasado/contadorEdadMujerCasado; //E

   document.write("El nacionalidad de la persona con mas temperatura es: "+nacionalidadMayorTemp+"<br>"); //A
   document.write("La cantidade de mayores de edad solteros es:"+contSolteroMayorEdad+"<br>");//B
   document.write("La cantidad de mujeres solteros o viudos es: "+cantidadTotalMujerSolteroViudo+"<br>");//C
   document.write("La cuantidad de personas de la tercera edad que tienen mas de 38 de temperatura es: "+contTerceraEdad+"<br>");//D
   document.write("El promedio de edad entre los hombres solteros es: "+promedio+"<br>");

}//Fim function
