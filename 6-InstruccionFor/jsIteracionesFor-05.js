//al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
// da silva de souza, jessica

function mostrar()
{
    var numeroIngresado;
    var i;
	for(i=0; i>-1; i++)     
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));

        if(numeroIngresado == 9)
		{
			break;
		}
        
	}

}//FIN DE LA FUNCIÓN

//para algo infinito(loop infinito) tem que criar uma condicao que sempre seja verdade.
//exemplo: i>-1
