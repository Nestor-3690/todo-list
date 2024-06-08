import { Controller } from "./listController";
import printList from "./printList";
import printAside from "./printAside";

export function domController() {
    const list = Controller();

    const setList = () => {
        printList(list.projects);
        printAside(list.projects);
    }

    setList();

    return { setList };
};