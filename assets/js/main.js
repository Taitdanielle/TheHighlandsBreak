var map, places, infoWindow;
var markers = [];
var results = {};
var autocomplete;
var countryRestrict = {'country': 'uk'};
var MARKER_PATH = 'TheHighlandsBreak/assets/images/marker/marker1.png'
var hostnameRegexp = new RegExp('^https?://.+?/');

var countries =  },
  'uk': {
    center: {lat: 55.953251, lng: -3.188267},
    zoom: 5
  }

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: countries['uk'].zoom,
    center: countries['uk'].center,
    mapTypeControl: false,
    panControl: false,
    zoomControl: false,
    streetViewControl: false
  });

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });

  // Create the autocomplete object and associate it with the UI input control.
  // Restrict the search to the default country, and to place type "cities".
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */ (
          document.getElementById('autocomplete')), {
        types: ['(cities)'],
        componentRestrictions: countryRestrict
      });
  places = new google.maps.places.PlacesService(map);

  autocomplete.addListener('place_changed', onPlaceChanged);

// When the user selects a city, get the place details for the city and
// zoom the map in on the city.
function onPlaceChanged() {
  var place = autocomplete.getPlace();
  if (place.geometry) {
    map.panTo(place.geometry.location);
    map.setZoom(15);
    search();
  } else {
    document.getElementById('autocomplete').placeholder = 'Enter a city';
  }
}
// Listener for POI buttons
var hotel = document.getElementById('hotel-button').addEventListener('click', checkHotels);
var restaurant = document.getElementById('restaurant-button').addEventListener('click', checkRestaurants);
var attraction = document.getElementById('attraction-button').addEventListener('click', checkAttractions );

var search = {
        types:[]
    };
//Adds the correct value into the 'types' arrary and gets the city location and passes it to the map object.   
function checkHotels() {
    hideLogo();
    search.types = [];
    search.bounds = map.getBounds();
    search.types.push('lodging');
    searchPoi();
}

//Adds the correct value into the 'types' arrary and gets the city location and passes it to the map object.
function checkRestaurants() {
    hideLogo();
    search.types = [];
    search.bounds = map.getBounds();
    search.types.push('restaurant');
    searchPoi();
}