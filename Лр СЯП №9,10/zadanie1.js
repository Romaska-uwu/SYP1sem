const img = document.getElementById('img');
const text = document.getElementById('text');

img.onmousedown = dragElement;
text.onmousedown = dragElement;

function dragElement(e) {
    e.preventDefault();

    let elem = this;

    let shiftX = e.clientX - elem.getBoundingClientRect().left;
    let shiftY = e.clientY - elem.getBoundingClientRect().top;


    function moved(to) {
        let left = to.clientX - shiftX;
        let top = to.clientY - shiftY;

        elem.style.left = left + 'px';
        elem.style.top = top + 'px';
    }

    moved(e);

    function finished() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    document.onmousemove = moved;
    document.onmouseup = finished;
}