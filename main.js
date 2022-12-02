import { runTheme } from './js/theme.js'
import { themeSongPlayer } from './js/themeSongPlayer.js'

export class User {
    constructor(username, password, arrMsg){
        this.username = username
        this.password = password
        this.arrMsg = arrMsg
    }
}

//ROTINA PRINCIPAL
setUserAdmin()
runTheme()
themeSongPlayer()

//DECLARAÇÕES DE FUNCTIONS ========================================================

function setUserAdmin(){
    let users = JSON.parse(localStorage.getItem('users'))
    let userAdmin = new User('admin','admin',[])
    if(users === null){
        users = []
        users.push(userAdmin)
        localStorage.setItem('users',JSON.stringify(users))
    }
}

export function throwAlertError(errorMsg){
    alert(errorMsg)
    throw new Error(errorMsg)
}

