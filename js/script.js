/** Custom JavaScript for SwampHacks Landing Page **/

// Get Browser Type
var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
//var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
var is_safari = navigator.userAgent.indexOf("Safari") > -1;
//var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
if ((is_chrome)&&(is_safari)) {is_safari=false;}
//if ((is_chrome)&&(is_opera)) {is_chrome=false;}

// If browser is Safari or Internet Explorer, replace the CSS banner with an image replica
if(is_safari || is_explorer) {
	$('.banner').css("display", "none");
	$('.hidden-lp-banner').css("display", "block");
}

// Remove "preload" class from body upon page load
// This prevents elements from resizing immediately upon page load
$(window).load(function() {
  $("body").removeClass("preload");
});
