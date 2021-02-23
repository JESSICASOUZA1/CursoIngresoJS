/*
da silva de souza, jessica

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  //Inicio
   var tipo;
   var cantidad = 0;
   var precio = 0;

   var cantTotal = 0;
   var precioTotal = 0;
   var precioConDescuento = 0;
   var descuento = 0;
   var acPrecioAr = 0;
   var acPrecioCal = 0;
   var acPrecioCem = 0;


   var acCantAr = 0;
   var acCantCal = 0;
   var acCantCem = 0;

   var masCaro;
   var masCant;
   var respuesta = "si";

   //Entrada de dados
   while(respuesta == "si")
   {

	 tipo = prompt("Ingrese un tipo de producto (arena, cal o cemento");
   while (!(tipo == "arena"  || tipo == "cal" || tipo == "cemento"))
   {
    tipo = prompt("Ingrese un tipo de producto (arena, cal o cemento");
   }

   cantidad = parseInt(prompt("Ingrese cantidad"));
   while(cantidad<1)
   {
   cantidad = parseInt(prompt("Error, Ingrese cantidad valida"));
   }

   precio = parseInt(prompt("Ingrese precio"));
   while (precio<1)
   {
   precio = parseInt(prompt("Error, Ingrese precio valido"));
   }

   // Letra A
   switch(tipo) 
   {
      case "arena":
         acCantAr = acCantAr + cantidad;         //D) primera parte acumulando cantidad
         acPrecioAr = acPrecioAr + precio;      //F) primera parte  acumulando precio
         break;
         
      case "cal":
         acCantCal = acCantCal + cantidad;      //D) primera parte
         acPrecioCal = acPrecioCal + precio;   //F) primera parte
         break;
         
      case "cemento":
         acCantCem = acCantCem + cantidad;       //D) primera parte
         acPrecioCem = acPrecioCem + precio;    //F) primera parte
         break;

   }

   respuesta = prompt("Desea continuar?");

}  

precioTotal = acPrecioAr + acPrecioCal + acPrecioCem; //letra A (El importe total a pagar) y B 
cantTotal = acCantAr + acCantCal + acCantCem;        // letra D (Informar el tipo con mas cantidad)

//descuento
if(cantTotal>30)
{
   descuento = 0.25;
   descuento = precioTotal*descuento;
   precioConDescuento = precioTotal - descuento;   
   document.write("El importe total bruto y sin descuento es: $" +precioTotal+ " y con descuento es: $"+precioConDescuento+"<br>");
}
else if(cantTotal>10)
{
   descuento = 0.15;
   descuento = precioTotal*descuento;
   precioConDescuento = precioTotal - descuento;   
   document.write("El importe total bruto y sin descuento es: $" +precioTotal+ " y con descuento es: $"+precioConDescuento+"<br>");
}
else
{ 
   document.write("El importe total es: $" +precioTotal+"<br>");
}

//D) segunda parte
if(acCantAr>acCantCal && acCantAr>acCantCem)
{
  masCant = "Arena";
}
else if(acCantCal>acCantAr && acCantCal>acCantCem)
{
   masCant = "Cal";
}
else
{
   masCant = "Cemento";
}

//F) segunda parte
if(acPrecioAr>acPrecioCem && acPrecioAr>acPrecioCal)
{
 masCaro = "Arena";
}
else if(acPrecioCal>acPrecioAr && acPrecioCal>acPrecioCem)
{
   masCaro = "Cal";
}
else
{
   masCaro = "Cemento";
}

document.write("El tipo con mas cantidad es: "+masCant+"<br>"); //D
document.write("El tipo mas caro es: "+masCaro+"<br>"); //F

}
