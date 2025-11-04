// script.js
const apiKey = "YOUR_API_KEY"; // Replace with your actual OpenWeatherMap API key
const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherResult = document.getElementById("weatherResult");

// Function to fetch weather data
async function fetchWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found!");
    }

    const data = await response.json();
    displayWeather(data);

    // Save the last searched city in localStorage
    localStorage.setItem("lastCity", city);

  } catch (error) {
    weatherResult.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

// Function to display weather data
function displayWeather(data) {
  const { name, main, weather } = data;

  weatherResult.innerHTML = `
    <h2>${name}</h2>
    <p>🌡️ Temperature: ${main.temp} °C</p>
    <p>☁️ Condition: ${weather[0].description}</p>
  `;
}

// Event listener for the button
getWeatherBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    weatherResult.innerHTML = `<p style="color:red;">Please enter a city name!</p>`;
  }
});

// Load last searched city on page load
window.addEventListener("load", () => {
  const lastCity = localStorage.getItem("lastCity");
  if (lastCity) {
    cityInput.value = lastCity;
    fetchWeather(lastCity);
  }
});
