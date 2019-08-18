require('es6-promise');
require('isomorphic-fetch');

var cityName = "Ann,Arbor"

function getCurrentWeather (cityName){
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=2868771f278cdc52c2a94a005f6e82db&units=metric";
    fetch(url)
    .then((res) => res.json())
    .then((jsonData) => {
        console.log(jsonData)
    })

}

getCurrentWeather(cityName);