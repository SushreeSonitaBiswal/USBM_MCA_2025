document.getElementById('setAlarm').addEventListener('click', function() {
    const timeInput = document.getElementById('time').value;
    const [hours, minutes] = timeInput.split(':').map(Number);
    
    // Get the current time and set the alarm time
    const now = new Date();
    const alarmTime = new Date();
    
    alarmTime.setHours(hours, minutes, 0, 0);
    
    // If the alarm time is in the past, set it for the next day
    if (alarmTime <= now) {
        alarmTime.setDate(alarmTime.getDate() + 1);
    }
    
    const timeToAlarm = alarmTime - now;
    
    alert(`Alarm set for ${alarmTime.toLocaleTimeString()}.`);
    
    setTimeout(() => {
        alert("Alarm! Time's up!");
    }, timeToAlarm);
});
