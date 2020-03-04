init();
function init(){
    let timer = document.getElementById("chronotime");
    let gameZone = document.getElementById("game-zone");
    let wordToType = "Sauce";

    timer.innerHTML = "00s000";

    let gameStarted = false;

    gameZone.addEventListener('?', function(e){

    });
}










//Chrono

function chrono(){
    end = new Date();
    diff = end - start;
    diff = new Date(diff);
    var msec = diff.getMilliseconds();
    var sec = diff.getSeconds();
    var min = diff.getMinutes();
    var hr = diff.getHours()-1;
    if (min < 10){
        min = "0" + min
    }
    if (sec < 10){

        sec = "0" + sec
    }
    if(msec < 10){
        msec = "00" +msec
    }
    else if(msec < 100){
        msec = "0" +msec
    }
    document.getElementById("chronotime").innerHTML = sec + "s" + msec;
    timerID = setTimeout("chrono()", 10)
}

function chronoStart(){
    start = new Date();
    chrono()
}
function chronoContinue(){
    start = new Date()-diff;
    start = new Date(start);
    chrono()
}
function chronoReset(){
    document.getElementById("chronotime").value = "0:00:00:000";
    start = new Date()
}
function chronoStopReset(){
    document.getElementById("chronotime").value = "0:00:00:000";
}
function chronoStop(){
    clearTimeout(timerID);
}