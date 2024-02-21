document.addEventListener('DOMContentLoaded' , ()=>{
    const baseURL ="https://swapi.dev/api/people/"

    fetch(baseURL)
    .then((Response)=>{
        if(!Response.ok){
            throw new Error('erro de rede! código:'+Response.status)
        } return Response.json()
    })
    .then((data)=>{
       console.log(data.results[0].name)
       renderizarPersonagens(data)
    })
    .catch((err)=>console.log(err))
})
function renderizarPersonagens(items){
    const container = document.getElementById('personagem-container')
  items.results.forEach((item, index)=>{
   const divPersonagens = document.createElement('div')
   divPersonagens.innerHTML= `
   <div class = "personagem-caixa">
        <img src= "./image/perso${index}.png">
        <div> 
            <h3>${item.name}</h3>
        </div> 
   </div>`;
   divPersonagens.addEventListener('click',()=>{
    detalhesPersonagem(index)
   })
   divPersonagens.classList.add('personagem')
    container.appendChild(divPersonagens)

  })
    console.log(items) 
}

function detalhesPersonagem(index){
  window.location.href= `./pages/person.html?index=${index}`}