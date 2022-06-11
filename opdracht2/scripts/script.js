
// **************
// theme list
// **************
var themeList = document.querySelector('header>ul');
var themeknop = document.querySelector('header button:last-of-type img');
var closethemeknop = document.querySelector('header>ul button');

var navList = document.querySelector('header nav');
var navknop = document.querySelector('header > button:first-of-type');
var closenavknop = document.querySelector('header nav button');

var nummerknop = document.querySelector('#player-page div button[data-info="nummer"]');
var videoknop = document.querySelector('#player-page div button[data-info="video"]');
var coverCD = document.querySelector('#player-page > img');
var coverCDstuk = document.querySelector('#player-page > p.soortplayer');
var videoplayer = document.querySelector('#player-page iframe');


function openthemes(){
    themeList.classList.add('openthemes');
}

function closethemes(){
    themeList.classList.remove('openthemes');
}

function openNavlist(){
    navList.classList.add('openNav');
}

function closeNavlist(){
    navList.classList.remove('openNav');
}

themeknop.addEventListener('click', openthemes);
closethemeknop.addEventListener('click', closethemes);
navknop.addEventListener('click', openNavlist);
closenavknop.addEventListener('click', closeNavlist);


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

function NarutoOn(){
    NarutoTheme.classList.add('workTheme');
    BleachTheme.classList.remove('workTheme');
    HxHTheme.classList.remove('workTheme');
    OnepieceTheme.classList.remove('workTheme');

    NarutoTheme.classList.remove('notworkTheme');
    BleachTheme.classList.add('notworkTheme');
    HxHTheme.classList.add('notworkTheme');
    OnepieceTheme.classList.add('notworkTheme');
}

function BleachOn(){
    NarutoTheme.classList.remove('workTheme');
    BleachTheme.classList.add('workTheme');
    HxHTheme.classList.remove('workTheme');
    OnepieceTheme.classList.remove('workTheme');

    NarutoTheme.classList.add('notworkTheme');
    BleachTheme.classList.remove('notworkTheme');
    HxHTheme.classList.add('notworkTheme');
    OnepieceTheme.classList.add('notworkTheme');
}

function HxHOn(){
    NarutoTheme.classList.remove('workTheme');
    BleachTheme.classList.remove('workTheme');
    HxHTheme.classList.add('workTheme');
    OnepieceTheme.classList.remove('workTheme');

    NarutoTheme.classList.add('notworkTheme');
    BleachTheme.classList.add('notworkTheme');
    HxHTheme.classList.remove('notworkTheme');
    OnepieceTheme.classList.add('notworkTheme');
}

function onepieceOn(){
    NarutoTheme.classList.remove('workTheme');
    BleachTheme.classList.remove('workTheme');
    HxHTheme.classList.remove('workTheme');
    OnepieceTheme.classList.add('workTheme');

    NarutoTheme.classList.add('notworkTheme');
    BleachTheme.classList.add('notworkTheme');
    HxHTheme.classList.add('notworkTheme');
    OnepieceTheme.classList.remove('notworkTheme');
}


NarutoThemeKnop.addEventListener('click', NarutoOn);
BleachThemeKnop.addEventListener('click', BleachOn);
HxHThemeKnop.addEventListener('click', HxHOn);
OnepieceThemeKnop.addEventListener('click', onepieceOn);














// *****************
// player list style
// *****************
function openaudioPlayer(){
    nummerknop.classList.add('openplayer');
    videoknop.classList.add('closedplayer');
    videoknop.classList.remove('openplayer');

    coverCD.classList.remove('closedcover');
    coverCDstuk.classList.add('soortplayer');

    videoplayer.classList.remove('videoplayer');

    console.log("hi")
}

function openvideoPlayer(){
    nummerknop.classList.remove('openplayer');
    videoknop.classList.remove('closedplayer');

    nummerknop.classList.add('closedplayer');
    videoknop.classList.add('openplayer');

    coverCD.classList.add('closedcover');
    coverCDstuk.classList.remove('soortplayer');

    videoplayer.classList.add('videoplayer');

    console.log("hii")
}

nummerknop.addEventListener('click', openaudioPlayer);
videoknop.addEventListener('click', openvideoPlayer);

















// **************
// nav list
// **************
var homeSection = document.querySelector('#home-page');
var listSection = document.querySelector('#list-page');
var favoriteSection = document.querySelector('#favorite-page');

var homeKnop = document.querySelector('header nav ul li:first-of-type a');
var AllsongsKnop = document.querySelector('header nav ul li:nth-of-type(2) a');
var OpeningsKnop = document.querySelector('header nav ul li:nth-of-type(3) a');
var EndingsKnop = document.querySelector('header nav ul li:nth-of-type(4) a');
var FavoritesKnop = document.querySelector('header nav ul li:nth-of-type(5) a');

function homePage(){
    homeSection.classList.add('openSection');
    playerSection.classList.remove('openSection');
    listSection.classList.remove('openSection');
    favoriteSection.classList.remove('openSection');

    homeSection.classList.remove('closeSection');
    playerSection.classList.add('closeSection');
    listSection.classList.add('closeSection');
    favoriteSection.classList.add('closeSection');

    navList.classList.remove('openNav');
}

function listPage(){
    homeSection.classList.remove('openSection');
    playerSection.classList.remove('openSection');
    listSection.classList.add('openSection');
    favoriteSection.classList.remove('openSection');

    homeSection.classList.add('closeSection');
    playerSection.classList.add('closeSection');
    listSection.classList.remove('closeSection');
    favoriteSection.classList.add('closeSection');

    navList.classList.remove('openNav');
}

function favoritePage(){
    homeSection.classList.remove('openSection');
    playerSection.classList.remove('openSection');
    listSection.classList.remove('openSection');
    favoriteSection.classList.add('openSection');

    homeSection.classList.add('closeSection');
    playerSection.classList.add('closeSection');
    listSection.classList.add('closeSection');
    favoriteSection.classList.remove('closeSection');

    navList.classList.remove('openNav');
}

homeKnop.addEventListener('click', homePage);
AllsongsKnop.addEventListener('click', listPage);
OpeningsKnop.addEventListener('click', listPage);
EndingsKnop.addEventListener('click', listPage);
FavoritesKnop.addEventListener('click', favoritePage);



var playlist = document.querySelector('#player-page section');
var playlistknop = document.querySelector('#player-page section button');

function playlistOpen(){
    playlist.classList.toggle('openplaylist');
}

playlistknop.addEventListener('click', playlistOpen);



var lastplayedKnop= document.querySelector('#home-page section:first-of-type button')
var playerbackKnop= document.querySelector('#player-page button[data-vorm="back"]');
var playerPage = document.querySelector('#player-page');







var startSong = document.querySelector('#home-page section:first-of-type button a img');
var playerSection = document.querySelector('#player-page');


function playerPage(){
    homeSection.classList.remove('openSection');
    playerSection.classList.add('openSection');
    listSection.classList.remove('openSection');
    favoriteSection.classList.remove('openSection');

    homeSection.classList.add('closeSection');
    playerSection.classList.remove('closeSection');
    listSection.classList.add('closeSection');
    favoriteSection.classList.add('closeSection');

    console.log("er");
}

startSong.addEventListener('click', playerPage);