function List() {
    const projects = [];

    const getProjects = () => projects;

    const appendProject = (project) => projects.push(project);

    const getProjectLength = (projectId) => {
        return projects[projectId].todos.length;
    }

    const removeProject = (id) => {
        projects.splice(id, 1);
    }

    const appendTodo = (todo, projectId) => {
        projects[projectId].todos.push(todo);
    }

    const removeTodo = (projectId, id) => {
        projects[projectId].todos.splice(id, 1);
    }

    return { projects, getProjects, appendProject, removeProject, appendTodo, removeTodo };
}

export { List };