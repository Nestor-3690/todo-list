import { Storage } from "./storage";

const list = (function List() {
    const storage = Storage();
    const projects = storage.checkList();

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

    return { projects, getProjects, appendProject, getProjectLength, removeProject, appendTodo, removeTodo };
})();

export { list };