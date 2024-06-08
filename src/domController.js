import { Controller } from "./listController";
import printList from "./printList";
import printAside from "./printAside";

export function domController() {
    const list = Controller();

    const setPage = () => {
        printList(list.projects);
        printAside(list.projects);
    }

    setPage();

    return { setPage };
};