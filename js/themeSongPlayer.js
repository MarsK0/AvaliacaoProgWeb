const themeSong = document.getElementById('themeSong')
const themeSongVolume = document.getElementById('themeSongVolume')

function themeSongPlay(){
    btnThemeSongPlay.innerText = '| |'
    themeSong.play()
}

function themeSongPause(){
    btnThemeSongPlay.innerText = '|>'
    themeSong.pause()
}

function themeSongSetVolume(){
    themeSong.volume = (themeSongVolume.value)/100
}

export function themeSongPlayer(){
    btnThemeSongPlay.addEventListener('click', ()=>{
        if(themeSong.paused){
            themeSongPlay()
        }else{
            themeSongPause()
        }
    })
    
    themeSongVolume.oninput = function(){
        console.log(themeSongVolume.value)
        if(themeSongVolume.value == 0){
            themeSongPause()
        }else{
            themeSongPlay()
            themeSongSetVolume()
        }
        
    }
}