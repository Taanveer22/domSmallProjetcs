console.log("connected");

// traversing dom elements
const totalExpense = document.getElementById("total-expense");
const expenseField = document.getElementById("expense-field");
const amountField = document.getElementById("amount-field");
const insertBtn = document.getElementById("insert-btn");
const rowContainer = document.getElementById("row-container");

// implementing event listener on insert buttton
insertBtn.addEventListener("click", function (event) {
  console.log(event);
  console.log(event.target);

  // getting the input field value 
  const expenseValue = expenseField.value;
  const amountValue = Number(amountField.value);
  console.log(expenseValue, amountValue);

  // create a new row via bactics syntax
  const row = `
    <div class="flex justify-between" data-amount = "${amountValue}">
        <p>${expenseValue}</p>
        <p>${amountValue}</p>
    </div>
    `;
  rowContainer.innerHTML = rowContainer.innerHTML + row;

  // update total
  let totalExpenseValue = Number(totalExpense.innerText);
  console.log(totalExpenseValue);
  totalExpenseValue = amountValue + totalExpenseValue;
  totalExpense.innerText = totalExpenseValue;
});
