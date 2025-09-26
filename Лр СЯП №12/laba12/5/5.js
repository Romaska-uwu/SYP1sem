function makeCounter(btnId) {

    let count = 0;

    return function() {
        count++;
        document.getElementById(btnId).innerText = count;
    }

}

// Create counter closures
const counter1 = makeCounter('btn1');
const counter2 = makeCounter('btn2');
const counter3 = makeCounter('btn3');

// Add click handlers
document.getElementById('btn1').addEventListener('click', counter1);
document.getElementById('btn2').addEventListener('click', counter2);
document.getElementById('btn3').addEventListener('click', counter3);