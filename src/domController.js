import { Controller } from "./listController";
import printList from "./printList";
import './styles.css';

export function domController() {
    const list = Controller();

    const setList = () => {
        printList(list.projects);

    }

    setList();

    return { setList };
};