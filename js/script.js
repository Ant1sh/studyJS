"use strict";
const buttonStart = document.getElementById('start');
const incomeAdd = document.getElementsByTagName('button')[0];
const expensesAdd = document.getElementsByTagName('button')[1];
const depositCheck = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
const budgetMonthValue = document.querySelector('.budget_month-value');
const budgetDayValue = document.querySelector('.budget_day-value');
const expensesMonthValue = document.querySelector('.expenses_month-value');
const additionalIncomeValue = document.querySelector('.additional_income-value');
const additionalExpensesValue = document.querySelector('.additional_expenses-value');
const incomePeriodValie = document.querySelector('.income_period-value');
const targetMonthValue = document.querySelector('.target_month-value');
const periodSelect = document.querySelector('.period-select'); // range
// inputs
const salaryAmount = document.querySelector('.salary-amount');
const incomeAmount = document.querySelector('.income-amount');
const expensesAmount = document.querySelector('.expenses-amount');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const targetAmount = document.querySelector('.target-amount');

const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const isString = (str, comma = false) => {
  const pattern = comma
    ? /^[, а-яА-ЯёЁa-zA-Z0-9]+$/
    : /^[ а-яА-ЯёЁa-zA-Z0-9]+$/;
  return pattern.test(str);
};

let money,
  start = () => {
    do {
      money = prompt("Ваш месячный доход?", 60000);
    } while (!isNumber(money));
  };

start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  precentDeposit: 0,
  moneyDeposit: 0,
  mission: 50000,
  period: 3,
  budget: +money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: () => {
    if (confirm("Есть ли у Вас дополнительный источник заработка?")) {
      let itemIncome = "";
      do {
        itemIncome = prompt("Какой у вас дополнительный заработок?", "Таксую");
      } while (!isString(itemIncome));

      let cashIncome = 0;
      do {
        cashIncome = prompt("Сколько в месяц Вы на этом зарабатываете?", 10000);
      } while (!isNumber(cashIncome));

      appData.income[itemIncome] = +cashIncome;
    }

    let addExpenses = '';
    do {
      addExpenses = prompt(
        "Перечислите возможные расходы через запятую?",
        "интернет, такси, коммуналка"
      );
    } while (!isString(addExpenses, true));

    appData.addExpenses = addExpenses.toLowerCase().split(",").map((val) => val.trim());
    console.log("appData.addExpenses: ", appData.addExpenses);
    appData.deposit = confirm("Есть ли у вас депозит в банке?");

    for (let i = 0; i < 2; i++) {
      let str = "";
      do {
        str = prompt("Введите обязательную статью расходов?");
      } while (!isString(str));
      appData.expenses[str] = (() => {
        let n = 0;
        do {
          n = prompt("Во сколько это обойдется?");
        } while (!isNumber(n));
        return +n;
      });
    }
  },
  getExpensesMonth: () => {
    appData.expensesMonth = 0;
    for (let elem in appData.expenses) {
      appData.expensesMonth += appData.expenses[elem];
    }
  },
  getBudget: () => {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: () => {
    return Math.ceil(appData.mission / appData.budgetMonth);
  },
  getStatusIncome: function () {
    if (appData.budgetDay > 800) {
      return "Высокий уровень дохода";
    } else if (appData.budgetDay > 300) {
      return "Средний уровень дохода";
    } else if (appData.budgetDay > 0) {
      return "Низкий уорвень дохода";
    } else {
      return "Что то пошло не так!";
    }
  },
  getIfoDeposit: () => {
    if (appData.deposit) {
      let n = 0;
      do {
        n = prompt("Какой годовой процент?", "10");
      } while (!isNumber(n) && n > 0);
      appData.precentDeposit = +n;
      do {
        appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
      } while (!isNumber(n) && n > 0);
      appData.moneyDeposit = +n;
    }
  },
  calcSavedMoney: () => {
    return appData.budgetMonth * appData.period;
  },
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

const targetMonth = appData.getTargetMonth();

console.log("Расходы за месяц: ", appData.expensesMonth);
console.log(
  targetMonth >= 0
    ? `Цель будет достигнута за: ${targetMonth} месяц(а/ев)`
    : "Цель не будет достигнута"
);
console.log("Уровень дохода: ", appData.getStatusIncome());

console.log("Наша программа включает в себя данные: ");
for (let elem in appData) {
  console.log(elem, appData[elem]);
}

console.log(
  "2) " +
    appData.addExpenses
      .map((val, i) => val[0].toUpperCase() + val.slice(1))
      .join(", ")
);

console.log("buttonStart: ", buttonStart);
console.log("buttonPlus: ", incomeAdd);
console.log("expensesAdd: ", expensesAdd);
console.log("depositCheck: ", depositCheck);
console.log("additadditionalIncomeItem: ", additionalIncomeItem);
console.log("budgetMonthValue: ", budgetMonthValue);
console.log("budgetDayValue: ", budgetDayValue);
console.log("expensesMonthValue: ", expensesMonthValue);
console.log("additionalIncomeValue: ", additionalIncomeValue);
console.log("additionalExpensesValue : ", additionalExpensesValue);
console.log("incomePeriodValie: ", incomePeriodValie);
console.log("targetMonthValue: ", targetMonthValue);
console.log("periodSelect: ", periodSelect);
console.log("salaryAmount: ", salaryAmount);
console.log("incomeAmount: ", incomeAmount);
console.log("expensesAmount: ", expensesAmount);
console.log("additionalExpensesItem: ", additionalExpensesItem);
console.log("depositAmount: ", depositAmount);
console.log("depositPercent: ", depositPercent);
console.log("targetAmount: ", targetAmount);
