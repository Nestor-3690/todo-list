import { list } from "./list";
import { Project } from "./project";
import { Todo } from "./todo";
import { UpdateID } from "./updateID";
import { Date } from "./date";
import { Storage } from "./storage";

function Controller() {
    const projects = list.projects;
    const date = Date();
    const update = UpdateID();
    const storage = Storage();

    const addProject = (title) => {
        if (!title) {
            return false;
        } else {
            const project = new Project(projects, title);
            list.appendProject(project);
        }
        storage.updateList(projects);
    }

    const addTodo = (project, title, description, dueDate, priority) => {
        if (!title || !dueDate || !date.checkDate(dueDate)) {
            return false;
        } else {
            if (description === "") {
                description = "No description";
            };
            const todo = new Todo(projects[project], title, description, dueDate, priority);
            list.appendTodo(todo, project);
        }
        storage.updateList(projects);
    };

    const cleanProject = (id) => {
        list.removeProject(id);
        update.projects(projects);
        storage.updateList(projects);
    }

    const cleanTodo = (projectId, id) => {
        list.removeTodo(projectId, id);
        update.todos(projects, projectId);
        storage.updateList(projects);
    }

    const changeTodoStatus = (projectId, id) => {
        if (projects[projectId].todos[id].isDone === true) {
            projects[projectId].todos[id].isDone = false;
        } else {
            projects[projectId].todos[id].isDone = true;
        }
        storage.updateList(projects);
    }

    const changeInfos = (projectId, id) => {
        if (projects[projectId].todos[id].printMoreInfos === true) {
            projects[projectId].todos[id].printMoreInfos = false;
        } else {
            projects[projectId].todos[id].printMoreInfos = true;
        }
        storage.updateList(projects);
    }

    return { projects, addProject, addTodo, cleanProject, cleanTodo, changeTodoStatus, changeInfos };
}

export { Controller };