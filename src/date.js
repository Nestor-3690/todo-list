import { isDate, isAfter } from "date-fns";

function Date() {
    const checkDate = (date) => isDate(date) && isAfter(date);
}