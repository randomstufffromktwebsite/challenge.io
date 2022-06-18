var submit_btn = document.getElementById("submit-btn");
var black_screen_alpha = document.getElementById("black-screen-alpha");
var box_notification = document.getElementById("box-notification");
var box_text_content = document.getElementById("box-text-content");
var input = document.getElementById("input");
var box_btn_type = document.getElementById("box-btn-type");
var close_btn = document.getElementById("close-btn");
var redirecting = document.getElementById("redirecting");

function keyDown(e) {
    if (e.keyCode == 13) {
        submit_btn.click();
    }
}

document.addEventListener("keydown", keyDown);

submit_btn.onclick = function() {
    if (input.value == "") {
        black_screen_alpha.style.display = "block";
        box_notification.style.display = "flex";
        box_text_content.innerHTML = "Provide a username";
    }
    else {
        black_screen_alpha.style.display = "block";
        redirecting.style.display = "block";
        document.removeEventListener("keydown", keyDown);
        setTimeout(function() {
            document.getElementById("video").style.display = "flex";
            const video = document.createElement("video");
            video.className = "cameraVideo";
            video.setAttribute("playsinline", "");
            video.setAttribute("autoplay", "");
            self.muted = true;
            self.controls = false;

            const facingMode = "user";
            const constraints = {
                audio: true,
                video: {
                    facingMode
                }
            };

            navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
                const videoTracks = stream?.getVideoTracks() || [];
                const selectedVideoTrack = videoTracks[0];
                const newStream = new MediaStream();
                newStream.addTrack(selectedVideoTrack);
                video.srcObject = newStream;
            });

            document.getElementById("video").appendChild(video);

            const audio = document.createElement("audio");
            audio.setAttribute("autoplay", "");
            document.getElementById("video").appendChild(audio);
            
            const script = document.createElement("script");
            script.src = "./js/voice.js";
            document.body.appendChild(script);
        }, 2000);
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