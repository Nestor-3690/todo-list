export default function(projects) {
    for (const project of projects) {
        console.log(project.title);
        for (const todo of project.todos) {
            if (todo.printMoreInfos) {
                console.log(todo.title, todo.description, todo.dueDate);
            } else {
                console.log(todo.title, todo.dueDate, todo.isDone);
            }
        }
    }
}