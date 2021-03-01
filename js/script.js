"use strict";

const start = document.getElementById("start"),
  btnPlus = document.getElementsByTagName("button"),
  incomePlus = btnPlus[0],
  expensesPlus = btnPlus[1],
  additionalIncomeItem = document.querySelectorAll(".additional_income-item"),
  depositCheck = document.querySelector("#deposit-check"),
  budgetDayValue = document.getElementsByClassName("budget_day-value")[0],
  budgetMonthValue = document.getElementsByClassName("budget_month-value")[0],
  expensesMonthValue = document.getElementsByClassName("expenses_month-value")[0],
  additionalIncomeValue = document.getElementsByClassName("additional_income-value")[0],
  additionalExpensesValue = document.getElementsByClassName("additional_expenses-value")[0],
  incomePeriodValue = document.getElementsByClassName("income_period-value")[0],
  targetMonthValue = document.getElementsByClassName("target_month-value")[0],
  salaryAmount = document.querySelector(".salary-amount"),
  incomeItems = document.querySelectorAll(".income-items"),
  expensesItems = document.querySelectorAll(".expenses-items"),
  additionalExpenses = document.querySelector(".additional_expenses"),
  periodSelect = document.querySelector(".period-select"), 
  additionalExpensesItem = document.querySelector(".additional_expenses-item"),
  targetAmount = document.querySelector(".target-amount");

// const isNumber = (n) => {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// };

// const isString = (str, comma = false) => {
//   const pattern = comma ? /^[, а-яА-ЯёЁa-zA-Z]+$/ : /^[ а-яА-ЯёЁa-zA-Z]+$/;
//   return pattern.test(str);
// };

let appData = {
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  precentDeposit: 0,
  moneyDeposit: 0,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  //start: () => {
  start: function () {
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.showResult();

    if (start.textContent === "Рассчитать") {
      this.blockInputs();
      start.textContent = "Сбросить";
    } else {
      start.textContent = "Рассчитать";
      this.reset();
    }
  },
  blockInputs: (disabled = true) => {
    document.querySelectorAll(".data input[type=text]").forEach((item) => {
      item.disabled = disabled;
    });
  },
  reset: function () {
    for (let i = incomeItems.length - 1; i > 0; i--) {
      incomeItems[0].parentNode.removeChild(incomeItems[i]);
    }
    for (let i = expensesItems.length - 1; i > 0; i--) {
      expensesItems[0].parentNode.removeChild(expensesItems[i]);
    }
    incomePlus.style.display = "";
    expensesPlus.style.display = "";
    this.blockInputs(false);
    document.querySelectorAll("input[type=text]").forEach((item) => {
      item.value = "";
    });
    this.getBudget();
    periodSelect.value = document.querySelector(
      ".period-amount"
    ).textContent = 1;
    this.blockStart();
  },
  showResult: () => {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = Math.floor(appData.budgetDay * 100) / 100;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(", ");
    additionalIncomeValue.value = appData.addIncome.join(", ");
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());
    incomePeriodValue.value = appData.calcPeriod();
  },
  addExpensesBlock: () => {
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.querySelector(".expenses-title").value = "";
    cloneExpensesItem.querySelector(".expenses-amount").value = "";
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    if (document.querySelectorAll(".expenses-items").length === 3) {
      expensesPlus.style.display = "none";
    }
  },
  addIncomeBlock: () => {
    const cloneIncomeItem = incomeItems[0].cloneNode(true);
    cloneIncomeItem.querySelector(".income-title").value = "";
    cloneIncomeItem.querySelector(".income-amount").value = "";
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    if (document.querySelectorAll(".income-items").length === 3) {
      incomePlus.style.display = "none";
    }
  },
  getExpenses: function () {
    expensesItems.forEach((item) => {
      const itemExpenses = item.querySelector(".expenses-title").value;
      const cashExpenses = item.querySelector(".expenses-amount").value;
      if (itemExpenses !== "" && cashExpenses !== "") {
        this.expenses[itemExpenses] = +cashExpenses;
      }
    });
  },
  getIncome: function () {
    this.incomeMonth = 0;
    incomeItems.forEach((item) => {
      const itemIncome = item.querySelector(".income-title").value;
      const cashIncome = item.querySelector(".income-amount").value;
      if (itemIncome !== "" && cashIncome !== "") {
        this.income[itemIncome] = +cashIncome;
        this.incomeMonth += +cashIncome;
      }
    });
  },
  getAddExpenses: function () {
    const addExpenses = additionalExpensesItem.value.split(",");
    addExpenses.forEach((item) => {
      item = item.trim();
      if (item !== "") {
        this.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function () {
    additionalIncomeItem.forEach((item) => {
      const itemValue = item.value.trim();
      if (itemValue !== "") {
        this.addIncome.push(itemValue);
      }
    });
  },
  getExpensesMonth: function () {
    // Функция возвращает сумму всех обязательных расходов за месяц
    this.expensesMonth = 0;
    for (let elem in this.expenses) {
      this.expensesMonth += this.expenses[elem];
    }
  },
  getBudget: function () {
    // Функция возвращает Накопления за месяц (Доходы минус расходы)
    this.budget = +salaryAmount.value;
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;
  },
  getTargetMonth: function () {
    // Подсчитывает за какой период будет достигнута цель
    return targetAmount.value / this.budgetMonth;
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
  getIfoDeposit: function () {
    // if (appData.deposit) {
    //     let n = 0;
    //     do {
    //         n = prompt('Какой годовой процент?', '10');
    //     } while (!isNumber(n) && n > 0);
    //     appData.precentDeposit = +n;
    //     do {
    //         appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
    //     } while (!isNumber(n) && n > 0);
    //     appData.moneyDeposit = +n;
    // }
    this.moneyDeposit = 0;
  },
  calcPeriod: function () {
    return this.budgetMonth * periodSelect.value;
  },
  changePeriodSelect: (event) => {
    document.querySelector(".period-amount").textContent = event.target.value;
    incomePeriodValue.value = appData.calcPeriod();
  },
  blockStart: () => {
    start.disabled = !salaryAmount.value.trim();
  },
};
const addEventChangeNumber = (event) => {
  let tmpValue = event.target.value.trim();
  const changeInputNumber = (event) => {
    if (
      !/^[\d]+$/.test(event.target.value.trim()) &&
      event.target.value.trim() !== ""
    ) {
      alert("Доупускается ввод только цифр!");
      event.target.value = tmpValue;
      event.target.removeEventListener("change", changeInputNumber);
    }
    tmpValue = event.target.value.trim();
  };
  event.target.addEventListener("change", changeInputNumber);
};
const addEventChangeText = (event) => {
  let tmpValue = event.target.value;
  const changeInputText = (event) => {
    if (
      !/^[,. а-яА-ЯёЁ]+$/.test(event.target.value) &&
      event.target.value !== ""
    ) {
      alert("Доупускается ввод только русских букв, пробела, точки и запятой!");
      event.target.value = tmpValue;
      event.target.removeEventListener("change", changeInputText);
    }
    tmpValue = event.target.value;
  };
  event.target.addEventListener("change", changeInputText);
};

const foo = appData.start.bind(appData);

appData.blockStart();
start.addEventListener("click", foo);

expensesPlus.addEventListener("click", appData.addExpensesBlock);
incomePlus.addEventListener("click", appData.addIncomeBlock);
periodSelect.addEventListener("input", appData.changePeriodSelect);
salaryAmount.addEventListener("input", appData.blockStart);

document.querySelectorAll('[placeholder="Наименование"]').forEach((input) => {
  input.addEventListener("focus", addEventChangeText);
});
document.querySelectorAll('[placeholder="Сумма"]').forEach((input) => {
  input.addEventListener("focus", addEventChangeNumber);
});
