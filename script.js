

//------------------------- fetching pokemon types------------------------------
const nameUrlMap = {};
const types = document.getElementById("types");
const container = document.getElementById("container");

window.onload = () => displayPokemonTypes();
function displayPokemonTypes() {
  fetch("https://pokeapi.co/api/v2/type/")
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((element) => {
        const name = element.name;
        const url = element.url;
        nameUrlMap[name] = url;
        const options = document.createElement("option");
        options.setAttribute("value", name);
        options.setAttribute("data-url", url);

        options.textContent = name;
        types.appendChild(options);
      });
    });
}

//-------------------------------fetching pokemons by type-----------------------
const filter = document.getElementById("filter");
filter.addEventListener("click", () => {
  fetch(nameUrlMap[types.value])
    .then((res) => res.json())
    .then((data) => {
      container.innerHTML = "";
      data.pokemon.forEach((element) => {
        const pokemonName = element.pokemon.name;
        const pokemonUrl = element.pokemon.url;
        console.log(pokemonName, pokemonUrl);
        const pokeImg = document.createElement("img");
        fetchImages(pokemonUrl).then((src) => {
          pokeImg.setAttribute("src", src);
          const pokeCard = document.createElement("div");
          pokeCard.setAttribute("class", "pokeCard");
          container.append(pokeCard);
          const pokeName = document.createElement("span");
          pokeName.setAttribute("class", "pokeName");
          const pokeType = document.createElement("span");
          pokeType.setAttribute("class", "pokeType");
          pokeType.innerText = document.getElementById("types").value;
          
          if (pokeType.innerText === "normal") {
            pokeCard.style.backgroundColor = "#a9b0b3";
          } else if (pokeType.innerText === "fighting") {
            pokeCard.style.backgroundColor = "#d76f2e";
          } else if (pokeType.innerText === "flying") {
            pokeCard.style.backgroundColor = "#a9b0b3";
          } else if (pokeType.innerText === "poison") {
            pokeCard.style.backgroundColor = "#bd86cc";
          } else if (pokeType.innerText === "ground") {
            pokeCard.style.backgroundColor = "#f7e049";
          } else if (pokeType.innerText === "rock") {
            pokeCard.style.backgroundColor = "#a8922c";
          } else if (pokeType.innerText === "bug") {
            pokeCard.style.backgroundColor = "#79a449";
          } else if (pokeType.innerText === "ghost") {
            pokeCard.style.backgroundColor = "#826aa8";
          } else if (pokeType.innerText === "steel") {
            pokeCard.style.backgroundColor = "#a9b0b3";
          } else if (pokeType.innerText === "fire") {
            pokeCard.style.backgroundColor = "#fd842f";
          } else if (pokeType.innerText === "water") {
            pokeCard.style.backgroundColor = "#4e98c7";
          } else if (pokeType.innerText === "grass") {
            pokeCard.style.backgroundColor = "#a0cf59";
          } else if (pokeType.innerText === "electric") {
            pokeCard.style.backgroundColor = "#efd73f";
          } else if (pokeType.innerText === "psychic") {
            pokeCard.style.backgroundColor = "#f46ebd";
          } else if (pokeType.innerText === "ice") {
            pokeCard.style.backgroundColor = "#5ac7e8";
          } else if (pokeType.innerText === "dragon") {
            pokeCard.style.backgroundColor = "#dcaa2b";
          } else if (pokeType.innerText === "dark") {
            pokeCard.style.backgroundColor = "#a9b0b3";
          } else if (pokeType.innerText === "fairy") {
            pokeCard.style.backgroundColor = "#fdbdea";
          } else if (pokeType.innerText === "unknown") {
            pokeCard.style.backgroundColor = "#a9b0b3";
          } else {
            pokeCard.style.backgroundColor = "#a9b0b3";
          }

          pokeName.innerText = pokemonName;
          let abilitySpan = document.createElement("span");
          abilitySpan.setAttribute("class", "abilitySpan");
                abilitySpan.innerText = "Abilities:";
          pokeCard.append(pokeName, pokeImg, pokeType,abilitySpan );
          fetchAbilities(pokemonUrl, pokeCard);
        });

      });
    });
});

async function fetchImages(pokemonUrl) {
  const response = await fetch(pokemonUrl);
  const data = await response.json();
  let sprites = data.sprites.front_default;
  return sprites;
}

async function fetchAbilities(pokemonUrl, pokeCard) {
  const response = await fetch(pokemonUrl);
  const data = await response.json();
  const pokeAbility = document.createElement("p");
  pokeAbility.setAttribute("class", "pokeAbility");
  data.abilities.forEach(element => {
    let abilityName = element.ability.name;
    pokeAbility.innerText +="-"+abilityName+"-";
            console.log(abilityName);
            pokeCard.append(pokeAbility);
  });
}

//------------------------pokemon display onload---------------------------
window.addEventListener("DOMContentLoaded", displayOnload);

function displayOnload() {
  container.innerHTML = "";

  for (let i = 1; i < 152; i++) {
    let URL_API = "https://pokeapi.co/api/v2/pokemon/" + i;
    fetch(URL_API)
      .then((res) => res.json())
      .then((data) => {
        const pokeCard = document.createElement("div");
                pokeCard.setAttribute("class", "pokeCard");
                container.append(pokeCard);
                const pokemonName = data.species.name;
                const pokeName = document.createElement("span");
                pokeName.setAttribute("class", "pokeName");
                pokeName.innerText = pokemonName;
                const pokeImg = document.createElement("img");
                const src = data.sprites.front_default;
                pokeImg.setAttribute("src", src);
                const pokeType = document.createElement("span");
                pokeType.setAttribute("class", "pokeType");
        
                data.types.forEach((element) => {
                  let typeName = element.type.name;
                  pokeType.innerText = typeName;
                });

                const pokeAbility = document.createElement("p");
                pokeAbility.setAttribute("class", "pokeAbility");

                data.abilities.forEach(element => {
                  let abilityName = element.ability.name;
                  pokeAbility.innerText +="-"+abilityName+"-";
                });
                
        
        
                data.types.forEach((element) => {
                  let typeName = element.type.name;
                  pokeType.innerText = typeName;
                });
                let abilitySpan = document.createElement("span");
                abilitySpan.setAttribute("class", "abilitySpan");

                abilitySpan.innerText = "Abilities:";
                pokeCard.append(pokeName, pokeImg, pokeType, abilitySpan, pokeAbility);
        
                if (pokeType.innerText === "Normal") {
                  pokeCard.style.backgroundColor = "#a9b0b3";
                } else if (pokeType.innerText === "Fighting") {
                  pokeCard.style.backgroundColor = "#d76f2e";
                } else if (pokeType.innerText === "Flying") {
                  pokeCard.style.backgroundColor = "#a9b0b3";
                } else if (pokeType.innerText === "Poison") {
                  pokeCard.style.backgroundColor = "#bd86cc";
                } else if (pokeType.innerText === "Ground") {
                  pokeCard.style.backgroundColor = "#f7e049";
                } else if (pokeType.innerText === "Rock") {
                  pokeCard.style.backgroundColor = "#a8922c";
                } else if (pokeType.innerText === "Bug") {
                  pokeCard.style.backgroundColor = "#79a449";
                } else if (pokeType.innerText === "Ghost") {
                  pokeCard.style.backgroundColor = "#826aa8";
                } else if (pokeType.innerText === "Steel") {
                  pokeCard.style.backgroundColor = "#a9b0b3";
                } else if (pokeType.innerText === "Fire") {
                  pokeCard.style.backgroundColor = "#fd842f";
                } else if (pokeType.innerText === "Water") {
                  pokeCard.style.backgroundColor = "#4e98c7";
                } else if (pokeType.innerText === "Grass") {
                  pokeCard.style.backgroundColor = "#a0cf59";
                } else if (pokeType.innerText === "Electric") {
                  pokeCard.style.backgroundColor = "#efd73f";
                } else if (pokeType.innerText === "Psychic") {
                  pokeCard.style.backgroundColor = "#f46ebd";
                } else if (pokeType.innerText === "Ice") {
                  pokeCard.style.backgroundColor = "#5ac7e8";
                } else if (pokeType.innerText === "Dragon") {
                  pokeCard.style.backgroundColor = "#dcaa2b";
                } else if (pokeType.innerText === "Dark") {
                  pokeCard.style.backgroundColor = "#a9b0b3";
                } else if (pokeType.innerText === "Fairy") {
                  pokeCard.style.backgroundColor = "#fdbdea";
                } else if (pokeType.innerText === "Unknown") {
                  pokeCard.style.backgroundColor = "#a9b0b3";
                } else {
                  pokeCard.style.backgroundColor = "#a9b0b3";
                }

      });
  }
}

//-------------------------------code for reset---------------------------------
document.getElementById("reset").addEventListener("click", displayOnload);

//----------------------- search pokemon ---------------------------------

let input_text = document.getElementById("search");
let searchBtn = document.getElementById("btn");
        btn.addEventListener("click", () => {
          if(input_text.value ===""){
            alert('Please enter a name');
            return
          }
          let filter = input_text.value;
          filter = filter.toLowerCase();
          container.innerHTML = "";

          for (let i = 1; i < 152; i++) {
            let URL_API = "https://pokeapi.co/api/v2/pokemon/" + i;
            fetch(URL_API)
              .then((res) => res.json())
              .then((data) => {
                const pokeCard = document.createElement("div");
                pokeCard.setAttribute("class", "pokeCard");
                const pokemonName = data.species.name;
                const pokeName = document.createElement("span");
                pokeName.setAttribute("class", "pokeName");
                pokeName.innerText = pokemonName;
                const pokeImg = document.createElement("img");
                const src = data.sprites.front_default;
                pokeImg.setAttribute("src", src);
                const pokeType = document.createElement("span");
                pokeType.setAttribute("class", "pokeType");
        
                data.types.forEach((element) => {
                  let typeName = element.type.name;
                  pokeType.innerText = typeName;
                });

                const pokeAbility = document.createElement("p");
                pokeAbility.setAttribute("class", "pokeAbility");
                data.abilities.forEach(element => {
                  let abilityName = element.ability.name;
                  pokeAbility.innerText +="-"+abilityName+"-";
                });
                
        
        
                data.types.forEach((element) => {
                  let typeName = element.type.name;
                  pokeType.innerText = typeName;
                });
                let abilitySpan = document.createElement("span");
                abilitySpan.setAttribute("class", "abilitySpan");

                abilitySpan.innerText = "Abilities:";
        
                if (pokeType.innerText === "normal") {
                  pokeCard.style.backgroundColor = "#a9b0b3";
                } else if (pokeType.innerText === "fighting") {
                  pokeCard.style.backgroundColor = "#d76f2e";
                } else if (pokeType.innerText === "flying") {
                  pokeCard.style.backgroundColor = "#a9b0b3";
                } else if (pokeType.innerText === "poison") {
                  pokeCard.style.backgroundColor = "#bd86cc";
                } else if (pokeType.innerText === "ground") {
                  pokeCard.style.backgroundColor = "#f7e049";
                } else if (pokeType.innerText === "rock") {
                  pokeCard.style.backgroundColor = "#a8922c";
                } else if (pokeType.innerText === "bug") {
                  pokeCard.style.backgroundColor = "#79a449";
                } else if (pokeType.innerText === "ghost") {
                  pokeCard.style.backgroundColor = "#826aa8";
                } else if (pokeType.innerText === "steel") {
                  pokeCard.style.backgroundColor = "#a9b0b3";
                } else if (pokeType.innerText === "fire") {
                  pokeCard.style.backgroundColor = "#fd842f";
                } else if (pokeType.innerText === "water") {
                  pokeCard.style.backgroundColor = "#4e98c7";
                } else if (pokeType.innerText === "grass") {
                  pokeCard.style.backgroundColor = "#a0cf59";
                } else if (pokeType.innerText === "electric") {
                  pokeCard.style.backgroundColor = "#efd73f";
                } else if (pokeType.innerText === "psychic") {
                  pokeCard.style.backgroundColor = "#f46ebd";
                } else if (pokeType.innerText === "ice") {
                  pokeCard.style.backgroundColor = "#5ac7e8";
                } else if (pokeType.innerText === "dragon") {
                  pokeCard.style.backgroundColor = "#dcaa2b";
                } else if (pokeType.innerText === "dark") {
                  pokeCard.style.backgroundColor = "#a9b0b3";
                } else if (pokeType.innerText === "fairy") {
                  pokeCard.style.backgroundColor = "#fdbdea";
                } else if (pokeType.innerText === "unknown") {
                  pokeCard.style.backgroundColor = "#a9b0b3";
                } else {
                  pokeCard.style.backgroundColor = "#a9b0b3";
                }
                if(pokeName.innerText === filter){
                   return displayOnSearch(pokeName, pokeImg, pokeType,  pokeCard, abilitySpan, pokeAbility);
                }
              });
          }
});

function displayOnSearch(pokeName, pokeImg, pokeType, pokeCard, abilitySpan, pokeAbility){
    document.getElementById("container").append(pokeCard);
    pokeCard.append(pokeName, pokeImg, pokeType,abilitySpan, pokeAbility);

}

document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#loader").style.visibility = "visible";
  } else {
      document.querySelector("#loader").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
  }
};