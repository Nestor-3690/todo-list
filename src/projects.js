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

    const removeProject = (id) => {
        for (project of projects) {
            if (project.id === id) {
                projects.slice(id, 1);
            }
        }
    }
}