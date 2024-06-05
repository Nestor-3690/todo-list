function Projects() {
    const projects = [];

    class Project {
        constructor(title) {
            this.id = projects.length
            this.title = title,
            this.todos = [];
        }
    }

    const appendProject = (project) => projects.push(project);
}