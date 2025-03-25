'use strict';

function greet() {
    const date = new Date();
    const time = date.getHours();
    let words;
    if (time < 10 && time >= 5) {
        words = "Good Morning!" + '&#127749';
    } else if (time >= 10 && time < 13) {
        words = "Good Day!" + '&#9728';
    } else if (time >= 13 && time < 18) {
        words = "Good Afternoon!" + '&#9749';
    } else if (time >= 18 || time < 5) {
        words = "Good Evening!" + '&#127769';
    }
    document.getElementById("greet").innerHTML = words;
}

greet();