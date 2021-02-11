function mostrar()
{
	//tomo la edad  
	var Edad;
	var EstadoCivil;

	Edad = document.getElementById("txtIdEdad").value;
	Edad = parseInt(Edad);

	EstadoCivil = document.getElementById("estadoCivil").value;
    EstadoCivil = parseInt(EstadoCivil);

	if (Edad < 18 && EstadoCivil != "soltero")
	{
	alert("Es muy pequeño para no ser soltero");
    }
}//FIN DE LA FUNCIÓN !