const themeDay = ['url(./themes/day/day1.jpg)','url(./themes/day/day2.jpg)','url(./themes/day/day3.jpg)','url(./themes/day/day4.jpg)','url(./themes/day/day5.jpg)']
const themeNight = ['url(./themes/night/night1.jpg)','url(./themes/night/night2.jpg)','url(./themes/night/night3.jpg)','url(./themes/night/night4.jpg)','url(./themes/night/night5.jpg)']
const themeRain = ['url(./themes/rain/rain1.jpg)','url(./themes/rain/rain2.jpg)','url(./themes/rain/rain3.jpg)','url(./themes/rain/rain4.jpg)','url(./themes/rain/rain5.jpg)']


export function theme(theme){
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

export let runTheme = {
    
}