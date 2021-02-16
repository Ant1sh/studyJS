const buttonStart = document.getElementById('start');
console.log('buttonStart: ', buttonStart);

const incomeAdd = document.getElementsByTagName('button')[0];
console.log('buttonPlus: ', incomeAdd);

const expensesAdd = document.getElementsByTagName('button')[1];
console.log('expensesAdd: ', expensesAdd);

const depositCheck = document.querySelector('#deposit-check');
console.log('depositCheck: ', depositCheck);

const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
console.log('additadditionalIncomeItem: ', additionalIncomeItem);

const budgetMonthValue = document.getElementsByClassName('budget_month-value');
console.log('budgetMonthValue: ', budgetMonthValue);

const budgetDayValue = document.getElementsByClassName('budget_day-value');
console.log('budgetDayValue: ', budgetDayValue);

const expensesMonthValue = document.getElementsByClassName('expenses_month-value');
console.log('expensesMonthValue: ', expensesMonthValue);

const additionalIncomeValue = document.getElementsByClassName('additional_income-value');
console.log('additionalIncomeValue: ', additionalIncomeValue);

const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value');
console.log('additionalExpensesValue : ', additionalExpensesValue);

const incomePeriodValie = document.getElementsByClassName('income_period-value');
console.log('incomePeriodValie: ', incomePeriodValie);

const targetMonthValue = document.getElementsByClassName('target_month-value');
console.log('targetMonthValue: ', targetMonthValue);

const periodSelect = document.querySelector('.period-select'); // range
console.log('periodSelect: ', periodSelect);

// inputs
const salaryAmount = document.querySelector('.salary-amount');
console.log('salaryAmount: ', salaryAmount);
const incomeTitle = document.querySelector('.income-title');
console.log('incomeTitle: ', incomeTitle);
const incomeAmount = document.querySelector('.income-amount');
console.log('incomeAmount: ', incomeAmount);
const expensesTitle = document.querySelector('.expenses-title');
console.log('expensesTitle: ', expensesTitle);
const expensesAmount = document.querySelector('.expenses-amount');
console.log('expensesAmount: ', expensesAmount);
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
console.log('additionalExpensesItem: ', additionalExpensesItem);
const depositAmount = document.querySelector('.deposit-amount');
console.log('depositAmount: ', depositAmount);
const depositPercent = document.querySelector('.deposit-percent');
console.log('depositPercent: ', depositPercent);
const targetAmount = document.querySelector('.target-amount');
console.log('targetAmount: ', targetAmount);