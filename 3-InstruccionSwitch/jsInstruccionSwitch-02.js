function mostrar()
{
	//tomo el mes
	var Mes;
	Mes = document.getElementById("txtIdMes").value;

    switch(Mes)
	{
        case "Enero":
        case "Febrero":
	    case "Marzo":
		case "abril":
		case "Mayo":
        case "Junio":
			alert("Falta para el invierno");
			break;

		case "Julio":
		case "Agosto":
			alert("Abrigate, hace frio");
			break;
		
		default:
			alert("Ya pasamos el frio, ahora calor!!!.");
		break;

	}



}//FIN DE LA FUNCIÓN