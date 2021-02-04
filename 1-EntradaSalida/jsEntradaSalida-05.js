/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var Nombre;
	var Edad;
	Nombre = document.getElementById("txtIdNombre").value
    Edad = document.getElementById("txtIdEdad").value
	alert("Mi nombre es "+Nombre+" y tengo "+Edad+" años");


	/*
	console.log() serve para mostrar alert tbm e para que o client-side nao veja. 
	permite ver as variaves sem necessitar do alert.

	*/
}

