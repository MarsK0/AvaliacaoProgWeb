import {theme} from './js/theme.js'

const background = document.getElementById('background')
let previousBackgroundTheme = 'day'
let currentBackgroundTheme = 'day'
let arrBackground = theme(currentBackgroundTheme)
let arrBackgroundIndex = 1

background.classList.toggle('slide')

//Verifica se houve troca de tema
function themeUnchanged(){
    return (currentBackgroundTheme === previousBackgroundTheme)
}

//Caso haja troca de tema, faz as alterações para a troca dinâmica
function themeChange(){
    document.body.style.setProperty('--backgroundEnd', theme(currentBackgroundTheme)[0])
    arrBackgroundIndex=0
    previousBackgroundTheme = currentBackgroundTheme
}

//Verifica se deve reiniciar o índice do array dos backgrounds
function checkBackgroundIndex(){
    function isLastBackground(){
        return arrBackgroundIndex + 1 === arrBackground.length
    }

    arrBackgroundIndex = isLastBackground() ? -1 : arrBackgroundIndex
}

//Define o background inicial da animação de acordo com o índice
function themeStartBackground(){
    document.body.style.setProperty('--backgroundStart', arrBackground[arrBackgroundIndex])
}

//Define o background final da animação de acordo com o índice
function themeEndBackground(){
    document.body.style.setProperty('--backgroundEnd', arrBackground[arrBackgroundIndex+1])
}

//Inicia a animação de troca de background
function startSlide(){
    background.classList.toggle('slide')
    void background.offsetWidth
    background.classList.toggle('slide')
}

//Evento de troca dinâmica dos slides
background.addEventListener('animationend', ()=>{
    if(themeUnchanged()){
        themeStartBackground()
        checkBackgroundIndex()
        themeEndBackground()
        arrBackgroundIndex++
        startSlide()
    }else{
        themeStartBackground()
        themeChange()
        arrBackground = theme(currentBackgroundTheme)
        startSlide()
    }
})