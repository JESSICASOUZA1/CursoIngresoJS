/*
da silva de souza, jessica
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
        
    while(!(sexoIngresado == "f" || sexoIngresado == "m"))
    {
	    sexoIngresado = prompt("ingrese f ó m .");
		console.log(sexoIngresado);

	}

    document.getElementById("txtIdSexo").value = sexoIngresado;

	//txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN
  

// ! para inverter valor de verdade