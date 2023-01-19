let library = $(".library__element")
let musicSong = $(".musicsongs")
let closeMusicSong = $(".musicsong-back")
let musicPlayer = $(".music-play")
let subtabMoreBtn = $(".subtab-more")
let subtabMore = $(".modalsubtab-more")
let subtabMoreElement = $(".subtab-more__content")
let exitSubtabmore = $(".exit-subtabmore")


library.addEventListener("click", ()=>{
    musicSong.style.display= "block"
    musicPlayer.style.display= "none"
})
closeMusicSong.addEventListener("click", ()=>{
    musicSong.style.display= "none"
    musicPlayer.style.display= "block"
})
subtabMoreBtn.addEventListener("click", ()=>{
    subtabMore.style.display = "block"
})
exitSubtabmore.addEventListener("click", ()=>{
    subtabMore.style.display = "none"
})

