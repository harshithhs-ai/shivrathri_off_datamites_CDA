function selectDevice(choice) {
    // Choice na save maadona
    localStorage.setItem('deviceType', choice);
    
    console.log("Device selected: " + choice);
    
    // Welcome message and redirection
    if (choice === 'Mobile') {
        window.location.href = "mobile-offer.html";
    } else {
        window.location.href = "laptop-offer.html";
    }
}