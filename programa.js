document.getElementById("boton_Busqueda").addEventListener('click', buscarCocktels)

function buscarCocktels()
{
    
    let cocktail = document.getElementById("input_Busqueda").value;

    fetch('http://www.cocktailDBclone.somee.com/api/cocktail/buscar/' + cocktail)
    .then (response => response.json())
    .then(data => console.log(data));

}