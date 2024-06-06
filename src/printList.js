export default function(projects) {
    for (const project of projects) {
        console.log(project.title);
        for (const todo of project.todos) {
            console.log(todo.title, todo.dueDate, todo.isDone);
        }
    }
}