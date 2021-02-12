function mostrar()
{
	// da silva de souza, jessica
	//tomo el mes
	var Mes;
	Mes = document.getElementById("txtIdMes").value;

	switch(Mes)
	{
		case "Febrero":
			alert("Tiene 28 dias");
			break;
		
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias");
			break;
		
		default:
			alert("Tiene 31 dias");
			break;
	}
}//FIN DE LA FUNCIÓN