var map, places, infoWindow;
var markers = [];
var autocomplete;
var countryRestrict = {'country': 'uk'};
var MARKER_PATH = 'TheHighlandsBreak/assets/images/marker/marker1.png'
var hostnameRegexp = new RegExp('^https?://.+?/');

var countries =  },
  'uk': {
    center: {lat: 54.8, lng: -4.6},
    zoom: 5
  }

  function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: countries['us'].zoom,
    center: countries['us'].center,
    mapTypeControl: false,
    panControl: false,
    zoomControl: false,
    streetViewControl: false
  })

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });