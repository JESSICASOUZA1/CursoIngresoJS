/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.

A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz"  
se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.

 */
function CalcularPrecio () 
{
   var Cantidad;
   var Marca;
   var precio;
   var precioDescuento;
   var PrecioSinDescuento;

   precio = 35;

   Cantidad = document.getElementById("txtIdCantidad").value;
   Cantidad = parseInt(Cantidad);

   Marca = document.getElementById("Marca").value;
   precioDescuento = document.getElementById("txtIdprecioDescuento").value;

   PrecioSinDescuento = CantLamparas*Precio;


   if(Cantidad>5)
   {
    PrecioDescuento = PrecioSinDescuento*0.5;
   }
      else if(Cantidad==5 && marca == "ArgentinaLuz")
        {
         precioDescuento = PrecioSinDescuento*0.4
        }
   

        document.getElementById('txtIdprecioDescuento').value = PrecioDescuento;



}
