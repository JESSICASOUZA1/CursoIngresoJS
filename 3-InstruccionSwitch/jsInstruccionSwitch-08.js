function mostrar()
{
	//da silva de souza, jessica 
	var Destino;
	Destino = document.getElementById("txtIdDestino").value;

	switch(Destino)
	{
		case "Bariloche":
			alert("Hace Frio");
			break;
		
		case "Cataratas":
			alert("Hace Calor");
			break;
		
		case "Mar del plata":
			alert("Hace Calor");
			break;
		
        case "Ushuaia":
			alert("Hace Frio");
			break;
	}
}//FIN DE LA FUNCIÓN