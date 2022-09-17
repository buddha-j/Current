const vocals = document.querySelector("#vox");
const guitar = document.querySelector("#gtr");
const bass = document.querySelector("#rhythm");
const aux = document.querySelector("#aux");
const drums = document.querySelector("#drums");

const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");

const voxBtn = document.querySelector(".voxbut");
const gtrBtn = document.querySelector(".gtrbut");
const bassBtn = document.querySelector(".bassbut");
const drumBtn = document.querySelector(".drumsbut");
const auxBtn = document.querySelector(".auxbut");

const red = "#FF94B2";
const purp = "#AB81DE";
const blue = "#9BC5F5";
const gre = "#81DEB9";
const yel = "#D5FAB6";


playBtn.addEventListener("click", () => {
    if (vocals.paused) {
        vocals.play();
        guitar.play();
        bass.play();
        drums.play();
        aux.play();
    }   
});

pauseBtn.addEventListener("click", () => {
    vocals.pause();
    guitar.pause();
    bass.pause();
    drums.pause();
    aux.pause();
    playBtn.style.backgroundColor = "white";
});

voxBtn.addEventListener("click", () => {
    if (vocals.muted) {
        vocals.muted = false;
        voxBtn.style.backgroundColor = red;
    } else {
        vocals.muted = true;
        voxBtn.style.backgroundColor = "white";
    }
});

gtrBtn.addEventListener("click", () => {
    if (guitar.muted) {
        guitar.muted = false;
        gtrBtn.style.backgroundColor = purp;
    } else {
        guitar.muted = true;
        gtrBtn.style.backgroundColor = "white";
    }
})

bassBtn.addEventListener("click", () => {
    if (bass.muted) {
        bass.muted = false;
        bassBtn.style.backgroundColor = blue;
    } else {
        bass.muted = true;
        bassBtn.style.backgroundColor = "white";
    }
})

drumBtn.addEventListener("click", () => {
    if (drums.muted) {
        drums.muted = false;
        drumBtn.style.backgroundColor = gre;
    } else {
        drums.muted = true;
        drumBtn.style.backgroundColor = "white";
    }
})

auxBtn.addEventListener("click", () => {
    if (aux.muted) {
        aux.muted = false;
        auxBtn.style.backgroundColor = yel;
    } else {
        aux.muted = true;
        auxBtn.style.backgroundColor = "white";
    }
})