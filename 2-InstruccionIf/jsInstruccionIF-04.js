function mostrar()
{
	//tomo la edad  
	var edad;
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad<18)
	{
		if(edad>12)
		{
			alert("Es adolescente");
		}
	}
}//FIN DE LA FUNCIÓN

/* OUUUUUU 

if(edad<18 && edad>12)  && Intersecao de conjuntos 
    {
	alert("Es adolescente");
	}

	
OUUUUUUUU

function mostrar()
{
	//tomo la edad  
	let Edad;
	Edad = parseInt(document.getElementById("txtIdEdad").value);
	if (Edad <= 17 && Edad >= 13)
	{
	alert("Adolescente");
	}
}//FIN DE LA FUNCIÓN
*/