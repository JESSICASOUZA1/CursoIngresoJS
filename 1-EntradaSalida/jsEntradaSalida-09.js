/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var Sueldo;
    var Resultado1;
    var Resultado2;
    var Porcentaje;

    Sueldo = document.getElementById('txtIdSueldo').value;
    Sueldo = parseInt(Sueldo);
    Porcentaje = prompt("Ingrese el porcentaje");
    Porcentaje = parseInt(Porcentaje);

    Resultado1 = Sueldo*Porcentaje;
    Resultado2 = Resultado1/100;
    Resultado2 = Sueldo + Resultado2;

    document.getElementById('txtIdResultado').value = Resultado2;

}