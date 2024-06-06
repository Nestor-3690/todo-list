export class Todo {
        constructor(project, title, description = "No description", dueDate, priority = 5) {
        this.id = project.todos.length,
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.isDone = false;
        this.printMoreInfos = false;
    }

    changeDone() {
        this.isDone = true ? !this.isDone : this.isDone;
    }

    changePrint() {
        this.printMoreInfos = true ? !this.printMoreInfos : this.printMoreInfos;
    }
}