let items = document.querySelectorAll(".grid-item");

items = Array.from(items);
let currentPlayer = "X" ? "O" : "X";
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];
startGame()

function startGame() {
    for (var i = 0; i < items.length; i++) {
        items[i].textContent = ''
    }
    document.getElementById("overlay").style.display = "none"
    document.getElementById("boite").style.display = "none"
    document.getElementById("text").innerHTML = ""

}

function shoWin() {
    winCombos.forEach(function(combo) {
        let check = combo.every(index => items[index].innerText.trim() == currentPlayer)
        if (check) {
            document.getElementById("overlay").style.display = "block"
            document.getElementById("boite").style.display = "block"
            document.getElementById("text").innerHTML = currentPlayer + " WIN"

        }
    })

}




items.forEach(function(item) {
    item.addEventListener("click", function() {
        if (item.innerText.trim() != "") return
        item.innerText = currentPlayer
        shoWin()
        currentPlayer = currentPlayer == "X" ? "O" : "X"
    })
})

// // Vide le contenu de toute les cases
function rest() {
    for (var i = 0; i < items.length; i++) {
        items[i].textContent = ''
    }
}