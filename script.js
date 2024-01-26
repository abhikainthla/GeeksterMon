const btn = document.getElementById("btn");

btn.addEventListener('click', ()=>{
    let container = document.getElementById("container");
    let query = document.getElementById("search").value;
    query = query.toLowerCase();
    let API_URL = "https://pokeapi.co/api/v2/pokemon/"+query;
    fetch(API_URL)
    .then((response)=>{
        return response.json();
        })
        .then((data)=>{
            console.log(data);
                let img =document.createElement("img");
                let imgSrc = data.sprites.front_default;
                img.setAttribute("src", imgSrc);
                container.appendChild(img);
            });
                            

})