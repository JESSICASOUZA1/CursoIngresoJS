/*
da silva de souza, jessica

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
   var tipo;
   var precio = 0;
   var cantidad = 0;
   var marca;
   var fabricante;
   var promedio;
   var contador = 0;
   var banderaMin = 7;
   var precioMin = 0;
   var cantidadMin = 0;
   var fabricanteMin;
   var acumuladorAl = 0;
   var acumuladorBarb = 0;
   var acumuladorJab = 0;
   var contadorAl = 0;
   var contadorBarb = 0;
   var contadorJab = 0;
   var tipoComMaUnid;
   var acumuladorFinal = 0;
   var contadorFinal = 0;

   while(contador<5)
   {

	tipo = prompt("Ingrese un tipo de producto (barbijo, jabon, alcohol")
   while (!(tipo == "barbijo"  || tipo == "jabon" || tipo == "alcohol"))
   {
	tipo = prompt("Error, Ingrese un tipo de producto valido (barbijo, jabon, alcohol")
   }

   precio = parseInt(prompt("Ingrese precio (entre 100 y 300"));
   while (precio<100 || precio>300)
   {
   precio = parseInt(prompt("Error, Ingrese precio valido"));
   }


   cantidad = parseInt(prompt("Ingrese cantidad (entre 1 y 1000"))
   while(cantidad<1 || cantidad>1000)
   {
   cantidad = parseInt(prompt("Error, Ingrese cantidad valida (entre 1 y 1000"));
   }

   marca = prompt("Ingrese una marca");
   fabricante = prompt("Ingrese un fabricante");

   // Letra B
   switch(tipo) 
   {
      case "alcohol":
         acumuladorAl = acumuladorAl + cantidad;
         contadorAl++;
       // so vai entrar se o tipo for alcohol
       //Letra A
         if(precio<precioMin || banderaMin == 7) // quero verificar se precio é menor que precoMin
         {                                      // funcao da bandeira é estabelecar o 1 precio como precioMin.
            precioMin = precio;
            cantidadMin = cantidad;
            fabricanteMin = fabricante;
            banderaMin = 1
         }
         break;
         
      case "barbijo":
         acumuladorBarb = acumuladorBarb + cantidad;
         contadorBarb++;
         break;
         
      case "jabon":
         acumuladorJab = acumuladorJab + cantidad;
         contadorJab++;
         break;
   }

   contador++; //contar cada volta,nesse 5 voltas.
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

}
