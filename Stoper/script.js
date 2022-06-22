const playBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const archBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');


const popup = document.querySelector('.modal-shadow');
const infoBtn = document.querySelector('.question');
const closeModalBtn = document.querySelector('.close');
const paintBtn = document.querySelector('.paint');


const colorPanel = document.querySelector('.colors');
const colorFirst = document.querySelector('.color--red');
const colorSecond = document.querySelector('.color--pink');
const colorThird = document.querySelector('.color--yellow');
let root = document.documentElement;

let countTime;
let minutes = 0;
let secunds = 0;

let timeArr = [];

const handleStart = () => {
    clearInterval(countTime);
    
    countTime = setInterval(() => {

        if (secunds < 9){
            secunds++;
            stopwatch.textContent = `${minutes}:0${secunds}`

        }else if(secunds >=9 && secunds <59) {
            secunds++
            stopwatch.textContent = `${minutes}:${secunds}`
        }else{
            minutes++;
            secunds = 0;
            stopwatch.textContent = `${minutes}:00`
        }
       
    },100);
}



const handlePauze = () => {
    clearInterval(countTime);
}

const handleStop = () => {

    time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`

    if(stopwatch.textContent !== '0:00'){
        time.style.visibility = 'visible';
        timeArr.push(stopwatch.textContent)
    }
    clearStuff();
}

const handleReset = () => {
    time.style.visibility = 'hidden';
    timeArr= [];
    clearStuff();
}

const clearStuff = () => {
    clearInterval(countTime);
    stopwatch.textContent = `0:00`
    timeList.textContent = '';
    secunds = 0;
    minutes = 0;
}

const handleArch = () => {
    timeList.textContent = '0';
    let num = 1;

    timeArr.forEach(times => {
        const newTime = document.createElement('li');
        newTime.innerHTML =`Pomiar nr ${num}: <span>${time}</span>`

        timeList.appendChild(newTime);
        num++;
    })
}

const showModal = () => {
        popup.style.display = 'block';
    popup.classList.toggle('modal-animation')
}

const hideModal = () => {
    popup.style.display = 'none';
    popup.classList.toggle('modal-animation')
}


playBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click',handlePauze);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
archBtn.addEventListener('click', handleArch);
infoBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', hideModal);
// window.addEventListener('click', e => e.target === hideModal() );

// zmiana kolorów
paintBtn.addEventListener('click', () => {
    colorPanel.classList.toggle('show-colors')
})

colorFirst.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(250,20,6)');
    root.style.setProperty('--hover-color', 'rgb(209,33,24)');
})

colorSecond.addEventListener('click', () => {
    root.style.setProperty('--first-color','rgb(226, 165, 245)');
    root.style.setProperty('--hover-color','rgb(193, 54, 245)');
})

colorThird.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(255, 251, 152)');
    root.style.setProperty('--hover-color','rgb(255, 251, 69)')
})