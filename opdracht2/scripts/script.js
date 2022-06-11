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

var playlist = document.querySelector('#player-page section');
var playlistknop = document.querySelector('#player-page section button');

function playlistOpen(){
    playlist.classList.toggle('openplaylist');
}

playlistknop.addEventListener('click', playlistOpen);



var lastplayedKnop= document.querySelector('#home-page section:first-of-type button')
var playerbackKnop= document.querySelector('#player-page button[data-vorm="back"]');
var homePage = document.querySelector('#home-page');
var playerPage = document.querySelector('#player-page');







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