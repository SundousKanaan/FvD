
// **************
// theme list
// **************
var themeList = document.querySelector('header>ul');
var themeknop = document.querySelector('header button:last-of-type');
var closethemeknop = document.querySelector('header>ul button');

var navList = document.querySelector('header nav');
var navknop = document.querySelector('header > button:first-of-type');
var closenavknop = document.querySelector('header nav button');

let numOfFav=0;




// ********************
// theme list elementen
// ********************
var NarutoTheme = document.querySelector('header>ul li[data-info="Naruto-theme"]');
var BleachTheme = document.querySelector('header>ul li[data-info="Bleach-theme"]');
var HxHTheme = document.querySelector('header>ul li[data-info="HxH-theme"]');
var OnepieceTheme = document.querySelector('header>ul li[data-info="Onepiece-theme"]');

var NarutoThemeKnop = document.querySelector('header>ul li[data-info="Naruto-theme"] button');
var BleachThemeKnop = document.querySelector('header>ul li[data-info="Bleach-theme"] button');
var HxHThemeKnop = document.querySelector('header>ul li[data-info="HxH-theme"] button');
var OnepieceThemeKnop = document.querySelector('header>ul li[data-info="Onepiece-theme"] button');
var bady = document.querySelector('body');




// **************
// nav list
// **************
var homeSection = document.querySelector('main > section:first-of-type');
var listSection = document.querySelector('main > section:nth-of-type(3)');
var listSectionTitle = document.querySelector('main > section:nth-of-type(3) h2');
var favoriteSection = document.querySelector('main > section:nth-of-type(4)');
var favoriteSectionTitle = document.querySelector('main > section:nth-of-type(4) h2');

var homeKnop = document.querySelector('header nav ul li:first-of-type a');
var AllsongsKnop = document.querySelector('header nav ul li:nth-of-type(2) a');
var OpeningsKnop = document.querySelector('header nav ul li:nth-of-type(3) a');
var EndingsKnop = document.querySelector('header nav ul li:nth-of-type(4) a');
var FavoritesKnop = document.querySelector('header nav ul li:nth-of-type(5) a');

var getFavoSongs = document.querySelector('main > section:nth-of-type(4) button');



// ********************
// home buttons
// ********************
var lastSongName = document.querySelector('main > section:first-of-type section:first-of-type h2');
var lastAnimeName = document.querySelector('main > section:first-of-type section:first-of-type p:nth-of-type(2)');
var lastSingerName = document.querySelector('main > section:first-of-type section:first-of-type p:nth-of-type(3)');
var lastSongImg = document.querySelector('main > section:first-of-type section:first-of-type img');

var favoBlokknop = document.querySelector('main > section:first-of-type section:nth-of-type(2) > button');
var OPlistknop = document.querySelector('main > section:first-of-type section:nth-of-type(3) button');
var EDlistknop = document.querySelector('main > section:first-of-type section:nth-of-type(4) button');
var partlist = document.querySelector('main > section:first-of-type section:nth-of-type(5) ul');
var favLength = document.querySelector("main > section:first-of-type section:nth-of-type(2) p");
var favBlokImg = document.querySelector('main > section:first-of-type section:nth-of-type(2) img');





// **************
// player buttons
// **************
var lastplayedKnop = document.querySelector('main > section:first-of-type section:first-of-type button');

var playerSongName = document.querySelector('main > section:nth-of-type(2) h2');
var playerAnimeName = document.querySelector('main > section:nth-of-type(2) > p:first-of-type');
var playerSingerName = document.querySelector('main > section:nth-of-type(2) p:nth-of-type(2)');


var playerSection = document.querySelector('main > section:nth-of-type(2)');

var nummerknop = document.querySelector('main > section:nth-of-type(2) div button:first-of-type');
var videoknop = document.querySelector('main > section:nth-of-type(2) div button:nth-of-type(2)');
var coverCD = document.querySelector('main > section:nth-of-type(2) > img');
var coverCDstuk = document.querySelector('main > section:nth-of-type(2) > span');
var videoplayer = document.querySelector('main > section:nth-of-type(2) video');

var musicSlider = document.querySelector('main > section:nth-of-type(2) input');
var theAudio = document.querySelector("main > section:nth-of-type(2) audio");
var playButton = document.querySelector('main > section:nth-of-type(2) > button:nth-of-type(5)');
var songLength = document.querySelector('main > section:nth-of-type(2) p:nth-of-type(3)');
var songRuntime = document.querySelector('main > section:nth-of-type(2) > p:nth-of-type(4)');

var backSongKnop = document.querySelector('main > section:nth-of-type(2) > button:nth-of-type(3)');
var nextSongKnop = document.querySelector('main > section:nth-of-type(2) > button:nth-of-type(4)');

var musicProgress = 0;
var myInterval;
var audioDuration = 295;
var isPlaying = false;

var SingerName = document.querySelector('main > section:nth-of-type(2) p:nth-of-type(2)');
var repetingKnop = document.querySelector('main > section:nth-of-type(2) > button:first-of-type');
var shuffleKnop = document.querySelector('main > section:nth-of-type(2) > button:nth-of-type(2)');



// list items 
var songheartknop = document.querySelector('main > section:nth-of-type(3) ul li button:nth-of-type(2)');










// theme list functions
// ********************
function openthemes() {
    themeList.classList.add('openthemes');
}

function closethemes() {
    themeList.classList.remove('openthemes');
}

function openNavlist() {
    navList.classList.add('openNav');
}

function closeNavlist() {
    navList.classList.remove('openNav');
}

themeknop.addEventListener('click', openthemes);
closethemeknop.addEventListener('click', closethemes);
navknop.addEventListener('click', openNavlist);
closenavknop.addEventListener('click', closeNavlist);











// themes functions
// ****************
function Narutotheme() {
    NarutoTheme.classList.add('workTheme');
    BleachTheme.classList.remove('workTheme');
    HxHTheme.classList.remove('workTheme');
    OnepieceTheme.classList.remove('workTheme');

    NarutoTheme.classList.remove('notworkTheme');
    BleachTheme.classList.add('notworkTheme');
    HxHTheme.classList.add('notworkTheme');
    OnepieceTheme.classList.add('notworkTheme');

    bady.classList.add('NarutoTheme');
    bady.classList.remove('BleachTheme');
    bady.classList.remove('HxHTheme');
    bady.classList.remove('OnepieceTheme');
}

function Bleachtheme() {
    NarutoTheme.classList.remove('workTheme');
    BleachTheme.classList.add('workTheme');
    HxHTheme.classList.remove('workTheme');
    OnepieceTheme.classList.remove('workTheme');

    NarutoTheme.classList.add('notworkTheme');
    BleachTheme.classList.remove('notworkTheme');
    HxHTheme.classList.add('notworkTheme');
    OnepieceTheme.classList.add('notworkTheme');

    bady.classList.remove('NarutoTheme');
    bady.classList.add('BleachTheme');
    bady.classList.remove('HxHTheme');
    bady.classList.remove('OnepieceTheme');
}

function HxHtheme() {
    NarutoTheme.classList.remove('workTheme');
    BleachTheme.classList.remove('workTheme');
    HxHTheme.classList.add('workTheme');
    OnepieceTheme.classList.remove('workTheme');

    NarutoTheme.classList.add('notworkTheme');
    BleachTheme.classList.add('notworkTheme');
    HxHTheme.classList.remove('notworkTheme');
    OnepieceTheme.classList.add('notworkTheme');

    bady.classList.remove('NarutoTheme');
    bady.classList.remove('BleachTheme');
    bady.classList.add('HxHTheme');
    bady.classList.remove('OnepieceTheme');
}

function onepiecetheme() {
    NarutoTheme.classList.remove('workTheme');
    BleachTheme.classList.remove('workTheme');
    HxHTheme.classList.remove('workTheme');
    OnepieceTheme.classList.add('workTheme');

    NarutoTheme.classList.add('notworkTheme');
    BleachTheme.classList.add('notworkTheme');
    HxHTheme.classList.add('notworkTheme');
    OnepieceTheme.classList.remove('notworkTheme');

    bady.classList.remove('NarutoTheme');
    bady.classList.remove('BleachTheme');
    bady.classList.remove('HxHTheme');
    bady.classList.add('OnepieceTheme');
}


NarutoThemeKnop.addEventListener('click', Narutotheme);
BleachThemeKnop.addEventListener('click', Bleachtheme);
HxHThemeKnop.addEventListener('click', HxHtheme);
OnepieceThemeKnop.addEventListener('click', onepiecetheme);









// player list style
// *****************
function openaudioPlayer() {
    nummerknop.classList.add('openplayer');
    videoknop.classList.add('closedplayer');
    videoknop.classList.remove('openplayer');

    coverCD.classList.remove('closedcover');
    coverCDstuk.classList.add('soortplayer');

    videoplayer.classList.remove('videoplayer');
    theAudio.classList.remove('noAudio');
    musicSlider.classList.remove('noAudio');
    playButton.classList.remove('noAudio');
    songLength.classList.remove('noAudio');
    songRuntime.classList.remove('noAudio');
    backSongKnop.classList.remove('noAudio');
    nextSongKnop.classList.remove('noAudio');
    repetingKnop.classList.remove('noAudio');
    shuffleKnop.classList.remove('noAudio');
    
    SingerName.classList.remove('videomode');

    videoplayer.pause();
    videoplayer.currentTime = 0;

    console.log("hi");
}

function openvideoPlayer() {
    nummerknop.classList.remove('openplayer');
    videoknop.classList.remove('closedplayer');

    nummerknop.classList.add('closedplayer');
    videoknop.classList.add('openplayer');

    coverCD.classList.add('closedcover');
    coverCDstuk.classList.remove('soortplayer');

    videoplayer.classList.add('videoplayer');
    theAudio.classList.add('noAudio');
    musicSlider.classList.add('noAudio');
    playButton.classList.add('noAudio');
    songLength.classList.add('noAudio');
    songRuntime.classList.add('noAudio');
    backSongKnop.classList.add('noAudio');
    nextSongKnop.classList.add('noAudio');
    repetingKnop.classList.add('noAudio');
    shuffleKnop.classList.add('noAudio');
    
    SingerName.classList.add('videomode');

    theAudio.load();
    musicSlider.value=0;  
    musicProgress=0;  
    isPlaying=false;
}

nummerknop.addEventListener('click', openaudioPlayer);
videoknop.addEventListener('click', openvideoPlayer);












// nav list
// **************


// open the home section en close de nav list
function homePage() {
    homeSection.classList.add('openSection');
    playerSection.classList.remove('openSection');
    listSection.classList.remove('openSection');
    favoriteSection.classList.remove('openSection');

    homeSection.classList.remove('closeSection');
    playerSection.classList.add('closeSection');
    listSection.classList.add('closeSection');
    favoriteSection.classList.add('closeSection');

    homeKnop.classList.add('Open');
    AllsongsKnop.classList.remove('Open');
    OpeningsKnop.classList.remove('Open');
    EndingsKnop.classList.remove('Open');
    FavoritesKnop.classList.remove('Open');

    navList.classList.remove('openNav');
}

// styling toevoegen op de home knop in de nav
function homeOpen(){
    homeKnop.classList.add('Open');
    AllsongsKnop.classList.remove('Open');
    OpeningsKnop.classList.remove('Open');
    EndingsKnop.classList.remove('Open');
    FavoritesKnop.classList.remove('Open');
}

homeOpen();
homeKnop.addEventListener('click', homePage);























// ************
// API code
// ************
var URL = "https://api.animethemes.moe/anime?include=animethemes.animethemeentries.videos";
var allsongsList = document.querySelector('main > section:nth-of-type(3) ul');
var allFavList = document.querySelector('main > section:nth-of-type(4) ul');

var seeMoreknop = document.querySelector('main > section:first-of-type section:nth-of-type(5)>button');
var arrayOfSongs = [];


// add songs to favorite
function addToFav(event){
    var parentHtml=event.parentNode;
    let isFav=!arrayOfSongs[Number(parentHtml.dataset.id)].isFav;
    isFav?numOfFav++:numOfFav--;
    favLength.innerHTML=`${numOfFav} songs`;
    arrayOfSongs[Number(parentHtml.dataset.id)].isFav=isFav;
    if(isFav)
    favBlokImg.src=arrayOfSongs[Number(parentHtml.dataset.id)].poster;
    event.querySelector("img").src=isFav?"./images/rode-heart.svg":"./images/empty-heart.svg";
}


// function: data halen en opslaan een arrayOfSongs
async function getsongs() {
    // var numOfSongs = 0;
    var allAnimes = await getData(URL).then((data) => data.anime);

    //anime name & Song Link from anime variable
    for (const anime of allAnimes) {
        // Anime Poster from AnimePoster variable
        var animePoster = await getData(`https://api.animethemes.moe/anime/${anime.slug}?include=images`).then(data => data.anime.images[0].link);
        for (let i = 0; i < anime.animethemes.length; i++) {

            // Song name, song type(OP,ED) and artist name from artistList
            var artistList = await getData(`https://api.animethemes.moe/animetheme/${anime.animethemes[i].id}?include=song.artists`).then(sample => sample.animetheme);

            arrayOfSongs.push({
                songtitle: `${artistList.song.title}`,
                animename: `${anime.name}`,
                artist: `${artistList.song?.artists[0]?.name}`,
                poster: `${animePoster}`,
                songLink:`${anime.animethemes[i].animethemeentries[0].videos[0].link}`,
                type: `${artistList?.type}`,
                id:`${arrayOfSongs.length}`,
                isFav:false
            });
            console.log("arrayOfSongs:" , arrayOfSongs);
        };
    };
}
getsongs();

// send song link to player
function sendSongLink(event){
    theAudio.src= event.dataset.link;
    videoplayer.src= event.dataset.link;
    lastSongImg.src= coverCD.src=event.src;

    var parentHtml=event.parentNode.parentNode;
    playerSection.dataset.id=parentHtml.dataset.id;
  
    var songName= parentHtml.querySelector("h3");
    var animeName = parentHtml.querySelector("p:first-of-type");
    var singerName = parentHtml.querySelector("p:last-of-type");
    lastSongName.innerHTML = playerSongName.innerHTML=songName.innerHTML;
    lastAnimeName.innerHTML= playerAnimeName.innerHTML=animeName.innerHTML;
    lastSingerName.innerHTML=  playerSingerName.innerHTML=singerName.innerHTML;


}


// function: data halen van arrayOfSongs en li's maken daarna zetten in allsongsList
// *********************************************************************************
async function filllist(filtered="all"){
    allsongsList.innerHTML='';
    allFavList.innerHTML='';
 
 if(filtered==="fav" && numOfFav!=0){
    getFavoSongs.classList.add("empty");
}
else if (filtered==="fav" && numOfFav===0){
    getFavoSongs.classList.remove("empty");
 
}
    for (const song of arrayOfSongs) {
        console.log(filtered,song.isFav);
            if(filtered==="fav"&&song.isFav===false)
            continue;
            else if(filtered!="all" && filtered!=song.type &&filtered!="fav" )
                continue;
                
            var songsHtml =
            `<li data-id="${song.id}">
                <h3>${song.songtitle}</h3>
                <p>${song.animename}</p>
                <p>${song.artist}</p>
                <button>
                    <img  onclick="sendSongLink(this);" src="${song.poster}" alt="${song.animename}" data-link="${song.songLink}">
                </button>
                <button  onclick="addToFav(this);">
                    <img src="${song.isFav?"./images/rode-heart.svg":"./images/empty-heart.svg"}" alt="${song.isFav?"rode heart icon":"empty heart icon"}">
                </button>
            </li>`;
            // console.log(songsHtml);
        if(filtered==="fav")
        allFavList.insertAdjacentHTML("beforeend", songsHtml);
    else
     allsongsList.insertAdjacentHTML("beforeend", songsHtml);
    };
}

async function getData(URL) {
    return fetch(URL)
        .then((response) => response.json())
        .then((jsonData) => jsonData);
}



// close de nav list, li's maken in de ul & de pagina name in de nav stijlen
// *************************************************************************
// start all songs list
[seeMoreknop,AllsongsKnop,lastplayedKnop,getFavoSongs].forEach(el => el.addEventListener("click", () => {

    allsongsList.innerHTML='';
 setTimeout(filllist, 3000);

    homeKnop.classList.remove('Open');
    AllsongsKnop.classList.add('Open');
    OpeningsKnop.classList.remove('Open');
    EndingsKnop.classList.remove('Open');
    FavoritesKnop.classList.remove('Open');

    listSectionTitle.innerHTML = "All songs";

    homeSection.classList.remove('openSection');
    playerSection.classList.add('openSection');
    listSection.classList.add('openSection');
    favoriteSection.classList.remove('openSection');

    homeSection.classList.add('closeSection');
    playerSection.classList.remove('closeSection');
    listSection.classList.remove('closeSection');
    favoriteSection.classList.add('closeSection');

    navList.classList.remove('openNav');
    coverCDstuk.classList.add('soortplayer');
}
));
// end all songs list




// start OP list
[OPlistknop,OpeningsKnop].forEach(el=>el.addEventListener("click", () => {
   allsongsList.innerHTML='';
   setTimeout(()=>{ filllist("OP");}, 3000);

    homeKnop.classList.remove('Open');
    AllsongsKnop.classList.remove('Open');
    OpeningsKnop.classList.add('Open');
    EndingsKnop.classList.remove('Open');
    FavoritesKnop.classList.remove('Open');

    listSectionTitle.innerHTML = "Openings";

    homeSection.classList.remove('openSection');
    playerSection.classList.add('openSection');
    listSection.classList.add('openSection');
    favoriteSection.classList.remove('openSection');

    homeSection.classList.add('closeSection');
    playerSection.classList.remove('closeSection');
    listSection.classList.remove('closeSection');
    favoriteSection.classList.add('closeSection');

    navList.classList.remove('openNav');
    coverCDstuk.classList.add('soortplayer');
}));
// end OP list


// start ED list
[EDlistknop,EndingsKnop].forEach(el=>el.addEventListener("click", () => {
    allsongsList.innerHTML='';
    setTimeout(()=>{ filllist("ED");}, 3000);

    homeKnop.classList.remove('Open');
    AllsongsKnop.classList.remove('Open');
    OpeningsKnop.classList.remove('Open');
    EndingsKnop.classList.add('Open');
    FavoritesKnop.classList.remove('Open');

    listSectionTitle.innerHTML = "Endings";

    homeSection.classList.remove('openSection');
    playerSection.classList.add('openSection');
    listSection.classList.add('openSection');
    favoriteSection.classList.remove('openSection');

    homeSection.classList.add('closeSection');
    playerSection.classList.remove('closeSection');
    listSection.classList.remove('closeSection');
    favoriteSection.classList.add('closeSection');

    navList.classList.remove('openNav');
    coverCDstuk.classList.add('soortplayer');
}));
// end ED list




// start fav
[FavoritesKnop,favoBlokknop].forEach(el=>el.addEventListener("click", () => {
   allsongsList.innerHTML='';
   filllist("fav");

    homeKnop.classList.remove('Open');
    AllsongsKnop.classList.remove('Open');
    OpeningsKnop.classList.remove('Open');
    EndingsKnop.classList.remove('Open');
    FavoritesKnop.classList.add('Open');

    homeSection.classList.remove('openSection');
    playerSection.classList.add('openSection');
    listSection.classList.remove('openSection');
    favoriteSection.classList.add('openSection');

    homeSection.classList.add('closeSection');
    playerSection.classList.remove('closeSection');
    listSection.classList.add('closeSection');
    favoriteSection.classList.remove('closeSection');

    homeKnop.classList.remove('Open');
    AllsongsKnop.classList.remove('Open');
    OpeningsKnop.classList.remove('Open');
    EndingsKnop.classList.remove('Open');
    FavoritesKnop.classList.add('Open');

    navList.classList.remove('openNav');
    coverCDstuk.classList.add('soortplayer');
}));
// end fav












// groepje van de all songs zetten in de home page 
// ********************************************
async function getpartsongs() {
    var numOfSongs = 0;
    allsongsList.innerHTML = "";
    var allAnimes = await getData(URL).then((data) => data.anime);

    //anime name from anime variable
    var i = 0;
    for (const anime of allAnimes) {
        // Anime Poster from AnimePoster variable
        var animePoster = await getData(`https://api.animethemes.moe/anime/${anime.slug}?include=images`).then(data => data.anime.images[0].link);

        i += 1;
        // Song name, song type(OP,ED) and artist name from artistList
        var artistList = await getData(`https://api.animethemes.moe/animetheme/${anime.animethemes[0].id}?include=song.artists`).then(sample => sample.animetheme);

        var songHtml = `<li>
                            <button>
                                <img src="${animePoster}" alt="${anime.name} poster">
                            </button>
                            <h3>${artistList.song.title}</h3>
                        </li>` ;

        if (numOfSongs === allsongsList.children.length) {
            partlist.insertAdjacentHTML("beforeend", songHtml);
            numOfSongs = allsongsList.children.length;
        }
        else {
            return;
        };

        if (i === 10) {
            break;
        };
    };
}

getpartsongs();










// player functions
// ****************
var musicProgress = 0;
var myInterval;
var musicSlider = document.querySelector("main > section:nth-of-type(2) input");

var theAudio = document.querySelector("main > section:nth-of-type(2) audio");
var audioDuration = 0;
var isPlaying = false;

var theButton = document.querySelector("main > section:nth-of-type(2) > button:nth-of-type(5)");



function startSlider() {
    audioDuration= theAudio.duration;
	myInterval = setInterval(function () {
		musicProgress++

		if (musicProgress > 100) {
			musicProgress = 0;
			clearInterval(myInterval);
		}
		musicSlider.value = musicProgress;
	}, audioDuration/10 * 100);


}



function startMetSchuiven() {
	clearInterval(myInterval);
	console.log("ik ben gestopt");
	theAudio.pause();
    isPlaying=false;

    coverCDstuk.classList.remove('musicOn');
    playButton.classList.remove('musicOn');
    coverCD.style.animationPlayState = 'paused';
}

function sliderIsVerschoven() {
    audioDuration= theAudio.duration;
	musicProgress = musicSlider.value;
	theAudio.currentTime = musicProgress/100 * audioDuration;
}


function toggleMusic() {
	console.log(isPlaying);
	
	if (isPlaying == false) {
		isPlaying = true;
		startSlider();
		theAudio.play();
		theAudio.volume = 0.2; // dan schreeuwt ze niet zo

        coverCDstuk.classList.add('musicOn');
        coverCD.style.animationPlayState = 'running';
        playButton.classList.add('musicOn');
	} else {
		isPlaying = false;
		clearInterval(myInterval);
		theAudio.pause();

        coverCDstuk.classList.remove('musicOn');
        coverCD.style.animationPlayState = 'paused';
        playButton.classList.remove('musicOn');
        coverCD.style.animationFillMode = 'none';
        
	}
}

// Audio events bron: https://www.w3schools.com/tags/ref_av_dom.asp
// using padStart to append a "0" if the current time is only one digit but convert the Number var to a string var first
theAudio.addEventListener("loadedmetadata",()=>{
    var time = theAudio.duration;
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time - minutes * 60);
    songLength.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    clearInterval(myInterval);
    musicSlider.value=0;  
    musicProgress=0;  
    isPlaying=false;
    
    coverCDstuk.classList.remove('musicOn');
    playButton.classList.remove('musicOn');
    coverCD.style.animation = 'none';
    coverCD.offsetHeight; /* trigger reflow */
    coverCD.style.animation = null; 
  
    
});

theAudio.addEventListener("timeupdate",()=>{
    var time = theAudio.currentTime;
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time - minutes * 60);

    songRuntime.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
});

theButton.addEventListener("click", toggleMusic);
musicSlider.addEventListener("mousedown", startMetSchuiven);
musicSlider.addEventListener("change", sliderIsVerschoven);


function closeList(){
    listSection.classList.toggle('closelist');
}

function closeFavoList(){
    favoriteSection.classList.toggle('closelist');
}

listSectionTitle.addEventListener("click", closeList);
favoriteSectionTitle.addEventListener("click", closeFavoList);

