let bulb = document.querySelector(".bulb");
let button = document.querySelector("button");
let state = 1;
button.addEventListener("click", function () {
    if (state === 1) {
        bulb.classList.add("on");
        button.innerHTML = "off";
        state = 0;
    } else {
        bulb.classList.remove("on");
        button.innerHTML = "on";
        state = 1;
    }
})
