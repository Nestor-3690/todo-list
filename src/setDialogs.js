import printList from "./printList";
import printAside from "./printAside";
import { setButtons } from "./setButtons";

export function setDialogs(list) {

    const addProjectBtn = document.querySelector("#ap-button");
    const projectDialog = document.querySelector("#project-dialog")
    const submitProjectBtn = document.querySelector("#submit-project");

    const addTodoBtn = document.querySelector("#at-button");
    const todoDialog = document.querySelector("#todo-dialog");
    const submitTodoBtn = document.querySelector("#submit-todo");

    addProjectBtn.addEventListener("click", () => projectDialog.showModal());
    submitProjectBtn.addEventListener("click", (event) => {
        event.preventDefault();
        list.addProject(prTitle.value);
        printList(list.projects);
        printAside(list.projects);
        setButtons(list);
    })
    addTodoBtn.addEventListener("click", () => {
        todoDialog.showModal();
        const selectProject = document.querySelector("#todoproject");
        selectProject.textContent = '';
        for (const project of list.projects) {
            const option = document.createElement("option");
            option.value = `${project.id}`;
            option.textContent = `${project.title}`;
            selectProject.appendChild(option);
        }
    });
    submitTodoBtn.addEventListener("click", (event) => {
        event.preventDefault();
        list.addTodo(todoproject.value, todotitle.value, tododesc.value, new Date(duedate.value), priority.value);
        todoDialog.close();
        printList(list.projects);
        printAside(list.projects);
        setButtons(list);
    });
};