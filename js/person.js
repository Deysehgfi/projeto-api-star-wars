document.addEventListener('DOMContentLoaded',()=>{
    const urlParam = new URLSearchParams(window.location.search)
    // console.log(urlParam.get('index'))
    const paramIndex= urlParam.get('index')
    //console.log(paramIndex) valor do index do parâmetro
    const url = `https://swapi.dev/api/people/${parseInt(paramIndex)+1}/`
    
    fetch(url)
    .then((Response)=>{
        if(!Response.ok){
            throw new Error('Error de rewde: código'+ Response.status)
    }
        return Response.json()
    })
    .then((data)=>{
       personagem(data)//
    })
    .catch((err)=>console.log(err))
    function personagem(item){
        const personagemImg = document.querySelector('.personagem-img')
        const nome = document.querySelector('.nome')
        const altura = document.querySelector('.altura')
        const peso = document.querySelector('.peso')
        const genero = document.querySelector('.genero')
        const cor_cabelo = document.querySelector('.cor_cabelo')
        const cor_olho = document.querySelector('.cor_olho')
        const cor_pele = document.querySelector('.cor_pele')
        const data_nascimento = document.querySelector('.data_nascimento')
    
    personagemImg.src = `../image/perso${paramIndex}.png`
        nome.innerHTML =`Nome :${item.name}`
        altura.innerHTML =`Altura :${item.height}cm`
        peso.innerHTML =`peso :${item.mass}kg`
        genero.innerHTML =`genero:${item.gender}`
        cor_cabelo.innerHTML =`cor do cabelo :${item.hair_color}`
        cor_olho.innerHTML =`cor dos olhos :${item.eye_color}`
        cor_pele.innerHTML =`cor da pele :${item.skin_color}`
       data_nascimento.innerHTML =`data de aniversario :${item.birth.year}`
    }
})