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
   var precio = 0;
   var cantidad = 0;
   var contador = 0;
   var respuesta = "si";

   var precioTotal;
   var acumuladorAre = 0;
   var acumuladorCal = 0;
   var acumuladorCem = 0;
   var contadorAre = 0;
   var contadorCal =0;
   var contadorCem = 0;

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

  }
   // Letra A
   switch(tipo) 
   {
      case "arena":
         acumuladorAre = acumuladorAre + cantidad;
         contadorAre++;
       // so vai entrar se o tipo for alcohol
       //Letra A
         if() // quero verificar se precio é menor que precoMin
         {                                      // funcao da bandeira é estabelecar o primeiro precio como precioMin.
            cantidadMin = cantidad;
            fabricanteMin = fabricante;
            banderaMin = 1
         }
         break;
         
      case "cal":
         acumuladorBarb = acumuladorBarb + cantidad;
         contadorBarb++;
         break;
         
      case "cemento":
         acumuladorJab = acumuladorJab + cantidad;
         contadorJab++;
         break;
   }


   respuesta = prompt("Desea continuar?");


}  


//Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.


if(cantidadTotal == 10)
{
  cantidadTotal = cantidadTotal;
}
























//contador++; //contar cada volta,nesse 5 voltas. ej. quantas 
   /*
   }

   if(acumuladorAl>acumuladorBarb && acumuladorAl>acumuladorJab)
   {
     tipoComMaUnid = "alcohol";
     acumuladorFinal = acumuladorAl;
     contadorFinal = contadorAl;
   }
   else if(acumuladorBarb>acumuladorAl && acumuladorBarb>acumuladorJab)
   {
      tipoComMaUnid = "barbijo";
      acumuladorFinal = acumuladorBarb;
      contadorFinal = contadorBarb;
   }
   else
   {
      tipoComMaUnid = "jabon";
      acumuladorFinal = acumuladorJab;
      contadorFinal = contadorJab;
   }

   promedio = acumuladorFinal/contadorFinal;

	 document.write("El alcohol más barato vale $"+precioMin+" y la cantidad minima es "+cantidadMin+" y el fabricante minimo es "+fabricanteMin+"<br>");
   document.write("El tipo con mas unidades es "+tipoComMaUnid+ " el promedio por compra es "+promedio+"<br>");
   document.write("La cantidad total de jabones es "+acumuladorJab+"<br>");

*/

