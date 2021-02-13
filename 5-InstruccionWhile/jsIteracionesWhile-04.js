/*
da silva de souza, jessica
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
    numeroIngresado=10;

	while(numeroIngresado>9 || numeroIngresado<0)
    {
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");
		numeroIngresado = parseInt(numeroIngresado);

        console.log(numeroIngresado);
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;

}//FIN DE LA FUNCIÓN




// sNaN????? Num?? 

//fazer TP 12 DE WHILE
//ferrete iluminacion entregar tbm