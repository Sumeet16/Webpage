function btnerror() {
    var email = document.querySelector(".email-box").value;
    const error = document.getElementById("error");
    var error_message = document.getElementById("error-message");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email == ""){
        error.style.visibility = "visible"
        error_message.style.visibility = "visible"
    } else {
        error.style.visibility = "hidden"
        error_message.style.visibility = "hidden"
    }
    
    if (email.match(pattern)) {
        error.style.visibility = "hidden"
        error_message.style.visibility = "hidden"
    } else {
        error.style.visibility = "visible"
        error_message.style.visibility = "visible"
    }
}