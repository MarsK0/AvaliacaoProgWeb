import {User} from '../main.js'

formLoginBtnLogin.addEventListener('click', ()=>{
    let username = document.getElementById('formLoginInputUser').value
    let pass = document.getElementById('formLoginInputPass').value
    let users = JSON.parse(localStorage.getItem('users'))

    if(!checkBlankFields(username, pass)){
        alert('Preencha todos os campos!')
        return
    }

    let userLogin = checkLogin(username, pass, users)
    
    if(!userLogin){
        alert('Combinação de usuário e senha incorreta')
        return
    }

    localStorage.setItem('userLogin', JSON.stringify(userLogin))
    window.location.href = './home.html'
})

function checkBlankFields(username, pass){
    let filledFields = true
    if(username === '' || pass === ''){
        filledFields = false
    }
    return filledFields
}

function checkLogin(username, pass, users){
    let login
    users.forEach(e => {
        username = username.toLowerCase()
        let cadUser = e.username
        let cadPass = e.password
        if(cadUser === username && cadPass === pass){
            login = e
        }
    })
    return login
}