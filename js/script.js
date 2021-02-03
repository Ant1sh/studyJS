"use strict";
let money = prompt("Ваш месячный доход?", 300000);
let income = "фриланс";
let mission = 900000;
let period = 7;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','Квартплата, проездной, кредит');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов', 'продукты');
let amount1 = +prompt('Введите обязательную статью расходов', 30000);
let expenses2 = prompt('Введите обязательную статью расходов', 'бензин');
let amount2 = +prompt('Введите обязательную статью расходов', 7000);

function getExpensesMonth(amount1, amount2) {
 return amount1 + amount2;
}

function getAccumulatedMonth(moneyMonth, expensesMonth) {
  return moneyMonth - expensesMonth;
}

const accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1, amount2));

function getTargetMonth(mission, accumulatedMonth) {
  return Math.ceil(mission / accumulatedMonth);
}

const budgetDay = accumulatedMonth / 30;

//7) Почистить консоль логи и добавить недостающие, должны остаться:
console.log(typeof money);
console.log(typeof addExpenses);
console.log(typeof deposit);
console.log(typeof money, income, deposit);
console.log("Cумма всех обязательных расходов за месяц: " + getExpensesMonth(7000, 3000));
console.log(addExpenses.toLocaleLowerCase().split(", "));
console.log("Цель будет достигнута за: " + getTargetMonth(900000, 263000) + " месяца");
console.log("Бюджет на день: ", Math.floor(budgetDay));
const getStatusIncome = function() {
   if (budgetDay >= 1200) {
   console.log("У вас высокий уровень дохода");
 } else if (budgetDay >= 600 && budgetDay < 1200) {
   console.log("У вас средний уровень дохода");
 } else if (budgetDay < 600 && budgetDay >= 0) {
   console.log("К сожалению у вас уровень дохода ниже среднего");
 } else if (budgetDay < 0) {
   console.log("Что то пошло не так");
 } else {
   console.log("ERROR");
 }
};
getStatusIncome();

 

