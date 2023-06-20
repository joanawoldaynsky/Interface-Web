const TMDB_ENDPOINT = 'https://rawg.io/api';
const API_KEY = '790d17941be040aa879a9a471dc838c0';

function carregaFilmes() {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', TMDB_ENDPOINT + '/games?key=790d17941be040aa879a9a471dc838c0&dates=2019-09-01,2019-09-30&platforms=18,1,7');
  xhr.onload = exibeFilmes;
  xhr.send();
}


function pesquisaFilmes() {
  let xhr = new XMLHttpRequest();

  let query = document.getElementById('inputPesquisa').value;

  xhr.open('GET', TMDB_ENDPOINT + '/games?key=790d17941be040aa879a9a471dc838c0&dates=2019-09-01,2019-09-30&platforms=18,1,7' + '&query=' + query);
  xhr.onload = exibeFilmes;
  xhr.send();
}

async function getDescription(id){
  const request = await fetch(`https://api.rawg.io/api/games/${id}?key=${apiKey}`)
  const response = await request.json();
  return response;
}

function exibeFilmes(evt) {
  let textoHTML = '';

  let filmes = JSON.parse(evt.target.responseText);


  for (let i = 0; i < filmes.results.length; i++) {
    let titulo = filmes.results[i].name;
    let id = filmes.results[i].id;
    let sinopse = filmes.results[i].metacritic;
    let imagem = filmes.results[i].background_image;

    textoHTML += `<div class="card col-md-3 col-sm-6">
            <img src="${imagem}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text">Nota de avaliação: ${sinopse}</p>
                <a href="https://rawg.io/games/${id}"id="${id}"class="btn btn-primary botaoserie">+Saiba Mais</a>
            </div>
        </div>`
  }
  document.getElementById('tela').innerHTML = textoHTML;

}

