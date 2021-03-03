/*
recuperacao parcial 2020 - ejercicio 1
da silva de souza, jessica

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:

a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total

*/
function mostrar()
{

var i;
var tipoProducto;
var precio = 0;
var cantidad = 0;
var marca;
var fabricante;

//A
var masCaroJabon;      //precioMax
var cantidadJabon = 0;
var fabricanteJabon;
var bandera = 0;

//B
var contJab = 0;
var contBarbijo = 0;
var contAlcohol = 0;

//C
var acumuladorCantidadBarb = 0;
var acumuladorCantidadJab = 0;
var acumuladorCantidadAlc = 0;
var promedio = 0;

for(i=0; i<5; i++)
{

	tipoProducto = prompt("Ingrese tipo Producto (barbijo,jabón o alcohol)");
	while(!(tipoProducto =="barbijo" || tipoProducto=="jabon" || tipoProducto=="alcohol"))
	{
		tipoProducto = prompt("Error, Ingrese tipo Producto valido (barbijo,jabón o alcohol)");
	}

	precio = parseInt(prompt("Ingrese precio (no menor a 100 y no mayor a $300)"));
	while(isNaN(precio) == true || precio<100 || precio>300) 
	{
		precio = parseInt(prompt("Error, Ingrese precio valido (no menor a 100 y no mayor a $300)"));
	}

	cantidad = parseInt(prompt("Ingrese cantidad de productos (no mayor a 1000)"));
	while(isNaN(cantidad) == true || cantidad<1 || cantidad>1000)
	{
		cantidad = parseInt(prompt("Error, Ingrese cantidad de productos (no mayor a 1000)"));
	}

	marca = prompt("Ingrese marca");
	while(isNaN(marca) == false)
	{
		marca = prompt("Error, Ingrese marca valida");
	}

	fabricante = prompt("Ingrese fabricante");
	while(isNaN(fabricante) == false)
	{
		fabricante = prompt("Error, Ingrese fabricante valido");
	}
	switch(tipoProducto)
	{
		case "jabon":
			contJab++;
			acumuladorCantidadJab = acumuladorCantidadJab + cantidad;

            if(precio>masCaroJabon||bandera == 0)   //A
			{
			masCaroJabon = precio;
			cantidadJabon = cantidad;
			fabricanteJabon = fabricante;
			bandera = 1;
			}
			
		break;

		case "barbijo":
			contBarbijo++;
			acumuladorCantidadBarb = acumuladorCantidadBarb + cantidad;
		break;

		case "alcohol":
			contAlcohol++;
			acumuladorCantidadAlc = acumuladorCantidadAlc + cantidad;
		break;

	}

} //Fim For

if(acumuladorCantidadJab>acumuladorCantidadBarb && acumuladorCantidadJab>acumuladorCantidadAlc)
{
	tipoComMasUnidad = "jabon";
	promedio = acumuladorCantidadJab/contJab;
}
else if(acumuladorCantidadBarb>acumuladorCantidadJab && acumuladorCantidadBarb>acumuladorCantidadAlc)
{
	tipoComMasUnidad = "barbijo";
	promedio = acumuladorCantidadBarb/contBarbijo;    
}
else
{
	tipoComMasUnidad = "alcohol";
	promedio = acumuladorCantidadAlc/contAlcohol;
}
document.write("El más caro de los jabones es: $"+masCaroJabon+ " y la cantidad es: "+cantidadJabon+ " y el fabricante es: "+fabricanteJabon+"<br>");
document.write("El tipo de producto con mas unidades es: "+tipoComMasUnidad+ " y el promedio por compra es: "+promedio+"<br>");
document.write("La cantidad total de barbijo es: "+acumuladorCantidadBarb+"<br>");

}//Fim function
