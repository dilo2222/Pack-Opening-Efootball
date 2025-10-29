const players = [
  // ==== ICONIC (10) ====
  { name: "Lionel Messi", rating: 94, position: "FW", type: "iconic" },
  { name: "Cristiano Ronaldo", rating: 93, position: "FW", type: "iconic" },
  { name: "Kylian Mbappé", rating: 92, position: "FW", type: "iconic" },
  { name: "Erling Haaland", rating: 91, position: "FW", type: "iconic" },
  { name: "Kevin De Bruyne", rating: 91, position: "MF", type: "iconic" },
  { name: "Neymar Jr", rating: 90, position: "FW", type: "iconic" },
  { name: "Robert Lewandowski", rating: 90, position: "FW", type: "iconic" },
  { name: "Mohamed Salah", rating: 89, position: "FW", type: "iconic" },
  { name: "Harry Kane", rating: 89, position: "FW", type: "iconic" },
  { name: "Luka Modrić", rating: 88, position: "MF", type: "iconic" },

  // ==== TYPICAL — FW/MF (70) ====
  { name: "Vinícius Jr", rating: 85, position: "FW", type: "typical" },
  { name: "Bukayo Saka", rating: 85, position: "FW", type: "typical" },
  { name: "Phil Foden", rating: 85, position: "FW", type: "typical" },
  { name: "Jude Bellingham", rating: 85, position: "MF", type: "typical" },
  { name: "Bernardo Silva", rating: 85, position: "MF", type: "typical" },
  { name: "Rodri", rating: 85, position: "MF", type: "typical" },
  { name: "Bruno Fernandes", rating: 85, position: "MF", type: "typical" },
  { name: "Federico Valverde", rating: 85, position: "MF", type: "typical" },
  { name: "Martin Ødegaard", rating: 85, position: "MF", type: "typical" },
  { name: "Declan Rice", rating: 85, position: "MF", type: "typical" },
  { name: "Son Heung-min", rating: 85, position: "FW", type: "typical" },
  { name: "Marcus Rashford", rating: 84, position: "FW", type: "typical" },
  { name: "Antoine Griezmann", rating: 84, position: "FW", type: "typical" },
  { name: "Lautaro Martínez", rating: 84, position: "FW", type: "typical" },
  { name: "Khvicha Kvaratskhelia", rating: 84, position: "FW", type: "typical" },
  { name: "Casemiro", rating: 84, position: "MF", type: "typical" },
  { name: "João Félix", rating: 83, position: "FW", type: "typical" },
  { name: "Gabriel Jesus", rating: 83, position: "FW", type: "typical" },
  { name: "Darwin Núñez", rating: 83, position: "FW", type: "typical" },
  { name: "Mason Mount", rating: 83, position: "MF", type: "typical" },
  { name: "Ilkay Gündogan", rating: 84, position: "MF", type: "typical" },
  { name: "Joshua Kimmich", rating: 85, position: "MF", type: "typical" },
  { name: "Marco Verratti", rating: 84, position: "MF", type: "typical" },
  { name: "Sergej Milinković-Savić", rating: 84, position: "MF", type: "typical" },
  { name: "Jack Grealish", rating: 84, position: "MF", type: "typical" },
  { name: "Riyad Mahrez", rating: 83, position: "FW", type: "typical" },
  { name: "Tammy Abraham", rating: 82, position: "FW", type: "typical" },
  { name: "Christian Pulisic", rating: 82, position: "FW", type: "typical" },
  { name: "Wilfried Zaha", rating: 82, position: "FW", type: "typical" },
  { name: "Jadon Sancho", rating: 83, position: "FW", type: "typical" },
  { name: "Ángel Di María", rating: 84, position: "FW", type: "typical" },
  { name: "Richarlison", rating: 82, position: "FW", type: "typical" },
  { name: "Leon Bailey", rating: 82, position: "FW", type: "typical" },
  { name: "Raphinha", rating: 83, position: "FW", type: "typical" },
  { name: "Anthony Martial", rating: 81, position: "FW", type: "typical" },
  { name: "João Pedro", rating: 79, position: "FW", type: "typical" },
  { name: "Ferran Torres", rating: 83, position: "FW", type: "typical" },
  { name: "Ousmane Dembélé", rating: 83, position: "FW", type: "typical" },
  { name: "Gavi", rating: 82, position: "MF", type: "typical" },
  { name: "Eduardo Camavinga", rating: 82, position: "MF", type: "typical" },
  { name: "Lucas Paquetá", rating: 83, position: "MF", type: "typical" },
  { name: "Dominik Szoboszlai", rating: 82, position: "MF", type: "typical" },
  { name: "Sandro Tonali", rating: 83, position: "MF", type: "typical" },
  { name: "João Cancelo", rating: 85, position: "DF", type: "typical" },
  { name: "Isco", rating: 80, position: "MF", type: "typical" },
  { name: "Yeremy Pino", rating: 80, position: "FW", type: "typical" },
  { name: "Weston McKennie", rating: 81, position: "MF", type: "typical" },
  { name: "Ryan Gravenberch", rating: 80, position: "MF", type: "typical" },
  { name: "Pablo Sarabia", rating: 80, position: "MF", type: "typical" },
  { name: "Andreas Pereira", rating: 79, position: "MF", type: "typical" },
  { name: "Thomas Partey", rating: 83, position: "MF", type: "typical" },
  { name: "James Maddison", rating: 83, position: "MF", type: "typical" },
  { name: "Alexis Mac Allister", rating: 82, position: "MF", type: "typical" },
  { name: "Kevin Volland", rating: 81, position: "FW", type: "typical" },
  { name: "Gerard Moreno", rating: 83, position: "FW", type: "typical" },
  { name: "Memphis Depay", rating: 83, position: "FW", type: "typical" },
  { name: "Álvaro Morata", rating: 82, position: "FW", type: "typical" },
  { name: "Arnaut Danjuma", rating: 81, position: "FW", type: "typical" },
  { name: "Callum Wilson", rating: 81, position: "FW", type: "typical" },
  { name: "Mikel Oyarzabal", rating: 83, position: "FW", type: "typical" },
  { name: "Gonçalo Ramos", rating: 81, position: "FW", type: "typical" },
  { name: "Moussa Diaby", rating: 82, position: "FW", type: "typical" },
  { name: "Karim Adeyemi", rating: 80, position: "FW", type: "typical" },
  { name: "João Mário", rating: 80, position: "MF", type: "typical" },
  { name: "Nicolò Zaniolo", rating: 81, position: "MF", type: "typical" },
  { name: "Yeray Galán", rating: 77, position: "FW", type: "typical" },
  { name: "Stephy Mavididi", rating: 78, position: "FW", type: "typical" },
  { name: "Yussuf Poulsen", rating: 80, position: "FW", type: "typical" },
  { name: "Krzysztof Piątek", rating: 79, position: "FW", type: "typical" },

  // ==== TYPICAL — DF/GK (70) ====
  { name: "Virgil van Dijk", rating: 85, position: "DF", type: "typical" },
  { name: "Antonio Rüdiger", rating: 85, position: "DF", type: "typical" },
  { name: "Marquinhos", rating: 85, position: "DF", type: "typical" },
  { name: "Rúben Dias", rating: 85, position: "DF", type: "typical" },
  { name: "Éder Militão", rating: 84, position: "DF", type: "typical" },
  { name: "Jules Koundé", rating: 83, position: "DF", type: "typical" },
  { name: "Raphaël Varane", rating: 84, position: "DF", type: "typical" },
  { name: "Dayot Upamecano", rating: 83, position: "DF", type: "typical" },
  { name: "Ronald Araújo", rating: 83, position: "DF", type: "typical" },
  { name: "Pau Torres", rating: 83, position: "DF", type: "typical" },
  { name: "Thiago Silva", rating: 84, position: "DF", type: "typical" },
  { name: "Mats Hummels", rating: 83, position: "DF", type: "typical" },
  { name: "David Alaba", rating: 84, position: "DF", type: "typical" },
  { name: "Kalidou Koulibaly", rating: 84, position: "DF", type: "typical" },
  { name: "Matthijs de Ligt", rating: 84, position: "DF", type: "typical" },
  { name: "Benjamin Pavard", rating: 82, position: "DF", type: "typical" },
  { name: "Andreas Christensen", rating: 83, position: "DF", type: "typical" },
  { name: "Aymeric Laporte", rating: 84, position: "DF", type: "typical" },
  { name: "Joško Gvardiol", rating: 83, position: "DF", type: "typical" },
  { name: "Kim Min-jae", rating: 84, position: "DF", type: "typical" },
  { name: "Kieran Trippier", rating: 83, position: "DF", type: "typical" },
  { name: "Achraf Hakimi", rating: 84, position: "DF", type: "typical" },
  { name: "Trent Alexander-Arnold", rating: 85, position: "DF", type: "typical" },
  { name: "Kyle Walker", rating: 84, position: "DF", type: "typical" },
  { name: "Luke Shaw", rating: 83, position: "DF", type: "typical" },
  { name: "Theo Hernández", rating: 85, position: "DF", type: "typical" },
  { name: "Reece James", rating: 83, position: "DF", type: "typical" },
  { name: "Marc Cucurella", rating: 81, position: "DF", type: "typical" },
  { name: "Ricardo Pereira", rating: 82, position: "DF", type: "typical" },
  { name: "Danilo", rating: 82, position: "DF", type: "typical" },
  { name: "Jordi Alba", rating: 83, position: "DF", type: "typical" },
  { name: "Aaron Wan-Bissaka", rating: 80, position: "DF", type: "typical" },
  { name: "Stefan de Vrij", rating: 83, position: "DF", type: "typical" },
  { name: "Diego Carlos", rating: 82, position: "DF", type: "typical" },
  { name: "Milan Škriniar", rating: 84, position: "DF", type: "typical" },
  { name: "Cristian Romero", rating: 83, position: "DF", type: "typical" },
  { name: "Niklas Süle", rating: 82, position: "DF", type: "typical" },
  { name: "William Saliba", rating: 84, position: "DF", type: "typical" },
  { name: "Fikayo Tomori", rating: 83, position: "DF", type: "typical" },
  { name: "Iñigo Martínez", rating: 81, position: "DF", type: "typical" },
  { name: "Phil Jones", rating: 79, position: "DF", type: "typical" },
  { name: "Victor Lindelöf", rating: 81, position: "DF", type: "typical" },
  { name: "Eric García", rating: 79, position: "DF", type: "typical" },
  { name: "Ben White", rating: 82, position: "DF", type: "typical" },
  { name: "Ozan Kabak", rating: 78, position: "DF", type: "typical" },
  { name: "Joe Gomez", rating: 82, position: "DF", type: "typical" },
  { name: "Harry Maguire", rating: 82, position: "DF", type: "typical" },
  { name: "Nathan Aké", rating: 82, position: "DF", type: "typical" },
  { name: "Sergi Roberto", rating: 80, position: "DF", type: "typical" },
  { name: "Ivan Perišić", rating: 82, position: "DF", type: "typical" },
  { name: "Ferland Mendy", rating: 82, position: "DF", type: "typical" },
  { name: "Presnel Kimpembe", rating: 82, position: "DF", type: "typical" },
  { name: "Leonardo Bonucci", rating: 83, position: "DF", type: "typical" },
  { name: "John Stones", rating: 84, position: "DF", type: "typical" },
  { name: "Marc-André ter Stegen", rating: 85, position: "GK", type: "typical" },
  { name: "Alisson Becker", rating: 85, position: "GK", type: "typical" },
  { name: "Thibaut Courtois", rating: 85, position: "GK", type: "typical" },
  { name: "Ederson", rating: 84, position: "GK", type: "typical" },
  { name: "Gianluigi Donnarumma", rating: 85, position: "GK", type: "typical" },
  { name: "David de Gea", rating: 84, position: "GK", type: "typical" },
  { name: "Mike Maignan", rating: 84, position: "GK", type: "typical" },
  { name: "Yassine Bounou", rating: 83, position: "GK", type: "typical" },
  { name: "Nick Pope", rating: 82, position: "GK", type: "typical" },
  { name: "Kepa Arrizabalaga", rating: 80, position: "GK", type: "typical" },
  { name: "Jan Oblak", rating: 85, position: "GK", type: "typical" },
  { name: "Wojciech Szczęsny", rating: 84, position: "GK", type: "typical" },
  { name: "Hugo Lloris", rating: 84, position: "GK", type: "typical" },
  { name: "José Sá", rating: 81, position: "GK", type: "typical" },
  { name: "Álex Remiro", rating: 80, position: "GK", type: "typical" }
];

localStorage.setItem("players", JSON.stringify(players))

const balanceEl = document.querySelector(".balance")
balanceEl.textContent = 5000

const currentBalance = JSON.parse(localStorage.getItem("coins"))
if (currentBalance !== null) {
  balanceEl.textContent = currentBalance
} else {
  localStorage.setItem("coins", JSON.stringify(balanceEl.textContent))
}

const openBtn = document.querySelector(".card__open-text")
openBtn.addEventListener("click", function (e) {
  let coinsBalance = JSON.parse(localStorage.getItem("coins"))
  let playersAvailable = JSON.parse(localStorage.getItem("players"))
  const animVideo = document.querySelector(".animation__video")
  const animContainer = document.querySelector(".animation")

  if (coinsBalance >= 100) {
    let coins = coinsBalance -= 100
    localStorage.setItem("coins", JSON.stringify(coins))
    balanceEl.textContent = coins
    if (playersAvailable) {
      const randomInd = Math.floor(Math.random() * playersAvailable.length)
      const randomPlayer = playersAvailable[randomInd]
      console.log(randomPlayer)
      if (randomPlayer.type === "iconic") {
        animContainer.classList.remove("hidden")
        animVideo.muted = false
        animVideo.setAttribute("src", "./img/epicAnim.mp4")
      } else if (randomPlayer.type === "typical") {
        animContainer.classList.remove("hidden")
        animVideo.muted = false
        animVideo.setAttribute("src", "./img/ordinaryAnim.mp4")
      }

      setTimeout(() => {
          animContainer.classList.add("hidden")
        }, 7500)

      setTimeout(() => {
        const overlayEl = document.querySelector(".overlay")
      overlayEl.classList.remove("hidden")
      const popupEl = document.querySelector(".popup")
      popupEl.classList.remove("hidden")

      const popupBg = document.querySelector(".popup__bg")
      if (randomPlayer.type === "iconic") {
        popupBg.setAttribute("src", "./img/iconic.jpg")
      } else if (randomPlayer.type === "typical") {
        popupBg.setAttribute("src", "./img/bgOrdinary.jpg")
      }

      const popupPosition = document.querySelector(".popup__position")
      popupPosition.textContent = randomPlayer.position
      const popupRating = document.querySelector(".popup__rating")
      popupRating.textContent = randomPlayer.rating
      const popupBall = document.querySelector(".popup__ball")
      if (randomPlayer.rating >= 85) {
        popupBall.style.backgroundColor = "black"
      } else if (randomPlayer.rating <= 84) {
        popupBall.style.backgroundColor = "grey"
      }
      const playerName = document.querySelector(".popup__name")
      playerName.textContent = randomPlayer.name
      const popupPhoto = document.querySelector(".popup__photo")
      }, 7500)

      

    }
  }
})

