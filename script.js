console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Pakki-Wali-Dosti (Deepak's favourite song)", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Srivalli - Pushpa", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Mere Liye - Broken but Beautiful Season 3 320 Kbps", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Tera Naam Dhokha Rakh Du Naraz Hogi Kya_320(PagalWorld.com.se)", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Tera Zikr - Darshan Raval", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Tera ho raha hu-saaj bhatt", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Titanic - My Heart Will Go On ( NoCopyrightMusic ) Part 2(MP3_320K)", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Tumse Pyaar Karke_320(PagalWorld.com.se)", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Udd Jaa Parindey Radhe Shyam Hindi 2021 320 Kbps", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Bhai Mere Bhai - Sourav Joshi(audiosong.in)", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})