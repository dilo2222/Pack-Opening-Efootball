const coinsbalance = document.querySelector(".balance")
const coins = JSON.parse(localStorage.getItem("coins"))
const gk = document.querySelector(".penalty__gk")
coinsbalance.textContent = coins

const overlayEl = document.querySelector(".overlay")
const popEl = document.querySelector(".popup1")
const popEltext = document.querySelector(".popup__text1")
const popBtn = document.querySelector(".popup__btn1")

const penaltyBall = document.querySelector(".penalty__ball")
const penaltyOptions = document.querySelector(".penalty__options")

penaltyOptions.addEventListener("click", function(e) {
  const gkDirection = Math.floor(Math.random() * 3)
  console.log(gkDirection)

  // Ball animation
  if (e.target.classList.contains("penalty__1")) {
    penaltyBall.classList.add("ball__left")
  } else if (e.target.classList.contains("penalty__2")) {
    penaltyBall.classList.add("ball__center")
  } else if (e.target.classList.contains("penalty__3")) {
    penaltyBall.classList.add("ball__right")
  }

  // GK animation
  if (gkDirection === 0) gk.classList.add("penalty__gk__left")
  else if (gkDirection === 2) gk.classList.add("penalty__gk__right")

  let coinsList = Number(localStorage.getItem("coins")) || o
  let coinsB = coinsList

  if (e.target.classList.contains("penalty__1") && (gkDirection === 1 || gkDirection === 2) ||
      e.target.classList.contains("penalty__2") && (gkDirection === 0 || gkDirection === 2) ||
      e.target.classList.contains("penalty__3") && (gkDirection === 0 || gkDirection === 1)) {

    coinsB = coinsList + 100
    localStorage.setItem("coins", JSON.stringify(coinsB))

    setTimeout(() => {
      overlayEl.classList.remove("hidden")
      popEl.classList.remove("hidden")
      popEltext.textContent = "Goal! +100 💰"
    }, 800)

  } else {
    coinsB = coinsList - 100
    localStorage.setItem("coins", JSON.stringify(coinsB))

    setTimeout(() => {
      overlayEl.classList.remove("hidden")
      popEl.classList.remove("hidden")
      popEltext.textContent = "You Missed ❌ -100"
    }, 1000)
  }
})

popBtn.addEventListener("click", function(e) {
  overlayEl.classList.add("hidden")
  popEl.classList.add("hidden")
  window.location.reload()
})
