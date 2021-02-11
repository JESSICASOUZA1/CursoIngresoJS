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

	PrecioUno = document.getElementById('txtIdPrecioUno').value;
    PrecioUno = parseInt(PrecioUno);

	PrecioDos = document.getElementById('txtIdPrecioDos').value;
	PrecioDos = parseInt(PrecioDos);

	PrecioTres = document.getElementById('txtIdPrecioTres').value;
	PrecioTres = parseInt(PrecioTres);

    resultado = PrecioUno + PrecioDos + PrecioTres;

	alert("La suma es: $"+ resultado);
}

function Promedio () 
{

	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
    var resultado1;
	var resultado2;


	PrecioUno = document.getElementById('txtIdPrecioUno').value;
    PrecioUno = parseInt(PrecioUno);

	PrecioDos = document.getElementById('txtIdPrecioDos').value;
	PrecioDos = parseInt(PrecioDos);

	PrecioTres = document.getElementById('txtIdPrecioTres').value;
	PrecioTres = parseInt(PrecioTres);

    resultado1 = PrecioUno + PrecioDos + PrecioTres;
	resultado2 = resultado1/3;

	alert("El promedio es: $"+ resultado2);
}

function PrecioFinal () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
    var resultado1;
	var resultado2;
    var resultado3;

	PrecioUno = document.getElementById('txtIdPrecioUno').value;
    PrecioUno = parseInt(PrecioUno);

	PrecioDos = document.getElementById('txtIdPrecioDos').value;
	PrecioDos = parseInt(PrecioDos);

	PrecioTres = document.getElementById('txtIdPrecioTres').value;
	PrecioTres = parseInt(PrecioTres);

    resultado1 = PrecioUno + PrecioDos + PrecioTres;
	resultado2 = resultado1*0.21;
    resultado3 = resultado1 + resultado2;

	alert("El precio final mas IVA es: $"+resultado3);

}