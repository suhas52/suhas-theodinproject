export function about(content) {
    const div = document.createElement("div");
    div.textContent = "About us!";
    content.append(div);
}