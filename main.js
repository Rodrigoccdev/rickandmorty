//Consumo de API (personajes)

const page = async (pagina ) => {
    function getCharacters(done){
        const results = fetch("https://rickandmortyapi.com/api/character/?page="+pagina);

        results
        .then(response => response.json())
        .then(data => {
            done(data);
        });
    }

    getCharacters(data => {
        const main = document.querySelector(".container");
        main.innerHTML = "";
        data.results.forEach(personaje => {
            const div = document.createRange().createContextualFragment(`<div class="box articulo"><div><img src="${personaje.image}" alt="Personaje"></div><h2>#${personaje.id}</h2><h2>${personaje.name}</h2><span><b>Specie:</b> ${personaje.species}</span><br><span><b>Gender:</b> ${personaje.gender}</span><br><span><b>Status:</b> ${personaje.status}</span></div>`);
            main.append(div);
            window.scrollTo(0,0);
        });
    })
}
page(1)
