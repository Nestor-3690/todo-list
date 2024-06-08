import { Controller } from "./listController";
import printList from "./printList";
import printAside from "./printAside";
import { setDialogs } from "./setDialogs";
import { setButtons } from "./setButtons";

export function domController() {
    const list = Controller();

    const setPage = () => {
        printList(list.projects);
        printAside(list.projects);
        setDialogs(list);
        const buttons = setButtons();
        buttons.moreInfos(list);
        buttons.check(list);
        buttons.remove(list);
    }

    setPage();

    return { setPage };
};