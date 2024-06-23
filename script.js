console.log('Welcome To Halal Spotify');

//Initialize the variables
let naatIndex = 0;
let audioElement = new Audio('1s.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =  document.getElementById('myProgressBar');
let gif =  document.getElementById('gif');
let masterNaatName =  document.getElementById('masterNaatName');
let naatName = Array.from(document.getElementsByClassName('naatName'));

let naats = [
  {naatName: "Faslon Ko Takalf Hum Se", filePath:"1s.mp3", coverPath: "1i.webp"},
   {naatName: "Humne Aankhon Se Dekha", filePath:"2s.mp3", coverPath: "2i.webp"},
   {naatName: "Meri Ulfat Madine Se Youn", filePath:"3s.mp3", coverPath: "3i.webp"},
   {naatName: "Junaid Jamshed Naat", filePath:"4s.mp3", coverPath: "4i.webp"},
   {naatName: "Bibi Amna Ke Phool", filePath:"5s.mp3", coverPath: "5i.webp"},
   {naatName: "Mera Dil Badal De", filePath:"6s.mp3", coverPath: "6i.webp"},
   {naatName: "Mere Nabi Pyare Nabi", filePath:"7s.mp3", coverPath: "7i.jpg"},
   {naatName: "Kabay Ki Ronaq", filePath:"8s.mp3", coverPath: "8i.webp"},
   {naatName: "Tajdar-e-Haram", filePath:"9s.mp3", coverPath: "9i.webp"},
   {naatName: "Hum Ko Bulana Ya", filePath:"10s.mp3", coverPath: "10i.webp"},
];

//hande play/pause click
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.add('fa-circle-play');
    masterPlay.classList.remove('fa-circle-pause');
    gif.style.opacity = 0;
  }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
      //update seekbar
      progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
      myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('naatPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
  } )
}


Array.from(document.getElementsByClassName('naatPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{ 
      makeAllPlays();
      naatIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = `${naatIndex+1}s.mp3`;
      masterNaatName.innerText = naats[naatIndex].naatName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
  })
})


document.getElementById('next').addEventListener('click', ()=>{
  if(naatIndex>=9){
    naatIndex = 0;
  } else{
    naatIndex += 1;
  }
  audioElement.src = `${naatIndex+1}s.mp3`;
  masterNaatName.innerText = naats[naatIndex].naatName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.add('fa-circle-play');
  masterPlay.classList.remove('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click',  ()=>{
  if(naatIndex<=0){
    naatIndex = 0;
  } else{
    naatIndex -= 1;
  }
  audioElement.src = `${naatIndex+1}s.mp3`;
  masterNaatName.innerText = naats[naatIndex].naatName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.add('fa-circle-play');
  masterPlay.classList.remove('fa-circle-pause');

})