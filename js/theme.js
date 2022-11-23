const themeDay = ['url(./themes/day/day1.jpg)','url(./themes/day/day2.jpg)','url(./themes/day/day3.jpg)','url(./themes/day/day4.jpg)','url(./themes/day/day5.jpg)']
const themeNight = ['url(./themes/night/night1.jpg)','url(./themes/night/night2.jpg)','url(./themes/night/night3.jpg)','url(./themes/night/night4.jpg)','url(./themes/night/night5.jpg)']
const themeRain = ['url(./themes/rain/rain1.jpg)','url(./themes/rain/rain2.jpg)','url(./themes/rain/rain3.jpg)','url(./themes/rain/rain4.jpg)','url(./themes/rain/rain5.jpg)']
const background = document.getElementById('background')

let previousBackgroundTheme = 'day'
let currentBackgroundTheme = 'day'
let arrBackground = theme(currentBackgroundTheme)
let arrBackgroundIndex = 1

function theme(theme){
    let arrBackground
    if(theme === 'day'){
        arrBackground = themeDay
    }else if(theme === 'night'){
        arrBackground = themeNight
    }else if(theme === 'rain'){
        arrBackground = themeRain
    }
    return arrBackground
    }

background.classList.toggle('slide')

//Verifica se houve troca de tema
function themeUnchanged(){
    return (currentBackgroundTheme === previousBackgroundTheme)
}

//Caso haja troca de tema, faz as alterações para a troca dinâmica
function themeChange(){
    previousBackgroundTheme = currentBackgroundTheme
    arrBackground = theme(currentBackgroundTheme)
    document.body.style.setProperty('--backgroundEnd', theme(currentBackgroundTheme)[0])
    arrBackgroundIndex=0
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
export function runTheme(){
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
            startSlide()
        }
    }) 
}

document.getElementById('themeList').onchange = function(){
    currentBackgroundTheme = document.getElementById('themeList').value
}