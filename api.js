const fetch = require('node-fetch');
const listPokemons = () => {
    var names = [];
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


module.exports = {
    listPokemons
};