import { Controller } from "./listController";
import printList from "./printList";
import printAside from "./printAside";
import button from "./button";

function setButtons() {
    const controller = Controller();
    function moreInfos(list) {
        const moreInfosBtn = document.querySelectorAll(".more-infos");
        moreInfosBtn.forEach((btn) => {
            btn.addEventListener("click", () => {
                const todoID = btn.parentElement.id;
                const projectID = btn.parentElement.parentElement.parentElement.id;
                controller.changeInfos(projectID, todoID);
                printList(list.projects);
                moreInfos(list);
                check(list);
            })
        })
    }

    function check(list) {
        const checkBtn = document.querySelectorAll(".check-todo");
        checkBtn.forEach((btn) => {
            btn.addEventListener("click", () => {
                const todoID = btn.parentElement.id;
                const projectID = btn.parentElement.parentElement.parentElement.id;
                controller.changeTodoStatus(projectID, todoID);
                printList(list.projects);
                moreInfos(list);
                check(list);
            })
        })
    }

    function remove(list) {
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
                moreInfos(list);
                check(list);
                remove(list);
            })
        })
    }

    return { moreInfos, check, remove };
}

export { setButtons };