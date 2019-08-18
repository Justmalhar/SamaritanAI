require('es6-promise').polyfill();
require('isomorphic-fetch');

var homeAddress = {lat: 42.242231, lng: -83.756433};
var workAddress = {lat: 42.231210, lng: -83.750270};
var url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + "411+Waymarket+Dr,+Ann+Arbor" + "&destinations=Nexient,Ann+Arbor" + "&key=AIzaSyDlW3kZCcoxfbG8fto1eE750aDEXXdiXhA";

function getTravelTimeWork()
{
    fetch(url)
    .then((res) => res)
    .then((jsonData) => {
        console.log(JSON.parse(jsonData));
    })
}

getTravelTimeWork();

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDlW3kZCcoxfbG8fto1eE750aDEXXdiXhA&libraries=geometry&language=en&callback=initMap" async defer></script>
var service = new google.maps.DistanceMatrixService;
service.getDistanceMatrix({
  origins: [homeAddress.lat, homeAddress.log],
  destinations: [destinationAddresses.lat, destinationAddresses.log],
  travelMode: 'DRIVING',
  unitSystem: google.maps.UnitSystem.METRIC,
  avoidHighways: false,
  avoidTolls: false
}, function(response, status) {
  if (status !== 'OK') {
    alert('Error was: ' + status);
  } else {
    var originList = response.originAddresses;
    var destinationList = response.destinationAddresses;