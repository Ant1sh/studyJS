'use strict';
let money = prompt('Ваш месячный доход?', '300000');
// let income = "фриланс";
let mission = 900000;
let period = 7;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
let deposit = confirm('Есть ли у вас депозит в банке?');

console.log(typeof money);
console.log(typeof addExpenses);
console.log(typeof deposit );
// console.log(typeof money, income, deposit);
console.log('длинна строки ' + addExpenses.length + ' символов');
console.log('Период равен ' + period + ' месяцев и' + ' Цель заработать ' + mission + ' долларов');
console.log(addExpenses.toLowerCase().split(' '));


let expenses1 = prompt('Введите обязательную статью расходов', 'пиво');
let amount1 = prompt('Введите обязательную статью расходов', '30000');
let expenses2 = prompt('Введите обязательную статью расходов', 'стеклоомыватель');
let amount2 = prompt('Введите обязательную статью расходов', '7000');
let budgetMonth = Number(money) - Number(amount1) - Number(amount2);
let budgetDay = budgetMonth / 30;

console.log('Бюджет на месяц: ', budgetMonth);
console.log('Цель будет достигнута за:', Math.ceil(mission / budgetMonth), ' месяца');
console.log('Бюджет на день: ', Math.floor(budgetDay));

if (budgetDay > 1200) {
console.log('У вас высокий уровень дохода');
}else if (budgetDay > 600 && budgetDay < 1200){
console.log('У вас средний уровень дохода');
}else if (budgetDay < 600 && budgetDay > 0){
console.log('К сожалению у вас уровень дохода ниже среднего');
}else if (budgetDay === 0){
console.log('К сожалению у вас уровень дохода ниже среднего');
}else if (budgetDay === 600){
console.log('К сожалению у вас уровень дохода ниже среднего');
}else if (budgetDay === 1200){
console.log('У вас высокий уровень дохода');
}else if (budgetDay < 0){
console.log('Что то пошло не так');
}else {
  console.log('ERROR');
}



