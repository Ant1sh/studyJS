"use strict";

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
const isString = (str) => {
  const pattern = /^[, а-яА-ЯёЁa-zA-Z]+$/;
  return pattern.test(str);
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
      appData.income.itemincome = cashincome;
    }

    function checkaddExpenses() {
      appData.addExpenses = prompt(
        "Перечислите возможные расходы за рассчитываемый период через запятую?",
        "интернет, такси, коммуналка"
      );
      if (!isNaN(appData.addExpenses)) {
        alert("Ошибка");
        return checkaddExpenses();
      }
    }
    checkaddExpenses();

    appData.addExpenses = appData.addExpenses
      .toLowerCase()
      .split(",")
      .map((val) => val.trim());
    console.log("appData.addExpenses: ", appData.addExpenses);

    for (let i = 0; i < 2; i++) {
      let str = "";
      do {
        str = prompt("Введите обязательную статью расходов?");
      } while (!isNaN(str));
      appData.expenses[str] = (() => {
        let n = 0;
        do {
          n = prompt("Во сколько это обойдется?");
        } while (!isNumber(n));
        return +n;
      })();
    }
  },

  getExpensesMonth: () => {
    appData.expensesMonth = 0;
    for (let elem in appData.expenses) {
      appData.expensesMonth += appData.expenses[elem];
    }
  },

  getBudget: () => {
    // Функция возвращает Накопления за месяц (Доходы минус расходы)
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },

  getTargetMonth: () => {
    return Math.ceil(appData.mission / appData.budgetMonth);
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
      "Есть ли у вас депозит в банке? Yes/Ok No/Cancel"
    );
    if (appData.deposit) {
      do {
        appData.percentDeposit = prompt("Какой годовой процент?", 10);
      } while (
        isNaN(parseFloat(appData.percentDeposit)) ||
        appData.percentDeposit < 0
      );

      do {
        appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
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
appData.getExpensesMonth();
console.log(appData);


const targetMonth = appData.getTargetMonth();

console.log("Расходы за месяц: ", appData.expensesMonth);
console.log(
  targetMonth >= 0
    ? `Цель будет достигнута за: ${targetMonth} месяц(а/ев)`
    : "Цель не будет достигнута"
);


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
      
      
