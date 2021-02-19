
function mostrar()
{
   var tipo;
   var precio = 0;
   var cantidad = 0;
   var acumulador =0;
   var marca;
   var fabricante;
   var promedio;
   var contador = 0;



   while(contador<5)
   {

	tipo = prompt("Ingrese un tipo de producto (barbijo, jabon, alcohol")
   while (!(tipo == "barbijo"  || tipo == "jabon" || tipo == "alcohol"))
   {
	tipo = prompt("Error, Ingrese un tipo de producto valido (barbijo, jabon, alcohol")
   }

   precio = parseInt(prompt("Ingrese precio"));
   while (precio<100 || precio>300)
   {
   precio = parseInt(prompt("Error, Ingrese precio valido"));
   }


   cantidad = parseInt(prompt("Ingrese cantidad (entre 1 y 1000"))
   while(cantidad<1 || cantidad>1000)
   {
   cantidad = parseInt(prompt("Error, Ingrese cantidad valida (entre 1 y 1000"));
   }

   marca = prompt("Ingrese un marca");
   fabricante = prompt("Ingrese fabricante");

   //a)
   



   contador++;
   }

	alert("uno");


	document.write("El alcohol más barato, la cantidad de unidades y el fabricante") //A
	document.write("Tipo con mas unidades"+tipo+"el promedio"+promedio)
}
