/*2.	
Da silva de souza, jessica
Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo ()  
{
    var Largo;
    var Ancho;

    Largo = document.getElementById('txtIdLargo').value; 
    largo = parseInt(Largo);

    Ancho = document.getElementById('txtIdAncho').value; 
    Ancho = parseInt(Ancho);

    resultado1 = Largo*Ancho;
    resultado2 = resultado1*2;
    resultado3 = resultado1 + resultado2;


    alert("Alambre es: " +resultado3);



}
function Circulo () 
{
    var Radio;

    Radio = document.getElementById('txtIdRadio').value;
    Radio = parseInt(Radio);

    
}


function Materiales () 
{


}
