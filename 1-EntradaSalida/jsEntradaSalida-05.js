/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var Nombre;
	var Edad;
	var Apellido;

	Nombre = document.getElementById("txtIdNombre").value;
	Edad = document.getElementById("txtIdEdad").value;
	Apellido = prompt("Ingrese su Apellido");
	
	alert("Mi nombre es "+Nombre+" "+Apellido+ " y tengo "+Edad);


	/*
	console.log() serve para mostrar alert tbm e para que o client-side nao veja. 
	permite ver as variaves sem necessitar do alert.

	*/
}

