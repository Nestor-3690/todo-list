import { Controller } from "./listController";
import printList from "./printList";
import printAside from "./printAside";

export function domController() {
    const list = Controller();

    const setPage = () => {
        printList(list.projects);
        printAside(list.projects);
        setInteractivity();
    }

    const setInteractivity = () => {
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
        })
        addTodoBtn.addEventListener("click", () => { 
            todoDialog.showModal()
            const selectProject = document.querySelector("#todoproject");
            for (const project of list.projects) {
                const option = document.createElement("option");
                option.textContent = '';
                option.value = `${project.id}`;
                option.textContent = `${project.title}`;
                selectProject.appendChild(option);
            }
        });
        submitTodoBtn.addEventListener("click", (event) => {
            event.preventDefault();
        })
    }

    setPage();

    return { setPage };
};