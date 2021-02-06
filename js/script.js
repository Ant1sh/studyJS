"use strict";

const isNumber = (n) => {
  console.log("n: ", n);
  console.log(parseFloat(n));
  console.log(isFinite(n));
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
  income = "фриланс",
  addExpenses = prompt(
    "Перечислите возможные расходы за рассчитываемый период через запятую",
    "интернет, коммуналка"
  ),
  deposit = confirm("Есть ли у вас депозит в банке?"),
  mission = 100000,
  period = 12;

// 1) Переписать функцию start циклом do while
do {
  money = prompt("Ваш месячный доход?");
} while (!isNumber(money));

let expenses = [];
// 2) Добавить проверку что введённые данные являются числом, которые мы получаем
// на вопрос 'Во сколько это обойдется?’ в функции  getExpensesMonth
const getExpensesMonth = () => {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt("Введите обязательную статью расходов?");
    sum += (() => {
      let n = 0;
      do {
        n = prompt("Во сколько это обойдется?");
      } while (!isNumber(n));
      return +n;
    })();
  }
  return sum;
};

let expensesAmount = getExpensesMonth();

function getAccumulatedMonth(moneyMonth, expensesMonth) {
  return moneyMonth - expensesMonth;
}

const accumulatedMonth = getAccumulatedMonth(money, expensesAmount);

function getTargetMonth(mission, accumulatedMonth) {
  return Math.ceil(mission / accumulatedMonth);
}

const targetMonth = getTargetMonth(mission, accumulatedMonth);

const budgetDay = accumulatedMonth / 30;

const showTypeOf = (data) => {
  console.log(data, typeof data);
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLocaleLowerCase().split(", "));
console.log("Обязательные расходы за месяц: ", expensesAmount);

// 3) Если getTargetMonth возвращает нам отрицательное значение, то вместо “Цель будет достигнута”
// необходимо выводить “Цель не будет достигнута”
targetMonth >= 0
  ? console.log(`Цель будет достигнута за: ${targetMonth} месяцев`)
  : console.log(`Цель не будет достигнута`);

console.log("Бюджет на день: ", Math.floor(budgetDay));

const getStatusIncome = function () {
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

