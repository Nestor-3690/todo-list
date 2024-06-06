import { list } from "./list";
import { Project } from "./project";
import { Todo } from "./todo";
import { UpdateID } from "./updateID";

function Controller() {
    const projects = list.projects;

    const addProject = (title) => {
        if (!title) {
            return false;
        } else {
            const project = new Project(projects, title);
            list.appendProject(project);
        };
    }

    const addTodo = (project, title, description, dueDate, priority) => {
        if ((!project && project !== 0) || !title || !dueDate) {
            return false;
        } else {
            const todo = new Todo(projects[project], title, description, dueDate, priority);
            list.appendTodo(todo, project);
        }
    };

    const cleanProject = 0;

    const cleanTodo = 0;

    return { projects, addProject, addTodo, cleanProject, cleanTodo };
}

export { Controller };