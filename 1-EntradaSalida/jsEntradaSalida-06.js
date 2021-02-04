/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno);
	
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;
	
	alert("La suma es: " + resultado);
	
	//transformar texto em numero usar: parseInt
	//quando aparece Nan pq nao é um numero bla bla

}

	

