const form = document.querySelector(".weatherform");
const cityInput = document.querySelector(".city");
const card = document.querySelector('.card');

const apikey = "5578bef726571d0e79f65031226526f9";
// Optional: You can use Unsplash or Pexels API for dynamic images
// const unsplashKey = "YOUR_UNSPLASH_ACCESS_KEY";

form.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value.trim();

    if (city) {
        try {
            const weatherdata = await getdata(city);
            await weatherinfo(weatherdata);
        } catch (error) {
            console.error(error);
            displayerror("City not found or failed to fetch data.");
        }
    } else {
        displayerror("Please enter a city name.");
    }
});

async function getdata(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Could not fetch data");
    }
    return await response.json();
}

async function weatherinfo(data) {
    const {
        name: city,
        main: { temp, humidity },
        weather: [{ description, id }]
    } = data;

    // Convert Kelvin to Celsius properly
    const celsius = (temp - 273.15).toFixed(1);

    card.textContent = "";
    card.style.display = "flex";

    // Set background based on weather condition
    await setWeatherBackground(description, id);

    const citydisplay = document.createElement("h1");
    const tempdisplay = document.createElement("p");
    const humiditydisplay = document.createElement("p");
    const descdisplay = document.createElement("p");
    const weatheremoji = document.createElement("p");

    citydisplay.textContent = city;
    tempdisplay.textContent = `${celsius} °C`;
    humiditydisplay.textContent = `Humidity: ${humidity}%`;
    descdisplay.textContent = description;
    weatheremoji.textContent = getemoji(id);

    descdisplay.classList.add('description');
    humiditydisplay.classList.add('humidity');
    tempdisplay.classList.add("tempdisplay");
    citydisplay.classList.add("cityd");
    weatheremoji.classList.add('weatheremoji');

    card.appendChild(citydisplay);
    card.appendChild(tempdisplay);
    card.appendChild(humiditydisplay);
    card.appendChild(descdisplay);
    card.appendChild(weatheremoji);
}

async function setWeatherBackground(description, weatherId) {
    // Remove any existing background classes
    card.className = 'card';
    
    // Add CSS class based on weather condition
    const weatherClass = getWeatherBackgroundClass(weatherId);
    card.classList.add(weatherClass);
    
    // Optional: For dynamic online images, you can use this approach:
    // await setDynamicBackground(description);
}

function getWeatherBackgroundClass(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300): // Thunderstorms
            return 'weather-thunderstorm';
        case (weatherId >= 300 && weatherId < 400): // Drizzle
            return 'weather-drizzle';
        case (weatherId >= 500 && weatherId < 600): // Rain
            return 'weather-rain';
        case (weatherId >= 600 && weatherId < 700): // Snow
            return 'weather-snow';
        case (weatherId >= 700 && weatherId < 800): // Atmosphere (Mist/Fog/etc.)
            return 'weather-mist';
        case (weatherId === 800): // Clear
            return 'weather-clear';
        case (weatherId >= 801 && weatherId <= 804): // Clouds
            return 'weather-clouds';
        default:
            return 'weather-default';
    }
}

// Optional: Function to fetch dynamic background images from Unsplash
async function setDynamicBackground(description) {
    try {
        // You'll need to sign up for Unsplash API and get an access key
        const response = await fetch(`https://api.unsplash.com/photos/random?query=${description}+weather&client_id=YOUR_UNSPLASH_ACCESS_KEY`);
        const data = await response.json();
        
        if (data.urls && data.urls.regular) {
            card.style.backgroundImage = `url(${data.urls.regular})`;
            card.style.backgroundSize = 'cover';
            card.style.backgroundPosition = 'center';
        }
    } catch (error) {
        console.error('Failed to fetch background image:', error);
        // Fallback to CSS classes
        card.style.backgroundImage = 'none';
    }
}

function getemoji(weatherid) {
    switch (true) {
        case (weatherid >= 200 && weatherid < 300):
            return '🌩️⚡';
        case (weatherid >= 300 && weatherid < 400):
            return '🌦️💧';
        case (weatherid >= 500 && weatherid < 600):
            return '🌧️☔';
        case (weatherid >= 600 && weatherid < 700):
            return '❄️🌨️';
        case (weatherid >= 700 && weatherid < 800):
            return '🌫️🌁';
        case (weatherid === 800):
            return '☀️🌞';
        case (weatherid === 801):
            return '🌤️';
        case (weatherid === 802):
            return '⛅';
        case (weatherid === 803):
            return '🌥️';
        case (weatherid === 804):
            return '☁️';
        default:
            return '🃏';
    }
}

function displayerror(message) {
    const errorD = document.createElement("p");
    errorD.textContent = message;
    errorD.classList.add("error");
    card.textContent = "";
    card.style.display = "flex";
    card.className = 'card weather-default'; // Reset to default background
    card.append(errorD);
}