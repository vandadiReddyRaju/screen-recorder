let video = document.querySelector("video");
let recordBtnCont = document.querySelector(".screen-recorder");
let recordBtn = document.querySelector(".record-btn");

let captureCont = document.querySelector(".capture");
let captureBtn = document.querySelector(".capture-btn");





let recorder;

let recordFlag = false;

let chucks = [];

let constraints = {
    audio : true,
    video : true
}



navigator.mediaDevices.getUserMedia(constraints)

.then((stream)=>{
    console.log(stream);
    video.srcObject = stream;

    recorder = new MediaRecorder(stream);

    recorder.addEventListener("start",(e)=>{
        chucks = [];
    })

    recorder.addEventListener("dataavailable",(e)=>{
        chucks.push(e.data);
    })

    recorder.addEventListener("stop",(e)=>{
        let blob = new Blob(chucks,{type : "video/mp4" });
        let videoUrl = URL.createObjectURL(blob);
        console.log(URL);
        let a = document.createElement("a");
        a.href = videoUrl;
        a.download = "stream.mp4";
        a.click();

        let anchor = document.createElement("a");
        anchor.href = videoUrl;
        anchor.download = "stream.mp4";
        anchor.click();
    })

    recordBtnCont.addEventListener("click",(e) =>{
        if(!recorder) return;

        recordFlag = !recordFlag;

        if(recordFlag){
            recorder.start();
            recordBtn.classList.add("scale-record");
            startTime();
        }else{
            recorder.stop();
            recordBtn.classList.remove("scale-record");
            stopTimer();
        }
    })


});

let timer = document.querySelector(".timer");

let timerId;


function startTime(){
    timer.style.display ="block";
    
    let count  = 0;

    function dispalyTimer(){
        let seconds = count;
        
        let hours = Number.parseInt(seconds/3600);
        seconds = seconds % 3600;

        let minutes = Number.parseInt(seconds/60);
        seconds = seconds % 60;

        let remseconds = seconds;

        hours = (hours < 10) ? `0${hours}` : hours;
        minutes = ( minutes < 10) ? `0${minutes}` : minutes;
        remseconds = (remseconds < 10 ) ? `0${remseconds}` : remseconds;
        timer.innerText = `${hours} : ${minutes} : ${remseconds}`
        count++;
    }

    timerId = setInterval(dispalyTimer, 1000);
}

function stopTimer(){
    clearInterval(timerId);
    timer.style.display = "none";
}


captureCont.addEventListener("click",(e)=>{
    captureCont.classList.add("scale-capture");

    let canvas = document.createElement("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    let imageUrl = canvas.toDataURL("image/jpeg");

    let anchor = document.createElement("a");
    anchor.href = imageUrl;
    anchor.download = "image.jpg";
    anchor.click();

    let tool = canvas.getContext("2d");

    tool.fillStyle = transparentColor;

    tool.drawImage(video,0,0,canvas.height,canvas.width);

    setTimeout(()=>{
        captureCont.classList.remove("scale-capture");
    })
})

let filter = document.querySelector(".filter-layer");

let altFilter = document.querySelectorAll(".filter");


altFilter.forEach((each) =>{
    each.addEventListener("click", (e)=>{
        transparentColor = getComputedStyle(each).getPropertyValue("background-color");

        filter.style.backgroundColor = transparentColor;
    })
})