import { Controller } from "./listController";
import printList from "./printList";
import printAside from "./printAside";
import button from "./button";

function setButtons(list) {
    const controller = Controller();
    (function moreInfos() {
        const moreInfosBtn = document.querySelectorAll(".more-infos");
        moreInfosBtn.forEach((btn) => {
            btn.addEventListener("click", () => {
                const todoID = btn.parentElement.id;
                const projectID = btn.parentElement.parentElement.parentElement.id;
                controller.changeInfos(projectID, todoID);
                printList(list.projects);
                setButtons(list);
            })
        })
    })();

    (function check() {
        const checkBtn = document.querySelectorAll(".check-todo");
        checkBtn.forEach((btn) => {
            btn.addEventListener("click", () => {
                const todoID = btn.parentElement.id;
                const projectID = btn.parentElement.parentElement.parentElement.id;
                controller.changeTodoStatus(projectID, todoID);
                printList(list.projects);
                setButtons(list);
            })
        })
    })();

    (function remove() {
        const removeBtn = document.querySelectorAll(".remove-project, .remove-todo");
        removeBtn.forEach((btn) => {
            btn.addEventListener("click", () => {
                if (btn.classList.value === "remove-project") {
                    const projectID = btn.parentElement.id;
                    controller.cleanProject(projectID);
                } else {
                    const todoID = btn.parentElement.id;
                    const projectID = btn.parentElement.parentElement.parentElement.id;
                    controller.cleanTodo(projectID, todoID);
                }
                printList(list.projects);
                printAside(list.projects);
                setButtons(list);
            })
        })
    })();
}

export { setButtons };