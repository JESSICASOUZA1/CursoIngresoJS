function mostrar()
{
	// da silva de souza,jessica
	//Genero el número RANDOM entre 1 y 10 

	var nota;

	nota = Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10

	if (nota == 9 || nota == 10) 

	{
		alert (nota + " Excelente");
	}
	else if (nota>4 && nota <8) 

	{
		alert (nota +  " APROBÓ");
	} 

	else 
	{
		alert(nota + " Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN