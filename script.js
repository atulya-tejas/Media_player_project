let play = document.getElementById("playBtn")
let songName = document.getElementById("songName")
let artistName = document.getElementById("artistName")
let coverImg = document.getElementById("coverImg")


let songs = {
    sName : "Belever",
    aName : "Imagine Dragons",
    sURl  : "./Src/BEliver.mp3",
    cover : "./Src/track1.jpg"

}

play.addEventListener("click",function(){
    if ( play.textContent === "="){
        play.textContent = "∆"
    }else{
    play.textContent = "=" ;
    
    songName.textContent = songs.sName
    artistName.textContent = songs.aName
    coverImg.src = songs.cover

    }

})