const program = require("commander");
const { prompt } = require("inquirer");
const { listPokemons, getAbilities } = require("./api");

program.version("0.0.1").description("CLI program");
program
.command("list")
.alias("l")
.description("list all Pokemons")
.action(() => {
    const lpokemons = listPokemons();
    lpokemons.then( pokemons => {
        prompt([
            {
            type: "list",
            name: "selected",
            message: "Select a Pokemon",
            choices: Object.keys(pokemons),
            },
        ]).then(({ selected }) => {
            const pokemon = pokemons[selected];
            console.log('Abilities:')
            getAbilities(pokemon.name).then(abilities => {
                console.log(abilities)
            })



            // console.log(pokemon.name, 'pokemon ==> ')
            // console.log(JSON.stringify(pokemon, null, 2));
        });
        }
    )

});

program.parse(process.argv);
