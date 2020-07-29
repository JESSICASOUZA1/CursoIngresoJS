/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var Cant;
    var Marc;
    var Desc;
    var Prec;
    var Total;
    var TotalIVA;
    var IIBB;

    Cant = parseInt(document.getElementById("txtIdCantidad").value);
    Marc = document.getElementById("Marca").value;
    Prec = 35;
    Total = Prec*Cant;
    switch(Cant){
        case 5:
            if (Marc == "ArgentinaLuz"){
                Desc = Total - ((Total)*0.4);
            }
            else {
                Desc = Total - ((Total)*0.3);
            }
        break;
        case 4:
            if (Marc == "ArgentinaLuz" || Marc == "FelipeLamparas"){
                Desc = Total - ((Total)*0.25);        
            }
            else {
                Desc = Total - ((Total)*0.2);      
            }
        break;
        case 3:
            if (Marc == "ArgentinaLuz"){
                Desc = Total - ((Total)*0.15);                  
            }
            else if (Marc == "FelipeLamparas"){
                Desc = Total - ((Total)*0.1);                             
            }
            else {
                Desc = Total - ((Total)*0.05);                     
            }
        break;
        case 2:
        case 1:
            Desc = Total;
        break;              
        default:
            Desc = Total - ((Total)*0.5);
        break;     
    }
    if (Desc > 120){
        TotalIVA = Desc + (Desc*0.1);
        IIBB = Desc*0.1;
        document.getElementById("txtIdprecioDescuento").value = "$"+TotalIVA+": Usted pago $"+IIBB+" de IIBB.";
    }
    else {
        document.getElementById("txtIdprecioDescuento").value = "$"+Desc;
    }   
}
