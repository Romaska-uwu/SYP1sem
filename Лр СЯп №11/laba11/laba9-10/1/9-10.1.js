const $img = $('#img');
const $text = $('#text');

$img.mousedown(dragElement);
$text.mousedown(dragElement);

function dragElement(e) {
    e.preventDefault();

    let $elem = $(this);

    let shiftX = e.clientX - $elem.offset().left;
    let shiftY = e.clientY - $elem.offset().top;

    function moved(to) {
        let left = to.clientX - shiftX;
        let top = to.clientY - shiftY;

        $elem.offset({
            left: left,
            top: top
        });
    }

    moved(e);

    function finished() {
        $(document).off('mouseup mousemove');
    }

    $(document).mousemove(moved);
    $(document).mouseup(finished);
}