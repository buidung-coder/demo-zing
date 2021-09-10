let settingPanel = document.querySelector(".settings-panel")
let settingBtn = document.querySelector("#setting-icon")
let exitSetting = document.querySelector(".exit-settings")
let library = document.querySelector(".library__element")
let musicSong = document.querySelector(".musicsongs")
let closeMusicSong = $(".musicsong-back")
let musicPlayer = $(".music-play")

settingBtn.addEventListener("click", ()=>{
    settingPanel.style.display = "block"
})
exitSetting.addEventListener("click", ()=>{
    settingPanel.style.display = "none"
})
library.addEventListener("click", ()=>{
    musicSong.style.display= "block"
    musicPlayer.style.display= "none"
})
closeMusicSong.addEventListener("click", ()=>{
    musicSong.style.display= "none"
    musicPlayer.style.display= "block"
})