function mostrar()
{
	// da silva de souza, jessica

	var Destino;
	Destino = document.getElementById("txtIdDestino").value;

	switch(Destino)
	{
		case "Bariloche":
			alert("Bariloche está en Sur");
			break;
		
		case "Cataratas":
			alert("Cataratas está en Norte");
			break;
		
		case "Mar del plata":
			alert("Mar del plata está en Este");
			break;
		
        case "Ushuaia":
			alert("Ushuaia está en Oeste");
			break;
	}
}//FIN DE LA FUNCIÓN