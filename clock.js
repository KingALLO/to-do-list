function currentTime() {
    let day = new Date();
    let hour = day.getHours();
    let min = day.getMinutes();
    let sec = day.getSeconds();
    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    let time = hour + ":" + min + ":" + sec;
    document.getElementById("clock").innerHTML = time;
}
setInterval(currentTime, 1000);