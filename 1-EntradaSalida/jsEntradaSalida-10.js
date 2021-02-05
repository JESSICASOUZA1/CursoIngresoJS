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
    var Porcentaje;

    Sueldo = document.getElementById('txtIdImporte').value;
    Sueldo = parseInt(Sueldo);
    Porcentaje = prompt("Ingrese porcentaje");
    Porcentaje = parseInt(Porcentaje);

    Resultado1 = Sueldo*Porcentaje;
    Resultado2 = Resultado1/100;
    Resultado2 = Sueldo - Resultado2;

    Resultado = document.getElementById('txtIdResultado').value = Resultado2;
    
}
