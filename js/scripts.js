let pokemonRepository = (function() {
    let repository = [{
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

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "height" in pokemon &&
            "types" in pokemon
        ) {
            repository.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    }

    function getAll() {
        return repository;
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener("click", function() {
            showDetails(pokemon);
        });
    }

    function showDetails(pokemon) {
        console.log(pokemon.name);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
    };
})();

pokemonRepository.add({
    name: "Squirtle",
    height: 0.5,
    type: ["Water"],
});

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});