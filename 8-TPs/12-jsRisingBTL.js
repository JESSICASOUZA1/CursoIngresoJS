/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y 
censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes 
solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 

da silva de souza, jessica

12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edad;
 	var sexo;
	var estadoCivil;
	var sueldoB;
	var legajo;
	var nacionalidad;
    sueldoB = 0;
	legajo = 0;
	//nacionalidad="A";
	estadoCivil = 0;
    edad = 0;
    sexo = "g";
    //sempre que for validar algo fazer com while

	edad = prompt("ingrese un número entre 18 y 90.");
	edad = parseInt(edad);
	while(!(edad>17 && edad<91))
	{
		edad = prompt("ingrese un número entre 18 y 90.");
	    edad = parseInt(edad);
	}

	sexo = prompt("ingrese F ó M (F para femenino y M para masculino");
    while(!(sexo == "F" || sexo == "M"))
    {
		sexo = prompt("ingrese F ó M (F para femenino y M para masculino");
	}

	estadoCivil = prompt("ingrese un numero entre 1 y 4 (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
	estadoCivil = parseInt(estadoCivil);
	while(!(estadoCivil>0 && estadoCivil<5))
	{
		estadoCivil = prompt("ingrese un numero entre 1 y 4 (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
		estadoCivil = parseInt(estadoCivil);
	}
    switch(estadoCivil)
    {
	case 1:
		estadoCivil = "Soltero";
	break;

	case 2:
		estadoCivil = "Casado";
	break;

	case 3:
		estadoCivil = "Divorciado";
	break;
	case 4:
		estadoCivil = "Viudo";
	break;
    }

	sueldoB = prompt("Ingrese sueldo (No menor a $8000)");
	sueldoB = parseInt(sueldoB);
	while(sueldoB<8000)
	{
		sueldoB = prompt("Ingrese sueldo (No menor a $8000)");
		sueldoB = parseInt(sueldoB);

	}

	legajo = prompt("Ingrese su número de legajo (numérico de 4 cifras, sin ceros a la izquierda)");
	legajo = parseInt(legajo);
    while(legajo < 1000 || legajo > 9999)
	{
	    legajo = prompt("Ingrese su número de legajo (numérico de 4 cifras, sin ceros a la izquierda)");
		legajo = parseInt(legajo);
	}

	nacionalidad = prompt("Ingrese su nacionalidad: (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados)");
    while(!(nacionalidad == "A" || nacionalidad == "E" || nacionalidad == "N"))
	{
	    nacionalidad = prompt("Ingrese su nacionalidad: (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados)");

	}
	switch(nacionalidad)
    {
	case "A":
		nacionalidad = "Argentino";
	break;

	case "E":
		nacionalidad = "Extranjero";
	break;

	case "N":
		nacionalidad = "Nacionalizado";
	break;
    }

	document.getElementById("txtIdEdad").value = edad;
	document.getElementById("txtIdSexo").value = sexo;
    document.getElementById("txtIdEstadoCivil").value = estadoCivil;
    document.getElementById("txtIdSueldo").value = sueldoB;
	document.getElementById("txtIdLegajo").value = legajo;
    document.getElementById("txtIdNacionalidad").value = nacionalidad;
}	