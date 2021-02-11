function mostrar()
{
	//tomo la edad  

	let Edad;
	Edad = parseInt(document.getElementById("txtIdEdad").value);
	if (Edad >= 18)
	{
	alert("No es adolescente");
    }
}//FIN DE LA FUNCIÓN

/*
    if(edad>17 || edad<13
	{
			alert("No es adolescente");
	}
	)
*/

/*
function mostrar()
{
	var edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	console.log("la edad ingresada es :"+ edad);
	
	/*
	if(!(edad<18 && edad>12))
	{
		alert("No es adolescente");
	}
	*/
	/*
	if(edad>17)
	{
		alert("No es adolescente");
	}
	if(edad<13)
	{
		alert("No es adolescente");
	}
	*/
	//if(edad>17 && edad<13)// nunca
	//if(edad<18 || edad>12)// siempre

	if(edad>17||edad<13)  //usar esse
	{
		alert("No es adolescente");
	}
/*
	if(!(edad<18 && edad>12))
	if(edad>=18 || edad<=12)
	{
		alert("No es adolescente");
	}
*/
	
//FIN DE LA FUNCIÓN
