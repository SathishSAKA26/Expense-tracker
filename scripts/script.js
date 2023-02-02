"use strict";

// Select all the Dom elements
const balanceEl = document.getElementById("total-balance");

const incomeEl = document.getElementById("income");

const expenseEl = document.getElementById("expense");

const listEl = document.getElementById("list");

const formEl = document.getElementById("form");

const titleEl = document.getElementById("title");

const amountEl = document.getElementById("amount");

// Global variable

let transactions = [];

let income = 0;
let expense = 0;
let balance = 0;

// Functions
function init() {
  listEl.innerHTML = null;

  //   // initial list loading
  //   transactions.forEach((transaction) => {
  //     addTransactionToDom(transaction);
  //   });

  //   // update the income expense balance values
  //   updateValues();
}

function updateValues() {
  income = transactions
    .map((transaction) => transaction.amount)
    .filter((val) => val > 0)
    .reduce((prev, val) => prev + val, 0);

  expense = transactions
    .map((transaction) => transaction.amount)
    .filter((val) => val < 0)
    .reduce((prev, val) => prev + val, 0);

  balance = transactions
    .map((transaction) => transaction.amount)
    .reduce((prev, val) => prev + val, 0);

  // innerText
  balanceEl.innerHTML = `₹${balance}`;
  incomeEl.innerHTML = `₹${income}`;
  expenseEl.innerHTML = `₹${Math.abs(expense)}`;
}

// button function
function deleteTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);

  // initial settings
  init();

  // re add the list element
  transactions.forEach((transaction) => {
    addTransactionToDom(transaction);
  });

  // update the income expense balance values
  updateValues();
}

// create DOM function
function addTransactionToDom({ id, name, amount }) {
  // add sign of the transaction

  // create an li elements
  const liEl = document.createElement("li");

  // add class name is liEl
  liEl.classList = amount > 0 ? "plus" : "minus";

  // innerHTML
  liEl.innerHTML = `<span>${name}</span> <span>₹${amount}</span> <button class='delete-btn' 
  onclick=deleteTransaction(${id})>x</button>`;

  // appendChild
  listEl.appendChild(liEl);
}

// Event listeners
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  // value tensions
  if (titleEl.value.trim() === "" || amountEl.value.trim() === "") {
    alert("please add Transaction Details 🙄");
  } else {
    // create the transaction object
    const transaction = {
      id: Date.now(),
      name: titleEl.value,
      amount: Number(amountEl.value),
    };

    // add the transaction object to transaction
    transactions.push(transaction);

    // // data stor in the localStorage in the element
    // localStorage.setItem("transaction", JSON.stringify(transactions));

    //  add create to the DOM
    addTransactionToDom(transaction);

    // clear of the input El
    titleEl.value = null;
    amountEl.value = null;

    // update the income expense balance values
    updateValues();
  }
});

// Initial settings
init();
