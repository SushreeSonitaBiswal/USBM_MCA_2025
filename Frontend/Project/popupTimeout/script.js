document.getElementById('notifyBtn').addEventListener('click', function() {
    const notification = document.getElementById('notification');
    
    // Show the notification
    notification.classList.remove('hidden');
    
    // Hide the notification after 5 seconds
    setTimeout(() => {
        notification.classList.add('hidden');
        alert(' Time out !!');
    }, 5000);
    
});

