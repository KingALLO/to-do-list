function timeLeft() {
    // Get the current date and the due date
    let targetDate = new Date(newTaskDueDate.innerText);
    let timeLeft = targetDate - new Date();

    // Calculate the remaining time in days, hours, minutes, and seconds
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    timeLeft -= days * (1000 * 60 * 60 * 24);
    let hours = Math.floor(timeLeft / (1000 * 60 * 60));
    timeLeft -= hours * (1000 * 60 * 60);
    let minutes = Math.floor(timeLeft / (1000 * 60));
    timeLeft -= minutes * (1000 * 60);
    let seconds = Math.floor(timeLeft / 1000);

    // Format the time values with leading zeros if necessary
    let daysString = days < 10 ? "0" + days : days;
    let hoursString = hours < 10 ? "0" + hours : hours;
    let minutesString = minutes < 10 ? "0" + minutes : minutes;
    let secondsString = seconds < 10 ? "0" + seconds : seconds;

    // Build the time string
    let time = `${daysString} days ${hoursString} hours ${minutesString} minutes ${secondsString} seconds`;

// q: Was macht das $ Zeichen?
// a: Das $ Zeichen ist ein Template Literal, das es ermöglicht, Variablen in Strings einzufügen.

// q: Irgendein Beispiel? 
// a: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

    // Update the time left element
    document.getElementById(thisTask.id).querySelector(".task-time-left").innerHTML = time;
}
// Update the time left every second
setInterval(timeLeft, 1000);