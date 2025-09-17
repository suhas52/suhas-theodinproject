const choices = ["rock", "paper", "scizzors"]
const rules = {
    rock: "scizzors",
    paper: "rock",
    scizzors: "paper"
};

function pickBtn() {
    choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}


function play() {
    user_choice = document.getElementById("userChoice").value.toLowerCase();
    if (choices.includes(user_choice)) {
    cpu_choice = pickBtn();
    if (user_choice === cpu_choice) {
        alert("It's a draw!")
    }
    if (rules[user_choice] === cpu_choice) {
        alert("You win!");
    } else {
        alert("CPU wins!");
    }
    location.reload()
    }
    else {
        alert("Please choose from rock, paper or scizzors!");
        location.reload()
    }
}
