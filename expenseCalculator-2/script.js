console.log("connected 2");

const totalExpense = document.querySelector("#total-expense");
const expenseField = document.querySelector("#expense-field");
const amountField = document.querySelector("#amount-field");
const rowContainer = document.querySelector("#row-container");
const insertBtn = document.querySelector("#insert-btn");

insertBtn.addEventListener("click", function (event) {
  // console.log(event);
  console.log(event.target);

  const expenseValue = expenseField.value;
  const amountValue = Number(amountField.value);
  console.log(expenseValue, amountValue);

  // create new row
  const div = document.createElement("div");
  div.classList.add("flex", "justify-between");
  div.setAttribute("data-amount", amountValue);

  const p1 = document.createElement("p");
  p1.innerText = expenseValue;
  const p2 = document.createElement("p");
  p2.innerText = amountValue;

  div.appendChild(p1);
  div.appendChild(p2);
  rowContainer.appendChild(div);

  //   update total
  let totalExpenseValue = Number(totalExpense.innerText);
  console.log(totalExpenseValue);
  totalExpenseValue = amountValue + totalExpenseValue;
  totalExpense.innerHTML = totalExpenseValue;

  //   clear input fields
  expenseField.value = "";
  amountField.value = "";
});
