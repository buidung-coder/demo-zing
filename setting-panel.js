let settingPanel = $(".settings-panel")
let settingBtn = $("#setting-icon")
let exitSetting = $(".exit-settings")
let musicSetting = $(".music-settings")


settingBtn.addEventListener("click", ()=>{
    settingPanel.style.display = "block"
})
exitSetting.addEventListener("click", ()=>{
    settingPanel.style.display = "none"
})
