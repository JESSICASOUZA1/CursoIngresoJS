/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var resultado;

	PrecioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
	PrecioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
	PrecioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
	resultado = PrecioUno + PrecioDos + PrecioTres;
	alert("El precio de los tres es: " +resultado);
}
function Promedio () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var resultado;

	PrecioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
	PrecioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
	PrecioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
	resultado = PrecioUno + PrecioDos + PrecioTres/3;
	alert("El promedio de los numeros es: " +resultado);
}
function PrecioFinal () 
{

	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var resultado1;
	var resultado2;
	var resultado3;

	PrecioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
	PrecioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
	PrecioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
	resultado1 = PrecioUno + PrecioDos + PrecioTres;
	resultado2 = resultado1*0.21;
	resultado3 = resultado1 + resultado2;

	alert("El precio final más IVA de los numeros es: " +resultado3);
}