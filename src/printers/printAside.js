import { Date } from "../date";

export default function(projects) {
    const date = Date();
    const aside = document.querySelector(".aside-container")
    aside.textContent = '';
    for (const project of projects) {
        const pr = document.createElement("div");
        pr.classList.add("aside-project")
        const projectTitle = document.createElement("div");
        projectTitle.classList.add("aside-project-title");
        projectTitle.textContent = project.title;
        pr.appendChild(projectTitle);
        const projectTodos = document.createElement("div");
        projectTodos.classList.add("aside-todos");
        for (const todo of project.todos) {
            const todoUI = document.createElement("div");
            todoUI.classList.add("aside-todo");
            if (date.daysDifference(todo.dueDate) < 0) {
                todoUI.classList.add("passed-date");
            } else if (date.daysDifference(todo.dueDate) < 7) {
                todoUI.classList.add("close-date");
            }
            if (todo.isDone === true) {
                todoUI.classList.add("done");
            }
            todoUI.textContent = todo.title;
            projectTodos.appendChild(todoUI);
        }
        pr.appendChild(projectTodos);
        aside.appendChild(pr);
    }
}