import './styles.css';

const body = document.querySelector('body');
const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const stopSwitch = function() {

    start.addEventListener('click', colorSwitch);

};

const colorSwitch = function() {

    start.removeEventListener('click', colorSwitch);
    stop.addEventListener('click', ()=> {
        stopSwitch();
        clearInterval(colorTime);
    });

    const colorTime = setInterval(()=> {
        body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, 5)]}`;
    }, 1000);
    
};

start.addEventListener("click", colorSwitch);
