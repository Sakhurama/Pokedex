
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

for(numero = 1; numero<= 5; numero++){
    const url = `https://pokeapi.co/api/v2/pokemon/${numero}`

fetch(url)
.then((response) => response.json())
.then(data => {
    console.log(data),
    mostrarPokemon(data)
    })
}