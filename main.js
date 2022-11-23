import {runTheme} from './js/theme.js'

const themeSong = document.getElementById('themeSong')
const themeSongVolume = document.getElementById('themeSongVolume')
const background = document.getElementById('background')
//Evento de troca dinâmica dos slides, rotina no arquivo theme.js
background.addEventListener('animationend', ()=>{
    runTheme()
})

btnThemeSongPlay.addEventListener('click', ()=>{
    if(themeSong.paused){
        themeSong.play()
        btnThemeSongPlay.innerText = '| |'
    }else{
        themeSong.pause()
        btnThemeSongPlay.innerText = '|>'
    }
})

themeSongVolume.oninput = function(){
    themeSong.volume = (document.getElementById('themeSongVolume').value)/100
}



