function mostrar()
{
	//tomo el mes
	var mes;
	mes = document.getElementById("txtIdMes").value;
	
	switch (mes)
	{
	case "Febrero":
	alert("Este mês no tienes más de 29 dias");
	break;

	default:
	alert("Este mês tiene 30 o más dias");
	break;
    }
}//FIN DE LA FUNCIÓN