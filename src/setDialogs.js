import printList from "./printList";
import printAside from "./printAside";
import { setButtons } from "./setButtons";

export function setDialogs(list) {

    const addProjectBtn = document.querySelector("#ap-button");
    const projectDialog = document.querySelector("#project-dialog")
    const submitProjectBtn = document.querySelector("#submit-project");

    const addTodoBtn = document.querySelector("#at-button");
    const todoDialog = document.querySelector("#todo-dialog");
    const submitTodoBtn = document.querySelector("#submit-todo");

    addProjectBtn.addEventListener("click", () => projectDialog.showModal());
    submitProjectBtn.addEventListener("click", (event) => {
        event.preventDefault();
        list.addProject(prTitle.value);
        printList(list.projects);
        printAside(list.projects);
        setButtons(list);
    })
    addTodoBtn.addEventListener("click", () => {
        todoDialog.showModal();
        const selectProject = document.querySelector("#todoproject");
        selectProject.textContent = '';
        for (const project of list.projects) {
            const option = document.createElement("option");
            option.value = `${project.id}`;
            option.textContent = `${project.title}`;
            selectProject.appendChild(option);
        }
    });
    submitTodoBtn.addEventListener("click", (event) => {
        event.preventDefault();
        list.addTodo(todoproject.value, todotitle.value, tododesc.value, new Date(duedate.value), priority.value)
        printList(list.projects);
        printAside(list.projects);
        setButtons(list);
    });

    const changeTodoBtn = document.querySelectorAll(".change-todo");
    const changeTodoDialog = document.querySelector("#change-todo-dialog");
    const submitUpdateBtn = document.querySelector("#submit-change-todo");

    let todoID = 0 ;
    let projectID = 0;

    changeTodoBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            todoID = btn.parentElement.id;
            projectID = btn.parentElement.parentElement.parentElement.id;

            changeTodoDialog.showModal();
            const changeProject = document.querySelector("#changetodoproject");
            changeProject.textContent = '';
            for (const project of list.projects) {
                const option = document.createElement("option");
                option.value = `${project.id}`;
                option.textContent = `${project.title}`;
                changeProject.appendChild(option);
            }
            const changeTitle = document.querySelector("#changetodotitle");
            changeTitle.value = list.projects[projectID].todos[todoID].title;

            const changeDesc = document.querySelector("#changetododesc");
            changeDesc.value = list.projects[projectID].todos[todoID].description;

            const changePriority = document.querySelector("#changepriority");
            changePriority.value = list.projects[projectID].todos[todoID].priority;
        });
    })
    submitUpdateBtn.addEventListener("click", (event) => {
        event.preventDefault();
        if (projectID) {
            list.changeTodo(projectID, changetodoproject.value, todoID, changetodotitle.value, changetododesc.value, new Date(changeduedate.value), priority.value);
        }
        printList(list.projects);
        printAside(list.projects);
        setButtons(list);
        setDialogs(list);
        changeTodoDialog.close();
    });
};