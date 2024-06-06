import { isDate, isFuture } from "date-fns";

function Date() {
    const checkDate = (date) => isDate(date) && isFuture(date);

    return { checkDate };
}

export { Date };