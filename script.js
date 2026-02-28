// const form = document.querySelector(".weatherform")
// const cityInput = document.querySelector(".city")
// const card = document.querySelector('.card')

// const apikey = "5578bef726571d0e79f65031226526f9"
// form.addEventListener("submit", async even => {
//     even.preventDefault();
//     const city = cityInput.value;
//     if (city) {

//         try {
//             const weatherdata = await getdata(city);
//             weatherinfo(weatherdata);

//         } catch (error) {
//             console.error(error)
//         }

//     } else {
//         displayerror("Please Enter a City")
//         displayerror(error)
//     }


// })

// async function getdata(city) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
//     const responce = await fetch(apiUrl);
//     if (!responce.ok) {
//         throw new Error("Could Not fetch data")
//     }

//     return await responce.json();

// }

// function weatherinfo(data) {
//     const {
//         name: city,
//         main: {
//             temp,
//             humidity
//         },
//         weather: [{
//             description,
//             id
//         }]
//     } = data;

//     card.textContent = ""
//     card.style.display = "flex"
//     const citydisplay = document.createElement("h1");
//     const tempdisplay = document.createElement("p")
//     const humiditydisplay = document.createElement("p")
//     const descdisplay = document.createElement("p")
//     const weatheremoji = document.createElement("p")

//     citydisplay.textContent = city;
//     tempdisplay.textContent = `${(temp - 273.15).toFixed(1)}°`
//     humiditydisplay.textContent=`Humidity :${humidity}`;
//     descdisplay.textContent=description;
// weatheremoji.textContent=getemoji(id);




//     descdisplay.classList.add('description')
//     humiditydisplay.classList.add('humidity')
//     tempdisplay.classList.add("tempdisplay")
//     citydisplay.classList.add("cityd")
//     weatheremoji.classList.add('weatheremoji')


//     card.appendChild(citydisplay)
    
//     card.appendChild(tempdisplay)
//     card.appendChild(humiditydisplay)
//     card.appendChild(descdisplay);
//     card.appendChild(weatheremoji)
// }

// function getemoji(weatherid) {
// switch (true){
//     case (weatherid >= 200 && weatherid<=300):
//         return '⛈️';
//         break;
//             case (weatherid >= 300 && weatherid<=400):
//         return '🌧️';
//         break;
//     case (weatherid >= 500 && weatherid<=600):
//         return '🌦️';
//         break;
//     case (weatherid >= 600 && weatherid<=700):
//         return '❄️';
//         break;
//             case (weatherid >= 700 && weatherid<=800):
//         return '🌁';
//         break;
//             case (weatherid ===800):
//         return '🌅';
//         break;
//             case (weatherid >= 801 && weatherid<=809):
//         return '⛅';
//         break;
// default:
//     return '🃏';



        
// }
// }

// function displayerror(message) {
//     const errorD = document.createElement("p")
//     errorD.textContent = message;
//     errorD.classList.add(".error")
//     card.textContent = ""
//     card.style.display = "flex"
//     card.append(errorD)

// }
const form = document.querySelector(".weatherform");
const cityInput = document.querySelector(".city");
const card = document.querySelector('.card');

const apikey = "5578bef726571d0e79f65031226526f9";

form.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value.trim();

    if (city) {
        try {
            const weatherdata = await getdata(city);
            weatherinfo(weatherdata);
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

function weatherinfo(data) {
    const {
        name: city,
        main: { temp, humidity },
        weather: [{ description, id }]
    } = data;

    // Convert Kelvin to Celsius properly
    const celsius = (temp - 273.15).toFixed(1);

    card.textContent = "";
    card.style.display = "flex";

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

function getemoji(weatherid) {
    switch (true) {
        case (weatherid >= 200 && weatherid < 300): // Thunderstorms
            return '🌩️⚡';
        case (weatherid >= 300 && weatherid < 400): // Drizzle
            return '🌦️💧';
        case (weatherid >= 500 && weatherid < 600): // Rain
            return '🌧️☔';
        case (weatherid >= 600 && weatherid < 700): // Snow
            return '❄️🌨️';
        case (weatherid >= 700 && weatherid < 800): // Mist / Fog
            return '🌫️🌁';
        case (weatherid === 800): // Clear
            return '☀️🌞';
        case (weatherid === 801): // Few clouds
            return '🌤️';
        case (weatherid === 802): // Scattered clouds
            return '⛅';
        case (weatherid === 803): // Broken clouds
            return '🌥️';
        case (weatherid === 804): // Overcast
            return '☁️';
        default: // Fallback
            return '🃏';
    }
}

function displayerror(message) {
    const errorD = document.createElement("p");
    errorD.textContent = message;
    errorD.classList.add("error");
    card.textContent = "";
    card.style.display = "flex";
    card.append(errorD);
}
