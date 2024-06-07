import { Date } from "./date";
import create from "./domTodo";

export default function(projects) {
    const container = document.querySelector(".main-container");
    const date = Date();
    for (const project of projects) {
        const projectUI = document.createElement("div");
        projectUI.classList.add("project");
        projectUI.textContent = project.title;
        for (const todo of project.todos) {
            if (todo.printMoreInfos) {
                create(todo.title, "title", projectUI);
                create(todo.description, "description", projectUI);
                create(date.distanceToNow(todo.dueDate), "dueDate", projectUI);
                create(todo.isDone, "isDone", projectUI);
            } else {
                create(todo.title, "title", projectUI);
                create(date.distanceToNow(todo.dueDate), "dueDate", projectUI);
                create(todo.isDone, "isDone", projectUI);
            }
        }
        container.appendChild(projectUI);
    }
}