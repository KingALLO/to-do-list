const addButton = document.getElementById("newtask-button");
const taskContainer = document.getElementById("tasks-container");
const taskInput = document.getElementById("newtask-input");
    addButton.addEventListener("click", () => {
    addClick();
    });

    function addClick() {
        // Check if the input box is empty
        if(taskInput.value.length) {
        // Create a new task
        const newTask = document.createElement("div");
        newTask.classList.add("task");
        taskContainer.appendChild(newTask);

        // Add the text value from the input box to the new task
        const newTaskName = document.createElement("p");
        newTaskName.classList.add("task-name");
        newTaskName.innerText = taskInput.value;
        newTask.appendChild(newTaskName);

        // Add a date to the new task
        const newTaskDate = document.createElement("p");
        newTaskDate.classList.add("task-date");
        newTaskDate.innerText = new Date().toLocaleDateString();
        newTask.appendChild(newTaskDate);
        } else {
            // If the input box is empty, show an alert
            alert("You have to add a task first!");
        }
    }