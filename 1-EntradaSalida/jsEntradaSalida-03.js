/* aula de sabado 27/2/2021

2- "super chino" Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY 
a)el NOMBRE del mas pesado de los comestibles
b)el NOMBRE del  mas caro de todos los productos
c)el NOMBRE del  mas barato de los elaborados
d)el tipo de mercadería  que mas aparece
e)el porcentaje de productos elaborados por sobre el total       
f)el promedio de pesos por cada tipo ingresado                   


*/
function mostrar()
{
	var tipo;
	var nombreProducto;
	var precio = 0;
	var procedencia;
	var peso = 0;

	var nombreMasPesadoC;  //A
	var masPesadoC = 0;
	var nombreMasCaroTodos;   //B
	var precioMasCaroTodos = 0;

	var nombreMasBaratoElabo;   //C
	var precioMasBaratoElab = 0;
	var bandera = 0;

	var contLimp = 0;
	var contComest = 0;
	var contOtros = 0;
	var acuPesoOtros;
	var acuPesoLimp;
	var acuPesoComest;
	//D
	var tipoMasAparece;

	//E
	var contImport = 0;
	var contNacional = 0;
	var contElaborado = 0;
	var cantiProcedenciaTotal = 0;
	var porcentajeElabo = 0;

	//F
	var contLimp = 0;
	var contComest = 0;
	var contOtros = 0;
	var acuPesoOtros = 0;
	var acuPesoLimp = 0;
	var acuPesoComest = 0;
	var promePesoComest = 0; 
	var promePesoLimp = 0;
    var promePesoOtros = 0;

    var respuesta = "si";

	while(respuesta == "si")
	{

		tipo = prompt("Ingrese tipo (limpieza ,comestible , otros)");
		while(!(tipo == "limpieza" || tipo =="comestible" || tipo == "otros"))
		{
			tipo = prompt("Error, Ingrese tipo valido (limpieza ,comestible , otros)");
		}

		nombreProducto = prompt("Ingrese nombre del producto");
		while(isNaN(nombreProducto) == false)
		{
			nombreProducto = prompt("Error, Ingrese un nombre de producto valido");
		}

		precio = parseInt(prompt("Ingrese precio (no mayor a $1000)"));
		while(isNaN(precio) == true || precio<0 || precio>1000)
		{
			precio = parseInt(prompt("Error, Ingrese precio valido (no mayor a $1000)"));
		}

		procedencia = prompt("Ingrese procedencia (importado, nacional, elaborado)");
		while(procedencia != "importado" && procedencia != nacional && procedencia != elaborado)
		{
			procedencia = prompt("Error, Ingrese procedencia valida (importado, nacional, elaborado)");
		}

		peso = parseInt(prompt("Ingrese peso (no mayor a 30kg)"));
		while(isNaN(peso) == true || peso<0 || peso>30)
		{
			peso = parseInt(prompt("Error, Ingrese peso valido(no mayor a 30kg)"));
		}
        
		//contProdTotal++;  
	    //acumuladorProdTotal = acumuladorProdTotal + nombreProducto;

		switch(tipo)
		{
			case "comestible":
				contComest++;
				acuPesoComest = acuPesoComest + peso;

				if(bandera == 0)    //A
		        {
				masPesadoC = peso;
			    nombreMasPesadoC = nombreProducto;
			    bandera = 1
		        }
				if(peso>MasPesadoC)
				{
					masPesadoC = peso;
					nombreMasPesadoC = nombreProducto;
				}
			break;

			case "limpieza":
				contLimp++;
				acuPesoLimp = acuPesoLimp + peso;
				break;

			case "otros":
				contOtros++;
				acuPesoOtros = acuPesoOtros + peso;
				break;
		}

		switch(procedencia)
		{
			case "importado":
				contImport++;
			break;

			case "nacional":
				contNacional++;
			break;
			
			case "elaborado":
				contElaborado++;

				if(bandera == 0)
				{
					precioMasBaratoElab = precio;
					nombreMasBaratoElabo = nombre;
					bandera = 1;
				}
				if(precio<precioMasBaratoElab)
				{
					precioMasBaratoElab = precio;
					nombreMasBaratoElabo = nombre;
				}
			break;
		}

		if(bandera == 0) //B
        {
	        precioMasCaroTodos = precio;
	        nombreMasCaroTodos = nombreProducto;
	        bandera = 1;
        }
        if(precio>precioMasCaro)
		{
	        precioMasCaroTodos = precio;
	        nombreMasCaroTodos = nombreProducto;
        }

        respuesta = prompt("Ingresar otro producto");

	}

    //D
	if(contComest > contLimp && contComest > contOtros)
	{
		tipoMasAparece = "comestible";
	}
	else if(contLimp > contComest && contLimp > contOtros)
	{
		tipoMasAparece = "limpieza";
	}
	else 
	{
		tipoMasAparece = "Otros";
	}

	// E
	cantiProcedenciaTotal = contImport + contNacional + contElaborado;
	porcentajeElabo = (contElaborado * 100) / cantiProcedenciaTotal;
	//F
	promePesoComest = acuPesoComest/contComest;
	promePesoLimp = acuPesoLimp/contLimp;
	promePesoOtros = acuPesoOtros/contOtros;

	

	document.write("El NOMBRE del mas pesado de los comestibles es: "+nombreMasPesadoC+"<br>");
	document.write("El NOMBRE del  mas caro de todos los productos es: "+nombreMasCaroTodos+"<br>");
	document.write("El NOMBRE del  mas barato de los elaborados es: "+nombreMasBaratoElabo+"<br>");
	document.write("El tipo de mercadería  que mas aparece es: "+tipoMasAparece+"<br>");
	document.write("El porcentaje de productos elaborados por sobre el total es: "+porcentajeElabo+"<br>");
	document.write("El promedio de pesos por cada tipo ingresado: promedio comestible es: "+promePesoComest+" promedio limpieza es: "+promePesoLimp+" promedio otros es: "+promePesoOtros+"<br>");


}


