
// const face = document.querySelector('#faceStructure');

// const animation = anime(
//     {
//         targets: face,
//         duration: anime.random(1200, 1400),
//         delay: anime.random(150, 160),
//         loop: true,
//         direction: 'alternate',
//         easing: 'easeInOutSine',
//     }
// )

// document.querySelector('#startBtn').onclick = animation;


function animateFace(event) {
    event.preventDefault();
    const allPaths = document.querySelectorAll('path');
    const array = [];
    for (let i = 0; i < allPaths.length; i++) {
        const pathEl = allPaths[i];
        const offset = anime.setDashoffset(pathEl);
        pathEl.setAttribute('stroke-dashoffset', offset);

        const obj = {
            targets: pathEl,
            strokeDashoffset: [offset, 0],
            duration: anime.random(1200, 1400),
            delay: anime.random(150, 160),
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine',

        }
        array.push(obj);

        // jadu(obj, event);
        // console.log(pathEl);
        console.log(pathEl);
    }
    // anime(array[0])
    jadu(array, event);
}
function jadu(array, event) {

    // console.log(array, event);
    // console.log(event.srcElement.id);
    // switch (event.srcElement.id) {
    //     case 'startBtn':
    //         console.log(bla);
    //         anime(bla).play();
    //         break;
    //     case 'pauseBtn':
    //         anime(bla).pause();
    //         console.log('pause');
    //         break;
    // }
    if (event.srcElement.id == 'startBtn'){
        anime(array[0]).play();
    }
    else if (event.srcElement.id == 'pauseBtn'){
        anime(array[0]).pause();
    }
}

const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', animateFace);

const pauseBtn = document.getElementById('pauseBtn');
pauseBtn.addEventListener('click', animateFace);