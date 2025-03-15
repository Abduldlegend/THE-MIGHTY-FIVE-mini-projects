const stopPause = document.querySelector(".stopPalyBtn");

const reset = document.querySelector(".restartBtn");

// Main timer variabales

let seconds = 0;
let minutes = 0;
let hours = 0;

// Leading values variables 

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// set Interval and timer status

let timeInterval = null;

let timerStatus = "stopped";


function timer() {

    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();

    } else {
        leadingSeconds = seconds;
    }

    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();

    } else {
        leadingMinutes = minutes;
    }

    if (hours < 10) {
        leadingHours = "0" + hours.toString();

    } else {
        leadingHours = hours;
    }


    let dispayTime = document.querySelector(".watch").innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}


stopPause.addEventListener("click", () => {

    if (timerStatus === "stopped") {
        timeInterval = window.setInterval(timer, 1000);

        // document.querySelector(".stopPause").innerHTML = `<i class="fa-solid fa-pause id="pause"></i>"`;
        timerStatus = "started";

    } else {
        window.clearInterval(timeInterval);
        // document.querySelector(".stopPause").innerHTML = `<i class="fa-solid fa-play" id="pay"></i> `;
        timerStatus = "stopped";
    }


});


reset.addEventListener("click", ()=> {
    
    window.clearInterval(timeInterval);

    seconds = 0;
    minutes = 0;
    hours = 0;

    document.querySelector(".watch").innerHTML = "00:00:00"

})