import { Controller } from "./listController";
import printList from "./printList";
import printAside from "./printAside";

function setButtons() {
    function moreInfos(list) {
        const controller = Controller();
        const moreInfosBtn = document.querySelectorAll(".more-infos");
        moreInfosBtn.forEach((btn) => {
            btn.addEventListener("click", () => {
                const todoID = btn.parentElement.id;
                const projectID = btn.parentElement.parentElement.parentElement.id;
                controller.changeInfos(projectID, todoID);
                printList(list.projects);
                printAside(list.projects);
                console.log("get clicked");
                moreInfos(list);
            })
        })
    }

    return { moreInfos };
}

export { setButtons };