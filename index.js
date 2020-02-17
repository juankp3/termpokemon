const program = require("commander");
const { prompt } = require("inquirer");
const { listPokemons } = require("./api");

program.version("0.0.1").description("CLI program");
program
.command("list")
.alias("l")
.description("list all students")
.action(() => {
    const lpokemons = listPokemons();
    lpokemons.then( pokemons => {
        prompt([
            {
            type: "list",
            name: "selected",
            message: "Select a student",
            choices: Object.keys(pokemons),
            },
        ]).then(({ selected }) => {
            const pokemon = pokemons[selected];
            console.log(pokemon, 'pokemon ==> ')
            // console.log(JSON.stringify(pokemon, null, 2));
        });
        }
    )

});

program.parse(process.argv);
