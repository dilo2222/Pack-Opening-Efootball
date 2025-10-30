const coinsbalance = document.querySelector(".balance")
const coins = JSON.parse(localStorage.getItem("coins"))
coinsbalance.textContent = coins
