document.getElementById('calculate').addEventListener('click', function(){
    // get income
    const incomeText = document.getElementById('income-text');
    const incomeAmount = incomeText.value;
    
    // get the expenses

    // food
    const foodText = document.getElementById('food-text');
    const foodExpense = parseFloat(foodText.value);
    foodText.value = '';
    // rent
    const rentText = document.getElementById('rent-text');
    const rentExpense = parseFloat(rentText.value);
    rentText.value = '';
    // clothes
    const clothesText = document.getElementById('clothes-text');
    const clothesExpense = parseFloat(clothesText.value);
    clothesText.value = '';
    // add the expenses
    const totalExpenses = foodExpense + rentExpense + clothesExpense;
    // showing in total expenses field
    const totalExpensesField = document.getElementById('total-expenses');
    const newTotalExpensesField = totalExpensesField.innerText;
    

})