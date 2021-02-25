/*2.	
Da silva de souza, jessica

Para el departamento de Construcción:

A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno 
rectangular y se debe alambra con tres hilos de alambre.

B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se 
debe alambra con tres hilos de alambre.

C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar 
cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

//parseInt(Int= inteiro(numero inteiro)
//O parsefloat reconhece os . ou ,
//ej: 10.5/ 22222222.5 / 2.555555 parseFloat(considera os decimais, os pontos) parseInt nao.


function Rectangulo ()  
{
    var Largo;
    var Ancho;

    Largo = parseFloat(document.getElementById("txtIdLargo").value); 
    Ancho = parseFloat(document.getElementById("txtIdAncho").value); 

    alert("Se debe comprar " + (2*(Largo+Ancho)*3) + "m de alambre.")
   /*
    explicacao:
    Largo = largo * 2;
    Ancho = ancho * 2;
    cantAlambreNecesario = (Largo + Ancho) * 3;

   */
}
function Circulo () 
{
    var Radio;

    Radio = parseFloat(document.getElementById("txtIdRadio").value);
    alert("Se debe comprar " + ((1.33*Radio*2)*3)+ "m de alambre.");
    /*
    explicacao:

    const PI = 3.14;
    radioTerreno = document.getElementById("txtIdRadio").value;
    perimetroTerreno = 2 * PI * radioTerreno;
    cantAlambreNecesario = perimetroTerreno * 3

    */
    
}
function Materiales () 
{
    var Largo;
    var Ancho;
    var Area;

    Largo = parseFloat(document.getElementById("txtIdLargo").value);
    Ancho = parseFloat(document.getElementById("txtIdAncho").value);
    Area = Largo*Ancho;

    alert("Debe comprar " + (Area*2) + " bolsas de cemento y " + (Area*3) + " bolsas de cal.");

    //2 bolsas de cemento y 3 de cal dado no texto
}
