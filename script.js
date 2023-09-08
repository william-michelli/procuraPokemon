let pokemonDigitado = document.getElementById('pokemon-digitado')
let pesquisar = document.getElementById('pesquisar')
let nomePokemon = document.getElementById('nome-pokemon')
let fotoPokemon = document.getElementById('foto-pokemon')
let tipo = document.getElementById('tipo')
let tipo2 = document.getElementById('tipo-2')
let cartao = document.getElementById('cartao')
let fundoTipo = document.getElementById('fundo-tipo')
let descricao = document.getElementById('descricao')

pesquisar.addEventListener('click', function () {
    //Muda cursor pra ampulheta
    document.body.style.cursor = "wait";

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonDigitado.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.types[0].type.name)
            fotoPokemon.src = data.sprites.front_default
            let nomeCapitalizado = data.name[0].toUpperCase() + data.name.slice(1)
            nomePokemon.textContent = nomeCapitalizado
            pokemonDigitado.value = ''
            tipo.textContent = data.types[0].type.name
            tipo2.textContent = data.types[1]?.type.name
   
        

            //TIPO 1
            if (data.types[0].type.name == 'grass') {
                fotoPokemon.style.backgroundColor = '#73F573'
                tipo.style.backgroundColor = '#73F573'
            }
            if (data.types[0].type.name == 'fire') {
                fotoPokemon.style.backgroundColor = '#FF6464'
                tipo.style.backgroundColor = '#FF6464'
            }
            if (data.types[0].type.name == 'water') {
                fotoPokemon.style.backgroundColor = '#6464FF'
                tipo.style.backgroundColor = '#6464FF'
            }
            if (data.types[0].type.name == 'electric') {
                fotoPokemon.style.backgroundColor = '#FFE57A'
                tipo.style.backgroundColor = '#FFE57A'
            }
            if (data.types[0].type.name == 'normal') {
                fotoPokemon.style.backgroundColor = '#C6C6A7'
                tipo.style.backgroundColor = '#C6C6A7'
            }
            if (data.types[0].type.name == 'ice') {
                fotoPokemon.style.backgroundColor = '#96D9D6'
                tipo.style.backgroundColor = '#96D9D6'
            }
            if (data.types[0].type.name == 'fighting') {
                fotoPokemon.style.backgroundColor = '#C22E28'
                tipo.style.backgroundColor = '#C22E28'
            }
            if (data.types[0].type.name == 'poison') {
                fotoPokemon.style.backgroundColor = '#A33EA1'
                tipo.style.backgroundColor = '#A33EA1'
            }
            if (data.types[0].type.name == 'ground') {
                fotoPokemon.style.backgroundColor = '#E2BF65'
                tipo.style.backgroundColor = '#E2BF65'
            }
            if (data.types[0].type.name == 'flying') {
                fotoPokemon.style.backgroundColor = '#A98FF3'
                tipo.style.backgroundColor = '#A98FF3'
            }
            if (data.types[0].type.name == 'psychic') {
                fotoPokemon.style.backgroundColor = '#F95587'
                tipo.style.backgroundColor = '#F95587'
            }
            if (data.types[0].type.name == 'bug') {
                fotoPokemon.style.backgroundColor = '#A6B91A'
                tipo.style.backgroundColor = '#A6B91A'
            }
            if (data.types[0].type.name == 'rock') {
                fotoPokemon.style.backgroundColor = '##B6A136'
                tipo.style.backgroundColor = '##B6A136'
            }
            if (data.types[0].type.name == 'ghost') {
                fotoPokemon.style.backgroundColor = '#735797'
                tipo.style.backgroundColor = '#735797'
            }
            if (data.types[0].type.name == 'dragon') {
                fotoPokemon.style.backgroundColor = '#6F35FC'
                tipo.style.backgroundColor = '#6F35FC'
            }
            if (data.types[0].type.name == 'dark') {
                fotoPokemon.style.backgroundColor = '#705746'
                tipo.style.backgroundColor = '#705746'
            }
            if (data.types[0].type.name == 'steel') {
                fotoPokemon.style.backgroundColor = '#B7B7CE'
                tipo.style.backgroundColor = '#B7B7CE'
            }
            if (data.types[0].type.name == 'fairy') {
                fotoPokemon.style.backgroundColor = '#D685AD'
                tipo.style.backgroundColor = '#D685AD'
            }  


            //TIPO 2

            if (data.types[1]?.type.name == 'grass') {
                tipo2.style.backgroundColor = '#73F573'
            }
            if (data.types[1]?.type.name == 'fire') {
                tipo2.style.backgroundColor = '#FF6464'
            }
            if (data.types[1]?.type.name == 'water') {
                tipo2.style.backgroundColor = '#6464FF'
            }
            if (data.types[1]?.type.name == 'electric') {
                tipo2.style.backgroundColor = '#FFE57A'
            }
            if (data.types[1]?.type.name == 'normal') {
                tipo2.style.backgroundColor = '#C6C6A7'
            }
            if (data.types[1]?.type.name == 'ice') {
                tipo2.style.backgroundColor = '#96D9D6'
            }
            if (data.types[1]?.type.name == 'fighting') {
                tipo2.style.backgroundColor = '#C22E28'
            }
            if (data.types[1]?.type.name == 'poison') {
                tipo2.style.backgroundColor = '#A33EA1'
            }
            if (data.types[1]?.type.name == 'ground') {
                tipo2.style.backgroundColor = '#E2BF65'
            }
            if (data.types[1]?.type.name == 'flying') {
                tipo2.style.backgroundColor = '#A98FF3'
            }
            if (data.types[1]?.type.name == 'psychic') {
                tipo2.style.backgroundColor = '#F95587'
            }
            if (data.types[1]?.type.name == 'bug') {
                tipo2.style.backgroundColor = '#A6B91A'
            }
            if (data.types[1]?.type.name == 'rock') {
                tipo2.style.backgroundColor = '##B6A136'
            }
            if (data.types[1]?.type.name == 'ghost') {
                tipo2.style.backgroundColor = '#735797'
            }
            if (data.types[1]?.type.name == 'dragon') {
                tipo2.style.backgroundColor = '#6F35FC'
            }
            if (data.types[1]?.type.name == 'dark') {
                tipo2.style.backgroundColor = '#705746'
            }
            if (data.types[1]?.type.name == 'steel') {
                tipo2.style.backgroundColor = '#B7B7CE'
            }
            if (data.types[1]?.type.name == 'fairy') {
                tipo2.style.backgroundColor = '#D685AD'
            } 

            cartao.style.opacity = 1
        }).catch(err => {
            pokemonDigitado.value = ''
            alert('Pokemon nao encontrado')
            cartao.style.opacity = 0
        }).finally(() => {
            //Muda cursor de volta pra normal
            document.body.style.cursor = "default";
        })

    console.log('###########')

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonDigitado.value}`)
        .then(response => response.json())
        .then(data => {
            let aleatorio = Math.floor(Math.random() * 11);
            descricao.textContent = data.flavor_text_entries[aleatorio].flavor_text
            
        })

})
