let money = 300000;
income = "фриланс";
addExpenses = "Интернет, Такси, Коммуналка";
deposit = 3 > 2;
mission = 987654;
period = 7;

console.log(typeof money, income, deposit);
console.log('длинна строки ' + addExpenses.length + ' символов');
console.log('Период равен ' + period + ' месяцев и' + ' Цель заработать ' + mission + ' долларов');
console.log(addExpenses.toLowerCase().split(' '));

budgetDay = 300000/30;
console.log(budgetDay);

// ↓ или так правильней? ↓

monthlyIncome = 900000;
dailyBudget = monthlyIncome/30;
console.log(dailyBudget);
