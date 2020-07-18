/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var Sueldo;
    var Resultado1;
    var Resultado2;

    Sueldo = parseInt(document.getElementById("txtIdImporte").value);
    Resultado1 = Sueldo*0.25;
    Resultado2 = Sueldo - Resultado1;
   
    document.getElementById("txtIdResultado").value = Resultado2;
}
