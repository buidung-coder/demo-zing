let settingPanel = document.querySelector(".settings-panel")
let settingBtn = document.querySelector("#setting-icon")
let exitSetting = document.querySelector(".exit-settings")

settingBtn.addEventListener("click", ()=>{
    settingPanel.style.display = "block"
})
exitSetting.addEventListener("click", ()=>{
    settingPanel.style.display = "none"
})