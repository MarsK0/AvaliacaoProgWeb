import {User} from '../main.js'

formRegisterBtnRegister.addEventListener('click',()=>{
    let username = document.getElementById('formRegisterInputUser').value
    let pass = document.getElementById('formRegisterInputPass').value
    let repeatPass = document.getElementById('formRegisterInputRepeatPass').value
    let users = JSON.parse(localStorage.getItem('users'))
    
    if(!checkBlankFields(username, pass, repeatPass)){
        alert('Preencha todos os campos!')
         return
     }
    if(!usernameAvailable(username, users)){
        alert('Usuário indisponível')
        return
    }
    if(!passMatch(pass, repeatPass)){
        alert('As senhas não coincidem')
        return
    }

    let newUser = new User(username, pass, [])
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    window.location.href = '../index.html'     
})

function usernameAvailable(username, users){
    let availability = true
    
    users.forEach(e => {
    username = username.toLowerCase()
    let userRegistered = e.username
    if(userRegistered === username){
        availability = false
    }
    })
    return availability
}

function checkBlankFields(username, pass, repeatPass){
    let filledFields = true
    if(username === '' || pass === '' || repeatPass === ''){
        filledFields = false
    }
    return filledFields
}

function passMatch(pass, repeatPass){
    let passMatches = true
    if(pass != repeatPass){
        passMatches = false
    }
    return passMatches
}