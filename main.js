import {runTheme} from './js/theme.js'

const background = document.getElementById('background')
//Evento de troca dinâmica dos slides, rotina no arquivo theme.js
background.addEventListener('animationend', ()=>{
    runTheme()
})