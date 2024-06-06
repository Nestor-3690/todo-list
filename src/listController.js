import { list } from "./list";
import { Project } from "./project";
import { Todo } from "./todo";
import { UpdateID } from "./updateID";
import { Date } from "./date";

function Controller() {
    const projects = list.projects;
    const date = Date();
    const update = UpdateID();

    const addProject = (title) => {
        if (!title) {
            return false;
        } else {
            const project = new Project(projects, title);
            list.appendProject(project);
        };
    }

    const addTodo = (project, title, description, dueDate, priority) => {
        if (!title || !dueDate || !date.checkDate(dueDate)) {
            return false;
        } else {
            const todo = new Todo(projects[project], title, description, dueDate, priority);
            list.appendTodo(todo, project);
        }
    };

    const cleanProject = (id) => {
        list.removeProject(id);
        update.projects(projects);
    }

    const cleanTodo = (projectId, id) => {
        list.removeTodo(projectId, id);
        update.todos(projects, projectId);
    }

    const changeTodoStatus = (projectId, id) => {
        projects[projectId].todos[id].changeDone();
    }

    return { projects, addProject, addTodo, cleanProject, cleanTodo, changeTodoStatus };
}

export { Controller };