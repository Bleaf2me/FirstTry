let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        expensesNeeded : prompt("Введите обязательную статью расходов в этом месяце", ""), 
        expensesCosts : prompt("Во сколько обойдется?", "")
    },
    optionalExpenses: {
        opExpenses: " "
    },
    income: [],
    savings: false
};
alert("Бюджет на день " + money/30);