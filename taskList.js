const addButton = document.getElementById("newtask-button");
const taskContainer = document.getElementById("tasks-container");
const taskInput = document.getElementById("newtask-input");
    addButton.addEventListener("click", () => {
    addClick();
    });

    function addClick() {
        if(taskInput.value.length) {
        const newTask = document.createElement("div");
        newTask.classList.add("task");
        taskContainer.appendChild(newTask);
        const newTaskName = document.createElement("p");
        newTaskName.classList.add("task-name");
        newTaskName.innerText = taskInput.value;
        newTask.appendChild(newTaskName);
        console.log("add");
        } else {
            alert("You have to add a task first!");
        }
    }