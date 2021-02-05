/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
    //prompt entrada de datos, nani

    var Message;
    Message = prompt("Ingrese su nombre");
    document.getElementById("txtIdNombre").value = Message;

}  // quando é pra mostrar na caixa se coloca no document.getElementById("txtIdNombre").value = Message;


/*
salida  
alert() ou 
document.getElementById("txtIdNombre").value = Message;

entrada -> =prompt()

*/
