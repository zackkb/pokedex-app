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

pokemonRepository.getAll().forEach(function(trait) {
    if (trait.height > 1.0) {
        document.write(
            trait.name +
            ' (height: ' +
            trait.height +
            'm) - ' +
            "That's a big Pokemon!" +
            '<br /><br />'
        );
    } else document.write(trait.name + ' (height: ' + trait.height + 'm)' + '<br /><br />');
});