import { Date } from "./date";
import create from "./domTodoPart";
import newButton from "./button";

export default function(projects) {
    const container = document.querySelector(".main-container");
    container.textContent = '';
    const date = Date();
    for (const project of projects) {
        const projectUI = document.createElement("div");
        projectUI.classList.add("project");
        projectUI.setAttribute("id", `${project.id}`);
        const projectTitle = document.createElement("div");
        projectTitle.classList.add("project-title")
        projectTitle.textContent = project.title;
        projectUI.appendChild(projectTitle);
        const projectTodos  = document.createElement("div");
        projectTodos.classList.add("todos-container");
        for (const todo of project.todos) {
            const todoUI = document.createElement("div");
            todoUI.classList.add("todo");
            if (todo.priority === "Critical") {
                todoUI.classList.add("critical");
            } else if (todo.priority === "High Priority") {
                todoUI.classList.add("high-priority");
            } else if (todo.priority === "Neutral") {
                todoUI.classList.add("neutral");
            } else if (todo.priority === "Low Priority") {
                todoUI.classList.add("low-priority");
            }
            todoUI.setAttribute("id", `${todo.id}`);
            if (todo.isDone === true) {
                newButton("check-todo", todoUI, "check-todo");
            } else {
                newButton("check-todo", todoUI);
            };
            create(todo.title, "todo-title", todoUI);
            create(date.formatDate(todo.dueDate), "dueDate1", todoUI);
            if (todo.printMoreInfos) {
                create(todo.description, "description", todoUI);
                newButton("more-infos", todoUI, "more-infos");
            } else {
                newButton("more-infos", todoUI);
            }
            newButton("change-todo", todoUI);
            newButton("remove-todo", todoUI);
            projectTodos.appendChild(todoUI);
        }
        projectUI.appendChild(projectTodos);
        const button = document.createElement("button");
        button.classList.add("remove-project");
        projectUI.appendChild(button);
        container.appendChild(projectUI);
    }
}