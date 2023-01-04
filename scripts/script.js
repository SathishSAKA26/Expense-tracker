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

// Functions
function init() {
  listEl.innerHTML = null;
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
}

// create DOM function
function addTransactionToDom({ id, name, amount }) {
  // add sign of the transaction

  // create an li elements
  const liEl = document.createElement("li");

  // add class name is liEl
  liEl.classList = amount > 0 ? "plus" : "minus";

  // innerHTML
  liEl.innerHTML = `<span>${name}</span> <span>${amount}</span> <button class='delete-btn' 
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
      amount: amountEl.value,
    };

    // add the transaction object to transaction
    transactions.push(transaction);

    //  add create to the DOM
    addTransactionToDom(transaction);

    // clear of the input El
    titleEl.value = null;
    amountEl.value = null;
  }
});

// Initial settings
init();
