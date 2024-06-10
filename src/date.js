import { isDate, isFuture, formatDistanceToNowStrict, format } from "date-fns";

function Date() {
    const checkDate = (date) => isDate(date) && isFuture(date);

    const distanceToNow = (date) =>  formatDistanceToNowStrict(date);

    const formatDate = (date) => format(date, 'MM/dd/yyyy HH:mm');

    return { checkDate, distanceToNow, formatDate };
}

export { Date };