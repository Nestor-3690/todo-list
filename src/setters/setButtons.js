import { Controller } from "../list/listController";
import printList from "../printers/printList";
import printAside from "../printers/printAside";

function setButtons(list) {
    const controller = Controller();
    (function moreInfos() {
        const moreInfosBtn = document.querySelectorAll(".more-infos");
        moreInfosBtn.forEach((btn) => {
            btn.addEventListener("click", () => {
                const todoID = btn.parentElement.id;
                const projectID = btn.parentElement.parentElement.parentElement.id;
                controller.changeInfos(projectID, todoID);
                printList(list.projects);
                setButtons(list);
            })
        })
    })();

    (function check() {
        const checkBtn = document.querySelectorAll(".check-todo");
        checkBtn.forEach((btn) => {
            btn.addEventListener("click", () => {
                const todoID = btn.parentElement.id;
                const projectID = btn.parentElement.parentElement.parentElement.id;
                controller.changeTodoStatus(projectID, todoID);
                printList(list.projects);
                printAside(list.projects);
                setButtons(list);
            })
        })
    })();

    (function remove() {
        const removeBtn = document.querySelectorAll(".remove-project, .remove-todo");
        removeBtn.forEach((btn) => {
            btn.addEventListener("click", () => {
                if (btn.classList.value === "remove-project") {
                    const projectID = btn.parentElement.id;
                    controller.cleanProject(projectID);
                } else {
                    const todoID = btn.parentElement.id;
                    const projectID = btn.parentElement.parentElement.parentElement.id;
                    controller.cleanTodo(projectID, todoID);
                }
                printList(list.projects);
                printAside(list.projects);
                setButtons(list);
            })
        })
    })();

    (function change() {
        const changeTodoBtn = document.querySelectorAll(".change-todo");
        const changeTodoDialog = document.querySelector("#change-todo-dialog");
        const submitUpdateBtn = document.querySelector("#submit-change-todo");
    
        let todoID = -1 ;
        let projectID = -1;
    
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
                    if (project.title === list.projects[projectID].title) {
                        option.setAttribute("selected", "selected");
                    }
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
            list.changeTodo(projectID, todoID, changetodotitle.value, changetododesc.value, new Date(changeduedate.value), changepriority.value);
            projectID = todoID = -1;
            printList(list.projects);
            printAside(list.projects);
            setButtons(list);
            changeTodoDialog.close();
        });
    }());
}

export { setButtons };