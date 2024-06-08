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

        addProjectBtn.addEventListener("click", () => projectDialog.showModal());
        submitProjectBtn.addEventListener("click", (event) => {
            event.preventDefault();
            list.addProject(prTitle.value);
            printList(list.projects);
            printAside(list.projects);
        })
    }

    setPage();

    return { setPage };
};