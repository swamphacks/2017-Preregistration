/*
*
* SwampHacks Homepage JavaScript
* Last Updated: October 22, 2015
*
*/

$(function(){
	// Prevent elements from resizing immediately upon page load (by removing "preload" class from body upon page load)
	$("body").removeClass("preload");
	// Show/hide the menu bar based on scrolling position
	var vh = $(window).height() - 200;
	$(".navbar").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > vh) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});
	});
});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
