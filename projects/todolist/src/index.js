import "./styles.css";
import { Todo } from "./todo"
import { DOM } from "./DOM"
const projects = {};
const webpage = new DOM


if (1 != 1) {
    pass
}

else { 
    projects.default = Todo.createProjects("default");
    projects.default.title = "default";
}


projects.default.push(Todo.createTodo("test1", 2, 1, "testnote1", "testdesc1"));
projects.default.push(Todo.createTodo("test2", 2, 1, "testnote2", "testdesc2"));
projects.default.push(Todo.createTodo("test3", 2, 1, "testnote3", "testdesc3"));
projects.default.push(Todo.createTodo("test4", 2, 1, "testnote4", "testdesc4"));
projects.default.push(Todo.createTodo("test5", 2, 1, "testnote5", "testdesc5"));
projects.default.push(Todo.createTodo("test6", 2, 1, "testnote6", "testdesc6"));

projects.project1 = Todo.createProjects("project1");
projects.project2 = Todo.createProjects("project2");
projects.project3 = Todo.createProjects("project3");
projects.project4 = Todo.createProjects("project4");


webpage.displayProjects(projects);


webpage.displayTodos(projects.default)

webpage.newTodoBtn.addEventListener("click", () => {
    webpage.todoModal.showModal();
})

webpage.closeTodoModal.addEventListener("click", () => {
    webpage.todoModal.close()
})

webpage.submitTodoModal.addEventListener("click", () => {
    
})