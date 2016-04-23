var MAPS_KEY="AIzaSyB_x2KmeI9S3tE7JMf6-k_SabWMiA74nus";

(function() {

  var ocupa = (function () {
    var instance;

    function init() {
      var map;

      return {
        initMap: function () {
          map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
          });
        },

        getMap: function () {
            if ( !map ) {
              initMap()
            }
            return map
        }

      };
    };

    return {
      getInstance: function () {
        if ( !instance ) {
          instance = init();
        }
        return instance;
      }
    };

  })();

  var mapa = ocupa.getInstance()
  mapa.initMap()

})()
