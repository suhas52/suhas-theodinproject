const books = [];
const mainCont = document.querySelector(".main-container");
const cards = [];
const addBook = document.querySelector(".add-book");
const body = document.querySelector("body");
const popUp = document.querySelector("#pop-up");
const dialog = document.querySelector("dialog")
const close = document.querySelector("#close");
const save = document.querySelector("#save");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const form = document.querySelector("form");

class Book {
    constructor(title, author, pages, read=false) {
        this.title = title;
        this.id = crypto.randomUUID();
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(title, author, pages, read=false) {
    const book = new Book(title, author, pages, read);
    books.push(book);
}

function createCards(cardNo) {
    for (let i = 0; i < cardNo; i++) {
        const card = document.createElement("div");
        card.dataset.id = books[i].id;
        card.classList.add("book-card");

        card.innerHTML = `
            <p><strong>Title:</strong> ${books[i].title}</p>
            <p><strong>Author:</strong> ${books[i].author}</p>
            <p><strong>Pages:</strong> ${books[i].pages}</p>
            <p><strong>Read:</strong> ${books[i].read ? "Yes" : "No"}</p>
        `;

        const del = document.createElement("button");
        del.textContent = "Delete";
        card.appendChild(del);

        mainCont.appendChild(card);
    }
}

function drawBooks() {
    mainCont.innerHTML = '';
    createCards(books.length);
}

function closeForm() {
    dialog.close();
    form.reset();
}


popUp.addEventListener("click", () => {
    dialog.showModal();
})

close.addEventListener("click", () => {
    closeForm();
})

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const author = formData.get('author');
    const numPages = formData.get('pages');
    const read = formData.get('read') === 'on';
    addBookToLibrary(title, author, numPages, read);
    drawBooks();
    closeForm();
});


mainCont.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && e.target.textContent === "Delete") {
        const targetId = e.target.closest("div[data-id]").dataset.id;
        const index = books.findIndex(book => book.id === targetId);
        if (index !== -1) books.splice(index, 1);
        
        drawBooks();
    }
});

