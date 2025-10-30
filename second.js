const coinsbalance = document.querySelector(".balance")
const coins = JSON.parse(localStorage.getItem("coins"))
const gk = document.querySelector(".penalty__gk")
coinsbalance.textContent = coins


const gkDirection = Math.floor(Math.random() * 3)
console.log(gkDirection)

const penaltyBall = document.querySelector(".penalty__ball")
const penaltyOptions = document.querySelector(".penalty__options")
penaltyOptions.addEventListener("click", function(e) {
    if (e.target.classList.contains("penalty__1")) {
        penaltyBall.classList.add("ball__left")
    } else if (e.target.classList.contains("penalty__2")) {
         penaltyBall.classList.add("ball__center")
    } else if (e.target.classList.contains("penalty__3")) {
        penaltyBall.classList.add("ball__right")
    }

    if (gkDirection === 0) {
        gk.classList.add("penalty__gk__left")
    } else if (gkDirection === 2) {
        gk.classList.add("penalty__gk__right")
    }
    
})