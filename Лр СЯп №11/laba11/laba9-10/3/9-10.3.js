/*const img = document.getElementById('img');

let x = 0;
let y = 0;
let step = 0.5;

function move() {

    let theta = Math.PI * (x / 400); // angular position

    y = 100 * Math.log(x + 1) * Math.sin(theta); // spiral equation

    x += step;

    // interpolate position
    let percent = (x % 400) / 400;
    let left = interpolate(x, x + step, percent)
    let top = interpolate(y, 100 * Math.log(x + step + 1) * Math.sin(theta), percent)

    img.style.left = left + 'px';
    img.style.top = top + 'px';

    if(x < 500) {
        requestAnimationFrame(move);
    } else {
        returnToStart();
    }

}

function returnToStart() {

    let interval = setInterval(() => {
        img.src = "https://images.vexels.com/media/users/3/145138/isolated/preview/1de68bf333344dc5a6efca43807cfc6d-sun-small-line-beams-icon.png"

        if(x > 0) {
            let theta = Math.PI * (x / 400); // angular position

            y = 100 * Math.log(x + 1) * Math.sin(theta); // spiral equation

            x -= step;

            // interpolate position
            let percent = (x % 400) / 400;
            let left = interpolate(x, x - step, percent)
            let top = interpolate(y, 100 * Math.log(x - step - 1) * Math.sin(theta), percent)

            img.style.left = left + 'px';
            img.style.top = top + 'px';


        } else {
            clearInterval(interval);
        }

    }, 10);

}

function interpolate(a, b, p) {
    return a + (b - a) * p;
}


move();*/

let $img = $('#img');

let x = 0;
let y = 0;
let step = 0.5;

function move() {

    let theta = Math.PI * (x / 400);

    y = 100 * Math.log(x + 1) * Math.sin(theta);

    x += step;

    let percent = (x % 400) / 400;

    let left = interpolate(x, x + step, percent);
    let top = interpolate(y, 100 * Math.log(x + step + 1) * Math.sin(theta), percent);

    $img.css({
        left: left + 'px',
        top: top + 'px'
    });

    if(x < 500) {
        requestAnimationFrame(move);
    } else {
        returnToStart();
    }

}

function returnToStart() {

    let interval = setInterval(() => {

        $img.attr('src', 'https://images.vexels.com/media/users/3/145138/isolated/preview/1de68bf333344dc5a6efca43807cfc6d-sun-small-line-beams-icon.png');

        if(x > 0) {

            let theta = Math.PI * (x / 400);

            y = 100 * Math.log(x + 1) * Math.sin(theta);

            x -= step;

            let percent = (x % 400) / 400;

            let left = interpolate(x, x - step, percent);
            let top = interpolate(y, 100 * Math.log(x - step - 1) * Math.sin(theta), percent);

            $img.css({
                left: left + 'px',
                top: top + 'px'
            });

        } else {
            clearInterval(interval);
        }

    }, 10);

}

function interpolate(a, b, p) {
    return a + (b - a) * p;
}

move();