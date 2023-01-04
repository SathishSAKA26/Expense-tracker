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

// Event listeners
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  // value tensions
  if (titleEl.value.trim() === "" || amountEl.value.trim() === "") {
    alert("please add Transaction Details 🙄");
  }
});

// Initial settings
init();
