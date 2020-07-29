function mostrar()
{
	//tomo el mes
	var mes;
	mes = document.getElementById("txtIdMes").value;

	switch (mes)
	{
		case "Enero":
		alert("Feliz año");
		break;
	    case "Marzo":
	    alert("A clases");
	    break;
	    case "Diciembre":
	    alert("Feliz fiestas");
	    break;
    }
}//FIN DE LA FUNCIÓN