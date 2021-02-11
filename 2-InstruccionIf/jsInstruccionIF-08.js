function mostrar()
{
	//tomo la edad  
	var Edad;
	var EstadoCivil;

	Edad = document.getElementById('txtIdEdad').value;
	Edad = parseInt(Edad);

	EstadoCivil = document.getElementById('txtEstadoCivil').value;
	EstadoCivil = parseInt(EstadoCivil);

	if(Edad < 18 && EstadoCivil != Soltero)
	{

	}
    else
	{
    alert("Es Soltero y no es menor");
	}


}//FIN DE LA FUNCIÓN