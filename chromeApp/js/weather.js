
const API_KEY = "feb5c7a1bc001fc0e8b30e40c501888d";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-Child");
        const city = document.querySelector("#weather span:last-Child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}C`;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
