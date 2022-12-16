// Get the current date and the due date
function timeLeft() {
    let targetDate = new Date(newTaskDueDate.innerText);
    let timeLeft = targetDate - new Date();
    let day = timeLeft / (1000 * 60 * 60 * 24);
    let hour  = timeLeft / (1000 * 60 * 60);
    let min  = timeLeft / (1000 * 60);
    let sec  = timeLeft / 1000;
    if (hour  < 10) hourLeft  = "0" + hour;
    if (min  < 10) minLeft  = "0" + min;
    if (sec  < 10) secLeft  = "0" + sec;
    let time = day + " days " + hour + " hours " + min + " minutes " + sec + " seconds";
    document.querySelector(task.id.task-time-left).innerHTML = time;
}
setInterval(timeLeft, 1000);