$(document).ready(function() {
    var s = $("#sticker");
    var pos = s.position();
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        var stickermax = $(document).outerHeight() - $(".testimonial-page").outerHeight() - $(".footer").outerHeight() - s.outerHeight() - 200;
        if (windowpos >= pos.top && windowpos < stickermax) {
            s.addClass("stick");
        } else if (windowpos >= stickermax) {
            s.removeClass("stick"); //un-stick
        } else {
            s.removeClass("stick");
        }
    });
});
