var map, places, infoWindow;
var markers = [];
var autocomplete;
var countryRestrict = {'country': 'us'};
var MARKER_PATH = 'assets/images/marker1.png'
var hostnameRegexp = new RegExp('^https?://.+?/');

var countries =  },
  'uk': {
    center: {lat: 54.8, lng: -4.6},
    zoom: 5
  }