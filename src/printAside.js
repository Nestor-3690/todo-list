import newButton from "./button";

export default function(projects) {
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
            todoUI.textContent = todo.title;
            projectTodos.appendChild(todoUI);
        }
        pr.appendChild(projectTodos);
        aside.appendChild(pr);
    }
}