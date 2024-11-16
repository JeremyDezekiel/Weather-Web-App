const URL = 'https://api.open-meteo.com/v1/forecast?latitude=-7.2492&longitude=112.7508&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max&timezone=Asia%2FSingapore'
const AQI = 'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=-7.2492&longitude=112.7508&current=pm2_5&forecast_days=1'

function showGifWeather(code) {
    if (code == 0) {
        return '<img width="50px" src="gif/0.gif"/>'
    } else if (code == 1) {
        return '<img width="50px" src="gif/1.gif"/>'
    } else if (code == 2) {
        return '<img width="50px" src="gif/2.gif"/>'
    } else if (code == 3) {
        return '<img width="50px" src="gif/3.gif"/>'
    } else if (code == 45) {
        return '<img width="50px" src="gif/45.gif"/>'
    } else if (code == 48) {
        return '<img width="50px" src=""/>'
    } else if (code == 51 || code == 53 || code == 55 || code == 80 || code == 81 || code == 82 || code == 61 || code == 63 || code == 65) {
        return '<img width="50px" src="gif/51,53,55,80,81,82,61,63,65.gif"/>'
    } else if (code == 56 || code == 57 || code == 66 || code == 67) {
        return '<img width="50px" src="gif/56,57,66,67.gif"/>'
    } else if (code == 77 || code == 85 || code == 86 || code == 71 || code == 73 || code == 75) {
        return '<img width="50px" src="gif/77,85,86,71,73,75.gif"/>'
    } else if (code == 95 || code == 96 || code == 99) {
        return '<img width="50px" src="gif/95,96,99.gif"/>'
    }
}

function showWeatherText(code) {
    if (code == 0) {
        return 'Clear'
    } else if (code == 1) {
        return 'Mostly Clear'
    } else if (code == 2) {
        return 'Partly Clear'
    } else if (code == 3) {
        return 'Overcast'
    } else if (code == 45) {
        return 'Fog'
    } else if (code == 48) {
        return 'Icy Fog'
    } else if (code == 51 || code == 53 || code == 55 || code == 80 || code == 81 || code == 82 || code == 61 || code == 63 || code == 65) {
        return 'Rainny'
    } else if (code == 56 || code == 57 || code == 66 || code == 67) {
        return 'Snow Rain'
    } else if (code == 77 || code == 85 || code == 86 || code == 71 || code == 73 || code == 75) {
        return 'Snow'
    } else if (code == 95 || code == 96 || code == 99) {
        return 'Storm'
    }
}

function formattedDate(date) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    const dateFormatted = new Date(date)
    return dateFormatted.toLocaleDateString('en-US', options)
}

let unixTime = Math.floor(Date.now() / 1000) + 7 * 3600;

function formatTime(time) {
    const hours = String(Math.floor(time / 3600) % 24).padStart(2, '0')
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0')
    const seconds = String(time % 60).padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
    // return `${hours}:${minutes}`
}

setInterval(() => {
    document.getElementById('time').textContent = formatTime(unixTime++);
}, 1000)

async function getData() {
    try {
        const fetchData = await fetch(URL)
        const dataWeather = await fetchData.json()

        document.getElementById('currentWeather').innerText =
            showWeatherText(dataWeather.current.weather_code)
        document.getElementById('currentGifWeather').innerHTML =
            showGifWeather(dataWeather.current.weather_code)
        document.getElementById('currentTemperature').innerText =
            dataWeather.current.temperature_2m + '°C'
        document.getElementById('currentApparentTemperature').innerText =
            'Feels like ' + dataWeather.current.apparent_temperature + '°C'
        document.getElementById('currentHumidity').innerText =
            dataWeather.current.relative_humidity_2m + '%'
        document.getElementById('date').innerText =
            formattedDate(dataWeather.current.time)

            dataWeather.daily.weather_code.forEach((element, i) => {
                document.getElementById('weekly').innerHTML += `
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <span>${formattedDate(dataWeather.daily.time[i])}</span>
                    </div>
                    <div>

                        <span>
                            ${dataWeather.daily.wind_speed_10m_max[i]} Km/h
                        </span>
                        <span>
                            ${showGifWeather(element)}
                        <span>
                        <span>
                            ${dataWeather.daily.temperature_2m_max[i]}°C
                        </span>
                        <span>
                            ${dataWeather.daily.temperature_2m_min[i]}°C
                        </span>
                    </div>
                </div>
            `
                document.getElementById('tomorrow').innerHTML =
                    `<div class="col-12">
                        <p class="mb-0 mt-3">Tomorrow</p>
                        <h3 class="mb-0">Surabaya,Indonesia</h3>
                    </div>
                    <div class="col-12 d-flex flex-column justify-content-end">
                        <h3 class="mb-0">${dataWeather.daily.temperature_2m_min[1]}°C</h3>
                        <p class="mb-3">${showWeatherText(1)}</p>
                    </div>`

                dataWeather.hourly.time.forEach((element, i) => {
                    document.getElementById('morning').innerText =
                        showWeatherText(dataWeather.hourly.weather_code[6])
                    document.getElementById('temperatureMorning').innerText =
                        dataWeather.hourly.temperature_2m[6] + '°'
                    document.getElementById('noon').innerText =
                        showWeatherText(dataWeather.hourly.weather_code[12])
                    document.getElementById('temperatureNoon').innerText =
                        dataWeather.hourly.temperature_2m[12] + '°'
                    document.getElementById('afternoon').innerText =
                        showWeatherText(dataWeather.hourly.weather_code[18])
                    document.getElementById('temperatureAfternoon').innerText =
                        dataWeather.hourly.temperature_2m[18] + '°'
                    document.getElementById('night').innerText =
                        showWeatherText(dataWeather.hourly.weather_code[22])
                    document.getElementById('temperatureNight').innerText =
                        dataWeather.hourly.temperature_2m[22] + '°'
                })
            })
    } catch (error) {
        console.error(error)
    } finally {

    }
}

async function getAQI() {
    try {
        const fetchAir = await fetch(AQI)
        const dataAir = await fetchAir.json()

        document.getElementById('dataAirQuality').innerText =
            dataAir.current.pm2_5

        if (dataAir.current.pm2_5 < 100) {
            document.getElementById('bar').innerHTML =
                `<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-success" style="width: 25%"></div>
                        </div>`
        } else if (dataAir.current.pm2_5 > 100 && dataAir.current.pm2_5 <= 200) {
            document.getElementById('bar').innerHTML =
                `<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-warning" style="width: 50%"></div>
                    </div>`
        } else if (dataAir.current.pm2_5 > 200 && dataAir.current.pm2_5 <= 300) {
            document.getElementById('bar').innerHTML =
                `<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-danger" style="width: 75%"></div>
                    </div>`
        } else if (dataAir.current.pm2_5 > 300) {
            document.getElementById('bar').innerHTML =
                `<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-black" style="width: 100%"></div>
                    </div>`
        }
    } catch (error) {
        console.error(error)
    } finally {

    }
}

getAQI()
getData()

mapboxgl.accessToken = 'pk.eyJ1IjoiamVhbm5lZGUiLCJhIjoiY20zamh2NjloMDN3azJ3cXo0anJyZW5obCJ9.B8bfpQt7BR2Bj-t2DyGKRg';

navigator.geolocation.getCurrentPosition(succesLocation,
    errorLocation, {
        enableHighAccuracy: true
    }
)

function succesLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {}
    // setupMap([])
function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: center, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    })
}


