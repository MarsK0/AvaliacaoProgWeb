import {theme} from './js/theme.js'

const background = document.getElementById('background')
let previousBackgroundTheme = 'day'
let currentBackgroundTheme = 'day'
let arrBackground = theme(currentBackgroundTheme)
let arrBackgroundIndex = 1

background.classList.toggle('slide')

// ROTINA PARA TROCA DE TEMA DINÂMICA
background.addEventListener('animationend', ()=>{
    if(currentBackgroundTheme === previousBackgroundTheme){
        if(arrBackgroundIndex == (arrBackground.length-1)){
            document.body.style.setProperty('--backgroundStart', arrBackground[arrBackgroundIndex])
            document.body.style.setProperty('--backgroundEnd', arrBackground[0])
            arrBackgroundIndex=0
        }else{
            document.body.style.setProperty('--backgroundStart', arrBackground[arrBackgroundIndex])
            document.body.style.setProperty('--backgroundEnd', arrBackground[arrBackgroundIndex+1])
            arrBackgroundIndex++
        }
        background.classList.toggle('slide')
        void background.offsetWidth
        background.classList.toggle('slide')
    }else{
        previousBackgroundTheme = currentBackgroundTheme

        document.body.style.setProperty('--backgroundStart', arrBackground[arrBackgroundIndex])
        document.body.style.setProperty('--backgroundEnd', theme(currentBackgroundTheme)[0])

        arrBackgroundIndex=0
        arrBackground = theme(currentBackgroundTheme)

        background.classList.toggle('slide')
        void background.offsetWidth
        background.classList.toggle('slide')
    }
})

btnNight.addEventListener('click', ()=>{
    currentBackgroundTheme = 'night'
})

btnRain.addEventListener('click', ()=>{
    currentBackgroundTheme = 'rain'
})

btnDay.addEventListener('click',()=>{
    currentBackgroundTheme = 'day'
})
