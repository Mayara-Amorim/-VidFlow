const containerVideos = document.querySelector(".videos__container")

async function buscar() {
    try{
        const busca = await fetch("http://localhost:3000/videos");
    const videos = await busca.json();// .then(res=>res.json())//precisamos transformar em json pois esse fetch vai devolver uma promise
    // .then((videos)=>
    videos.forEach(video => {
        if(video.categoaria == ""){
            throw new Error("Categoria vazia");
        }
        containerVideos.innerHTML += `
        <li class="videos__item">
        <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
        <div class="descricao-video">
            <img class="img-canal" src="${video.imagem}">
            <h3 class="titulo-video">${video.titulo}</h3>
            <p class="titulo-canal">${video.descricao}</p>
        </div>
        </li>
       `;
    })
    }catch(e){
       containerVideos.innerHTML = `O correu o erro: ${e}. Por isso não foi possivel exibir os conteudos!`
    }
    
}

buscar();

const barraDePesquisa = document.querySelector(".pesquisar__input");
barraDePesquisa.addEventListener("input", filtrarPesquisa);

// function filtrarPesquisa(){
// const videos = document.querySelectorAll(".videos__item");
//     if (videos != "") {
//         for (const video of videos) {
//             let titulo = video.querySelector(".titulo-video").textContent.toLocaleLowerCase();
//             let valorFiltro = barraDePesquisa.value.toLocaleLowerCase();
//             if (!titulo.includes(valorFiltro)) {
//                 video.style.display = "none"
//             }else{
//                 video.style.display = "block"
//             }
//         }
//     }else {
//         video.style.display = "none"
//     }
// }
function filtrarPesquisa() {
    const videos = document.querySelectorAll('.videos__item');
    const valorFiltro = barraDePesquisa.value.toLowerCase();
  
    videos.forEach((video) => {
      const titulo = video.querySelector('.titulo-video').textContent.toLowerCase();
  
      video.style.display = valorFiltro ? titulo.includes(valorFiltro) ? 'block' : 'none' : 'block';
    });
  }
  

