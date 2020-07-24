function mostrar()
{
	//tomo la edad  
	let Edad;

	Edad = parseInt(document.getElementById("txtIdEdad").value);
    if (Edad < 13)
    {
    alert("Es niño");
    }
    else if(Edad >= 18)
    {
    alert("Es adolescente");
    }
    else (Edad <= 65)
    {
    alert("Es mayor");
    }
}//FIN DE LA FUNCIÓN