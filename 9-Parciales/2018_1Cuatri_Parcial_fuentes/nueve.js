/*
da silva de souza, jessica

Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 
(validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el 
ingreso por document.write:

a) La cantidad de temperaturas pares.                                     contadorTempPares++ ok
b) La marca del producto más pesado                                       fazer a b dentro da f ok
c) La cantidad de productos que se conservan a menos de 0 grados.         contador   ok
d) El promedio del peso de todos los productos.                           (contadorPeso y acumuladorPeso) ok
f) El peso máximo y el mínimo.                                             ok

Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 )

//pode fazer com bandeira

*/

 var marca;
 var peso = 0;
 var tempAlmac = 0;
 var tempPares = 0;
 var contadorTemBaja = 0;
 var marcaMasPesada;
 var promedio = 0;
 var pesoMax = 0;
 var pesoMin = 101;
 var acumuladorPeso = 0;
 var contadorPeso = 0;

 var respuesta = "si";

function mostrar()
{

    while(respuesta == "si")
    {
 
     marca = prompt("Ingrese una marca de producto");

     peso = parseInt(prompt("Ingrese peso (entre 1 y 100)"));
     while(peso<1 || peso>100)
     peso = parseInt(prompt("Error, Ingrese peso valido(entre 1 y 100)"));


     tempAlmac = parseInt(prompt("Ingrese temperatura (entre -30 y 30)"));
     while(tempAlmac<-30 || tempAlmac>30)
     tempAlmac = parseInt(prompt("Error, Ingrese temperatura valida (entre -30 y 30)"));

     contadorPeso++
     acumuladorPeso = acumuladorPeso + peso;

    if(tempAlmac<0)                    //C) La cantidad de productos que se conservan a menos de 0 grados. 

    {
        contadorTemBaja++
    }

    if (tempAlmac%2 == 0)                    //A) La cantidad de temperaturas pares

    {
        tempPares++
    }

    if(peso>pesoMax)                      //F) El peso máximo, nao precisamos de bandeira aqui pq o peso é entre 1 a 100, e esse valor é maior a 0.
    {                                      
       pesoMax = peso;
       marcaMasPesada = marca;          //B) La marca del producto más pesado
    }
    if(peso<pesoMin)                  //F) El peso mínimo
    {
       pesoMin = peso;
    }

    respuesta = prompt("Desea continuar");

    }

   promedio = acumuladorPeso/contadorPeso;

   document.write("La cantidad de temperatura pares es: "+tempPares+"<br>");
   document.write("La marca del producto mas pesado es: "+marcaMasPesada+"<br>");
   document.write("La cantidad de productos que se conservan a menos de 0 grados es: "+contadorTemBaja+"<br>");
   document.write("El promedio del peso de todos los productos es: "+promedio+"kg<br>");
   document.write("El peso maximo es: "+pesoMax+ "kg y el peso minimo es: "+pesoMin+"kg<br>");

}
