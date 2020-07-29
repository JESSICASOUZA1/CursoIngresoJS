function mostrar()
{
	//tomo el mes
	var mes;
	mes = document.getElementById("txtIdMes").value;

	switch (mes)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
				alert("Ese Ese mês tiene 30 dias");
		break;
		
		case "Febrero":
		        alert("Ese mês tiene 28 dias");
		break;

		default:
		        alert("Ese mês tiene 31 dias");
		break;		
	}
}//FIN DE LA FUNCIÓN