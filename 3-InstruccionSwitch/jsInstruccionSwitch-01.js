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


// switch sempre se pode cambiar por IF

//default nao solicita break em essa linguagem, EM C SIM.

//defaul entra todo o demias que nao ta solicitando o codigo.