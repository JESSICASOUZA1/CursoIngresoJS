//al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"

function mostrar()
{
    var i;
	var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));

	for(i=0; i<repeticiones; i++)
	{
		document.write("Hola UTN FRA"+"<br>");
	}

}//FIN DE LA FUNCIÓN