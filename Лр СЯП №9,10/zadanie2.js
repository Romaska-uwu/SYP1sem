let img1 = document.getElementById("img1");
img1.onclick = function () {
    console.log("lol")
    let start = Date.now();
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        console.log(timePassed);
        console.log(img1.style.left)
        img1.style.left = timePassed / 5 + 'px';

        if (timePassed > 3000) clearInterval(timer);
    }, 10);
}