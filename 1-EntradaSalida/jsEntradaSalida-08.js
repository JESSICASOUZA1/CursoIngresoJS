/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var Num1;
	var Num2;
	var resultado;
	Num1 = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	Num2 = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	resultado = Num1%Num2;
	alert("El resto es: "+resultado);
}
