//Allt för face
const faceStructure = document.getElementById('faceStructure');
const offsetFace = anime.setDashoffset(faceStructure);
const face = {
    targets: faceStructure,
    strokeDashoffset: [offsetFace, 0],
    duration: anime.random(1200, 1400),
    delay: anime.random(150, 160),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    strokeWidth: '15px',
    strokeDasharray: anime.random(10, 12),
    autoplay: false
}
//Allt för thirdEye
const thirdEye = document.getElementById('thirdEye');
const offsetThirdEye = anime.setDashoffset(thirdEye);
const oneEyeToMany = {
    targets: thirdEye,
    strokeDashoffset: [offsetThirdEye, 0],
    duration: anime.random(1200, 1400),
    delay: anime.random(150, 160),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    strokeWidth: '15px',
    strokeDasharray: anime.random(10, 12),
    autoplay: false
}
//Allt för eyes
const eyes = document.getElementById('eyes');
const offsetEyes = anime.setDashoffset(eyes);
const eyesAnimeObj = {
    targets: eyes,
    strokeDashoffset: [offsetEyes, 0],
    duration: anime.random(1200, 1400),
    delay: anime.random(150, 160),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    strokeWidth: '15px',
    strokeDasharray: anime.random(10, 12),
    autoplay: false
}
//Allt för nose
const nose = document.getElementById('nose');
const offsetNose = anime.setDashoffset(nose);
const noseAnimeObj = {
    targets: nose,
    strokeDashoffset: [offsetNose, 0],
    duration: anime.random(1200, 1400),
    delay: anime.random(150, 160),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    strokeWidth: '15px',
    strokeDasharray: anime.random(10, 12),
    autoplay: false
}
//Allt för mouth
const mouth = document.getElementById('mouth');
const offsetMouth = anime.setDashoffset(mouth);
const mouthAnimeObj = {
    targets: mouth,
    strokeDashoffset: [offsetMouth, 0],
    duration: anime.random(1200, 1400),
    delay: anime.random(150, 160),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    strokeWidth: '15px',
    strokeDasharray: anime.random(10, 12),
    autoplay: false
}
//Animera objekten
const animateFace = anime(face);
const animateThirdEye = anime(oneEyeToMany);
const animateEyes = anime(eyesAnimeObj);
const animateNose = anime(noseAnimeObj);
const animateMouth = anime(mouthAnimeObj);
//StartButton
const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', () => {
    animateFace.play();
    animateThirdEye.play();
    animateEyes.play();
    animateNose.play();
    animateMouth.play();
})
//PauseButton
const pauseBtn = document.getElementById('pauseBtn');
pauseBtn.addEventListener('click', () => {
    animateFace.pause();
    animateThirdEye.pause();
    animateEyes.pause();
    animateNose.pause();
    animateMouth.pause();
})
//StoppButton
const stopBtn = document.getElementById('stopBtn');
stopBtn.addEventListener('click', () => {
    animateFace.restart();
    animateFace.pause();
    animateThirdEye.restart();
    animateThirdEye.pause();
    animateEyes.restart();
    animateEyes.pause();
    animateNose.restart();
    animateNose.pause();
    animateMouth.restart();
    animateMouth.pause();
})
