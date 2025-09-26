let $img1 = $('#img1');
$img1.click(function() {

    // Start timer
    let start = Date.now();

    // Set interval
    let timer = setInterval(() => {

        // Get time passed
        let timePassed = Date.now() - start;

        // Move image left based on time
        let left = timePassed / 5;
        $img1.css('left', left + 'px');

        // Clear interval after 3 seconds
        if(timePassed > 5000) {
            clearInterval(timer);
        }

    }, 10);

});