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

    Sueldo = parseInt(document.getElementById("txtIdSueldo").value);
    Resultado1 = Sueldo*0.10;
    Resultado2 = Sueldo + Resultado1;
    
    document.getElementById("txtIdResultado").value = Resultado2;
}
