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

// Get the chosen date, from the date picker, and store it in a variable
const dateInput = document.getElementById('newtask-date');

addButton.addEventListener("click", () => {
    addClick();
});

function getTimeLeft(dueDate) {
    const now = new Date();
    const diffInMilliseconds = dueDate - now;
    if (diffInMilliseconds < 0) {
        return "Overdue";
    }
    const diffInMinutes = Math.floor(diffInMilliseconds / 60000);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d:${diffInHours % 24}h:${diffInMinutes % 60}m`;
}

var date = new Date(isoString);

function addClick() {
    // Check if the input box is empty
    if (taskInput.value.length) {
        let task = {
            name: taskInput.value,
        }
        // Hole den Wert des Eingabefelds als ISO-8601-Zeichenfolge
        var isoString = dateInput.value; // z.B. "2022-12-17T12:00"

        console.log("isostring: " + isoString);

        // Wandle die ISO-Zeichenfolge in ein Date-Objekt um
        var date = new Date(isoString);

        // Wandle das Date-Objekt in das gewünschte Format um
        var day = ('0' + date.getDate()).slice(-2);
        var month = ('0' + (date.getMonth() + 1)).slice(-2); // Monate sind 0-basiert
        var year = date.getFullYear();
        var hours = ('0' + date.getHours()).slice(-2);
        var minutes = ('0' + date.getMinutes()).slice(-2);

        // Erstelle das gewünschte Datumsformat
        var formattedDate = day + '.' + month + '.' + year + ' ' + hours + ':' + minutes;

        // Edit Button attributes
        const editButton = document.getElementsByClassName("edit-button");

        // Create a new task
        const newTask = document.createElement("div");

        newTask.innerHTML = `
        <p class="task-name">${task.name}</p>
        <p class="task-date">${new Date().toLocaleDateString()}</p>
        <p class="task-priority">Medium</p>
        <p class="task-due">${formattedDate}</p>
        <p class="task-time-left">${getTimeLeft(date)}</p>
        `;

        newTask.classList.add("task");
        // Add a unique id to the new task (to be used in the edit and delete function)
        newTask.id = "task-" + Date.now();
        taskContainer.appendChild(newTask);

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

            // Get the task name, priority, date and edit button
            const taskName = document.getElementById(thisTask.id).querySelector(".task-name");
            const taskPriority = document.getElementById(thisTask.id).querySelector(".task-priority");
            const taskDue = document.getElementById(thisTask.id).querySelector(".task-due");
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
                taskDue.contentEditable = "false";
                taskPriority.contentEditable = "false";

                // Make the edit button's shadow orange when the mouse is over it and remove the shadow when the mouse leaves it
                taskEdit.addEventListener("mouseenter", () => {
                    taskEdit.style.boxShadow = "#f5a52a 0 2px 10px";
                });

                taskEdit.addEventListener("mouseleave", () => {
                    taskEdit.style.boxShadow = "none";
                });

                // Change the save button back to an edit button and change its background color
                taskEdit.innerHTML = '<i class="fas fa-pencil"></i>';
                taskEdit.style.backgroundImage = "linear-gradient( 178.1deg,  rgba(246,199,34,1) 13%, rgba(245,149,33,1) 86.3% )";
            } else {
                // Make the task name and date editable
                taskName.contentEditable = "true";
                taskDue.contentEditable = "true";
                taskPriority.contentEditable = "true";

                // Change the edit button to a save button and change its background color
                taskEdit.innerHTML = '<i class="fas fa-save"></i>';
                taskEdit.style.backgroundImage = "linear-gradient(90deg, #9ebd13 0%, #008552 100%)";

                // Make the edit button's shadow green when the mouse is over it and remove the shadow when the mouse leaves it
                taskEdit.addEventListener("mouseenter", () => {
                    taskEdit.style.boxShadow = "#008631 0 2px 10px";
                });

                taskEdit.addEventListener("mouseleave", () => {
                    taskEdit.style.boxShadow = "none";
                });
            }
        });

        setInterval(() => {
            const timeLeftElement = newTask.querySelector('.task-time-left');
            timeLeftElement.textContent = getTimeLeft(date);
        }, 60000);

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