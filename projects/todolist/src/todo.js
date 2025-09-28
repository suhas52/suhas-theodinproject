export class Todo {
    constructor(title, dueDate, priority, notes, description) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.description = description;
    }
    static currentProject = "default";
    static createTodo(title, dueDate, priority, notes = '', description = '') {
        return new Todo(title,dueDate, priority, notes, description);
    }
    static createProjects() {
        return [];
    }
}
