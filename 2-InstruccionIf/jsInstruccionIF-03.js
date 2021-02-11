function mostrar()
{
	//da silva de souza, jessica
	//tomo la edad  
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad>18)
	{
      alert("Es mayor de edad");
	}
	if(edad<17)       
	{
		alert("Es menor de edad");
	}
}//FIN DE LA FUNCIÓN

/*
COM ELSE

var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad>18)
	{
      alert("Es mayor de edad");
	}
	else
	{
		alert("Es menor de edad");
	}
*/