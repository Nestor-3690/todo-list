import { Controller } from "../list/listController";
import printList from "../printers/printList";
import printAside from "../printers/printAside";
import { setDialogs } from "../setters/setDialogs";
import { setButtons } from "../setters/setButtons";

export function domController() {
    const list = Controller();

    const setPage = () => {
        printList(list.projects);
        printAside(list.projects);
        setDialogs(list);
        setButtons(list);
    }

    setPage();

    return { setPage };
};