function mostrar()
{
	//tomo la hora
	let hora;

	hora = parseInt(document.getElementById("txtIdHora").value);

	switch (hora)
	{
		case 7:
		case 11:
		alert("Es de mañana");
		break;

		case 12:
		case 19:
		alert("Es de tarde");
		break;

		case 20:
		case 24:
		case 0:
		case 6:
		alert("Es de noche");
		break;
	}
}//FIN DE LA FUNCIÓN