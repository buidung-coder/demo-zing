const listMusics = $(".music-songs__list-contents")
const listArtist = $(".music-songs__subtitle")


var songs= [
    {
        image : "./music-assets/contents-img/cauhencauthe.jpg",
        name : "Câu hẹn câu thề",
        singer : "Đình Dũng",
        path : "./play-assets/music/CauHenCauThe-DinhDung-6994741.mp3",
        sticker : "HQ",
        mvSticker :"MV"
    },
    {
        image : "./music-assets/contents-img/anhseonthoi.jpg",
        name : "Anh sẽ ổn thôi",
        singer : "Vương Anh Tú",
        path : "./play-assets/music/CauHenCauThe-DinhDung-6994741.mp3",
        sticker : "HQ",
        mvSticker :"MV"
    },
    {
        image : "./music-assets/contents-img/niuduyen.jpg",
        name : "Níu duyên",
        singer : "Lê Bảo Bình",
        path : "./play-assets/music/CauHenCauThe-DinhDung-6994741.mp3",
        sticker : "HQ",
        mvSticker :"MV"
    },
    {
        image : "./music-assets/contents-img/noiaycontimve.jpg",
        name : "Nơi ấy con tìm về",
        singer : "Hồ Quang Hiếu",
        path : "./play-assets/music/CauHenCauThe-DinhDung-6994741.mp3",
        sticker : "HQ",
        mvSticker :"MV"
    },
    {
        image : "./music-assets/contents-img/saotanguocloi.jpg",
        name : "Sao ta ngược lối",
        singer : "Đình Dũng",
        path : "./play-assets/music/CauHenCauThe-DinhDung-6994741.mp3",
        sticker : "HQ",
        mvSticker :"MV"
    },
    {
        image : "./music-assets/contents-img/hoquanghieu2.jpg",
        name : "Con bướm xuân",
        singer : "Hồ Quang Hiếu",
        path : "./play-assets/music/CauHenCauThe-DinhDung-6994741.mp3",
        sticker : "HQ",
        mvSticker :"MV"
    },
    {
        image : "./music-assets/contents-img/thanhhung.jpg",
        name : "Thay tôi yêu cô ấy",
        singer : "Thanh Hưng",
        path : "./play-assets/music/CauHenCauThe-DinhDung-6994741.mp3",
        sticker : "HQ",
        mvSticker :"MV"
    },
    {
        image : "./music-assets/contents-img/thanhhung1.jpg",
        name : "Ai đợi mình được mãi",
        singer : "Thanh Hưng",
        path : "./play-assets/music/CauHenCauThe-DinhDung-6994741.mp3",
        sticker : "HQ",
        mvSticker :"MV"
    },
    {
        image : "./music-assets/contents-img/mr-siro4.jpg",
        name : "Khóc cùng em",
        singer : "Mr. Siro",
        path : "./play-assets/music/CauHenCauThe-DinhDung-6994741.mp3",
        sticker : "HQ",
        mvSticker :"MV"
    },
    {
        image : "./music-assets/contents-img/vuonganhtu5.jpg",
        name : "Gặp nhưng không ở lại",
        singer : "Vương Anh Tú",
        path : "./play-assets/music/CauHenCauThe-DinhDung-6994741.mp3",
        sticker : "HQ",
        mvSticker :"MV"
    },
    {
        image : "./music-assets/contents-img/mr-siro.jpg",
        name : "Đừng rời xa anh",
        singer : "Mr. Siro",
        path : "./play-assets/music/CauHenCauThe-DinhDung-6994741.mp3",
        sticker : "HQ",
        mvSticker :"MV"
    },
]
const renderSong = function() {
    const html =this.songs.map((song, index) => {
        return `
            <div class="music-song__element">
                <div class="music-song__element-firt">
                    <img src="${song.image}" alt="" class="song-element__img">
                    <div class="song-element__tittle">
                        <p class="song-element__name">${song.name}</p>
                        <div class="song-element__sub">
                            <i class="far fa-arrow-alt-circle-down"></i>
                            <p class="song-sticker">${song.sticker}</p>
                            <p class="singer-name">${song.singer}</p>
                        </div>
                    </div>
                </div>
                <div class="music-song__element-second">
                    <p class="song-sticker">${song.mvSticker}</p>
                    <i class="fas fa-ellipsis-v"></i>
                </div>
            </div>`
    })
    listMusics.innerHTML = html.join("")
}
renderSong()
const listMusic = {
    artists: [
        {
            imageArtist :  "./music-assets/contents-img/cauhencauthe.jpg"
        },
        {
            imageArtist :  "./music-assets/contents-img/anhseonthoi.jpg"
        },
        {
            imageArtist :  "./music-assets/contents-img/niuduyen.jpg"
        },
        {
            imageArtist :  "./music-assets/contents-img/noiaycontimve.jpg"
        },
        {
            imageArtist :  "./music-assets/contents-img/saotanguocloi.jpg"
        },
        {
            imageArtist :  "./music-assets/contents-img/hoquanghieu2.jpg"
        },
        {
            imageArtist :  "./music-assets/contents-img/thanhhung.jpg"
        },
        {
            imageArtist :  "./music-assets/contents-img/thanhhung1.jpg"
        },
        {
            imageArtist :  "./music-assets/contents-img/mr-siro4.jpg"
        },
        {
            imageArtist :  "./music-assets/contents-img/vuonganhtu5.jpg"
        },
        {
            imageArtist :  "./music-assets/contents-img/cauhencauthe.jpg"
        },
        {
            imageArtist :  "./music-assets/contents-img/mr-siro.jpg"
        }
    ],
    renderArtist : function() {
        const listArtists =this.artists.map((artist, index) => {
            return `
                <div class="music-songs__artist">
                        <img src="${artist.imageArtist}" alt="" class="music-songs__artist-img">
                        <i class="fas fa-random music-songs__artist-random"></i>
                </div>`
        })
        listArtist.innerHTML = listArtists.join("")
    },
    heandleEvents: function() {
       
    },
    start: function() {
        this.heandleEvents()
        this.renderArtist()
    },
}
listMusic.start()