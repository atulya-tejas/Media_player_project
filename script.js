let playbtn = document.getElementById("playBtn")
let songName = document.getElementById("songName")
let artistName = document.getElementById("artistName")
let coverImg = document.getElementById("coverImg")
let audio =document.getElementById("myAudio")


let songs = {
    sName : "Belever",
    aName : "Imagine Dragons",
    sURl  : "./Src/BEliver.mp3",
    cover : "./Src/track1.jpg"

}

playbtn.addEventListener("click",function(){
    if ( playbtn.textContent === "="){
        playbtn.textContent = "∆"
        audio.pause()
    }else{
    playbtn.textContent = "=" ;
    audio.play()
    }
    songName.textContent = songs.sName
    artistName.textContent = songs.aName
    coverImg.src = songs.cover
})