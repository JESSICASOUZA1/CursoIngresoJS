/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//txtid pra quando tiver a caixa de escrita
	
	var nombreIngresado;

	// nombreIngresado=txtIdNombre.value;  Modo easy

	nombreIngresado=document.getElementById('txtIdNombre').value;

	alert(nombreIngresado);
}


