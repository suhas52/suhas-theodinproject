export default class Todo {
    constructor(title, duedate, priority, notes = '', description) {
        this.title = title;
        this.duedate = duedate;
        this.priority = priority;
        this.description = description;
        this.notes = notes;
    }
}