/*
Este es un ejemplo de una API REST utilizando una llamada con fetch, el cual sitve para obtener información sobre el tipo de API, (pokemon) y obtener su estrutura a partir de crear una función call back con una promesa.
*/

const pokeApiURL = "https://pokeapi.co/api/v2/";

//Vamos a crear una función para obtener todos los datos de la pokedex para esto tenemos que imaginar el orden y la obtención de los datos

const pokedex = () => {
    //Pirmero necesitamos obtener todas las estadísticas del pokemon, así que necesitamos crear un diccionario para obtener cada uno de los elementos del front para después vaciar los datos
    const pokemonStatsElements = {
        hp : document.getElementById("pokemonStatHp"),
        attack : document.getElementById("pokemonStatAttack"),
        defense : document.getElementById("pokemonStatDefense"),
        specialAttack : document.getElementById("pokemonStatSpecialAttack"),
        specialDefense : document.getElementById("pokemonStatSpecialDefense"),
        speed : document.getElementById("pokemonStatSpeed")
    };

    //Necesitamos un auxiliar que nos permita utilizar la clase del tipo del pokemon para cambiar la css dependiendo del tipo
    let currentClassType = null;

    //Tiene que cambiar los elementos de la imagen, para ello tenemos que crear un template que se encargue de encadenar los datos
    const imageTemplate = "<img class='pokedisplay' src='{imgSrc}' alt='pokedisplay' />";

    //Para eso necesitamos un objeto que se encargue de guardar las rutas de las imágenes que vamos a cambiar dependiendo de si es una busqueda, si lo encontró o no al pokemon
    const image = {
        imgPokemonNotFound : "../img/404.png",
        imgLoading : "../img/loading.gif"
    };

    //Necesitamos una variable que guarde todos los contenedores de la pokedex
    const containers = {
        imagenContainer : document.getElementById("pokedisplay-container"),
        pokemonTypesContainer : document.getElementById("pokemonTypes"),
        pokemonNameElement : document.getElementById("pokemonNameResult"),
        pokemonAbilitiesContainer : document.getElementById("pokemonAbilities"),
        pokemonMovesContainer : document.getElementById("pokemonMoves"),
        pokemonIdElement : document.getElementById("pokemonId")
    };

    //Necesiatamos un objeto de tipo array que guarde los botones con su tipo de referencia
    const buttons = {
        all : Array.from(document.getElementsByClassName("btn")),
        search : document.getElementById("btnSearch"),
        next : document.getElementById("btnUp"),
        previous : document.getElementById("btnDown")
    };

    //Vamos a buscar un pokemon, necesitamos una variable que guarde el nombre del pokemon
    const pokemonInput = document.getElementById("pokemonName");

    //La agrupación de los elementos en este objeto debe de ser unan estructura que nos permita crear funciones más pequeñas que sin importar el orden, puedan obtener cada uno de los datos necesarios
    const processPokemonType = (pokemonTypeData) => {
        //Primero necesitamos obtener el tipo de pokemon, el nombre y la clase para que se modifique en el html, para eso tendremos que obtener los movimientos, las stats, las habilidades y el id
        let pokemonType = "";
        //utilizo una búsqueda de la clase de pokemon, eso se refiere al tipo de pokemon
        const fristClass = pokemonData.types[0].type.name;

        pokemonData.types.forEach((pokemonTypeData) => {
            //Necesito obtener la etiqueta de cada cambio
            pokemonType += `<span class="pokemon-type ${pokemonTypeData.type.name}">${pokemonTypeData.type.name}</span>`;
        });
        //Para poder quitar y cambiar el contenedor dependiendo del tipo, tengo que saber a cual pertenece
        if(currentClassType){
            containers.pokemonMovesElement.classList.remove(currentClassType);
            containers.pokemonAbilitiesElement.classList.remove(currentClassType);
        } //Ahora hay que agregar lo nuevo
        containers.pokemonMovesContainer.classList.add(fristClass);
        containers.pokemonAbilitiesContainer.classList.add(fristClass);

        //Debo de agragar las etiquetas creadas dentro del forEach
        containers.pokemonTypesContainer.innerHTML = pokemonType;
    };

    //Ahora necesitamos obtener las estadísticas del pokemon
    const processPokemonStats = (pokemonData) => {
        pokemonData.stats?.forEach((pokemonstatData) => {
            //Vamos a evaluar si encuentra el nombre de la estadística para colocarlo en su contenedor correspondiente
            switch(statData.stat.name){
                case "hp":
                    pokemonStatsElements.hp.innerHTML = pokemonstatData.base_stat;
                    pokemonStatsElements.hp.style = `background: linear-gradient(0deg, rgba(0, 118, 255, 1) ${pokemonstatData.base_stat}%, rgba(0, 0, 0, 1) ${pokemonstatData.base_stat}%);`;
                    break;
                case "attack":
                    pokemonStatsElements.attack.innerHTML = pokemonstatData.base_stat;
                    pokemonStatsElements.attack.style = `background: linear-gradient(0deg, rgba(0, 118, 255, 1) ${pokemonstatData.base_stat}%, rgba(0, 0, 0, 1) ${pokemonstatData.base_stat}%);`;
                    break;
                case "defense":
                    pokemonStatsElements.defense.innerHTML = pokemonstatData.base_stat;
                    pokemonStatsElements.defense.style = `background: linear-gradient(0deg, rgba(0, 118, 255, 1) ${pokemonstatData.base_stat}%, rgba(0, 0, 0, 1) ${pokemonstatData.base_stat}%);`;
                    break;
                case "special-attack":
                    pokemonStatsElements.specialAttack.innerHTML = pokemonstatData.base_stat;
                    pokemonStatsElements.specialAttack.style = `background: linear-gradient(0deg, rgba(0, 118, 255, 1) ${pokemonstatData.base_stat}%, rgba(0, 0, 0, 1) ${pokemonstatData.base_stat}%);`;
                    break;
                case "special-defense":
                    pokemonStatsElements.specialDefense.innerHTML = pokemonstatData.base_stat;
                    pokemonStatsElements.specialDefense.style = `background: linear-gradient(0deg, rgba(0, 118, 255, 1) ${pokemonstatData.base_stat}%, rgba(0, 0, 0, 1) ${pokemonstatData.base_stat}%);`;
                    break;
                case "speed":
                    pokemonStatsElements.speed.innerHTML = pokemonstatData.base_stat;
                    pokemonStatsElements.speed.style = `background: linear-gradient(0deg, rgba(0, 118, 255, 1) ${pokemonstatData.base_stat}%, rgba(0, 0, 0, 1) ${pokemonstatData.base_stat}%);`;
                    break;
            }
        });
    };
};