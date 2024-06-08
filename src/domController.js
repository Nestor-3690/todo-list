import { Controller } from "./listController";
import printList from "./printList";
import printAside from "./printAside";
import { setDialogs } from "./setDialogs";

export function domController() {
    const list = Controller();

    const setPage = () => {
        printList(list.projects);
        printAside(list.projects);
        setDialogs(list);
    }

    setPage();

    return { setPage };
};