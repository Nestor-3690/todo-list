function UpdateID() {
    const updateProjectsID = (projects) => {
        let counter = 0;
        for (const project of projects) {
            project.id = counter++;
        }
    }

    const updateTodosID = (projects, projectId) => {
        let counter = 0;
        for (const todo of projects[projectId].todos) {
            todo.id = counter++;
        }
    }

    return { projects: updateProjectsID, todos: updateTodosID };
}

export { UpdateID };