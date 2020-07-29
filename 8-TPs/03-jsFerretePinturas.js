/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var Temperatura;
	var C;

	Temperatura = parseInt(document.getElementById("txtIdTemperatura").value);
    C = 5/9*(Temperatura - 32);
    
    alert(Temperatura+" Fahrenheit son "+C+" centígrados.");
}
function CentigradosFahrenheit () 
{
	var Temperatura;
    var F;
    
    Temperatura = parseInt(document.getElementById("txtIdTemperatura").value);
    F = (Temperatura - 32) * 5/9;

    alert(Temperatura+" centígrados son "+F+" Fahrenheit.");
}