var submit_btn = document.getElementById("submit-btn");
var black_screen_alpha = document.getElementById("black-screen-alpha");
var box_notification = document.getElementById("box-notification");
var box_text_content = document.getElementById("box-text-content");
var input = document.getElementById("input");
var box_btn_type = document.getElementById("box-btn-type");
var close_btn = document.getElementById("close-btn");
var redirecting = document.getElementById("redirecting");

submit_btn.onclick = function() {
    if (input.value == "") {
        black_screen_alpha.style.display = "block";
        box_notification.style.display = "flex";
        box_text_content.innerHTML = "Provide a username";
    }
    else {
        black_screen_alpha.style.display = "block";
        redirecting.style.display = "block";
        setTimeout(function() {
            window.location.href = "index.html";
        }, 8000);
    }
}

box_btn_type.onclick = function() {
    black_screen_alpha.style.display = "none";
    box_notification.style.display = "none";
}

close_btn.onclick = function() {
    black_screen_alpha.style.display = "none";
    box_notification.style.display = "none";
}