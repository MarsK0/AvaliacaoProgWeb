import { User } from '../main.js'
import { throwAlertError } from '../main.js'

formRegisterBtnRegister.addEventListener('click',()=>{
    let username = document.getElementById('formRegisterInputUser').value
    let pass = document.getElementById('formRegisterInputPass').value
    let repeatPass = document.getElementById('formRegisterInputRepeatPass').value
    let users = JSON.parse(localStorage.getItem('users'))

    //ROTINA DE CHECAGEM
    isThereBlankFields(username, pass, repeatPass)
    checkSpaceInPass(pass)
    isUsernameAvailable(username, users)
    checkPasswordsMatch(pass, repeatPass)

    //EFETIVAÇÃO DO CADASTRO
    registerUser(username, pass, users)
})

//DECLARAÇÕES DE FUNCTIONS ========================================================

function isUsernameAvailable(username, users){
    users.forEach(e => {
    username = username.toLowerCase()
    let userRegistered = e.username
    if(userRegistered === username){
        document.getElementById('formRegisterInputUser').focus()
        throwAlertError('Usuário indisponível')
    }
    })
}

function isThereBlankFields(username, pass, repeatPass){
    if(username === '' || username.trim() === ''){
        document.getElementById('formRegisterInputUser').focus()
        document.getElementById('formRegisterInputUser').value = ''
        throwAlertError('Preencha todos os campos!')
    }else if(pass === ''){
        document.getElementById('formRegisterInputPass').focus()
        document.getElementById('formRegisterInputPass').value = ''
        throwAlertError('Preencha todos os campos!')
    }else if(repeatPass === ''){
        document.getElementById('formRegisterInputRepeatPass').focus()
        throwAlertError('Preencha todos os campos!')
    }
}

function checkPasswordsMatch(pass, repeatPass){
    if(pass != repeatPass){
        document.getElementById('formRegisterInputRepeatPass').focus()
        throwAlertError('As senhas não coincidem!')
    }
}

function registerUser(username, pass, users){
    let newUser = new User(username, pass, [])
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    window.location.href = './index.html'     
}

function checkSpaceInPass(pass){
    if(pass.indexOf(' ') >= 0){
        document.getElementById('formRegisterInputPass').focus()
        throwAlertError('É vetado o uso do caractere espaço na senha!')
    }
}