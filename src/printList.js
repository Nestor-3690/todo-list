import { Date } from "./date";

export default function(projects) {
    const date = Date();
    for (const project of projects) {
        console.log(project.title);
        for (const todo of project.todos) {
            if (todo.printMoreInfos) {
                console.log(todo.title, todo.description, date.distanceToNow(todo.dueDate));
            } else {
                console.log(todo.title, date.formatDate(todo.dueDate), date.distanceToNow(todo.dueDate), todo.isDone);
            }
        }
    }
}