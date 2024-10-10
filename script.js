function mostrarPokemon(data){
        const div = document.createElement("div");
        div.classList.add("pokemon");
        div.innerHTML = `
            <div class="card-pokemon">
                <img src="${data.sprites.front_shiny}" alt="Imagen del pokemon" class="imagen-pokemon"/>
                <p class="nombre-pokemon">${data.name}</p>
            </div>
        `
    
        const container = document.getElementById('container');
        container.append(div);
};



const formPokemon = document.getElementById("pokemon-form");

formPokemon.addEventListener("submit", function(e){
    e.preventDefault();

    let cantidadPokemon = 0

    const container = document.getElementById('container');
    container.innerHTML = ''; // Limpiar contenido anterior

    cantidadPokemon = parseInt(document.getElementById("cantidad-pokemon").value);

    llamarAPi(cantidadPokemon)
})

const llamarAPi = (cantidadPokemon) => {
    for(numero = 1; numero<= cantidadPokemon; numero++){
        const url = `https://pokeapi.co/api/v2/pokemon/${numero}`
    
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        console.log(data),
        mostrarPokemon(data)
        })
    }
}