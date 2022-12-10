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

        // Add the span, that contains the edit and delete buttons
        const newButtonsSpan = document.createElement("span");
        newButtonsSpan.classList.add("delete-and-edit");
        
        // Add an edit button to the span
        const newTaskEdit = document.createElement("button");
        newTaskEdit.classList.add("edit-button");
        // Add an icon to the edit button
        const newTaskEditIcon = document.createElement("i");
        newTaskEditIcon.classList.add("fas", "fa-pencil");
        newTaskEdit.appendChild(newTaskEditIcon);
        newButtonsSpan.appendChild(newTaskEdit);

        // Add a delete button to the span
        const newTaskDelete = document.createElement("button");
        newTaskDelete.classList.add("delete-button");
        // Add an icon to the delete button
        const newTaskDeleteIcon = document.createElement("i");
        newTaskDelete.appendChild(newTaskDeleteIcon);
        newTaskDeleteIcon.classList.add("fas", "fa-trash-alt");
        newButtonsSpan.appendChild(newTaskDelete);

        // Add the span to the new task
        newTask.appendChild(newButtonsSpan);        
        } else {
            // If the input box is empty, show an alert
            alert("You have to add a task first!");
        }
    }