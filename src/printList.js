import { Date } from "./date";
import create from "./domTodo";

export default function(projects) {
    const container = document.querySelector(".main-container");
    const date = Date();
    for (const project of projects) {
        const projectUI = document.createElement("div");
        projectUI.classList.add("project");
        const projectTitle = document.createElement("div");
        projectTitle.classList.add("project-title")
        projectTitle.textContent = project.title;
        projectUI.appendChild(projectTitle);
        const projectTodos  = document.createElement("div");
        projectTodos.classList.add("todos-container");
        for (const todo of project.todos) {
            if (todo.printMoreInfos) {
                const todoUI = document.createElement("div");
                create(todo.title, "title", todoUI);
                create(todo.description, "description", todoUI);
                create(date.formatDate(todo.dueDate), "dueDate", todoUI);
                create(date.distanceToNow(todo.dueDate), "dueDate", todoUI);
                const button = document.createElement("button");
                button.classList.add("remove-todo");
                todoUI.appendChild(button);
                projectTodos.appendChild(todoUI);
            } else {
                const todoUI = document.createElement("div");
                create(todo.title, "todo-title", todoUI);
                create(date.formatDate(todo.dueDate), "dueDate", todoUI);
                create(date.distanceToNow(todo.dueDate), "dueDate", todoUI);
                const button = document.createElement("button");
                button.classList.add("remove-todo");
                todoUI.appendChild(button);
                projectTodos.appendChild(todoUI);
            }
        }
        projectUI.appendChild(projectTodos);
        const button = document.createElement("button");
        button.classList.add("remove-project");
        projectUI.appendChild(button);
        container.appendChild(projectUI);
    }
}