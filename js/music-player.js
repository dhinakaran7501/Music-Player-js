let allmusic = [
  {
    id:1,
  title:"Billa Theme",
  src:"assets/audio/billa_theme.mp3",
  artist:"Yuvan Shankar Raja",
  },
  {
  title:"Irumugan Theme",
  src:"assets/audio/Irumugan_theme.mp3",
  artist:"Harrris Jayaraj",
  },
  {
  title:"Kabali Theme",
  src:"assets/audio/Neruppu Da.mp3",
  artist:"Santhosh Narayanan",
  },
  {
  title:"Theri Theme",
  src:"assets/audio/theri-theme.mp3",
  artist:"GV.Prakash",
  },
  {
  title:"Kannaane Kanne",
  src:"assets/audio/kannaane kanne.mp3",
  artist:"Anirudh",
  },
  {
  title:"Chellamma",
  src:"assets/audio/chellamma.mp3",
  artist:"Anirudh",
  },
  {
  title:"Donu Donu Donu",
  src:"assets/audio/DonuDonuDonu.mp3",
  artist:"Anirudh",
  },
  {
  title:"Mangatha Theme",
  src:"assets/audio/mangatha theme.mp3",
  artist:"Yuvan Shankar Raja",
  },
  {
  title:"Jalabulajangu",
  src:"assets/audio/Jalabulajangu.mp3",
  artist:"Anirudh",
  },
  {
  title:"Hukum",
  src:"assets/audio/Hukum.mp3",
  artist:"Anirudh",
  },
  {
  title:"SoBaby",
  src:"assets/audio/SoBaby.mp3",
  artist:"Anirudh",
  }
  ];

let wrapper = document.querySelector("#music-player");
let musicimage = document.querySelector("image");
let artistName = document.querySelector(".card-text");
let songTitle = document.querySelector(".card-title");
let audio = document.getElementById("main-audio");
let playpausebtn = document.querySelector(".play-pause");
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");
let list = document.querySelector(".list");
let button = document.querySelector(".button-play");
let removeDiv = document.getElementsByClassName("list-div");

let isindex=0;

let index = allmusic.length;


allmusic.map(function(value,index,array){
  let division1 = document.createElement("div");
  division1.classList.add("list-div");
  list.appendChild(division1);
  
  let division2 = document.createElement("div");
  division2.classList.add("list-justify");
  division1.appendChild(division2);

  let span = document.createElement("p");
  span.classList.add("list-paragraph");
  span.textContent = "Song Name:";
  division2.appendChild(span);

  let heading = document.createElement("h5");
  heading.textContent = value.title;
  division2.appendChild(heading);
  
  let division3 = document.createElement("div");
  division3.classList.add("button-div");
  division1.appendChild(division3);

  let playButton = document.createElement("button");
  playButton.classList.add("button","button-play");
  playButton.setAttribute("onClick","playListSong("+index+")");
  playButton.textContent = "Play Song";
  division3.appendChild(playButton);

  let removeButton = document.createElement("button");
  removeButton.classList.add("button");
  removeButton.setAttribute("onClick","removeListSong("+index+")");
  removeButton.textContent = "Remove Song";
  division3.appendChild(removeButton);

 
});

function loadsong(){
let currentsong=allmusic[isindex];
audio.src=currentsong.src;
songTitle.textContent= currentsong.title;
artistName.textContent= currentsong.artist;
audio.load();
};

function nextsong(){
  isindex=(isindex+1);
  loadsong();
};

function prevSong(){
  isindex=(isindex-1);
  loadsong();
};

function playPauseSong(){
  audio.paused ? audio.play() : audio.pause();
};

function queueList(){
  list.classList.toggle("list-block");  
}

function playListSong(indexnumber){  
audio.src=allmusic[indexnumber].src;
songTitle.textContent= allmusic[indexnumber].title;
artistName.textContent= allmusic[indexnumber].artist;
}

function removeListSong(indexnumber){
  console.log(indexnumber);
  removeDiv[indexnumber].style.display="none";
  // let b= allmusic.filter(function(value){
  // value.id !== title;
  // });
  // console.log(b);

}