/** 
 * This file contains the code for the buttons.
 * The code checks if the input box is empty, if not, it creates a new task.
 * Furthermore, it adds the edit and delete buttons to the new task.
 * For every added edit and delete button, an event listener is added, which
 * checks if the button was clicked and apply their respective functions to the 
 * task they are in. 
 **/ 

// Get the buttons from the HTML file and store them in variables
// This is needed to create a new task
const addButton = document.getElementById("newtask-button");
const taskContainer = document.getElementById("tasks-container");
const taskInput = document.getElementById("newtask-input");

// Edit Button attributes
const editButton = document.getElementsByClassName("edit-button");

addButton.addEventListener("click", () => {
    addClick();
});

function addClick() {
    // Check if the input box is empty
    if (taskInput.value.length) {
        // Create a new task
        const newTask = document.createElement("div");
        newTask.classList.add("task");
        newTask.id = "task-" + Date.now(); // Add a unique id to the new task (to be used in the edit function)
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

        newTaskEdit.addEventListener("click", () => {
            // Get the task that was clicked
            const thisTask = document.getElementById(newTask.id);

            // Get the task name and date and edit button
            const taskName = document.getElementById(thisTask.id).querySelector(".task-name");
            const taskDate = document.getElementById(thisTask.id).querySelector(".task-date");
            const taskEdit = document.getElementById(thisTask.id).querySelector(".edit-button");

            // Check the current value of the contentEditable attribute
            if (taskName.contentEditable === "true") {
                // Check if the task name is longer than 1 character and if not, reset the task name to the default value
                if (taskName.innerText.length == 0) {
                    // Set the task name to "Unnamed Task"
                    taskName.innerText = "Unnamed Task";
                    alert("Task name can't be shorter than 1 character!");
                }

                // Make the task name and date uneditable
                taskName.contentEditable = "false";
                taskDate.contentEditable = "false";

                // Change the save button back to an edit button and change its background color
                taskEdit.innerHTML = '<i class="fas fa-pencil"></i>';
                taskEdit.style.backgroundImage = "linear-gradient( 178.1deg,  rgba(246,199,34,1) 13%, rgba(245,149,33,1) 86.3% )";
            } else {
                // Make the task name and date editable
                taskName.contentEditable = "true";
                taskDate.contentEditable = "true";

                // Change the edit button to a save button and change its background color
                taskEdit.innerHTML = '<i class="fas fa-save"></i>';
                taskEdit.style.backgroundImage = "linear-gradient(90deg, #9ebd13 0%, #008552 100%)";
            }
        });

        // Add a delete button to the span
        const newTaskDelete = document.createElement("button");
        newTaskDelete.classList.add("delete-button");
        // Add an icon to the delete button
        const newTaskDeleteIcon = document.createElement("i");
        newTaskDelete.appendChild(newTaskDeleteIcon);
        newTaskDeleteIcon.classList.add("fas", "fa-trash-alt");
        newButtonsSpan.appendChild(newTaskDelete);

        newTaskDelete.addEventListener("click", () => {
            // Get the task that was clicked
            const thisTask = document.getElementById(newTask.id);

            // open a popup to confirm the deletion
            const confirmDelete = confirm("Are you sure you want to delete this task?");

            // If the user confirms the deletion, remove the task
            if (confirmDelete === true) thisTask.remove();
        });

        // Add the span to the new task
        newTask.appendChild(newButtonsSpan);
    } else {
        // If the input box is empty, show an alert
        alert("You have to add a task first!");
    }
}