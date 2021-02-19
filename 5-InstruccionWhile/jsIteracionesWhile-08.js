//A- ingresar edad y nombre (hasta que el user quiera) , informar el nombre de la persona mas vieja y 
//la mas joven.
// da silva de souza, jessica

function mostrar()
{
   var edadIngresada;
   var edadJoven;
   var edadViejo;

   var nombre;
   var nombreViejo;
   var nombreJoven;
   
   var banderaJoven;
   var banderaViejo;
   var respuesta;

   banderaJoven = 7;
   banderaViejo = 7;

   respuesta = "si";


    while(respuesta == "si")
	{
		edadIngresada = parseInt(prompt("ingrese una edad"));

		while (edadIngresada<1 || edadIngresada>125)
		{
			edadIngresada = parseInt(prompt("Error, ingrese una edad valida"));
		}

		nombre = prompt("Ingrese un nombre");

		if(edadIngresada<edadJoven || banderaJoven == 7)
		{
            edadJoven = edadIngresada;
			nombreJoven = nombre;
			
			banderaJoven = 1;
		}
		if(edadIngresada>edadViejo || banderaViejo == 7)
		{
			edadViejo = edadIngresada;
			nombreViejo = nombre;
			banderaViejo = 1;
		}

		respuesta = prompt("Desea continuar?");
	}
    
	document.getElementById("txtIdSuma").value = nombreJoven;
	document.getElementById("txtIdProducto").value = nombreViejo;

}
//prof disse pra criar so com uma

//si en edadJoven quieres guardar la ultima edad ingresada que debemos guardar
//en nombreJoven