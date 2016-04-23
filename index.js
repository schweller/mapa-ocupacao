var MAPS_KEY="AIzaSyB_x2KmeI9S3tE7JMf6-k_SabWMiA74nus";

(function() {

  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

  initMap()

})()
