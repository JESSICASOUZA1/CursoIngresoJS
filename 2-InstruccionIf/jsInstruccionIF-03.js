function mostrar()
{
	//tomo la edad  
	let Edad;
	Edad = parseInt(document.getElementById("txtIdEdad").value);
	if (Edad >= 18)
	{
	alert("Mayor de Edad");
	}
	else (Edad <= 17)
	{
		alert("Menor de Edad");
	}
}//FIN DE LA FUNCIÓN