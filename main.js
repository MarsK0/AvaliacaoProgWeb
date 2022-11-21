import {theme} from './js/theme.js'

const background = document.getElementById('background')
let arrBackground = theme('day')
let arrBackgroundIndex = 1

background.classList.toggle('slide')

background.addEventListener('animationend', ()=>{
    if(arrBackgroundIndex == (arrBackground.length-1)){
        document.body.style.setProperty('--bgstart', arrBackground[arrBackgroundIndex])
        document.body.style.setProperty('--bgend', arrBackground[0])
        arrBackgroundIndex=0
    }else{
        document.body.style.setProperty('--bgstart', arrBackground[arrBackgroundIndex])
        document.body.style.setProperty('--bgend', arrBackground[arrBackgroundIndex+1])
        arrBackgroundIndex++
    }
    background.classList.toggle('slide')
    void background.offsetWidth
    background.classList.toggle('slide')
})

