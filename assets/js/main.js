const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
let dataPokemons = []

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    const li = document.createElement("li");
    li.addEventListener("click", addEventToCardPokemon);
    li.className = `pokemon ${pokemon.type}`;
    li.setAttribute("id", `${pokemon.number}`);
    li.innerHTML = `
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
    
    `
    pokemonList.appendChild(li)

    return li
}

function addEventToCardPokemon(event){
    const idPokemon = event.currentTarget.id
    const dataPokemonSelected = dataPokemons.find(dataPoke => dataPoke.number == idPokemon)
    cardInfoPokemonModal(dataPokemonSelected)
    toggleModal()
    console.log(dataPokemonSelected)
    
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        dataPokemons = dataPokemons.concat(pokemons)
        const newHtml = pokemons.map(convertPokemonToLi)
    })
}

loadPokemonItens(offset, limit)


loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})
