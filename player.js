const backPlayer = $(".header-left")
const player = $(".player")
const cd = $(".cd")
const heading = $(".player-header .name-song")
const cdThumb = $(".cd-thumb")
const audio = $("#audio")
const playBtn = $(".btn-toggle-play")
const progress = $("#progress")
const nextBtn = $(".btn-next")
const prevBtn = $(".btn-prev")
const randomBtn = $(".btn-random")
const repeatBtn = $(".btn-repeat")
const musicEle = $(".music-song__element")

musicEle.addEventListener("click",()=>{
    player.style.display = 'block'
})
backPlayer.addEventListener("click", ()=>{
    player.style.display = "none"
})
const app = {
    //lấy ra vị trí đầu tiên của danh sách bài hát
    currentIndex : 0,
    isPlaying : false,
    isRandom : false,
    isRepeat : false,
    songs : [
        {
            name : "Câu hẹn câu thề 1",
            singer : "Đình Dũng",
            path : "./play-assets/music/CauHenCauThe-DinhDung-6994741.mp3",
            image : "./play-assets/img/cauhencauthe.jpg"
        },
        {
            name : "Níu duyên",
            singer : "Lê Bảo Bình",
            path : "./play-assets/music/NiuDuyen-LeBaoBinh-6872127.mp3",
            image : "./play-assets/img/niuduyen.jpg"
        },
        {
            name : "Nơi ấy con tìm về",
            singer : "Hồ Quang Hiếu",
            path : "./play-assets/music/NoiAyConTimVe-HoQuangHieu-2961670.mp3",
            image : "./play-assets/img/noiaycontimve.jpg"
        },
        {
            name : "Ngã tư đường",
            singer : "Hồ Quang Hiếu",
            path : "./play-assets/music/NgaTuDuong-HoQuangHieu_3ex6x.mp3",
            image : "./play-assets/img/noiaycontimve.jpg"
        },
        {
            name : "Sao ta ngược lối",
            singer : "Đình Dũng",
            path : "./play-assets/music/SaoTaNguocLoi-DinhDung-7052177.mp3",
            image : "./play-assets/img/saotanguocloi.jpg"
        },
        {
            name : "Câu hẹn câu thề",
            singer : "Đình Dũng",
            path : "./play-assets/music/CauHenCauThe-DinhDung-6994741.mp3",
            image : "./play-assets/img/cauhencauthe.jpg"
        },
        {
            name : "Câu hẹn câu thề",
            singer : "Đình Dũng",
            path : "./play-assets/music/CauHenCauThe-DinhDung-6994741.mp3",
            image : "./play-assets/img/cauhencauthe.jpg"
        },
        {
            name : "Câu hẹn câu thề",
            singer : "Đình Dũng",
            path : "./play-assets/music/CauHenCauThe-DinhDung-6994741.mp3",
            image : "./play-assets/img/cauhencauthe.jpg"
        },
        {
            name : "Câu hẹn câu thề end",
            singer : "Đình Dũng",
            path : "./play-assets/music/CauHenCauThe-DinhDung-6994741.mp3",
            image : "./play-assets/img/cauhencauthe.jpg"
        }
    ],
    
    defineProperties : function() {
        Object.defineProperty(this, "currentSong", {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },

    //Xử lí các sự kiện
    heandleEvents: function() {
        const _this = this
        const cdWidth = cd.offsetWidth
        //xử lí phóng to thu nhỏ cd
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop
            cd.style.width = newCdWidth > 0 ? newCdWidth +"px" :0
            cd.style.opacity = newCdWidth / cdWidth
        }
        // xử lí cho đĩa nhạc quay
        const thumbAnimation = cdThumb.animate([
            {transform : "rotate(360deg)"}
        ], {
            duration : 10000,
            iterations : Infinity 
        })
        thumbAnimation.pause()
        // Xử lí sự kiện khi click vào nút play
        playBtn.onclick =function() {
           if(_this.isPlaying) {
                audio.pause()
           }else {
                audio.play()
           }
        }
        // Lắng nghe và xử lí sự kiện bấm nút next
        nextBtn.onclick = function() {
            if(_this.isRandom){
                _this.playRandomSong()
            }else{
                _this.nextSong()
            }
            audio.play()
            _this.scrollToActivesong()
        }
        // Lắng nghe và xử lí sự kiện bấm nút prev
        prevBtn.onclick = function() {
            if(_this.isRandom){
                _this.playRandomSong()
            }else{
                _this.prevSong()
            }
            audio.play()
            _this.scrollToActivesong()
        }
        // Xử lí phát bài hát ngẫu nhiên khi ấn nút random
        randomBtn.onclick = function(e) {
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle("active", _this.isRandom)
        }
        //Xử lí phát lại bài hát cũ khi ấn nút repeat
        repeatBtn.onclick = function(e) {
            _this.isRepeat = !_this.isRandom
            repeatBtn.classList.toggle("active", _this.isRepeat)
        }
        //Nếu nút repeat được ấn thì tự động phát lại bài cũ khi bài hát kết thúc,còn không thì next
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play()
            }else {
                nextBtn.click()
            }
        }
        //lắng nghe xử lí khi song được play
        audio.onplay = function() {
            _this.isPlaying = true
            player.classList.add("playing")
            thumbAnimation.play()
        }
         //lắng nghe xử lí khi song bị pause
        audio.onpause = function() {
            _this.isPlaying = false
            player.classList.remove("playing")
            thumbAnimation.pause()
        }
        //xử lí thanh thời gian chạy theo tiến độ bài hát
        audio.ontimeupdate = function() {
            if(audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }
        //xử lí khi tua bài hát
        progress.onchange = function(e) {
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
            audio.play()
        }

        playlist.onclick = function(e) {
            const songNode = e.target.closest(".song:not(.active)")
            if(songNode || e.target.closest(".option")) {
                _this.currentIndex = Number(songNode.dataset.index)
                _this.loadcurrentsong()
                _this.render()
                audio.play()
            }
            if(e.target.closest(".option")) {
            }
        }
    },

    loadcurrentsong: function() {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },

    nextSong : function() {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length) {
            app.currentIndex = 0
        }
         this.loadcurrentsong()
        
    },

    prevSong: function() {
         this.currentIndex--
         if(this.currentIndex < 0) {
            app.currentIndex = this.songs.length-1
         }
        
         this.loadcurrentsong()
    },

    playRandomSong: function() {
        let newIndex
        do{
            newIndex = Math.floor(Math.random() * this.songs.length)
        }while (newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadcurrentsong()
    },

    scrollToActivesong: function() {
        setTimeout(() => {
            $(".song.active").scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        },300)
    },

    start: function() {
        //Địng nghĩa các thuộc tính cho object
        this.defineProperties()
        //Lắng nghe/ xử lýcác sự kiện
        this.heandleEvents()
        // tải thông tin bài hát đầu tiên vào giao điện khi vào ứng dụng
        this.loadcurrentsong()
        //render lại cái playlist
    },
}
app.start()
