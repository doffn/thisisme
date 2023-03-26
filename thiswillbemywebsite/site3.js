setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours() - 6;
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
    
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
    }, 1000);

// open web cam


  
const video = document.querySelector('#videostream');
const audio = document.querySelector('#audiostream');

const captureVideoButton = document.querySelector('#startBtn');
const stopVideoButton = document.querySelector('#stopBtn');

//Capture Video
captureVideoButton.onclick = function() {
    navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true
    })
    .then(stream => {
    window.localStream = stream;
    video.srcObject = stream;
    audio.srcObject = stream;
    })
    .catch((err) => {
    console.log(err);
    });
};

stopVideoButton.onclick = function() {
    localStream.getVideoTracks()[0].stop();
    video.src = '';
    
    localStream.getAudioTracks()[0].stop();
    audio.src = '';
    window.location.reload();
    console.log("hi")
};

function cloneItem() {
    var item = document.querySelector("#part");
    var list = document.querySelector(".videoDisplay");
    var clonedItem = item.cloneNode(true);
    list.appendChild(clonedItem);
}

/*
for(var i = 0; i < 3; i++) {
    cloneItem();
  }*/
function disList(){
// to get the number of display
let selectors = document.querySelectorAll('#part > span');
let list = [...selectors].map(span => parseInt(span.innerText.replace(/"/g,"")));
var count = 0;
//console.log(list.keys());
for(var key in list) {
    if (list.hasOwnProperty(key)) {
     count++;}
}
console.log(count)
return count;
};


disList()

function remList(x){
    console.log(x)
var parts = document.getElementsByClassName(`videoDisplay__${x}`);
parts[0].parentNode.removeChild(parts[0]);
}




const box = document.getElementById("basic");
const firstPlayer = document.getElementById("videostream");
if (disList() ==1 ){

    box.style.width = '900px';
    box.style.height = '400px'
    console.log(firstPlayer);
    firstPlayer.style.width = '900px';
    firstPlayer.style.height = '400px';}
else if (disList() % 2 == 0){
    console.log("this is the life of dawit neri")
}

disList()