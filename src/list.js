function List() {
    const projects = [];

    const appendProject = (project) => projects.push(project);

    const removeProject = (id) => {
        projects.splice(id, 1);
    }

    const appendTodo = (todo, projectId) => {
        for (project of projects) {
            if (project.id === projectId) {
                project.todos.push(todo);
                return;
            }
        }
    }

    const removeTodo = (projectId, id) => {
        for (project of projects) {
            if (project.id === projectId) {
                project.todos.splice(id, 1);
                return;
            }
        }
    }

    return { appendProject, removeProject, appendTodo, removeTodo };
}

export { List };