import { Controller } from "./listController";
import printList from "./printList";
import printAside from "./printAside";

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

    return { moreInfos, check };
}

export { setButtons };