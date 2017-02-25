var markerPositions = new Array();
	markerPositions[1] = new google.maps.LatLng(59.957237244, 30.317008972);
	markerPositions[2] = new google.maps.LatLng(59.950588226, 30.425453186);

function initialize() {
    var loc, map;

    loc = new google.maps.LatLng(59.939811, 30.375695);

    map = new google.maps.Map(document.getElementById("map_canvas"), {
         zoom: 12,
         center: loc,
         mapTypeId: google.maps.MapTypeId.ROADMAP,
         scrollwheel: false
    });

	

    var iconlink = 'img/';
    for(var i in markerPositions) {
      var markerPosition = markerPositions[i];

      var marker = new google.maps.Marker({
          map: map,
          position: markerPosition,
          visible: true,
          icon: iconlink + 'map-marker' + (i) + '.png'
      });
    }

    map.set('styles', [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ccc"},{"lightness":20},{"saturation":-97}]}]);
}
initialize();
google.maps.event.addDomListener(window, 'load', initialize);