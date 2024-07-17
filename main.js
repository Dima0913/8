document.getElementById('locationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    getWeatherData(city);
});

async function getWeatherData(city) {
    const apiKey = 'YOUR_API_KEY'; // Вставте свій API ключ тут
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayWeatherData(data) {
    document.getElementById('location').innerText = data.location.name;
    document.getElementById('country').innerText = data.location.country;
    document.getElementById('temperature').innerText = data.current.temp_c;
    document.getElementById('windSpeed').innerText = data.current.wind_kph;
    document.getElementById('windDirection').innerText = data.current.wind_dir;
    document.getElementById('cloudCover').innerText = data.current.cloud;
    document.getElementById('weatherIcon').src = data.current.condition.icon;
    document.getElementById('weatherData').style.display = 'block';
}