let latitude = -7.2492
let longitude = 112.7508
getData(latitude, longitude)
getAQI(latitude, longitude)

function showGifWeather(code, time) {
    if (code == 0 && time == 1) {
        return '<img src="weatherGif/0 clear.gif"/>'
    } else if (code == 0 && time == 0) {
        return '<img src="weatherGif/0 night.gif"/>'
    } else if (code == 1 && time == 1) {
        return '<img src="weatherGif/1 day Mostly Clear.gif"/>'
    } else if (code == 1 && time == 0) {
        return '<img src="weatherGif/1 night Mostly Clear.gif"/>'
    } else if (code == 2 && time == 1) {
        return '<img src="weatherGif/2 day partly cloudy.gif"/>'
    } else if (code == 2 && time == 0) {
        return '<img src="weatherGif/2 night partly cloudy.gif"/>'
    } else if (code == 3 && time == 1) {
        return '<img src="weatherGif/3 Overcast day.gif"/>'
    } else if (code == 3 && time == 0) {
        return '<img src="weatherGif/3 Overcast night.gif"/>'
    } else if (code == 45 && time == 1) {
        return '<img src="weatherGif/45 day fog.gif"/>'
    } else if (code == 45 && time == 0) {
        return '<img src="weatherGif/45 night fog.gif"/>'
    } else if (code == 48 && time == 1) {
        return '<img src="weatherGif/48 day icy fog.gif"/>'
    } else if (code == 48 && time == 0) {
        return '<img src="weatherGif/48 night icy fog.gif"/>'
    } else if (code == 51 && time == 1 || code == 53 && time == 1 || code == 55 && time == 1 || code == 61 && time == 1 || code == 63 && time == 1 || code == 65 && time == 1 || code == 80 && time == 1 || code == 81 && time == 1 || code == 82 && time == 1) {
        return '<img src="weatherGif/51,53,55,61,63,65,80,81,82 day rain.gif"/>'
    } else if (code == 51 && time == 0 || code == 53 && time == 0 || code == 55 && time == 0 || code == 61 && time == 0 || code == 63 && time == 0 || code == 65 && time == 0 || code == 80 && time == 0 || code == 81 && time == 0 || code == 82 && time == 0) {
        return '<img src="weatherGif/51,53,55,61,63,65,80,81,82 night rain.gif"/>'
    } else if (code == 56 && time == 1 || code == 57 && time == 1 || code == 66 && time == 1 || code == 67 && time == 1) {
        return '<img width="50px" src="weatherGif/56,57,66,67 day Freezing Rain.gif"/>'
    } else if (code == 56 && time == 0 || code == 57 && time == 0 || code == 66 && time == 0 || code == 67 && time == 0) {
        return '<img width="50px" src="weatherGif/56,57,66,67 night Freezing Rain.gif"/>'
    } else if (code == 71 && time == 1 || code == 73 && time == 1 || code == 75 && time == 1 || code == 77 && time == 1 || code == 85 && time == 1 || code == 86 && time == 1) {
        return '<img src="weatherGif/71,73,75,77,85,86 day snow.gif"/>'
    } else if (code == 71 && time == 0 || code == 73 && time == 0 || code == 75 && time == 0 || code == 77 && time == 0 || code == 85 && time == 0 || code == 86 && time == 0) {
        return '<img src="weatherGif/71,73,75,77,85,86 night snow.gif"/>'
    } else if (code == 95 && time == 1) {
        return '<img src="weatherGif/95 day thunder.gif"/>'
    } else if (code == 95 && time == 0) {
        return '<img src="weatherGif/95 night thunder.gif"/>'
    } else if (code == 96 && time == 1 || code == 99 && time == 1) {
        return '<img src="weatherGif/96,99 day thunder rain.gif"/>'
    } else if (code == 96 && time == 0 || code == 99 && time == 0) {
        return '<img src="weatherGif/96,99 night thunder rain.gif"/>'
    }
}

function showGifWeatherWeekly(code, time) {
    if (code == 0 && time == 1) {
        return '<img width="50px" src="weatherGif/0 clear.gif"/>'
    } else if (code == 0 && time == 0) {
        return '<img width="50px" src="weatherGif/0 night.gif"/>'
    } else if (code == 1 && time == 1) {
        return '<img width="50px" src="weatherGif/1 day Mostly Clear.gif"/>'
    } else if (code == 1 && time == 0) {
        return '<img width="50px" src="weatherGif/1 night Mostly Clear.gif"/>'
    } else if (code == 2 && time == 1) {
        return '<img width="50px" src="weatherGif/2 day partly cloudy.gif"/>'
    } else if (code == 2 && time == 0) {
        return '<img width="50px" src="weatherGif/2 night partly cloudy.gif"/>'
    } else if (code == 3 && time == 1) {
        return '<img width="50px" src="weatherGif/3 Overcast day.gif"/>'
    } else if (code == 3 && time == 0) {
        return '<img width="50px" src="weatherGif/3 Overcast night.gif"/>'
    } else if (code == 45 && time == 1) {
        return '<img width="50px" src="weatherGif/45 day fog.gif"/>'
    } else if (code == 45 && time == 0) {
        return '<img width="50px" src="weatherGif/45 night fog.gif"/>'
    } else if (code == 48 && time == 1) {
        return '<img width="50px" src="weatherGif/48 day icy fog.gif"/>'
    } else if (code == 48 && time == 0) {
        return '<img width="50px" src="weatherGif/48 night icy fog.gif"/>'
    } else if (code == 51 && time == 1 || code == 53 && time == 1 || code == 55 && time == 1 || code == 61 && time == 1 || code == 63 && time == 1 || code == 65 && time == 1 || code == 80 && time == 1 || code == 81 && time == 1 || code == 82 && time == 1) {
        return '<img width="50px" src="weatherGif/51,53,55,61,63,65,80,81,82 day rain.gif"/>'
    } else if (code == 51 && time == 0 || code == 53 && time == 0 || code == 55 && time == 0 || code == 61 && time == 0 || code == 63 && time == 0 || code == 65 && time == 0 || code == 80 && time == 0 || code == 81 && time == 0 || code == 82 && time == 0) {
        return '<img width="50px" src="weatherGif/51,53,55,61,63,65,80,81,82 night rain.gif"/>'
    } else if (code == 56 && time == 1 || code == 57 && time == 1 || code == 66 && time == 1 || code == 67 && time == 1) {
        return '<img width="50px" src="weatherGif/56,57,66,67 day Freezing Rain.gif"/>'
    } else if (code == 56 && time == 0 || code == 57 && time == 0 || code == 66 && time == 0 || code == 67 && time == 0) {
        return '<img width="50px" src="weatherGif/56,57,66,67 night Freezing Rain.gif"/>'
    } else if (code == 71 && time == 1 || code == 73 && time == 1 || code == 75 && time == 1 || code == 77 && time == 1 || code == 85 && time == 1 || code == 86 && time == 1) {
        return '<img width="50px" src="weatherGif/71,73,75,77,85,86 day snow.gif"/>'
    } else if (code == 71 && time == 0 || code == 73 && time == 0 || code == 75 && time == 0 || code == 77 && time == 0 || code == 85 && time == 0 || code == 86 && time == 0) {
        return '<img width="50px" src="weatherGif/71,73,75,77,85,86 night snow.gif"/>'
    } else if (code == 95 && time == 1) {
        return '<img width="50px" src="weatherGif/95 day thunder.gif"/>'
    } else if (code == 95 && time == 0) {
        return '<img width="50px" src="weatherGif/95 night thunder.gif"/>'
    } else if (code == 96 && time == 1 || code == 99 && time == 1) {
        return '<img width="50px" src="weatherGif/96,99 day thunder rain.gif"/>'
    } else if (code == 96 && time == 0 || code == 99 && time == 0) {
        return '<img width="50px" src="weatherGif/96,99 night thunder rain.gif"/>'
    }
}

function showWeatherText(code, time) {
    if (code == 0 && time == 1) {
        return 'Sunny'
    } else if (code == 0 && time == 0) {
        return 'Clear'
    } else if (code == 1 && time == 1) {
        return 'Mostly Sunny'
    } else if (code == 1 && time == 0) {
        return 'Mostly Clear'
    } else if (code == 2) {
        return 'Partly Cloudy'
    } else if (code == 3) {
        return 'Cloudy'
    } else if (code == 45) {
        return 'Foggy'
    } else if (code == 48) {
        return 'Icy Fog'
    } else if (code == 51) {
        return 'Light Drizzle'
    } else if (code == 53) {
        return 'Drizzle'
    } else if (code == 55) {
        return 'Heavy Drizzle'
    } else if (code == 56) {
        return 'Light Freezing Drizzle'
    } else if (code == 57) {
        return 'Freezing Drizzle'
    } else if (code == 61) {
        return 'Light Rain'
    } else if (code == 63) {
        return 'Rain'
    } else if (code == 65) {
        return 'Heavy Rain'
    } else if (code == 66) {
        return 'Light Freezing Rain'
    } else if (code == 67) {
        return 'Freezing Rain'
    } else if (code == 71) {
        return 'Light Snow'
    } else if (code == 73) {
        return 'Snow'
    } else if (code == 75) {
        return 'Heavy Snow'
    } else if (code == 77) {
        return 'Snow Grains'
    } else if (code == 80) {
        return 'Light Showers'
    } else if (code == 81) {
        return 'Showers'
    } else if (code == 82) {
        return 'Heavy Showers'
    } else if (code == 85) {
        return 'Light Snow Showers'
    } else if (code == 86) {
        return 'Snow Showers'
    } else if (code == 95) {
        return 'Thunderstrom'
    } else if (code == 96) {
        return 'Light Thunderstrom With Hail'
    } else if (code == 99) {
        return 'Thunderstrom With Hail'
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
}

setInterval(() => {
    document.getElementById('time').textContent = formatTime(unixTime++)
}, 1000)

function bgImage(code) {
    if (code == 0 || code == 1) {
        let element = document.getElementById('tomorrow')

        element.style.backgroundImage = "url('bg-tomorrow/0,1.gif')"
        element.style.backgroundRepeat = 'no-repeat'
        element.style.backgroundPosition = 'right'
        element.style.backgroundSize = '67%'
    } else if (code == 2) {
        let element = document.getElementById('tomorrow')

        element.style.backgroundImage = "url('bg-tomorrow/2 Partly Cloudy.gif')"
        element.style.backgroundRepeat = 'no-repeat'
        element.style.backgroundPosition = 'right'
        element.style.backgroundSize = '61%'
    } else if (code == 3) {
        let element = document.getElementById('tomorrow')

        element.style.backgroundImage = "url('bg-tomorrow/3 Overcast.gif')"
        element.style.backgroundRepeat = 'no-repeat'
        element.style.backgroundPosition = 'right'
        element.style.backgroundSize = '58%'
    } else if (code == 45) {
        let element = document.getElementById('tomorrow')

        element.style.backgroundImage = "url('bg-tomorrow/45 Fog.gif')"
        element.style.backgroundRepeat = 'no-repeat'
        element.style.backgroundPosition = 'right'
        element.style.backgroundSize = '63%'
    } else if (code == 48) {
        let element = document.getElementById('tomorrow')

        element.style.backgroundImage = "url('bg-tomorrow/48 Icy Fog.gif')"
        element.style.backgroundRepeat = 'no-repeat'
        element.style.backgroundPosition = 'right'
        element.style.backgroundSize = '60%'
    } else if (code == 51 || code == 53 || code == 55 || code == 80 || code == 81) {
        let element = document.getElementById('tomorrow')

        element.style.backgroundImage = "url('bg-tomorrow/51,53,55,80,81 Rain.gif')"
        element.style.backgroundRepeat = 'no-repeat'
        element.style.backgroundPosition = 'right'
        element.style.backgroundSize = '60%'
    } else if (code == 61 || code == 63 || code == 65 || code == 82) {
        let element = document.getElementById('tomorrow')

        element.style.backgroundImage = "url('bg-tomorrow/61,63,65,82 Rain.gif')"
        element.style.backgroundRepeat = 'no-repeat'
        element.style.backgroundPosition = 'right'
        element.style.backgroundSize = '70%'
    } else if (code == 56 || code == 57 || code == 66 || code == 67) {
        let element = document.getElementById('tomorrow')

        element.style.backgroundImage = "url('bg-tomorrow/.gif')"
        element.style.backgroundRepeat = 'no-repeat'
        element.style.backgroundPosition = 'right'
        element.style.backgroundSize = '70%'
    } else if (code == 77 || code == 85) {
        let element = document.getElementById('tomorrow')

        element.style.backgroundImage = "url('bg-tomorrow/77,85 Snow.gif')"
        element.style.backgroundRepeat = 'no-repeat'
        element.style.backgroundPosition = 'right'
        element.style.backgroundSize = '70%'
    } else if (code == 73 || code == 75) {
        let element = document.getElementById('tomorrow')

        element.style.backgroundImage = "url('bg-tomorrow/73,75 Snow.gif')"
        element.style.backgroundRepeat = 'no-repeat'
        element.style.backgroundPosition = 'top right'
        element.style.backgroundSize = '70%'

    } else if (code == 95) {
        let element = document.getElementById('tomorrow')

        element.style.backgroundImage = "url('bg-tomorrow/95 Thunder.gif')"
        element.style.backgroundRepeat = 'no-repeat'
        element.style.backgroundPosition = 'top right'
        element.style.backgroundSize = '58%'
    } else if (code == 96 || code == 99) {
        let element = document.getElementById('tomorrow')

        element.style.backgroundImage = "url('bg-tomorrow/96,99 ThunderRain.gif')"
        element.style.backgroundRepeat = 'no-repeat'
        element.style.backgroundPosition = 'right'
        element.style.backgroundSize = '60%'
    } 
}

async function getData(latitude, longitude) {
    try {
        document.getElementById('loader').style.display = 'block'

        const URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max&timezone=Asia%2FSingapore`
        const fetchData = await fetch(URL)
        const dataWeather = await fetchData.json()

        const dayOrNight = dataWeather.current.is_day
        const codeWeather = dataWeather.current.weather_code

        document.getElementById('currentWeather').innerText =
            showWeatherText(dataWeather.current.weather_code, dayOrNight)
        document.getElementById('currentGifWeather').innerHTML =
            showGifWeather(codeWeather, dayOrNight)
        document.getElementById('currentTemperature').innerText =
            dataWeather.current.temperature_2m + '°C'
        document.getElementById('currentApparentTemperature').innerText =
            'Feels like ' + dataWeather.current.apparent_temperature + '°C'
        document.getElementById('currentHumidity').innerText =
            dataWeather.current.relative_humidity_2m + '%'
        document.getElementById('currentWindSpeed').innerText =
            dataWeather.current.wind_speed_10m + ' Km/h'
        document.getElementById('date').innerText =
            formattedDate(dataWeather.current.time)

        document.getElementById('weekly').innerHTML = ''
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
                            ${showGifWeatherWeekly(element, 1)}
                        <span>
                            ${dataWeather.daily.temperature_2m_max[i]}°C
                        </span>
                        <span>
                            ${dataWeather.daily.temperature_2m_min[i]}°C
                        </span>
                    </div>
                </div>
            `
            document.getElementById('tomorrow').style.backgroundImage =
                bgImage(dataWeather.daily.weather_code[1])
            document.getElementById('temperatureTomorrow').innerHTML =
                dataWeather.daily.temperature_2m_min[1] + '°C'
            document.getElementById('weatherTomorrow').innerHTML =
                showWeatherText(dataWeather.daily.weather_code[1])

            dataWeather.hourly.time.forEach((element, i) => {
                document.getElementById('morning').innerHTML =
                    showGifWeatherWeekly(dataWeather.hourly.weather_code[6], 1)
                document.getElementById('temperatureMorning').innerText =
                    dataWeather.hourly.temperature_2m[6] + '°'
                document.getElementById('noon').innerHTML =
                    showGifWeatherWeekly(dataWeather.hourly.weather_code[12], 1)
                document.getElementById('temperatureNoon').innerText =
                    dataWeather.hourly.temperature_2m[12] + '°'
                document.getElementById('afternoon').innerHTML =
                    showGifWeatherWeekly(dataWeather.hourly.weather_code[18], 0)
                document.getElementById('temperatureAfternoon').innerText =
                    dataWeather.hourly.temperature_2m[18] + '°'
                document.getElementById('night').innerHTML =
                    showGifWeatherWeekly(dataWeather.hourly.weather_code[22], 0)
                document.getElementById('temperatureNight').innerText =
                    dataWeather.hourly.temperature_2m[22] + '°'
            })
        })
    } catch (error) {
        console.error(error)
    } finally {
        document.getElementById('loader').style.display = 'none'
    }
}

async function getAQI(latitude, longitude) {
    try {
        document.getElementById('loader').style.display = 'block'

        const AQI = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=pm2_5&forecast_days=1`
        const fetchAir = await fetch(AQI)
        const dataAir = await fetchAir.json()

        document.getElementById('dataAirQuality').innerText =
            dataAir.current.pm2_5

        if (dataAir.current.pm2_5 < 100) {
            document.getElementById('descAQI').innerHTML =
                `<p class="mb-0 text-success" id="descAQI">Healthty</p>`
            document.getElementById('bar').innerHTML =
                `<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-success" style="width: 25%"></div>
                        </div>`
        } else if (dataAir.current.pm2_5 > 100 && dataAir.current.pm2_5 <= 200) {
            document.getElementById('descAQI').innerHTML =
                `<p class="mb-0 text-warning" id="descAQI">UnHealthty</p>`
            document.getElementById('bar').innerHTML =
                `<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-warning" style="width: 50%"></div>
                    </div>`
        } else if (dataAir.current.pm2_5 > 200 && dataAir.current.pm2_5 <= 300) {
            document.getElementById('descAQI').innerHTML =
                `<p class="mb-0 text-danger" id="descAQI">Very UnHealthty</p>`
            document.getElementById('bar').innerHTML =
                `<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-danger" style="width: 75%"></div>
                    </div>`
        } else if (dataAir.current.pm2_5 > 300) {
            document.getElementById('descAQI').innerHTML =
                `<p class="mb-0 text-black" id="descAQI">Dangerous</p>`
            document.getElementById('bar').innerHTML =
                `<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-black" style="width: 100%"></div>
                    </div>`
        }
    } catch (error) {
        console.error(error)
    } finally {
        document.getElementById('loader').style.display = 'none'
    }
}

function setupMapbox(latitude, longitude) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamVhbm5lZGUiLCJhIjoiY20zamh2NjloMDN3azJ3cXo0anJyZW5obCJ9.B8bfpQt7BR2Bj-t2DyGKRg';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: [longitude, latitude], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 10 // starting zoom
    });

    map.on('load', () => {
        map.addSource('raster-array-source', {
            'type': 'raster-array',
            'url': 'mapbox://rasterarrayexamples.gfs-winds',
            'tileSize': 512
        })
        map.addLayer({
            'id': 'wind-layer',
            'type': 'raster-particle',
            'source': 'raster-array-source',
            'source-layer': '10winds',
            'paint': {
                'raster-particle-speed-factor': 0.4,
                'raster-particle-fade-opacity-factor': 0.9,
                'raster-particle-reset-rate-factor': 0.4,
                'raster-particle-count': 4000,
                'raster-particle-max-speed': 40,
                'raster-particle-color': [
                    'interpolate',
                    ['linear'],
                    ['raster-particle-speed'],
                    1.5,
                    'rgba(134,163,171,256)',
                    2.5,
                    'rgba(126,152,188,256)',
                    4.12,
                    'rgba(110,143,208,256)',
                    4.63,
                    'rgba(110,143,208,256)',
                    6.17,
                    'rgba(15,147,167,256)',
                    7.72,
                    'rgba(15,147,167,256)',
                    9.26,
                    'rgba(57,163,57,256)',
                    10.29,
                    'rgba(57,163,57,256)',
                    11.83,
                    'rgba(194,134,62,256)',
                    13.37,
                    'rgba(194,134,63,256)',
                    14.92,
                    'rgba(200,66,13,256)',
                    16.46,
                    'rgba(200,66,13,256)',
                    18.0,
                    'rgba(210,0,50,256)',
                    20.06,
                    'rgba(215,0,50,256)',
                    21.6,
                    'rgba(175,80,136,256)',
                    23.66,
                    'rgba(175,80,136,256)',
                    25.21,
                    'rgba(117,74,147,256)',
                    27.78,
                    'rgba(117,74,147,256)',
                    29.32,
                    'rgba(68,105,141,256)',
                    31.89,
                    'rgba(68,105,141,256)',
                    33.44,
                    'rgba(194,251,119,256)',
                    42.18,
                    'rgba(194,251,119,256)',
                    43.72,
                    'rgba(241,255,109,256)',
                    48.87,
                    'rgba(241,255,109,256)',
                    50.41,
                    'rgba(256,256,256,256)',
                    57.61,
                    'rgba(256,256,256,256)',
                    59.16,
                    'rgba(0,256,256,256)',
                    68.93,
                    'rgba(0,256,256,256)',
                    69.44,
                    'rgba(256,37,256,256)'
                ]
            }
        })
    })

    // Add geolocate control to the map.
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
        })
    )
    map.addControl(new mapboxgl.NavigationControl())
}

async function getGeocoding() {
    try {
        document.getElementById('loader').style.display = 'block'

        let cityName = document.getElementById('city-name').value
        document.getElementById('cityCurrent').innerText = cityName

        document.getElementById('nameCity').innerText = cityName
        document.getElementById('city-name').value = ''

        const apiOpenWeather = 'aae2f828e9ad70416fd94dd4a0bfd518'
        const fetchCoordinate = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiOpenWeather}`)
        const dataCoordinate = await fetchCoordinate.json()
        let latitude = dataCoordinate[0].lat
        let longitude = dataCoordinate[0].lon

        getData(latitude, longitude)
        getAQI(latitude, longitude)
        setupMapbox(latitude, longitude)

    } catch (error) {
        console.log(error)
    } finally {
        document.getElementById('loader').style.display = 'none'
    }
}

function getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        document.getElementById('cityCurrent').innerText = 'Surabaya, Indonesia'
        document.getElementById('nameCity').innerText = 'Surabaya, Indonesia'
        getData(latitude, longitude)
        getAQI(latitude, longitude)
        setupMapbox(latitude, longitude)
    })
}

getLocation()

                           //      MapBox      //

mapboxgl.accessToken = 'pk.eyJ1IjoiamVhbm5lZGUiLCJhIjoiY20zamh2NjloMDN3azJ3cXo0anJyZW5obCJ9.B8bfpQt7BR2Bj-t2DyGKRg'

const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [112.740746, -7.262669], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    style: 'mapbox://styles/mapbox/streets-v12',
    zoom: 1 // starting zoom
})

    // Add geolocate control to the map.
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
        })
    )
    map.addControl(new mapboxgl.NavigationControl())

const coordinatesGeocoder = function (query) {
    // Match anything which looks like
    // decimal degrees coordinate pair.
    const matches = query.match(
        /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
    )
    if (!matches) {
        return null
    }

    function coordinateFeature(lng, lat) {
        return {
            center: [lng, lat],
            geometry: {
                type: 'Point',
                coordinates: [lng, lat]
            },
            place_name: 'Lat: ' + lat + ' Lng: ' + lng,
            place_type: ['coordinate'],
            properties: {},
            type: 'Feature'
        }
    }

    const coord1 = Number(matches[1])
    const coord2 = Number(matches[2])
    const geocodes = []

    if (coord1 < -90 || coord1 > 90) {
        // must be lng, lat
        geocodes.push(coordinateFeature(coord1, coord2))
    }

    if (coord2 < -90 || coord2 > 90) {
        // must be lat, lng
        geocodes.push(coordinateFeature(coord2, coord1))
    }

    if (geocodes.length === 0) {
        // else could be either lng, lat or lat, lng
        geocodes.push(coordinateFeature(coord1, coord2))
        geocodes.push(coordinateFeature(coord2, coord1))
    }

    return geocodes
}

map.on('load', () => {
    map.addSource('raster-array-source', {
        'type': 'raster-array',
        'url': 'mapbox://rasterarrayexamples.gfs-winds',
        'tileSize': 512
    })
    map.addLayer({
        'id': 'wind-layer',
        'type': 'raster-particle',
        'source': 'raster-array-source',
        'source-layer': '10winds',
        'paint': {
            'raster-particle-speed-factor': 0.4,
            'raster-particle-fade-opacity-factor': 0.9,
            'raster-particle-reset-rate-factor': 0.4,
            'raster-particle-count': 4000,
            'raster-particle-max-speed': 40,
            'raster-particle-color': [
                'interpolate',
                ['linear'],
                ['raster-particle-speed'],
                1.5,
                'rgba(134,163,171,256)',
                2.5,
                'rgba(126,152,188,256)',
                4.12,
                'rgba(110,143,208,256)',
                4.63,
                'rgba(110,143,208,256)',
                6.17,
                'rgba(15,147,167,256)',
                7.72,
                'rgba(15,147,167,256)',
                9.26,
                'rgba(57,163,57,256)',
                10.29,
                'rgba(57,163,57,256)',
                11.83,
                'rgba(194,134,62,256)',
                13.37,
                'rgba(194,134,63,256)',
                14.92,
                'rgba(200,66,13,256)',
                16.46,
                'rgba(200,66,13,256)',
                18.0,
                'rgba(210,0,50,256)',
                20.06,
                'rgba(215,0,50,256)',
                21.6,
                'rgba(175,80,136,256)',
                23.66,
                'rgba(175,80,136,256)',
                25.21,
                'rgba(117,74,147,256)',
                27.78,
                'rgba(117,74,147,256)',
                29.32,
                'rgba(68,105,141,256)',
                31.89,
                'rgba(68,105,141,256)',
                33.44,
                'rgba(194,251,119,256)',
                42.18,
                'rgba(194,251,119,256)',
                43.72,
                'rgba(241,255,109,256)',
                48.87,
                'rgba(241,255,109,256)',
                50.41,
                'rgba(256,256,256,256)',
                57.61,
                'rgba(256,256,256,256)',
                59.16,
                'rgba(0,256,256,256)',
                68.93,
                'rgba(0,256,256,256)',
                69.44,
                'rgba(256,37,256,256)'
            ]
        }
    })
})