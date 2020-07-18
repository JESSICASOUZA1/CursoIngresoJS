/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var Num1;
	var Num2;
	var resultado;

    Num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	Num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = Num1 + Num2;

	alert("La suma es " +resultado);
}

	

