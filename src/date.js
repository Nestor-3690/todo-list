import { isDate, isFuture, formatDistanceToNowStrict, format, differenceInDays } from "date-fns";

function DateFunctions() {
    const checkDate = (date) => isDate(date) && isFuture(date);

    const distanceToNow = (date) =>  formatDistanceToNowStrict(date);

    const formatDate = (date) => format(date, 'MM/dd/yyyy HH:mm');

    const daysDifference = (date) => differenceInDays(date, new Date());

    return { checkDate, distanceToNow, formatDate, daysDifference };
}

export { DateFunctions as Date };