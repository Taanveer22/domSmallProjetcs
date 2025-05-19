console.log("connected");

const totalExpense = document.getElementById("total-expense");
const expenseField = document.getElementById("expense-field");
const amountField = document.getElementById("amount-field");
const insertBtn = document.getElementById("insert-btn");
const rowContainer = document.getElementById("row-container");

insertBtn.addEventListener("click", function (event) {
  console.log(event);
  console.log(event.target);

  const expenseValue = expenseField.value;
  const amountValue = Number(amountField.value);
  console.log(expenseValue, amountValue);

  const row = `
    <div class="flex justify-between" data-amount = "${amountValue}">
        <p>${expenseValue}</p>
        <p>${amountValue}</p>
    </div>
    `;

  rowContainer.innerHTML = rowContainer.innerHTML + row;

  let totalExpenseValue = Number(totalExpense.innerText);
  console.log(totalExpenseValue);
  totalExpenseValue = amountValue + totalExpenseValue;

  totalExpense.innerText = totalExpenseValue;
});
