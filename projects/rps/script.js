const userSection = document.querySelector(".user-section");
const cpuSection = document.querySelector(".cpu-section")
const cpuImg = document.getElementById("cpu-img")
const choices = ["rock", "paper", "scizzors"]

userSection.addEventListener("click", function (e) {
  user_choice = e.target.id
  console.log(user_choice)
});

function genCpuImg(cpuImg) {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    if (choice === "rock") {
        cpuImg.src = "images/rock.png"
    }
    if (choice === "paper") {
        cpuImg.src = "images/paper.png"
    }
    if (choice === "scizzors") {
        cpuImg.src = "images/scizzors.png"
    }

};

console.log(genCpuImg(cpuImg))