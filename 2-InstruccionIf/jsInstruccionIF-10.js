function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	let vMaximo = 10;
	let vMinimo = 1;
    let vNum;
	vNum = Math.round( Math.random() * (vMaximo - vMinimo) + vMinimo);

	if (vNum == 9 || vNum == 10) 

	{
		alert (vNum + " Excelente");

	}
	else if (vNum >4 && vNum <= 8) 

	{
		alert (vNum +  " APROBÓ");
	} 

	else 
	{
		alert(vNum + " Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN