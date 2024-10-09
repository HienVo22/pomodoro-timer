const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")
const timer = document.getElementById("timer")

//intervals to store the time left (25 mins) and the intervals ID
let time_left = 1500;
let interval = null; //innit as null

//minutes and seconds calculations
const update_timer = () => {
    const minutes = Math.floor(time_left / 60);
    const seconds = time_left % 60;
    //formatting the timer to have 2 digits always
    timer.innerHTML =
     `${minutes.toString().padStart(2, "0")}
     :
     ${seconds.toString().padStart(2, "0")}`;
};
//start timer function
const start_timer = () => {
    // Prevent multiple intervals by checking if one already exists
    if (interval === null) {
        interval = setInterval(() => {
            time_left--;
            update_timer();

            if (time_left <= 0) { 
                clearInterval(interval);
                interval = null; // Reset the interval variable
                alert("Time's up!");
                time_left = 1500;
                update_timer();
            }
        }, 1000); // Execute every 1000 ms or 1s
    }
};
//stop function
const stop_timer = () => {
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
};
//reset timer function
const reset_timer = () => {
    clearInterval(interval);
    interval = null;
    time_left = 1500;
    update_timer();
};

update_timer();

//event listeners
start.addEventListener("click", start_timer);
stop.addEventListener("click", stop_timer);
reset.addEventListener("click", reset_timer);



