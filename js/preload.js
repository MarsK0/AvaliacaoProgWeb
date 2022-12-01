const themeDay = ['./themes/day/day1.jpg','./themes/day/day2.jpg','./themes/day/day3.jpg','./themes/day/day4.jpg','./themes/day/day5.jpg']
const themeNight = ['./themes/night/night1.jpg','./themes/night/night2.jpg','./themes/night/night3.jpg','./themes/night/night4.jpg','./themes/night/night5.jpg']
const themeRain = ['./themes/rain/rain1.jpg','./themes/rain/rain2.jpg','./themes/rain/rain3.jpg','./themes/rain/rain4.jpg','./themes/rain/rain5.jpg']

themeDay.forEach((e,i)=>{
    const link = document.createElement('link')
    link.setAttribute('rel','preload')
    link.setAttribute('as','image')
    link.setAttribute('href',e)
    document.getElementsByTagName('head')[0].appendChild(link)
})

themeNight.forEach((e,i)=>{
    const link = document.createElement('link')
    link.setAttribute('rel','preload')
    link.setAttribute('as','image')
    link.setAttribute('href',e)
    document.getElementsByTagName('head')[0].appendChild(link)
})

themeRain.forEach((e,i)=>{
    const link = document.createElement('link')
    link.setAttribute('rel','preload')
    link.setAttribute('as','image')
    link.setAttribute('href',e)
    document.getElementsByTagName('head')[0].appendChild(link)
})