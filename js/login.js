import { throwAlertError } from '../main.js'

formLoginBtnLogin.addEventListener('click', ()=>{
    let username = document.getElementById('formLoginInputUser').value
    let pass = document.getElementById('formLoginInputPass').value
    let users = JSON.parse(localStorage.getItem('users'))
    
    //DECLARAÇÃO DE VARIÁVEIS QUE RECEBEM O RETORNO DAS FUNCTIONS
    const userLogin = checkLogin(username, pass, users)

    //ROTINA DE CHECAGEM
    isThereBlankFields(username, pass)
    isCredentialsMatching(userLogin)

    //EFETIVAÇÃO DO LOGIN
    login(userLogin)
})

//DECLARAÇÕES DE FUNCTIONS ========================================================

function isThereBlankFields(username, pass){
    if(username === ''){
        document.getElementById('formLoginInputUser').focus()
        throwAlertError('Preencha todos os campos!')
    }else if(pass === ''){
        document.getElementById('formLoginInputPass').focus()
        throwAlertError('Preencha todos os campos!')
    }
}

function isCredentialsMatching(userLogin){
    if(!userLogin){
        document.getElementById('formLoginInputUser').focus()
        throwAlertError('Combinação de usuário e senha incorreta')
    }
}

function checkLogin(username, pass, users){
    let login
    users.forEach((e,i) => {
        username = username.toLowerCase()

        let cadUser = e.username
        let cadPass = e.password

        if(cadUser === username && cadPass === pass){
            login = e
            login.id = i
        }
    })
    return login
}

function login(userLogin){
    localStorage.setItem('userLogin', JSON.stringify(userLogin))
    window.location.href = './home.html'
}