function Todos() {
    class Todo {
        constructor(project, title, description, dueDate, priority) {
            this.id = project.todos.length,
            this.title = title,
            this.description = description,
            this.dueDate = dueDate,
            this.priority = priority,
            this.isDone = false;
        }
    }
}