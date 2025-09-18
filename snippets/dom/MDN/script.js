const ul = document.querySelector("ul");
const btn = document.querySelector("button");
const input = document.querySelector("input");



function addItem() {
    if (input.value) {
        const span = document.createElement("span");
        const delbtn = document.createElement("button");
        delbtn.textContent = "Delete"
        let list = document.createElement("li");
        ul.append(list)
        list.append(span)
        list.append(delbtn)
        span.textContent = input.value;
        input.value = '';
    }
}


btn.addEventListener("click", () => addItem())
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});

ul.addEventListener("click", function (e) {
    if (e.target.tagName == "BUTTON") {
        const li = e.target.closest("li");
        if (li) {
            li.remove();
        }
    }
})