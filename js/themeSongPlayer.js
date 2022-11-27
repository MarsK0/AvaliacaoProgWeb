const themeSong = document.getElementById('themeSong')
const btnThemeSongPlay = document.getElementsByClassName('btnThemeSongPlay')[0]

function themeSongPlay(){
    btnThemeSongPlay.style.backgroundImage = 'url(./assets/pause.png)'
    btnThemeSongPlay.style.backgroundPosition = '0'
    themeSong.play()
}

function themeSongPause(){
    btnThemeSongPlay.style.backgroundImage = 'url(./assets/play.png)'
    btnThemeSongPlay.style.backgroundPosition = '.1rem'
    themeSong.pause()
}

export function themeSongPlayer(){
    btnThemeSongPlay.addEventListener('click', ()=>{
        if(themeSong.paused){
            themeSongPlay()
        }else{
            themeSongPause()
        }
    })
}