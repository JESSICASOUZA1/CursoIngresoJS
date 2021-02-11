function mostrar()
{
	//tomo la edad  

    var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);
//  if(edad>18) ! significa AO CONTRARIO 
// Se é falso sera vdd, se é vdd sera falso.
    if(!(edad>18))
    {
        alert("Es mayor de edad");
    }
    else if(edad>12 && edad<18)
    {
        alert("Es adolescente");
    }
    else
    {
        alert("Es niño");
    }
}//FIN DE LA FUNCIÓN