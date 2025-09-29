import "./styles.css";
import { Todo } from "./todo"
import { DOM } from "./DOM"
let projects = {};
const webpage = new DOM



if (!(localStorage.getItem("projects"))) {
    projects.default = Todo.createProjects("default");
    projects.default.title = "default";    
}

else {
    projects = webpage.getFromLocal();
}


webpage.displayProjects(projects);
webpage.displayTodos(projects.default)
console.log(projects.default)

webpage.newTodoBtn.addEventListener("click", () => {
    webpage.todoModal.showModal();
})

webpage.closeTodoModal.addEventListener("click", () => {
    webpage.todoModal.close()
})

webpage.closeProjectModal.addEventListener("click", () => {
    webpage.projectModal.close();
})

webpage.newProjectBtn.addEventListener("click", () => {
    webpage.projectModal.showModal();
})

webpage.toDoForm.addEventListener("submit", (e) => {
    const formData = new FormData(e.target);
    const current_project = Todo.currentProject;
    const title = formData.get("title");
    const dueDate = formData.get("dueDate");
    const priority = formData.get("priority");
    const notes = formData.get("notes");
    const description = formData.get("description");
    projects[current_project].push(Todo.createTodo(title, dueDate, priority, notes, description));
    webpage.displayTodos(projects[current_project]);
    webpage.saveToLocal(projects)
})

webpage.projectForm.addEventListener("submit", (e) => {
    const formData = new FormData(e.target);
    const title = formData.get("title");
    projects[title] = Todo.createProjects(title);
    projects[title].title = title;
    webpage.displayProjects(projects);
    webpage.saveToLocal(projects)
})

webpage.projectList.addEventListener("click", (e) => {
    const current_project = e.target.textContent;
    Todo.currentProject = current_project;
    webpage.changeProject(current_project);
    webpage.displayProjects(projects);
    webpage.displayTodos(projects[current_project]);
})