let toggleStatus = 1;
function menuBar(){
if(toggleStatus == 1){
    document.querySelector(".navigation").style.left = "0px";
    toggleStatus = 0;
} else if(toggleStatus == 0){
    document.querySelector(".navigation").style.left = "-240px";
    toggleStatus = 1;
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


// let subHead = 'effect';
// function subEffect() {
//     if(subHead == 'effect') {
//         document.querySelector('.dash').style.animationName = 'dashMotion';
//         subHead = 'no effect';
//     } else if (subHead == 'no effect'){
//         document.querySelector('.dash').style.animationName = '';

//     }
// }


// // function indexChanger (){
//     // let profile = 'top';
//     // if (profile == 'top') {
//     //     document.querySelector('.about-pic-1').style.zIndex = '1';
//     //     profile = 'bottom';
//     // } else if (profile == 'bottom') {
//     //     document.querySelector('.about-pic-2').style.zIndex = '0';
//     //     // document.querySelector('.about-pic-2').style.zIndex ='0';
//     //     profile = 'top';
//     // }
// // }

// // function indexOff() {
// //     let offIndex = 3;
// //     if (offIndex == 3) {
// //         document.querySelector('.about-pic-1').style.zIndex ='0';
// //         document.querySelector('.about-pic-2').style.zIndex ='1';
// //         offIndex = 1;
// //     } else if(offIndex == 1){
// //         document.querySelector('.about-pic-1').style.zIndex = '0';
// //         document.querySelector('.about-pic-2').style.zIndex ='8';
// //        offIndex = 3;
// //     } else {
// //         document.querySelector('.about-pic-1').style.zIndex ='0';
// //         document.querySelector('.about-pic-2').style.zIndex ='0';
// //     }
// // }


// // let indexStatus = 'pic1';

// // function indexChanger() {
// //     let status = document.querySelectorAll('div');
// //     status.classList.add('profile')

//     // let profile = 'top';
//     // if (profile == 'top') {
//     //     document.querySelector('.about-pic-1').style.zIndex = '1';
    //     profile = 'bottom';
    // } else if (profile == 'bottom') {
    //     document.querySelector('.about-pic-2').style.zIndex = '0';
    //     // document.querySelector('.about-pic-2').style.zIndex ='0';
    //     profile = 'top';
    // }





















