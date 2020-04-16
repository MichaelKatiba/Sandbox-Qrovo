let toggleStatus = 1;
function menuBar(){
if(toggleStatus == 1){
    document.querySelector(".navigation").style.left = "0px";
    document.querySelector(".ko-fi-btn").style.right = "-2000px";

    // var close = document.querySelector('#menu-close').style.visibility = "hidden";

    toggleStatus = 0;
} else if(toggleStatus == 0){
    document.querySelector(".navigation").style.left = "-2000px";
    document.querySelector(".ko-fi-btn").style.right = "10px";

    // document.querySelector(body).style.left = "0px";

    toggleStatus = 1;


} 
}

function listClick() {
    document.querySelector(".list-item");
    document.querySelector(".navigation").style.left = "-2000px";
    
}




let pageExit = "x";
function exit() {
    if (pageExit == "x") {
    document.querySelector(".navigation").style.left = "-320px";
    pageExit = "y";
    } else{
    document.querySelector(".navigation").style.left = "-320px";
    }
}



let popZero = document.querySelector('.projects-modal-0');
let popOne = document.querySelector('.projects-modal-1');
let popTwo = document.querySelector('.projects-modal-2');
let popThree = document.querySelector('.projects-modal-3');
let popFour = document.querySelector('.projects-modal-4');
let popFive = document.querySelector('.projects-modal-5');
let contentZero= document.querySelector('.projects-content-0');
let contentOne = document.querySelector('.projects-content-1');
let contentTwo = document.querySelector('.projects-content-2');
let contentThree = document.querySelector('.projects-content-3');
let contentFour = document.querySelector('.projects-content-4');
let contentFive = document.querySelector('.projects-content-5');
let contentSix = document.querySelector('.projects-content-6');
let closeButton = document.querySelector('.close-icon');

function projectOne() {
    popZero.style.display = 'flex';
    contentZero.style.display = 'flex';
    closeButton.style.display = 'flex';
    popZero.style.animationName = 'popMotion';
    popZero.style.animationDuration = '0.5s';        
}

function projectTwo() {
    popOne.style.display = 'flex';
    contentOne.style.display = 'flex';
    closeButton.style.display = 'flex';
    popOne.style.animationName = 'popMotion';
    popOne.style.animationDuration = '0.5s';      
}

function projectThree() {
    popTwo.style.display = 'flex';
    contentTwo.style.display = 'flex';
    closeButton.style.display = 'flex';
    popTwo.style.animationName = 'popMotion';
    popTwo.style.animationDuration = '0.5s';      
}

function projectFour() {
    popThree.style.display = 'flex';
    contentThree.style.display = 'flex';
    closeButton.style.display = 'flex';
    popThree.style.animationName = 'popMotion';
    popThree.style.animationDuration = '0.5s';      
}

function projectFive() {
    popFour.style.display = 'flex';
    contentFour.style.display = 'flex';
    closeButton.style.display = 'flex';
    popFour.style.animationName = 'popMotion';
    popFour.style.animationDuration = '0.5s';      
}

function projectSix() {
    popFive.style.display = 'flex';
    contentFive.style.display = 'flex';
    closeButton.style.display = 'flex';
    popFive.style.animationName = 'popMotion';
    popFive.style.animationDuration = '0.5s';      
}







function closeBtn() {
    popZero.style.display = 'none';
    popOne.style.display = 'none';
    popTwo.style.display = 'none';
    popThree.style.display = 'none';
    popFour.style.display = 'none';
    popFive.style.display = 'none';
    popSix.style.display = 'none';
    contentZero.style.display = 'none';
    contentOne.style.display = 'none';
    contentTwo.style.display = 'none';
    contentThree.style.display = 'none';
    contentFour.style.display = 'none';
    contentFive.style.display = 'none';
    contentSix.style.display = 'none';
    closeButton.style.display = 'none';

}




function pageMotion() {
    document.querySelector('#about').scrollIntoView = '2s';
}


function scrollAppear() {
    var introText = document.querySelector('.about-info');
    var introText = document.querySelector('.projects-box');
    var introText = document.querySelector('.about-info');
    var introText = document.querySelector('.about-info');
    var  introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if(introPosition < screenPosition) {
        introText.classList.add('intro-appear');

    }
}

window.addEventListener('scroll',scrollAppear);



$('.scrollspy').scrollSpy();


//SPINNER

// function spin(){
// var spinner = document.querySelector('.spinner-bg');
//     spinner = style.display = 'none';

// }
// window.addEventListener('load', spin);


var spinner = document.querySelector('.spinner-bg');
window.addEventListener('load', function (){
    // spinner = style.backgroundColor = 'green';
    spinner.parentElement.removeChild(spinner);

});


console.log(spinner-bg);