/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var Num1;
	var Num2;
	var resultado;

	Num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	Num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
    resultado = Num1 + Num2;
	alert("La suma es:"+resultado);	
}

function restar()
{
	var Num1;
	var Num2;
	var resultado;
	Num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	Num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = Num1 - Num2;
    alert("La resta es:"+resultado);	
}

function multiplicar()
{ 
	var Num1;
	var Num2;
	var resultado;
	Num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	Num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = Num1 * Num2;
    alert("La resta es:"+resultado);
}

function dividir()
{
	var Num1;
	var Num2;
	var resultado;
	Num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	Num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = Num1 / Num2;
    alert("La división es:"+resultado);
}

