const weather=document.querySelector(".js-date");
const COORDS='coords';
const apiKey="fdafb945bbb76f8edd0f26e02c7b3edc";

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    ).then(function(json){
       return json.json();
    }).then(function(json){
        const tempature=json.main.temp;
        const place=json.name;
        weather.innerText=`${tempature} @ ${place}`;
    });

}
function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}
function handleGeoSucces(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const coordsObj={
        latitude,
        longitude,
    }
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
function handleGeoError(){
    console.log("Fuck");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError)
}
function loadCoords(){
    const loadeCords=localStorage.getItem(COORDS);
    if(loadeCords===null){
        askForCoords();
    }
    else{
        const parseCoords=JSON.parse(loadeCords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();