/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo ()  
{
    var Largo;
    var Ancho;

    Largo = parseFloat(document.getElementById("txtIdLargo").value);
    Ancho = parseFloat(document.getElementById("txtIdAncho").value);

    alert("Se debe comprar " + (2*(Largo+Ancho)*3) + "m de alambre.")
}
function Circulo () 
{
    var Radio;

    Radio = parseFloat(document.getElementById("txtIdRadio").value);

    alert("Se debe comprar "  + ((1.33*Radio*2)*3)+ "m de alambre.");
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
}
