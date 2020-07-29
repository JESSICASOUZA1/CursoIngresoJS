function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino)

{
	case "Bariloche":
	alert("Bariloche hace frio");
	break;

	case "Cataratas":
	alert("Cataratas hace calor");
	break;

	case "Ushuaia":
	alert("Ushuaia hace frio");
	break;

	case "Mar del plata":
	alert("Mar del Plata hace calor");
	break;
}

}//FIN DE LA FUNCIÓN