function Storage() {

    const checkList = () => {
        if (!localStorage.getItem("list")) {
            localStorage.setItem("list", JSON.stringify([]))
            return [];
        } else {
            return JSON.parse(localStorage.getItem("list"));
        }
    }

    const updateList = (list) => {
        localStorage.setItem("list", JSON.stringify(list));
    }

    return { checkList, updateList };
}

export { Storage };