
const data =[
        {
            "id": 1,
            "usuario": "carlos",
            "senha": "123456"
          },
          {
            "id": 2,
            "usuario": "igor",
            "senha": "654321"
          },
          {
            "id": 3,
            "usuario": "leticia",
            "senha": "123654"
          }
    
]
const btn = document.querySelector('#login')
btn.addEventListener('click',(event)=>{
    event.preventDefault()
    const user = document.getElementById('user').value
    const password = document.getElementById('password')
    data.find((obj)=>obj.usuario===user&& obj.senha ===password)
    if(login){
        window.location = '../index.html'
    }else{
        alert ('Usuário não encontrado')
    }
    console.log(login)
    console.log(user,password)

})

