import { Controller } from "./listController";
import printList from "./printList";

export function domController() {
    const list = Controller();

    const setList = () => {
        printList(list.projects);

    }

    setList();

    return { setList };
};