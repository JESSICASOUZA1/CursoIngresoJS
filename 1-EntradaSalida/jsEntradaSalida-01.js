/*
 27/2/2021 - aula sabado

1. El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?

*/
function mostrar()
{

	var nombre;
	var carrera;
	var estadoCarrera;
	var sexo;
	var edad = 0;
	var nota = 0;
	var respuesta = "si";

    //A
	var contCarreraProg = 0;
	var contCarreraPsico = 0;
	var contCarreraGraf = 0;
	var cantidadCarreraTotal = 0;

	//B
	var contSexoNoB = 0;      //C
	var cantidadFemProg = 0;

	//D
	var contEstadoCarreraFinalizado = 0;
	var acumuladorNotaFina = 0;

    //E
	var edadMasViejo;
	var nombreMasViejo;
	var sexoMasViejo;
	var bandera = 0;

	//F
	var nombreBi;
	var notaMasAltaBi;
	var estadoCarreraBi;
	var banderaBi = 0;
	//G
	var CarreraMasTieneAlumnos = 0;


	while(respuesta == "si")
    {
	    nombre = prompt("Ingrese nombre");
		while(isNaN(nombre) == false)
		{
			nombre = prompt("Error, ingrese nombre valido.");
		}

		carrera = prompt("Ingrese carrera (Programación, Psicología o Diseño grafico)");
		while(!(carrera =="programacion" || carrera =="psicologia" || carrera == "diseño grafico"))
		{
			carrera = prompt("Error, Ingrese carrera valida (Programación, Psicología o Diseño grafico)");
		}
		
		estadoCarrera = prompt("Ingrese estado de la carrera (en curso, abandono, o finalizado)");
		while(!(estadoCarrera == "en curso" || estadoCarrera =="abandono" || estadoCarrera =="finalizado"))
		{
			estadoCarrera = prompt("Error, Ingrese estado de carrera valida (en curso, abandono, o finalizado)");
		}

		sexo = prompt("Ingrese sexo (Femenino, masculino o nobinario)");
		while(!(sexo =="femenino" || sexo =="Femenino" || sexo =="masculino" || sexo =="Masculino" || sexo =="nobinario" || sexo =="Nobinario"))
		{
			sexo = prompt("Error, Ingrese sexo valido (femenino, masculino o nobinario)");
		}

		edad = parseInt(prompt("Ingrese Edad (mayor a 18)"));
		while(isNaN(edad) == true || edad<18)
		{
			edad = parseInt(prompt("Error, Ingrese Edad valida (solo mayores de 18)"));
		}

		nota = parseInt(prompt("Ingrese nota (1 a 10)"));
		while(isNaN(nota) == true || nota<1 || nota>10)
		{
			nota = parseInt(prompt("Error, Ingrese nota (entre 1 a 10)"));
		}
        
		switch(carrera)
		{
			case "programacion":
				contCarreraProg++;
				if(sexo == "femenino" || sexo =="Femenino")
				{
					cantidadFemProg++;
				}
				break;

			case "psicologia":
				contCarreraPsico++;
				if(edad>edadMasViejo || bandera == 0)
				{
				edadMasViejo = edad;
				nombreMasViejo = nombre;
				sexoMasViejo = sexo;
				bandera = 1;
			    }

				if(sexo == "nobinario" || sexo =="Nobinario") //F
				{
					if(banderaBi == 0)
					{
						nombreBi = nombre;
						notaMasAltaBi = nota;
						estadoCarreraBi = estadoCarrera;
						banderaBi = 1;
					}
					if(nota>notaMasAltaBi)
					{
						nombreBi = nombre;
						notaMasAltaBi = nota;
						estadoCarreraBi = estadoCarrera;
					}
					

				}

				break;

			case "diseño grafico":
				contCarreraGraf++;
				break;
		}
    if(sexo == "nobinario" || sexo =="Nobinario")
	{
		contSexoNoB++;
	}

	if(estadoCarrera == "finalizado") //D
	{
		contEstadoCarreraFinalizado++;
		acumuladorNotaFina = acumuladorNotaFina + nota;
	}
        respuesta = prompt("Desea ingresar otro alumno?");

	}

	promedioNotaFinalizado = acumuladorNotaFina/contEstadoCarreraFinalizado; //D

	cantidadCarreraTotal = contCarreraProg + contCarreraPsico + contCarreraGraf; //A

	if(contCarreraProg>contCarreraPsico && contCarreraProg>contCarreraGraf)
	{
		CarreraMasTieneAlumnos = "programacion";
	}
	else if(contCarreraPsico>contCarreraProg && contCarreraPsico>contCarreraGraf)
	{
		CarreraMasTieneAlumnos  = "psicologia";
	}
	else
	{
		CarreraMasTieneAlumnos = "diseño gráfico";
	}

	document.write("Cantidad total de alumnos de cada carrera es: programacion: "+contCarreraProg+" y psicologia es: "+contCarreraPsico+" y de diseño gráfico es: "+contCarreraGraf+"<br>");
	document.write("Cantidad total de mujeres que cursan la carrera de programación es: "+cantidadFemProg+"<br>");
	document.write("Cantidad de alumnos no binarios es: "+contSexoNoB+"<br>");

	if(contEstadoCarreraFinalizado > 0)
	{
		document.write("Promedio de notas de los alumnos finalizantes es: "+promedioNotaFinalizado+"<br>");
	}
	else
	{
		document.write("No hay alumnos finalizantes<br>");
	}

	if(bandera == 1)
	{
		document.write("Nombre, sexo y edad del alumno mas viejo en la carrera de psicología es: nombre: "+nombreMasViejo+ " y el sexo es: "+sexoMasViejo+ " y la edad es: "+edadMasViejo+"<br>");

	}
	else
	{
		document.write("No hay alumnos estudiando psicologia<br>");
	}

    if(banderaBi == 1)
	{
		document.write("Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología es: nombre: "+nombreBi+ " y la nota es: "+notaMasAltaBi+ " y el estado de la carrera es: "+estadoCarreraBi+"<br>");
	}
	else
	{
		document.write("No hay alumnos noBinario estudiando psicologia<br>");
	}

	document.write("La carrera que tiene mas alumnos es: "+CarreraMasTieneAlumnos+"<br>");

}