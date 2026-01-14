
//Elements
let container = document.getElementById("container1");
let audio =document.getElementById("myAudio");

let playbtn = document.getElementById("playBtn");
let next = document.getElementById("nextBtn");
let previous = document.getElementById("previousBtn");

let songPlaying = document.getElementById("songPlaying");
let artistPlaying = document.getElementById("artistPlaying");
let progressBar= document.getElementById("progressBar");

// Data
const tracks = [
  { name: "Juna", artist: "Clairo", src: "Clairo - Juna.mp3" },
  { name: "Ew", artist: "Joji", src: "Joji - Ew.mp3" },
  { name: "Sienna", artist: "The Marías", src: "The Marías - Sienna.mp3" },
  { name: "505", artist: "Arctic Monkeys", src: "Arctic Monkeys - 505.mp3" }
];

//State
let currentIndex = 0;
let isPlaying = false;

//songElement creating function
function creDiv (sName ,aName ,index){
        const div = document.createElement('div');
        div.classList.add("songElement");
        div.dataset.index = index;

        div.innerHTML =`<img id="coverImg" src="./Src/AccountPFP.jpg" alt="Cover">
        <span id="songName">${sName}</span>
        <span id="artistName">${aName}</span>`;
             
        return container.appendChild(div);
    };

//Creating playlist
tracks.forEach((track,index) => {
    creDiv(track.name,track.artist,index);
    
    
});

//Core play function
function playSong(index){
    let track = tracks[index];

    audio.src = `./Src/${track.src}`;
    songPlaying.textContent = track.name;
    artistPlaying.textContent = track.artist;

    audio.play();
    isPlaying = true;
    playbtn.textContent = "⏸"

};

//Play and Pause
playbtn.addEventListener('click',() => {
    if(!audio.src){
        playSong(currentIndex);
        return;
    }

    if(isPlaying){
        audio.pause()
        playbtn.textContent = "▶"

    }else{
        audio.play()
        playbtn.textContent = "⏸"

    }

    isPlaying = !isPlaying
});

//next and previous 
next.addEventListener('click',() => {
    currentIndex++
    if(currentIndex >= tracks.length) currentIndex = 0 ;
    playSong(currentIndex);
})

previous.addEventListener('click',() => {
    currentIndex--
    if(currentIndex < 0) currentIndex = tracks.length - 1;
    playSong(currentIndex);
})
 
//Click song
container.addEventListener("click", (e) => {
  const songDiv = e.target.closest(".songElement")
  if (!songDiv) return

  currentIndex = Number(songDiv.dataset.index)
  playSong(currentIndex)
})



//Progress bar 
audio.addEventListener('loadedmetadata',() => {
    progressBar.max = audio.duration;
})

audio.addEventListener('timeupdate',() => {
    progressBar.value = audio.currentTime;
})

progressBar.addEventListener('input',() => {
    audio.currentTime = progressBar.value;
})

//Auto next
audio.addEventListener('ended',() => {
    next.click()
})





