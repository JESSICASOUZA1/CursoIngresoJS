/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var Nombre;
	var Apellido;
	Nombre = document.getElementById("txtIdNombre").value
    Apellido = document.getElementById("txtIdEdad").value
	alert("Mi nombre es "+Nombre+" y tengo "+Apellido+" años");
}

