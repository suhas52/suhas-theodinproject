const userSection = document.querySelector(".user-section");
const midSection = document.querySelector(".mid-section");
const cpuSection = document.querySelector(".cpu-section");
const cpuImg = document.getElementById("cpu-img");
const userScore = document.querySelector(".user_score");
const cpuScore = document.querySelector(".cpu_score");
const choices = ["rock", "paper", "scizzors"];
const currentStatus = document.querySelector(".current-status");
const retrybtn = document.createElement("button");
retrybtn.textContent = "Retry?";
retrybtn.classList.add("retrybtn")

let cpu_choice = genCpuImg();
const rules = {
    rock: "paper",
    paper: "scizzors",
    scizzors: "rock"
};

let userScoreValue = 0;
let cpuScoreValue = 0;

function genCpuImg() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    if (choice === "rock") {
        cpuImg.src = "images/rock.png";
    }
    if (choice === "paper") {
        cpuImg.src = "images/paper.png";
    }
    if (choice === "scizzors") {
        cpuImg.src = "images/scizzors.png";
    }
    return choice
};

function checkResult(user_choice, cpu_choice) {
    if (user_choice == cpu_choice) {
        return "draw";
    }
    else if (cpu_choice == rules[user_choice]) {
        return "loss";
    }
    else {
        return "win";
    }
}


function handleUserClick(e) {
    let user_choice = e.target.id;
    let scoreCheck = checkResult(user_choice, cpu_choice);
    if (scoreCheck == "win") {
        userScoreValue += 1;
        userScore.textContent = userScoreValue;
        currentStatus.textContent = "You got a point!";
    }
    else if (scoreCheck == "loss") {
        cpuScoreValue += 1;
        cpuScore.textContent = cpuScoreValue;
        currentStatus.textContent = "Your opponent got a point!";
    }
    else {
        currentStatus.textContent = "That was a draw!"
    }

    if (userScoreValue === 5 || cpuScoreValue === 5) {
        currentStatus.textContent = "Game Over!";
        midSection.append(retrybtn)
        userSection.removeEventListener("click", handleUserClick);
    }
    cpu_choice = genCpuImg();
    cpuImg.removeAttribute("hidden")
}

userSection.addEventListener("click", handleUserClick);
retrybtn.addEventListener("click", () => {
    location.reload()
});