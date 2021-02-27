/* 1

Da silva de souza, jessica - Div E

Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .

f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.
*/
function mostrar()
{
 
	var continente;
	var nombrePais;
	var habitantes = 0;

	var temperaturaMin = -50;
	var contTempPares = 0;
	var contTempImpares = 0;
	var nPaisMenosHab;
	var menosHab = 0;
	var bandera = 0;

	var contPaisesCalidos = 0;
	var contPaisesAmericanosFrios = 0;
	var acumuladorPaisesCalidos = 0;
	var promedioHabTotal = 0;                                             
    var contPaisesTotal = 0;
	var acumuladorTotal = 0;
	var promedioHabPaisesCalidos = 0;    
	
	var acumHabAmerica = 0; //i)
	var acumHabAsia = 0;
	var acumHabEuropa = 0;
	var acumHabAfrica = 0;
	var acumHabOceania = 0;
    var masHabitantes;
	
	var nPaisTempMasBaja;
	var temperaturaMasBaja;

	var i;

 for (i=0; i<5; i++)
 {
	continente = prompt("Ingrese continente (america , asia , europa ,africa y oceania)");
	while(!(continente == "america" || continente == "asia" || continente =="europa" || continente =="africa"|| continente=="oceania"))
    {
		continente = prompt("Error, Ingrese continente valido (america , asia , europa ,africa y oceania)");
    }
 
	nombrePais = prompt("Ingrese nombre del pais");

	habitantes = parseInt(prompt("Ingrese la cantidad de habitantes en millones (entre 1 y 7000)"));
	while(habitantes<1 || habitantes>7000)
	{
		habitantes = parseInt(prompt("Error, Ingrese cantidad de habitantes valido (entre 1 y 7000)"));
	}
    
	nivelPobresa = prompt("Ingrese el nivel de pobresa (pobre, rico , muy rico)");
	while(!(nivelPobresa == "pobre" || nivelPobresa == "rico" || nivelPobresa == "muy rico"))
	{
	  nivelPobresa = prompt("Error, Ingrese nivel de pobresa valido (pobre, rico , muy rico)");
	}
	if(continente == "europa")
	{
	  while(nivelPobresa == "pobre")
	  {
		nivelPobresa = prompt("Error, en Europa no hay paises pobres. Ingrese nivel de pobresa valido (rico , muy rico)");
	  }
	}

	temperaturaMin = parseInt(prompt("Ingrese temperatura"));
	while(temperaturaMin<-50 || temperaturaMin>50)
	{
		temperaturaMin = parseInt(prompt("Error,Ingrese temperatura valida"));
	}
    
	contPaisesTotal++;         //f
	acumuladorTotal = acumuladorTotal + habitantes; 
	
	switch(continente)
	{
	  case "america":
		acumHabAmerica = acumHabAmerica + habitantes;
		break;
  
	  case "asia":
		acumHabAsia = acumHabAsia + habitantes;
		break;
  
	  case "europa":
		acumHabEuropa = acumHabEuropa + habitantes;
		break;
  
	  case "africa":
		acumHabAfrica = acumHabAfrica + habitantes;
		break;
  
	  case "oceania":
		acumHabOceania = acumHabOceania + habitantes;
		break;
	}

	if(temperaturaMin%2==0) //a
	{
		contTempPares++;
	}
	else
   {
	if(continente == "europa") //b
	{
		contTempImpares++;
	}
    }

    if(bandera == 0)
	{
		nPaisMenosHab = nombrePais;
	    menosHab = habitantes;
		nPaisTempMasBaja = nombrePais;
		temperaturaMasBaja = temperaturaMin;
		bandera = 1;
	}
	if(habitantes<menosHab) //c
	{
		nPaisMenosHab = nombrePais;
	    menosHab = habitantes;
	}

	if(temperaturaMin<temperaturaMasBaja)
	{
		nPaisTempMasBaja = nombrePais;
		temperaturaMasBaja = temperaturaMin;

	}

	if(temperaturaMin > 40)
	{
	  contPaisesCalidos++; //d)
	  acumuladorPaisesCalidos = acumuladorPaisesCalidos + habitantes;
	}
	else if (temperaturaMin < 0)
	{
	  if(continente == "america")
	  {
		contPaisesAmericanosFrios++; //e)
	  }
	}


 }

 promedioHabPaisesCalidos = acumuladorPaisesCalidos/contPaisesCalidos;
 promedioHabTotal = acumuladorTotal/contPaisesTotal;

 if(acumHabAmerica > acumHabEuropa && acumHabAmerica > acumHabAsia && acumHabAmerica > acumHabAfrica && acumHabAmerica > acumHabOceania)
{
  masHabitantes = "America";
}
else if(acumHabEuropa > acumHabAmerica && acumHabEuropa > acumHabAsia && acumHabEuropa > acumHabAfrica && acumHabEuropa > acumHabOceania)
{
  masHabitantes = "Europa";
}
else if(acumHabAsia > acumHabAmerica && acumHabAsia > acumHabEuropa && acumHabAsia > acumHabAfrica && acumHabAsia > acumHabOceania)
{
  masHabitantes = "Asia";
}
else if(acumHabAfrica > acumHabAmerica && acumHabAfrica > acumHabEuropa && acumHabAfrica > acumHabAsia && acumHabAfrica > acumHabOceania)
{
  masHabitantes = "Africa";
}
else
{
  masHabitantes = "Oceania";
}

document.write("La cantidad de temperaturas pares es: "+contTempPares+"<br>");
document.write("La cantidad de temperaturas impares de europa es: "+contTempImpares+"<br>");
document.write("El nombre del pais con menos habitantes es: "+nPaisMenosHab+"<br>");
document.write("la cantidad de paises que superan los 40 grados es: "+contPaisesCalidos+"<br>");
document.write("La cantidad de paises de america que tienen menos de 0 grados es: "+contPaisesAmericanosFrios+"<br>");
document.write("El promedio de habitantes entre los paises ingresados es: "+promedioHabTotal+" millones<br>");
document.write("El promedio de habitantes entre los paises que superan los 40 grados es: "+promedioHabPaisesCalidos+" millones<br>");
document.write("La temperatura mínima ingresadaes es: "+temperaturaMasBaja+" grados, y el nombre del pais que registro esa temperatura. es: "+nPaisTempMasBaja+"<br>");
document.write("El continente que tiene mas habitantes es: "+mashabitantes+"<br>");

}












