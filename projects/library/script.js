const books = [];
const mainCont = document.querySelector(".main-container");
const cards = [];
const addBook = document.querySelector(".add-book");

class Book {
    constructor(title, id) {
        this.title = title;
        this.id = id;
    }
}

function addBookToLibrary(title) {
    const book = new Book(title, crypto.randomUUID());
    books.push(book);
}

function createCards(cardNo) {
    for (let i = 0; i < cardNo; i++) {
        const card = document.createElement("div");
        card.dataset.id = books[i].id;
        card.textContent = books[i].title;
        const del = document.createElement("button");
        del.textContent = "Delete";
        card.appendChild(del);
        mainCont.appendChild(card);
    }
}

function drawBooks() {
    mainCont.replaceChildren();
    createCards(books.length);
}



addBook.addEventListener("click", () => {
    title = prompt("Please enter your book name");
    addBookToLibrary(title);
    drawBooks()
})

mainCont.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && e.target.textContent === "Delete") {
        const targetId = e.target.closest("div[data-id]").dataset.id;
        const index = books.findIndex(book => book.id === targetId);
        if (index !== -1) books.splice(index, 1);
        drawBooks();
    }
});