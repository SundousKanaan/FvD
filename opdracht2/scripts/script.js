
// **************
// theme list
// **************
var themeList = document.querySelector('header>ul');
var themeknop = document.querySelector('header button:last-of-type');
var closethemeknop = document.querySelector('header>ul button');

var navList = document.querySelector('header nav');
var navknop = document.querySelector('header > button:first-of-type');
var closenavknop = document.querySelector('header nav button');

var nummerknop = document.querySelector('#player-page div button[data-info="nummer"]');
var videoknop = document.querySelector('#player-page div button[data-info="video"]');
var coverCD = document.querySelector('#player-page > img');
var coverCDstuk = document.querySelector('#player-page > p.soortplayer');
var videoplayer = document.querySelector('#player-page iframe');





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
var homeSection = document.querySelector('#home-page');
var listSection = document.querySelector('#list-page');
var listSectionTitle = document.querySelector('#list-page h2');
var favoriteSection = document.querySelector('#favorite-page');

var homeKnop = document.querySelector('header nav ul li:first-of-type a');
var AllsongsKnop = document.querySelector('header nav ul li:nth-of-type(2) a');
var OpeningsKnop = document.querySelector('header nav ul li:nth-of-type(3) a');
var EndingsKnop = document.querySelector('header nav ul li:nth-of-type(4) a');
var FavoritesKnop = document.querySelector('header nav ul li:nth-of-type(5) a');




// **************
// player buttons
// **************
var lastplayedKnop = document.querySelector('#home-page section:first-of-type button')
var playerbackKnop = document.querySelector('#player-page button[data-vorm="back"]');
var playerSection = document.querySelector('#player-page');




// ********************
// home buttons
// ********************
var favolistknop = document.querySelector('#home-page section:nth-of-type(2) button');
var OPlistknop = document.querySelector('#home-page section:nth-of-type(3) button');
var EDlistknop = document.querySelector('#home-page section:nth-of-type(4) button');
var partlist = document.querySelector('#home-page section:nth-of-type(5) ul');







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
function NarutoOn() {
    NarutoTheme.classList.add('workTheme');
    BleachTheme.classList.remove('workTheme');
    HxHTheme.classList.remove('workTheme');
    OnepieceTheme.classList.remove('workTheme');

    NarutoTheme.classList.remove('notworkTheme');
    BleachTheme.classList.add('notworkTheme');
    HxHTheme.classList.add('notworkTheme');
    OnepieceTheme.classList.add('notworkTheme');

    bady.classList.remove('BleachTheme');
    bady.classList.remove('HxHTheme');
    bady.classList.remove('OnepieceTheme');
}

function BleachOn() {
    NarutoTheme.classList.remove('workTheme');
    BleachTheme.classList.add('workTheme');
    HxHTheme.classList.remove('workTheme');
    OnepieceTheme.classList.remove('workTheme');

    NarutoTheme.classList.add('notworkTheme');
    BleachTheme.classList.remove('notworkTheme');
    HxHTheme.classList.add('notworkTheme');
    OnepieceTheme.classList.add('notworkTheme');

    bady.classList.add('BleachTheme');
    bady.classList.remove('HxHTheme');
    bady.classList.remove('OnepieceTheme');
}

function HxHOn() {
    NarutoTheme.classList.remove('workTheme');
    BleachTheme.classList.remove('workTheme');
    HxHTheme.classList.add('workTheme');
    OnepieceTheme.classList.remove('workTheme');

    NarutoTheme.classList.add('notworkTheme');
    BleachTheme.classList.add('notworkTheme');
    HxHTheme.classList.remove('notworkTheme');
    OnepieceTheme.classList.add('notworkTheme');

    bady.classList.remove('BleachTheme');
    bady.classList.add('HxHTheme');
    bady.classList.remove('OnepieceTheme');
}

function onepieceOn() {
    NarutoTheme.classList.remove('workTheme');
    BleachTheme.classList.remove('workTheme');
    HxHTheme.classList.remove('workTheme');
    OnepieceTheme.classList.add('workTheme');

    NarutoTheme.classList.add('notworkTheme');
    BleachTheme.classList.add('notworkTheme');
    HxHTheme.classList.add('notworkTheme');
    OnepieceTheme.classList.remove('notworkTheme');

    bady.classList.remove('BleachTheme');
    bady.classList.remove('HxHTheme');
    bady.classList.add('OnepieceTheme');
}


NarutoThemeKnop.addEventListener('click', NarutoOn);
BleachThemeKnop.addEventListener('click', BleachOn);
HxHThemeKnop.addEventListener('click', HxHOn);
OnepieceThemeKnop.addEventListener('click', onepieceOn);









// player list style
// *****************
function openaudioPlayer() {
    nummerknop.classList.add('openplayer');
    videoknop.classList.add('closedplayer');
    videoknop.classList.remove('openplayer');

    coverCD.classList.remove('closedcover');
    coverCDstuk.classList.add('soortplayer');

    videoplayer.classList.remove('videoplayer');

    console.log("hi")
}

function openvideoPlayer() {
    nummerknop.classList.remove('openplayer');
    videoknop.classList.remove('closedplayer');

    nummerknop.classList.add('closedplayer');
    videoknop.classList.add('openplayer');

    coverCD.classList.add('closedcover');
    coverCDstuk.classList.remove('soortplayer');

    videoplayer.classList.add('videoplayer');
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

// open the lists section en close de nav list
function listPage() {
    homeSection.classList.remove('openSection');
    playerSection.classList.add('openSection');
    listSection.classList.add('openSection');
    favoriteSection.classList.remove('openSection');

    homeSection.classList.add('closeSection');
    playerSection.classList.remove('closeSection');
    listSection.classList.remove('closeSection');
    favoriteSection.classList.add('closeSection');

    navList.classList.remove('openNav');
}

// open the favorite section en close de nav list
function favoritePage() {
    homeSection.classList.remove('openSection');
    playerSection.classList.remove('openSection');
    listSection.classList.add('openSection');
    favoriteSection.classList.add('openSection');

    homeSection.classList.add('closeSection');
    playerSection.classList.remove('closeSection');
    listSection.classList.add('closeSection');
    favoriteSection.classList.remove('closeSection');

    navList.classList.remove('openNav');
}

homeKnop.addEventListener('click', homePage);
FavoritesKnop.addEventListener('click', favoritePage);




// open the player section en close de nav list
function playerPage() {
    homeSection.classList.remove('openSection');
    playerSection.classList.add('openSection');
    listSection.classList.remove('openSection');
    favoriteSection.classList.remove('openSection');

    homeSection.classList.add('closeSection');
    playerSection.classList.remove('closeSection');
    listSection.classList.add('closeSection');
    favoriteSection.classList.add('closeSection');
}

lastplayedKnop.addEventListener('click', playerPage);

























// ************
// API code
// ************
var URL = "https://api.animethemes.moe/anime?include=animethemes.animethemeentries.videos";
var allsongsList = document.querySelector('#list-page ul');
var seeMoreknop = document.querySelector('#home-page section:nth-of-type(5)>button');
var arrayOfSongs = [];

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
                type: `${artistList?.type}`
            });
            console.log("arrayOfSongs:" , arrayOfSongs);
        };
    };
}
getsongs();

// function: data halen van arrayOfSongs en li's maken daarna zetten in allsongsList
// *********************************************************************************
async function filllist(filtered="all"){
    allsongsList.innerHTML='';

    for (const song of arrayOfSongs) {
        // var x="empty-heart";
        // for(const fav of storedFav){
        //     if(song.name===favoritePage.name)
        //     x="rode-heart";
        // }

            if(filtered!="all" && filtered!=song.type)
                continue;
            var songsHtml =
            `<li>
                <h3>${song.songtitle}</h3>
                <p data-info="anime-name">${song.animename}</p>
                <p data-info="singer-name">${song.artist}</p>
                <button data-type="CD-cover">
                    <img src="${song.poster}" alt="${song.animename}" data-link="${song.songLink}">
                </button>
                <button data-type="heart">
                    <img src="./images/empty-heart.svg" alt="empty heart icon" >
                </button>
            </li>`;
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
AllsongsKnop.addEventListener("click", () => {
    listPage();
    allsongsList.innerHTML='';
 setTimeout(filllist, 3000);

    homeKnop.classList.remove('Open');
    AllsongsKnop.classList.add('Open');
    OpeningsKnop.classList.remove('Open');
    EndingsKnop.classList.remove('Open');
    FavoritesKnop.classList.remove('Open');

    listSectionTitle.innerHTML = "All songs";
});

OpeningsKnop.addEventListener("click", () => {
    listPage();
   allsongsList.innerHTML='';
   setTimeout(()=>{ filllist("OP");}, 3000);

    homeKnop.classList.remove('Open');
    AllsongsKnop.classList.remove('Open');
    OpeningsKnop.classList.add('Open');
    EndingsKnop.classList.remove('Open');
    FavoritesKnop.classList.remove('Open');

    listSectionTitle.innerHTML = "Openings";
});

EndingsKnop.addEventListener("click", () => {
    listPage()
 allsongsList.innerHTML='';
 setTimeout(()=>{ filllist("ED");}, 3000);


    homeKnop.classList.remove('Open');
    AllsongsKnop.classList.remove('Open');
    OpeningsKnop.classList.remove('Open');
    EndingsKnop.classList.add('Open');
    FavoritesKnop.classList.remove('Open');

    listSectionTitle.innerHTML = "Endings";
});

seeMoreknop.addEventListener("click", () => {
    listPage();
});


OPlistknop.addEventListener("click", () => {
    listPage();
   allsongsList.innerHTML='';
   setTimeout(()=>{ filllist("OP");}, 3000);

    homeKnop.classList.remove('Open');
    AllsongsKnop.classList.remove('Open');
    OpeningsKnop.classList.add('Open');
    EndingsKnop.classList.remove('Open');
    FavoritesKnop.classList.remove('Open');

    listSectionTitle.innerHTML = "Openings";
});

EDlistknop.addEventListener("click", () => {
    listPage()
 allsongsList.innerHTML='';
 setTimeout(()=>{ filllist("ED");}, 3000);


    homeKnop.classList.remove('Open');
    AllsongsKnop.classList.remove('Open');
    OpeningsKnop.classList.remove('Open');
    EndingsKnop.classList.add('Open');
    FavoritesKnop.classList.remove('Open');

    listSectionTitle.innerHTML = "Endings";
});


// localstorge function voor de favorite list
// ******************************************

/*
var favSongs = [];

favSongs.push({
    name:"",

});

localstorage.favSongs = JSON.stringify(favSongs);

var storedFav = JSON.parse(localStorage.favSongs);

*/

// function favolist(){

// }










// stuk van de all songs zetten in de home page 
// ********************************************
async function getpartsongs() {
    var numOfSongs = 0;
    allsongsList.innerHTML = "";
    var allAnimes = await getData(URL).then((data) => data.anime);

    //anime name from anime variable
    var i = 1;
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

        if (i === 11) {
            break;
        };
    };
}

getpartsongs();






