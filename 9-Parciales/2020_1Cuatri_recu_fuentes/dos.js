/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),       //importe = precio

al terminar la compra el cliente accede a un descuento segun las bolsas en total

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.

Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.

a) El (precio total a pagar) , bruto sin descuento y...
b) el (precio total a pagar) con descuento(solo si corresponde)
c) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas (en el total de la compra).
d) El tipo mas caro
*/

function mostrar()
{
  var respuesta = "si";
  var tipo;
  var cantidad = 0;
  var precio  = 0;
  var precioTotal = 0; //A
  var descuento = 0;
  var precioConDescuento = 0;

  //C
  var cantidadTotal = 0;
  var tipoComMasCantidad;
  var acumuladorCantidadArena = 0;
  var acumuladorCantidadCal = 0;
  var acumuladorCantidadCem = 0;
  //D
  var acumuladorPrecioArena = 0;
  var acumuladorPrecioCal = 0;
  var acumuladorPrecioCem = 0;
  var tipoMasCaro;

 while(respuesta == "si")
 {

  tipo = prompt("Ingrese tipo (arena, cal o cemento)");
  while(!(tipo =="arena" || tipo =="cal" || tipo =="cemento"))
  {
    tipo = prompt("Error, Ingrese tipo valido (arena ,cal o cemento)");
  }

  cantidad = parseInt(prompt("Ingrese cantidad de productos"));
	while(isNaN(cantidad) == true || cantidad<1)
	{
		cantidad = parseInt(prompt("Error, Ingrese cantidad de productos valido"));
	}

  precio = parseInt(prompt("Ingrese precio"));
	while(isNaN(precio) == true || precio<1) 
	{
		precio = parseInt(prompt("Error, Ingrese precio valido"));
	}

  switch(tipo)
		{
			case "arena":
        acumuladorCantidadArena = acumuladorCantidadArena + cantidad;
        acumuladorPrecioArena = acumuladorPrecioArena + precio;
			break;

			case "cal":
        acumuladorCantidadCal = acumuladorCantidadCal + cantidad;
        acumuladorPrecioCal = acumuladorPrecioCal + precio;
      break;

			case "cemento":
        acumuladorCantidadCem = acumuladorCantidadCem + cantidad;
        acumuladorPrecioCem = acumuladorPrecioCem + precio;
      break;
		}

  respuesta = prompt("Desea ingresar otro producto?")
 }

 cantidadTotal = acumuladorCantidadArena + acumuladorCantidadCal + acumuladorCantidadCem;
 precioTotal = acumuladorPrecioArena + acumuladorPrecioCal + acumuladorPrecioCem;

 //B
 if(cantidad>30)
{
    descuento = 0.30;
    descuento = precioTotal*descuento;
    precioConDescuento = precioTotal - descuento;  
    document.write("El precio total bruto y sin descuento es: $" +precioTotal+ " y con descuento es: $"+precioConDescuento+"<br>");

}
else if(cantidad>10)
{
    descuento = 0.15;
    descuento = precioTotal*descuento;
    precioConDescuento = precioTotal - descuento;  
    document.write("El importe total bruto y sin descuento es: $" +precioTotal+ " y con descuento es: $"+precioConDescuento+"<br>");

}
else
{
    document.write("El precio total a pagar es: $"+precioTotal+"<br>");
}

 if(acumuladorCantidadArena>acumuladorCantidadCal && acumuladorCantidadArena>acumuladorCantidadCem)
 {
   tipoComMasCantidad = "arena";
 }
 else if(acumuladorCantidadCal>acumuladorCantidadArena && acumuladorCantidadCal>acumuladorCantidadCem)
 {
   tipoComMasCantidad = "cal";
 }
 else
 {
   tipoComMasCantidad = "cemento";
 }
 
 
if(acumuladorPrecioArena>acumuladorPrecioCal && acumuladorPrecioArena>acumuladorPrecioCem)
{
    tipoMasCaro = "arena";
}
else if(acumuladorPrecioCal>acumuladorPrecioArena && acumuladorPrecioCal>acumuladorPrecioCem)
{
    tipoMasCaro = "cal";
}
else
{
    tipoMasCaro = "cemento";
}

document.write("El tipo con mas cantidad es: "+tipoComMasCantidad+"<br>");
document.write("El tipo mas caro es: "+tipoMasCaro+"<br>");

}
