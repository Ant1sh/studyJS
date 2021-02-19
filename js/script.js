"use strict";

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

const start = function () {
  do {
    money = prompt("Ваш месячный доход?", 60000);
  } while (!isNumber(money));
};
start();

const appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: {},
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 500000,
  period: 3,
  budget: +money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  
  asking: function () {
    if (confirm("Есть ли у Вас дополнительный источник дохода?")) {
      let itemincome = 0;
      while (!isNaN(itemincome)) {
        itemincome = prompt("Какой у вас дополнительный заработок?", "Таксую");
      }

      let cashincome;
      while (isNaN(parseFloat(cashincome)) || cashincome < 0) {
        cashincome = prompt("Сколько в месяц Вы на этом зарабатываете?", 10000);
      }
      appData.income[itemincome] = cashincome;
    }

    function checkaddExpenses() {
      appData.addExpenses = prompt(
        "Перечислите возможные расходы за рассчитываемый период через запятую?",
        "интернет, такси, коммуналка"
      );
      if (!isNaN(appData.addExpenses)) {
        alert("Цифры вводить нельзя");
        return checkaddExpenses();
      }
    }
    checkaddExpenses();

    appData.addExpenses =
      appData.addExpenses.split(",") +
      appData.addExpenses[0].toUpperCase() +
      appData.addExpenses.slice(1);

    for (let i = 0; i < 2; i++) {
      let value;
      const askExpenses = [];

      do {
        askExpenses[i] = prompt("Введите обязательную статью расходов??");
        console.log(value);
      } while (!isNaN(parseFloat(askExpenses)));

      do {
        value = +prompt("Во сколько это обойдется?");
        console.log(value);
      } while (isNaN(parseFloat(value)) || value < 0);

      appData.expenses[askExpenses[i]] = value;
    }

    for (let key in appData.expenses) {
      console.log((appData.expensesMonth += appData.expenses[key]));
    }

    const getTarget = appData.getTargetMonth(
      appData.mission,
      appData.budgetMonth
    );

    if (getTarget > 0) {
      console.log("Цель будет достигнута");
    } else {
      console.log("Цель будет достигнута");
    }

    console.log("Расходы за месяц " + appData.expensesMonth);
    console.log("Цель будет достигнута за " + Math.round(getTarget) + " месяцев"
    );
    console.log("Наша программа включает в себя данные:");

    for (let key in appData) {
      console.log("Ключ: " + key + " значение: " + appData[key]);
    }
  },

  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    console.log(appData.budgetMonth, appData.budget, appData.expensesMonth);
    appData.budgetDay = appData.budgetMonth / 30;
  },

  getTargetMonth: function (mission, accumulatedMonth) {
    const getTargetMonthSum = mission / accumulatedMonth;
    return getTargetMonthSum;
  },

  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      console.log("У вас высокий уровень дохода");
    } else if (appData.budgetDay >= 600) {
      console.log("У вас средний уровень дохода");
    } else if (appData.budgetDay >= 0) {
      console.log("К сожалению у вас уровень дохода ниже среднего");
    } else {
      console.log("Что то пошло не так");
    }
  },
  getInfoDeposit: function () {
    appData.deposit = confirm(
      "Есть ли у вас депозит в банке? No=Cancel"
    );
    if (appData.deposit) {
      do {
        appData.percentDeposit = +prompt("Какой годовой процент?", "10");
      } while (
        isNaN(parseFloat(appData.percentDeposit)) ||
        appData.percentDeposit < 0
      );

      do {
        appData.moneyDeposit = +prompt("Какая сумма заложена?", "10000");
      } while (
        isNaN(parseFloat(appData.moneyDeposit)) ||
        appData.moneyDeposit < 0
      );
    }
  },
  calSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  },
};
appData.asking();
appData.getInfoDeposit();
appData.getBudget();
appData.getStatusIncome();
console.log(appData);

console.log(
  appData.percentDeposit,
  appData.moneyDeposit,
  appData.calSavedMoney()
);
