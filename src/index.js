import './styles.css';

const color = document.querySelector('.color-panel');
const btnStart = document.querySelector(
  '.color-panel button[data-action="start"]',
);
const btnStop = document.querySelector(
  '.color-panel button[data-action="stop"]',
);

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

const gamma = {
  isActive: false,

  start() {
    if (this.isActive === false) {
      this.timerId = setInterval(
        () =>
          (color.style.backgroundColor = `${
            colors[randomIntegerFromInterval(0, colors.length)]
          }`),
        1000,
      );

      this.isActive = true;
    }
  },
  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
  },
};

// зробити делегування
btnStart.addEventListener('click', gamma.start.bind(gamma));
btnStop.addEventListener('click', gamma.stop.bind(gamma));

// color.event.target.dataset.action;
