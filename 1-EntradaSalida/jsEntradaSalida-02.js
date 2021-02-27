/* 2

Da silva de souza, jessica - Div E

Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal y nos piden informar solo si existe

a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano
*/
function mostrar()
{
	var tipoAnimal;
	var tipoPelaje;
	var edad;
	var nombre;
	var raza;
	var peso;
	var estadoClinico;
	var tempCorporal;
	var respuesta = "si";
	var bandera=0;

	var mayorPeso;
	var nombreMasPesado;

	var ultimoNombreOtraCosa=1;

	var banderaSinPelo=0;
	var nombreSinPeloMenorTemp;
	var sinPeloMenorTemp;

	var contPerro=0;
	var contGato=0;
	var contOtraCosa=0;
	var cantidadTotal=0;
	var cantidadPerrosGatos=0;

	var acumPerroTemp=0;
	var acumGatoTemp=0;
	var acumOtraCosaTemp=0;

	var promedioTempPerro=0;
	var promedioTempGato=0;
	var promedioTempOtraCosa=0;
	var tipoMayorPromedio;

	var contEnfermo=0;
	var contInternado=0;
	var contAdopcion=0;

	var acumPeso=0;

	var estadoClinicoMenorCantidad;
	var porcentajePerroGato=0;
	var porcentajeEnfermos=0;

	var promedioPeso=0;

	var banderaGatoSinPelos=0;
	var nombreGatoSinPelosMasLiviano;
	var pesoGatoSinPelosMasLiviano;
	var razaGatoSinPelosMasLiviano;

	while(respuesta == "si")
    {
		tipoAnimal = prompt("Ingrese tipo animal (gato , perro , otra cosa)");
		while(!(tipoAnimal =="gato" || tipoAnimal =="perro" || tipoAnimal == "otra cosa"))
		{
			tipoAnimal = prompt("Error, Ingrese tipo animal valido (gato , perro , otra cosa)");
		}

		tipoPelaje = prompt("Ingrese tipo pelajo (corto, largo o sin pelos)")
		while(!(tipoPelaje == "corto" || tipoPelaje == "largo" || tipoPelaje =="sin pelo"))
		{
			tipoPelaje = prompt("Error, Ingrese tipo pelajo valido (corto ,largo , sin pelo)");

		}
	 	
		edad = parseInt(prompt("Ingrese edad"));
		while(edad<1 || edad>90)
        {
	        edad = parseInt(prompt("Error, Ingrese edad valida"));
        }

		nombre = prompt("Ingrese nombre del animal");
		while(!isNaN(nombre))
		{
			nombre = prompt("Ingrese un nombre valido");
		}

		raza = prompt("Ingrese raza del animal");
		while(!isNaN(raza))
		{
			raza = prompt("Ingrese una raza valida");
		}

		peso = parseFloat(prompt("Ingrese peso"));
		while(peso<0.1 || peso>50)
		{
			peso = parseFloat(prompt("Error, Ingrese peso valido"));
		}

		estadoClinico = prompt("Ingrese estado clinico (enfermo,internado o adopcion)");
		while(!(estadoClinico == "enfermo" || estadoClinico == "internado" || estadoClinico == "adopcion"))
		{
			estadoClinico = prompt("Error, Ingrese estado clinico valido (enfermo,internado o adopcion)");
		}

		tempCorporal = parseFloat(prompt("Ingrese temperatura corporal"));
		while(tempCorporal<25 || tempCorporal>45)
		{
			tempCorporal = parseFloat(prompt("Error, Ingrese temperatura corporal valida"));
		}

		switch(tipoAnimal)
		{
			case "perro":
				contPerro++;
				acumPerroTemp = acumPerroTemp + tempCorporal;
				break;

			case "gato":
				contGato++;
				acumGatoTemp = acumGatoTemp + tempCorporal;
				if(tipoPelaje == "sin pelo")
				{
				if(banderaGatoSinPelos == 0)
				{
					nombreGatoSinPelosMasLiviano = nombre;
					pesoGatoSinPelosMasLiviano = peso;
					razaGatoSinPelosMasLiviano = raza;
					banderaGatoSinPelos = 1;
				}
				if(peso<pesoGatoSinPelosMasLiviano)
				{
					nombreGatoSinPelosMasLiviano = nombre;
					pesoGatoSinPelosMasLiviano = peso;
					razaGatoSinPelosMasLiviano = raza;
				}
			    }
				break;

			case "otra cosa":
				contOtraCosa++;
				acumOtraCosaTemp = acumOtraCosaTemp + tempCorporal;
				break;
		}
		switch(estadoClinico)
		{
			case "enfermo":
				contEnfermo++;
				break;

			case "internado":
				contInternado++;
				break;

			case "adopcion":
				contAdopcion++;
				break;
		}
		acumPeso = acumPeso + peso;

		if(bandera == 0)
		{
			mayorPeso = peso;
			nombreMasPesado = nombre;
			bandera = 1;
		}
		if(peso>mayorPeso)
		{
			mayorPeso = peso;
			nombreMasPesado = nombre;
		}

		if(tipoAnimal == "otra cosa")
		{
			ultimoNombreOtraCosa = nombre;
		}

		if(tipoPelaje == "sin pelo")
		{
			if(banderaSinPelo == 0)
			{
				nombreSinPeloMenorTemp = nombre;
				sinPeloMenorTemp = tempCorporal;
				banderaSinPelo = 1;
			}
			if(tempCorporal<sinPeloMenorTemp)
			{
				nombreSinPeloMenorTemp = nombre;
				sinPeloMenorTemp = tempCorporal;
			}
		}
    
        respuesta = prompt("Ingresar otro animal?");
    }


	promedioTempPerro = acumPerroTemp/contPerro;
	promedioTempGato = acumGatoTemp/contGato;
	promedioTempOtraCosa = acumOtraCosaTemp/contOtraCosa;

	if(promedioTempPerro > promedioTempGato && promedioTempPerro > promedioTempOtraCosa)
	{
		tipoMayorPromedio = "perro";
	}
	else if(promedioTempGato > promedioTempPerro && promedioTempGato > promedioTempOtraCosa)
	{
		tipoMayorPromedio = "gato";
	}
	else
	{
		tipoMayorPromedio = "otra cosa";
	}

	cantidadPerrosGatos = contPerro+contGato;
	cantidadTotal = contPerro+contGato+contOtraCosa;

	porcentajePerroGato = (cantidadPerrosGatos * 100) / cantidadTotal;
	porcentajeEnfermos = (contEnfermo * 100) / cantidadTotal;

	promedioPeso = acumPeso / cantidadTotal;

	if(contEnfermo < contInternado && contEnfermo < contAdopcion)
	{
		estadoClinicoMenorCantidad = "enfermo";
	}
	else if(contInternado < contEnfermo && contInternado < contAdopcion)
	{
		estadoClinicoMenorCantidad = "internado";
	}
	else 
	{
		estadoClinicoMenorCantidad = "adopcion";
	}

	document.write("El perro mas pesado es: "+nombreMasPesado+"<br>");
	document.write("El porcentaje de enfermos sobre el total de mascotas es: "+porcentajeEnfermos+"%<br>");
	document.write("El nombre de la ultima mascota de tipo otra cosa es: "+ultimoNombreOtraCosa+"<br>");
	document.write("El animal sin pelo con menor temperatura corporal es: "+nombreSinPeloMenorTemp+"<br>");
	document.write("El tipo de mascota(gato o un perro o otra cosa) que tiene el mayor promedio de temperatura corporal es: "+tipoMayorPromedio+"<br>");
	document.write("El porcentaje de gatos y perros es del total de mascotas es: "+porcentajePerroGato+"%<br>");
	document.write("El estado clinico de menor cantidad de mascotas es: " +estadoClinicoMenorCantidad+"<br>");
	document.write("El promedio de kg de todas las mascotas es: "+promedioPeso+"kg<br>");
	document.write("El nombre del gato sin pelos mas liviano es: "+nombreGatoSinPelosMasLiviano+ " y su raza es: "+razaGatoSinPelosMasLiviano+"<br>");

}

