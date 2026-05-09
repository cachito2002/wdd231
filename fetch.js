const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

const output = document.querySelector("#output");
const outputList = document.querySelector("#outputList");

async function getPokemon(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doStuff(data);
  }
}

function doStuff(data) {
  results = data;
  const html = `
    <h2>${data.name}</h2>
    <p>Base Experience: ${data.base_experience}</p>
    <p>Height: ${data.height}</p>
    <p>Weight: ${data.weight}</p>
  `;
  output.innerHTML = html;
}

async function getPokemonList(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doStuffList(data);
  }
}

function doStuffList(data) {
  const pokeList = sortPokemon(data.results);
  let html = "";
  pokeList.forEach(pokemon => {
    html += `<li>${pokemon.name}</li>`;
  });
  outputList.innerHTML = html;
}

function sortPokemon(list) {
  return list.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
}

getPokemon(url);
getPokemonList(urlList);