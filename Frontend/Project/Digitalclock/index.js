// //function updateClock()
// function updateClock(){
//     const clock = document.getElementById("clock");
//     const now = new Date();

// let hours = now.getHours();
// let minutes = now.getMinutes();
// let seconds = now.getSeconds();

// hours = hour <10 ? "0" + hours :hours;
// minutes = minutes <10 ? "0" + minutes : minutes;
// seconds = seconds <10 ? "0" + seconds : seconds;

// clock.textContent = `${Hours} :${minutes}:${seconds}`;
// }

// updateClock ();//invoke or call
// setInterval(updateClock,2000);

// Calling showTime function at every second


// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

     hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;


let currentTime =hour +":" +min +":" +sec ;
}

// Displaying the time
document.getElementById("clock").innerText = currentTime;


setInterval(showTime, 1000)
