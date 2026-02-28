const choices = ["rock", "paper", "scissors"];
const pdisplay = document.getElementById('pdisplay');
const cdisplay = document.getElementById('cdisplay');
const rdisplay = document.getElementById('rdisplay');
const pscore = document.getElementById('pscore');
const cscore = document.getElementById('cscore');

let p = 0;
let c = 0;

function play(store) {
    const computer = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (store === computer) {
        result = "It's a Tie";
    } else {
        switch (store) {
            case 'rock':
                result = (computer === 'scissors') ? "You Win" : "You Lose";
                break;
            case 'paper':
                result = (computer === 'rock') ? "You Win" : "You Lose";
                break;
            case 'scissors':
                result = (computer === 'paper') ? "You Win" : "You Lose";
                break;
        }
    }

    // Update choice display
    pdisplay.textContent = `Player Choice: ${store}`;
    cdisplay.textContent = `Computer Choice: ${computer}`;
    rdisplay.textContent = result;

    // Reset color classes
    rdisplay.classList.remove("red", "green", "brown");

    // Update result color and scores
    switch (result) {
        case 'You Win':
            rdisplay.classList.add('green');
            p++;
            pscore.textContent = p;   // ✅ fixed
            break;
        case 'You Lose':
            rdisplay.classList.add('red');
            c++;
            cscore.textContent = c;   // ✅ fixed
            break;
        case "It's a Tie":
            rdisplay.classList.add('brown');
            break;
    }
}
