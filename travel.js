require('es6-promise');
require('isomorphic-fetch');

var homeAddress = {lat: 42.242231, lng: -83.756433};
var workAddress = {lat: 42.231210, lng: -83.750270};
var drivingMode = ["driving","bicycling"];
var url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + "411+Waymarket+Dr,+Ann+Arbor" + "&destinations=Nexient,Ann+Arbor" + "&key=AIzaSyDlW3kZCcoxfbG8fto1eE750aDEXXdiXhA&mode=" + drivingMode[1];

function getTravelTimeWork()
{
    var time = null;
    var time = fetch(url)
    .then((res) => res.json())
    .then((jsonData) => {
        console.log(jsonData["rows"][0]["elements"][0]["duration"]["text"])
    })
}

getTravelTimeWork();

