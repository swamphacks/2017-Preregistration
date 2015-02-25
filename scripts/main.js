$(document).ready(function(){
	$("#navbar-main").affix({});
});

$(window).on("hashchange", function () {
	    window.scrollTo(window.scrollX, window.scrollY - 70);
});
