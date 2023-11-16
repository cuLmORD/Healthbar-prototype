const health = document.querySelector(".health");
const healthText = document.querySelector(".healthtext");
let healthDOM = 1;
let widthDOM = 5;
const healthDOMtext = "/100";

function extraction(bruh) {
    let char = bruh.code;
    let Xchar = char.substring(3);
    move(Xchar);
    console.log(Xchar);
}
function move(X) {
    if (X === "al") {
        addcheck();
    } if (X === "us") {
        remcheck();
    }
}
const addH = () => {
    widthDOM += 5;
    health.style.width = widthDOM + "px";
    healthDOM += 1;
    healthText.innerHTML = healthDOM + healthDOMtext;
};
const remH = () => { 
    widthDOM -= 5;
    health.style.width = widthDOM + "px";
    healthDOM -= 1;
    healthText.innerHTML = healthDOM + healthDOMtext;
};
const addcheck = () => {
    if (healthDOM <= 99) {
        addH();
    } else {
        healthText.innerHTML = "You're already at max health :D";
        return;
    }
}
const remcheck = () => {
    if (healthDOM >= 1) {
        remH();
    } else {
        healthText.innerHTML = "You're already dead bruh";
        return;
    }
}
document.addEventListener("keydown", extraction);