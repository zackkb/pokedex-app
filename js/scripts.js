// List of pokemon and their attributes
let pokemonList = [{
    name: "Bulbasaur",
    height: 0.7,
    type: ["grass", "poison"]
},

{
    name: "Ivysaur",
    height: 1,
    type: ["grass", "poison"]
},

{
    name: "Venusaur",
    height: 2,
    type: ["grass", "poison"]
},

{
    name: "Charmander",
    height: 0.6,
    type: ["fire"]
},

{
    name: "Charmeleon",
    height: 1.1,
    type: ["fire"]
},

{
    name: "Charizard",
    height: 1.7,
    type: ["fire", "flying"]
},
];

// Initialization "let i = 0", the condition "i < pokemonList.length;"

// The action "i++ which is the equivalent of i = i + 1"

for (let i = 0; i < pokemonList.length; i++) {
document.write('<br>' + pokemonList[i].name + (' , height: ') + pokemonList[i].height);
}
//This handles heights greater >= to 1.0
if (pokemonList[i].height >= 1.0) {
document.write(' - That\'s a big Pokemon!');
}