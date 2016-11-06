var startY, removeY;

function nextGroup() {
    $('li.group-intr-wrap').each(function(index) {
        if (!$(this).hasClass("group-hidden")) {
            if (index < 6) $(this).addClass('group-hidden');
            return false;
        }
    });
}

function prevGroup() {
    $('li.group-intr-wrap').each(function(index) {
        if (!$(this).hasClass("group-hidden")) {
            var prevGroup = $(this).prev();
            if (index > 0) prevGroup.removeClass('group-hidden');
            return false;
        }
    });
}

function touchStart(event) {
    event.preventDefault();
    if (!event.touches.length) return;
    var touch = event.touches[0];
    startY = touch.pageY;
}

function touchMove(event) {
    event.preventDefault();
    if (!event.touches.length) return;
    var touch = event.touches[0];
    removeY = touch.pageY - startY;
}

function touchEnd(event) {
    if (removeY > 0) {
        prevGroup();
    } else if (removeY < 0) {
        nextGroup();
    } else return;
}
$('#contianer').bind('touchstart', touchStart);
$('#contianer').bind('touchmove', touchMove);
$('#contianer').bind('touchend', touchEnd);
$('#next-group-icon').click(nextGroup);