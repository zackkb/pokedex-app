// IIFE for pokemonList
let pokemonRepository = (function() {
    // Array for pokemon
    let pokemonList = [{
            name: "Bulbasaur",
            height: 0.7,
            type: ["Grass", "Poison"]
        },

        {
            name: "Ivysaur",
            height: 1,
            type: ["Grass", "Poison"]
        },

        {
            name: "Venusaur",
            height: 2,
            type: ["Grass", "Poison"]
        },

        {
            name: "Charmander",
            height: 0.6,
            type: ["Fire"]
        },

        {
            name: "Charmeleon",
            height: 1.1,
            type: ["Fire"]
        },

        {
            name: "Charizard",
            height: 1.7,
            type: ["Fire", "Flying"]
        },
    ];

    //Prints details of pokemon
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll,

    };
})();


pokemonRepository.add({
    name: "Squirtle",
    height: 0.5,
    type: ["Water"],
});

pokemonRepository.getAll().forEach(function(pokemonList) {

    if (pokemonList.height >= 1.5) {
        document.write(' - That\'s a big Pokemon!');
    } else document.write('<br>' + pokemonList.name + (' , height: ') + pokemonList.height);
});