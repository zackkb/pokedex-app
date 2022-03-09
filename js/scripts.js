//Begin IIFE
let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


    //Add a new pokemon
    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "detailsUrl" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("error");
        }
    }

    function findPokemon(searchName) {
        $('.pokemon-list').empty();
        pokemonList.forEach((pokemon) => {
            if (pokemon.name.toLowerCase().includes(searchName.toLowerCase())) {
                addListItem(pokemon);
            }
        });
    }

    //Returns pokemon
    function getAll() {
        return pokemonList;
    }


    //Creates a button for pokemon
    function addListItem(pokemon) {
        let list = document.querySelector(".pokemon-list");
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        button.classList.add("btn-primary");
        button.innerHTML = pokemon.name;
        button.classList.add("btn");
        listItem.appendChild(button);
        listItem.classList.add("group-list-item");
        list.appendChild(listItem);
        button.addEventListener('click', function() {
            showDetails(pokemon);
        });
    }

    //Loads pokemon from an API
    function loadList() {
        showLoadingMessage();
        return fetch(apiUrl).then(function(response) {
            hideLoadingMessage();
            return response.json();
        }).then(function(json) {
            json.results.forEach(function(item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function(e) {
            hideLoadingMessage();
            console.error(e);
        });
    }


    //Loads data of pokemon when clicked
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(details) {
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.weight = details.weight;
                item.types = [];
                for (let i = 0; i < details.types.length; i++) {
                    item.types.push(details.types[i].type.name);
                }
                item.abilities = [];
                for (let i = 0; i < details.abilities.length; i++) {
                    item.abilities.push(details.abilities[i].ability.name);
                }
            }).catch(function(e) {
                console.error(e);
            });
    }


    //Loads data from server
    function showDetails(item) {
        loadDetails(item).then(function() {
            showModal(item);
        });
    }


    //Shows loading wheel
    function showLoadingMessage() {
        let loading = document.querySelector('#loading');
        loading.classList.add("display");
    }

    //Hides loading wheel
    function hideLoadingMessage() {
        let loading = document.querySelector('#loading');
        loading.classList.remove("display");
    }

    //Begin modal
    function showModal(item) {
        let modalTitle = $('.modal-title');
        let modalBody = $('.modal-body');

        modalTitle.empty();
        modalBody.empty();

        let pokemonName = $('<h1 class="text-uppercase">' + item.name + '</h1>');
        let pokemonHeight = $('<p>' + 'Height: ' + item.height + '</p>');
        let pokemonWeight = $('<p>' + 'Weight: ' + item.weight + '</p>');
        let pokemonAbilities = $('<p class="text-capitalize">' + 'Abilities: ' + item.abilities.join(', ') + '</p>');
        let typesElement = $('<p class="text-capitalize">' + 'Types: ' + item.types.join(', ') + '</p>');
        let pokemonImage = $('<img class=\'pokemon-modal-image\'>');
        pokemonImage.attr('src', item.imageUrl);

        modalTitle.append(pokemonName);
        modalBody.append(pokemonImage);
        modalBody.append(pokemonHeight);
        modalBody.append(pokemonWeight);
        modalBody.append(pokemonAbilities);
        modalBody.append(typesElement);
    }
    //End modal

    //Object keys
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        findPokemon: findPokemon,
    };
})();
//end of IIFE


//Call functions
pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});