function List() {
    const projects = [];

    const getProjects = () => projects;

    const appendProject = (project) => projects.push(project);

    const getProjectLength = (projectId) => {
        for (project in projects) {
            if (project.id === projectId) {
                return project.todos.length;
            }
        }
    }

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

    return { getProjects, appendProject, removeProject, appendTodo, removeTodo };
}

export { List };