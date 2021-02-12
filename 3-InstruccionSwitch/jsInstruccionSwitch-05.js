function mostrar()
{
	//da silva de souza, jessica
	//tomo la hora
   var Hora;
   Hora = document.getElementById("txtIdHora").value;

   switch(Hora)
   {
	    case "7":
	    case "8":
	    case "9":
	    case "10":
	    case "11":
		    alert("Es de mañana");
		    break;
		
		default:
		break;

   }
}//FIN DE LA FUNCIÓN