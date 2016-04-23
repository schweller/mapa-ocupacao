var MAPS_KEY="AIzaSyB_x2KmeI9S3tE7JMf6-k_SabWMiA74nus";

var escolas = [
  {
    "lat": -22.977217,
    "lng": -43.225840,
    "nome": "Colégio Estadual André Maurois",
    "id": 12345
  },
];

var infoEscolas = {
  "12345": {
    "nome": "Colégio Estadual André Maurois",
    "bairro": "Gávea",
    "ocupadaDesde": "14/04/2016",
    "facebook": "https://www.facebook.com/ocupaandremaurois/"
  },
};

(function() {

  var ocupa = (function () {
    var instance;

    var populateInfo = function (data) {
      var info = document.getElementById("info");
      document.getElementById("nome").innerHTML = data.nome;
      document.getElementById("bairro").innerHTML = data.bairro;
      document.getElementById("desde").innerHTML = data.ocupadaDesde;
      document.getElementById("fb").href = data.facebook;
      if (!info.classList.contains("open")) {
        info.classList.add("open")
      }
    }

    function init() {
      var map;
      var CONFIG = {
        "lat": -22.9065483,
        "lng": -43.2667011,
        "zoom": 12
      }

      return {
        initMap: function () {
          map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: CONFIG.lat, lng: CONFIG.lng},
            zoom: CONFIG.zoom
          });
        },

        populateMarkers: function (data) {
          var marker, position;
          data.forEach(function(el, i) {
            position = new google.maps.LatLng(el.lat, el.lng);
            marker = new google.maps.Marker({
              position: position,
              title: el.nome,
              id: el.id
            });
            marker.addListener('click', function () {
              console.log(infoEscolas[el.id])
              populateInfo(infoEscolas[el.id])
            });
            marker.setMap(map);
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

  mapa.populateMarkers(escolas)

})();
