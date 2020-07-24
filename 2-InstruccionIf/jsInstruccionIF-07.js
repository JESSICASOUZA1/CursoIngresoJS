function mostrar()
{
	//tomo la edad  
	let Edad;
	let EstadoCivil;

	Edad = parseInt(document.getElementById("txtIdEdad").value);
	EstadoCivil = parseInt(document.getElementById("estadoCivil").value);

	if (Edad < 18 && EstadoCivil != "soltero")
	{
	alert("Es muy pequeño para no ser soltero");
    }
}//FIN DE LA FUNCIÓN