import { Date } from "./date";
import create from "./domTodo";
import newButton from "./button";

export default function(projects) {
    const container = document.querySelector(".main-container");
    container.textContent = '';
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
                todoUI.classList.add("todo");
                newButton("check-todo", todoUI);
                create(todo.title, "title", todoUI);
                create(todo.description, "description", todoUI);
                create(date.formatDate(todo.dueDate), "dueDate", todoUI);
                create(date.distanceToNow(todo.dueDate), "dueDate", todoUI);
                newButton("remove-todo", todoUI);
                projectTodos.appendChild(todoUI);
            } else {
                const todoUI = document.createElement("div");
                todoUI.classList.add("todo");
                newButton("check-todo", todoUI);
                create(todo.title, "todo-title", todoUI);
                create(date.formatDate(todo.dueDate), "dueDate1", todoUI);
                create(date.distanceToNow(todo.dueDate), "dueDate2", todoUI);
                newButton("remove-todo", todoUI);
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