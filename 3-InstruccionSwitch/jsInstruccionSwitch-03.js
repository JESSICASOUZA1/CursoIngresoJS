function mostrar()
{
	// da silva de souza, jessica
	//tomo el mes
	
   var Mes;
   Mes = document.getElementById("txtIdMes").value;

   switch(Mes)
   {
        case "Febrero":
			alert("Este mes no tiene más de 29 dias");
			break;
		
		default:
		    alert("Este mes tiene 30 o mas dias");
			break;

   }



}//FIN DE LA FUNCIÓN