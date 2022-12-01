formLoginBtnLogin.addEventListener('click', ()=>{
    let username = document.getElementById('formLoginInputUser').value
    let pass = document.getElementById('formLoginInputPass').value
    let users = JSON.parse(localStorage.getItem('users'))

    //DECLARAÇÃO DE VARIÁVEIS QUE RECEBEM O RETORNO DAS FUNCTIONS
    const thereIsBlankFields = !checkBlankFields(username, pass)
    const userLogin = checkLogin(username, pass, users)
    const credentialsDontMatch = !userLogin

    //ROTINA DE CHECAGEM
    if(thereIsBlankFields){
        alert('Preencha todos os campos!')
        return
    }
    
    if(credentialsDontMatch){
        alert('Combinação de usuário e senha incorreta')
        return
    }

    //EFETIVAÇÃO DO LOGIN
    localStorage.setItem('userLogin', JSON.stringify(userLogin))
    window.location.href = './home.html'
})

//DECLARAÇÕES DE FUNCTIONS ========================================================

function checkBlankFields(username, pass){
    let filledFields = true
    if(username === '' || pass === ''){
        filledFields = false
    }
    return filledFields
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