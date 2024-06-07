function Storage() {

    const checkList = () => {
        if (!localStorage.getItem("list")) {
            localStorage.setItem("list", JSON.stringify([]))
            return [];
        } else {
            return JSON.parse(localStorage.getItem("list"));
        }
    }

    return { checkList };
}

export { Storage };