function mostrar()
{
	//tomo la edad  
	var edad;

	edad = document.getElementById('txtIdEdad').value;
    edad = parseInt(edad);
	console.log("La edad ingresada es: "+edad);

	if(edad == 15)
	{
		alert("chica bonita");
	}
	
}//FIN DE LA FUNCIÓN

// if nao fecha com ponto e virgula
// nesse caso ta comparando
// if seria com valor logico sim ou nao, 1 ou 0 etc

//  console.log("La edad ingresada es: "+edad); pra verificar desde ctrl+shift+i nao é necessario. so pra porvar

   if(1)
   {
	   alert("verdadero");
   }
   else
   {
      alert("falso");
   }

   /*
      verdadero:
	  1, "1", "0" true  .... qualquer texto

	  falso:
	  0, false, 

   */