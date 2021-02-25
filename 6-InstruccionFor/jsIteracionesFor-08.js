//al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
// usar esse for quando quiser achar numero primo
function mostrar()
{
  
	var numeroIngresado;
	var numeroAnterior;
	var limite;

	numeroIngresado = prompt("Ingrese numero")

	limite = (numeroIngresado/2);
    //for desde el 2 hasta uno antes del numero ingresado.
	for(numeroAnterior=2; numeroAnterior<limite; numeroAnterior++)
	{
        if(numeroIngresado%numeroAnterior==0)
		{
			break;
		}
	}
	if(numeroAnterior==limite)
    {
        alert("es primo");
    }
	else
	{
        alert("no es primo");
	}
}//FIN DE LA FUNCIÓN