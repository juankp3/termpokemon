const fetch = require('node-fetch');
const listPokemons = () => {
    const names = [];
    return fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    .then(res => res.json())
    .then(json => {
        for (pokemon in json.results) {
            // names[].push(json.results[pokemon].name)
            names[json.results[pokemon].name] = json.results[pokemon]
        }
        return names;
    })
    .catch(error => console.log(error));

}

const getAbilities = (namePokemon) => {
    const abilities = []
    return fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}/`)
    .then(res => res.json())
    .then(json => {

        for (pokemonAbilities in json.abilities) {
            abilities.push(json.abilities[pokemonAbilities].ability.name)
        }
        return abilities;

    })
    .catch(error => console.log(error));
}


// getAbilities('charmander').then(x => console.log(x));

module.exports = {
    listPokemons,
    getAbilities
};