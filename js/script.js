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

function fixTime(time){
               	
             	var startHour = time.substring(11,13)
                var hour = parseInt(startHour)
                var startMinute = time.substring(14,16)
                // console.log(startHour)
                // console.log(hour)
                // console.log(startMinute)
                var startAMPM = "AM"
                if (hour >= 12){
  	                startAMPM = "PM"
    
                    if(hour > 12){
                      hour -= 12
                    }
                }
                else if (hour == 0){
                    hour = 12
                }


                startHour = hour.toString()
                  
                  //{"dateTime":"2016-01-23T09:00:00-05:00"}

                var newTime = startHour + ":" + startMinute + startAMPM;

                return newTime

}