function Projects() {
    const projects = [];

    const appendProject = (project) => projects.push(project);

    const removeProject = (id) => {
        projects.splice(id, 1);
    }

    const removeTodo = (projectId, id) => {
        for (project of projects) {
            if (project.id === projectId) {
                project.todos.splice(id, 1);
                return;
            }
        }
    }

    return { appendProject, removeProject, removeTodo };
}

export { Projects };