$(document).ready(function(){
	$("#navbar-main").affix({});
	$("#faq-btn").click(function(){
		loadModalContent('#long-modal','views/faq.html');
	});

 	function initialize() {
 		var myLatLng = new google.maps.LatLng(29.651427, -82.343726);
        var mapOptions = {
          center: myLatLng,
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('gmaps'),
            mapOptions);

		var contentString = "<div><h3>Keene-Flint Hall</h3><p>Room TBD</p></div>";

		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: 'We Hack Here'
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	}
	google.maps.event.addDomListener(window, 'load', initialize);

});

var loadModalContent = function(id, url){
	var load = $(id).find(".modal-body").load(url);
}
