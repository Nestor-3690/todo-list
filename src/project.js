export class Project {
    constructor(projects, title) {
        this.id = projects.length
        this.title = title,
        this.todos = [];
    }
}