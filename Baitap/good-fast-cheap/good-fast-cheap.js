let goodButton = document.getElementById('goodCircle');
let goodBar = document.getElementById('goodBar');
let cheapButton = document.getElementById('cheapCircle');
let cheapBar = document.getElementById('cheapBar');
let fastButton = document.getElementById('fastCircle');
let fastBar = document.getElementById('fastBar');
let goodBarColor = goodBar.style.backgroundColor =="rgb(89, 199, 189)";
let cheapBarColor = cheapBar.style.backgroundColor =="rgb(78, 165, 232)";
let fastBarColor = fastBar.style.backgroundColor =="rgb(234, 89, 89)";

function goodOn() {
    if (cheapBarColor==true && fastBarColor == true) {
        cheapButton.style.transform = "translate(10%,10%)";
        cheapBar.style.backgroundColor = '#d2d2d2';
    } else {
        goodButton.style.transform = "translate(135%,10%)";
        goodBar.style.backgroundColor = 'rgb(89, 199, 189)';
    }
}
function cheapOn() {
    if (goodBarColor==true && fastBarColor==true) {
        fastButton.style.transform = "translate(10%,10%)";
        fastBar.style.backgroundColor = '#d2d2d2';
    } else {
        cheapButton.style.transform = "translate(135%,10%)";
        cheapBar.style.backgroundColor = 'rgb(78, 165, 232)';
    }
}
function fastOn() {
    if (cheapBarColor==true && goodBarColor==true) {
        goodButton.style.transform = "translate(10%,10%)";
        goodBar.style.backgroundColor = '#d2d2d2';
    } else {
        fastButton.style.transform = "translate(135%,10%)";
        fastBar.style.backgroundColor = 'rgb(234, 89, 89)';
    }
}

// function goodOff() {
//     goodButton.style.transform = "translate(10%,10%)";
//     goodBar.style.backgroundColor = '#d2d2d2'
// }
// function cheapOff() {
//     cheapButton.style.transform = "translate(10%,10%)";
//     cheapBar.style.backgroundColor = '#d2d2d2';
// }
// function fastOff() {
//     fastButton.style.transform = "translate(10%,10%)";
//     fastBar.style.backgroundColor = '#d2d2d2';
// }
//
// goodOn().running=false;
// cheapOn().running=false;
// fastOn().running=false;
