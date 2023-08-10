
document.getElementById("button1").innerHTML = "ON";


function click() {
    document.getElementById("button1").innerHTML = "OFF";
    document.getElementById("bulb").style.backgroundColor = "yellow";
    document.getElementById("bulb").style.filter = "blur(20px)";
    document.getElementById("bulb").style.height = "300px";
    document.getElementById("bulb").style.width = "300px";
}

function click2() {
    document.getElementById("button1").innerHTML = "ON";
    document.getElementById("bulb").style.backgroundColor = "white";
    document.getElementById("bulb").style.filter = "blur(0px)";
    document.getElementById("bulb").style.height = "200px";
    document.getElementById("bulb").style.width = "200px";
}

let check = document.getElementById("button1").innerHTML;
if (check === "ON") {
    document.getElementById("button1").onclick = function () { click() };
} else {

}

document.getElementById("button2").onclick = function () { click2() };
