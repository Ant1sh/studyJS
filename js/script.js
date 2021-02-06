'use strict';
const getRandomInt = function(max){
  return Math.floor(Math.random() * Math.floor(max));
};

const isNum = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = function() {
  let randomNumber = getRandomInt(100);
  // console.log('rNumber: ', rNumber);
  const game = function() {
    const num = prompt(
      '"Угадай число от 1 до 100" (Для выхода нажмите отмена)'
    );
    if (num === null) {
      alert("Игра окончена");
      return;
    }
    if (isNum(num)) {
      const realNum = +num;
      if (realNum > randomNumber) {
        alert("Загаданное число меньше");
        game();
      } else if (realNum < randomNumber) {
        alert("Загаданное число больше");
        game();
      } else {
        if (confirm("Вы угадали! Сыграем ещё?")) {
          start();
        } else {
          alert("Игра окончена");
          return;
        }
      }
    } else {
      alert("Введите число");
      game();
    }
  };
  game();
};

start();