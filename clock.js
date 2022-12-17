const add0 = (n) => (n < 10 ? "0" + n : n);

// This function inserts the current time into the clock element
function currentTime() {
    let day = new Date();
    document.getElementById("clock").innerHTML = 
    `${add0(day.getHours())}:${add0(day.getMinutes())}:${add0(day.getSeconds())}`;
}
setInterval(currentTime, 1000);