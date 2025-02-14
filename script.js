// Add click event listener to the document
// Add click event listener to the document
document.addEventListener("click", function () {
    const message = document.getElementById("message");
    message.classList.remove("hidden"); // Remove the hidden class
    message.classList.add("show"); // Add the show class

    // Hide the message after 2 seconds
    setTimeout(() => {
        message.classList.remove("show");
        message.classList.add("hidden"); // Add the hidden class back
    }, 2000);
});