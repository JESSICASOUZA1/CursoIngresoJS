/* 27/2/2021 - aula sabado

da silva de souza, jessica

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
	var peso = 1;
	var bandera = 0;

	var nombreMasPesadoC;  //A
	var masPesadoC;

	var nombreMasCaroTodos;   //B
	var precioMasCaro = 0;

	var nombreMasBaratoElabo;   //C
	var precioMasBaratoElabo;
	var banderaElaboradoExiste = 0;

	var contLimp = 0;           //(tipo)
	var contComest = 0;
	var contOtros = 0;
	var acuPesoOtros;
	var acuPesoLimp = 0;
	var acuPesoComest = 0;
	var banderaComest = 0;
	//D
	var tipoMasAparece;

	//E
	var contImport = 0;                      //(procedencia)
	var contNacional = 0;
	var contElaborado = 0;
	var cantiProcedenciaTotal = 0;
	var porcentajeElabo = 0;

	//F
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

		nombreProducto = prompt("Ingrese nombre");
		while(isNaN(nombreProducto) == false) // == false so entra no while se for ingresado numeros(error).senao nao entra.
		{
			nombreProducto = prompt("Error, ingrese nombre valido.");
		}

		precio = parseInt(prompt("Ingrese precio (no mayor a $1000)"));
		while(isNaN(precio) == true || precio<1 || precio>1000) //queremos um numero por isso ta true
		{
			precio = parseInt(prompt("Error, Ingrese precio valido (no mayor a $1000)"));
		}

		procedencia = prompt("Ingrese procedencia (importado, nacional, elaborado)");
		while(!(procedencia == "importado" || procedencia == "nacional" || procedencia == "elaborado"))
		{
			procedencia = prompt("Error, Ingrese procedencia valida (importado, nacional, elaborado)");
		}

		peso = parseInt(prompt("Ingrese peso (no mayor a 30kg)"));
		while(isNaN(peso) == true || peso<1 || peso>30)
		{
			peso = parseInt(prompt("Error, Ingrese peso valido(no mayor a 30kg)"));
		}
        
		if(bandera == 0) //B
        {
	        precioMasCaro = precio;
	        nombreMasCaroTodos = nombreProducto;
			bandera = 1;

		}
        if(precio>precioMasCaro)
		{
			precioMasCaro = precio;
	        nombreMasCaroTodos = nombreProducto;
	    }
        
		switch(tipo)
		{
			case "comestible":
				contComest++;
				acuPesoComest = acuPesoComest + peso;

				if(banderaComest == 0)    //A
		        {
				masPesadoC = peso;
			    nombreMasPesadoC = nombreProducto;
			    banderaComest = 1;
		        }
				if(peso>masPesadoC)
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
				if(banderaElaboradoExiste == 0)
				{
				precioMasBaratoElabo = precio;
				nombreMasBaratoElabo = nombreProducto;
				banderaElaboradoExiste = 1;
				}
				if(precio<precioMasBaratoElabo)
				{
					precioMasBaratoElabo = precio;
				    nombreMasBaratoElabo = nombreProducto;
				}
			break;
			}

        respuesta = prompt("Desea ingresar otro producto?");

	}

	// E
	cantiProcedenciaTotal = contImport + contNacional + contElaborado;
	if(contComest > contLimp && contComest > contOtros)       //D
	{
		tipoMasAparece = "comestible";
	}
	else if(contLimp > contComest && contLimp > contOtros)
	{
		tipoMasAparece = "limpieza";
	}
	else 
	{
		tipoMasAparece = "otros";
	}
	porcentajeElabo = (contElaborado * 100) / cantiProcedenciaTotal;
	//F
	promePesoComest = acuPesoComest/contComest;
	promePesoLimp = acuPesoLimp/contLimp;
	promePesoOtros = acuPesoOtros/contOtros;
    
	if(contComest > 0)
	{
		document.write("El NOMBRE del mas pesado de los comestibles es: "+nombreMasPesadoC+"<br>");
	}
	if(contElaborado>0)
	{
		document.write("El NOMBRE del  mas barato de los elaborados es: "+nombreMasBaratoElabo+"<br>");
	}
	document.write("El porcentaje de productos elaborados por sobre el total es: "+porcentajeElabo+"%<br>");

	document.write("El NOMBRE del mas caro de todos los productos es: "+nombreMasCaroTodos+"<br>");
	
	document.write("El tipo de mercadería que mas aparece es: "+tipoMasAparece+"<br>");

	if(contComest > 0 )
	{
		document.write("El promedio de pesos del tipo comestible es: "+promePesoComest+"kg<br>");
	}
	if(contLimp > 0)
	{
		document.write("El promedio de pesos del tipo limpieza es: "+promePesoLimp+"kg<br>");
	}
	if(contOtros > 0 )
	{
		document.write("El promedio de pesos del tipo otros es: "+promePesoOtros+"kg<br>");
	}
	
}
