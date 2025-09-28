export class DOM {
    constructor() {
        this.projectsCont = document.getElementById("projects-container");
        this.projectList = document.getElementById("project-list");
        this.newProjectBtn = document.getElementById("new-project");
        this.newTodoBtn = document.getElementById("new-todo");
        this.todoModal = document.getElementById("todo-modal");
        this.submitTodoModal = document.getElementById("submit-todo-modal");
        this.closeTodoModal = document.getElementById("close-todo-modal");

    }
    
    displayTodos(project) {
        this.projectsCont.innerHTML = '';
        const currentProject = document.createElement("h2");
        currentProject.id = "current-project";
        currentProject.textContent = project.title;
        this.projectsCont.append(currentProject);
        project.forEach((todo) => {
        const card = this.createCard();
            const title = document.createElement("h3");
            title.textContent = todo.title;
            const description = document.createElement("p");
            description.textContent = todo.description;
            card.append(title, description);
            this.projectsCont.append(card);
            console.log("test")
    })
    }

    

    displayProjects(projects) {
        for (let key in projects) {
            const div = document.createElement("div");
            div.style.width = "100%";
            div.textContent = key;
            this.projectList.append(div);
        }
    }
    
    createCard() {
        const card = document.createElement("div");
        card.style.width = "25%";
        card.style.height = "25%";
        return card;
    }

    showDialog(target) {
        const dialog = document.querySelector("dialog")
        dialog.showModal(); 
    }

    getCurrentProject() {
        document.getElementById("current-project").textContent;
    }
}