function showGifWeather(code) {
    if (code == 0) {
        return '<img width="50px" src="gif/0.gif"/>'
    } else if (code == 1) {
        return '<img width="50px" src="gif/1.gif"/>'
    } else if (code == 2) {
        return '<img width="50px" src="gif/2.gif"/>'
    } else if (code == 3) {
        return '<img width="50px" src="gif/overcast.gif"/>'
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

async function getData(latitude, longitude) {
    try {
        document.getElementById('loader').style.display = 'block'

        const URL =  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max&timezone=Asia%2FSingapore`
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
            document.getElementById('temperatureTomorrow').innerHTML =
                dataWeather.daily.temperature_2m_min[1] + '°C'
            document.getElementById('weatherTomorrow').innerHTML =
                showWeatherText(dataWeather.daily.weather_code[1])

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
        document.getElementById('loader').style.display = 'none'
    }
}

async function getGeocoding() {
    try {
    document.getElementById('loader').style.display = 'block'

        let cityName = document.getElementById('city-name').value
        document.getElementById('cityCurrent').innerText = cityName
        document.getElementById('nameCity').innerText = cityName
        document.getElementById('city-name').value = ''

        const fetchCoordinate = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`)
        const dataCoordinate = await fetchCoordinate.json()
        let latitude = dataCoordinate.results[0].latitude
        let longitude = dataCoordinate.results[0].longitude
        getData(latitude, longitude)
        getAQI(latitude, longitude)

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
        // document.getElementById('cityCurrent').innerText =
        getData(latitude, longitude)
        getAQI(latitude, longitude)
    })
}

getLocation()

// mapboxgl.accessToken = 'pk.eyJ1IjoiamVhbm5lZGUiLCJhIjoiY20zamh2NjloMDN3azJ3cXo0anJyZW5obCJ9.B8bfpQt7BR2Bj-t2DyGKRg';

// const map = new mapboxgl.Map({
//             container: 'map', // container ID
//             center: [112.740746, -7.262669], // starting position [lng, lat]. Note that lat must be set between -90 and 90
//             style: 'mapbox://styles/mapbox/streets-v12',
//             zoom: 3 // starting zoom
// });

// const coordinatesGeocoder = function (query) {
//     // Match anything which looks like
//     // decimal degrees coordinate pair.
//     const matches = query.match(
//         /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
//     );
//     if (!matches) {
//         return null;
//     }

//     function coordinateFeature(lng, lat) {
//         return {
//             center: [lng, lat],
//             geometry: {
//                 type: 'Point',
//                 coordinates: [lng, lat]
//             },
//             place_name: 'Lat: ' + lat + ' Lng: ' + lng,
//             place_type: ['coordinate'],
//             properties: {},
//             type: 'Feature'
//         };
//     }

//     const coord1 = Number(matches[1]);
//     const coord2 = Number(matches[2]);
//     const geocodes = [];

//     if (coord1 < -90 || coord1 > 90) {
//         // must be lng, lat
//         geocodes.push(coordinateFeature(coord1, coord2));
//     }

//     if (coord2 < -90 || coord2 > 90) {
//         // must be lat, lng
//         geocodes.push(coordinateFeature(coord2, coord1));
//     }

//     if (geocodes.length === 0) {
//         // else could be either lng, lat or lat, lng
//         geocodes.push(coordinateFeature(coord1, coord2));
//         geocodes.push(coordinateFeature(coord2, coord1));
//     }

//     return geocodes;
// };

// // Add the control to the map.
// map.addControl(
//     new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         localGeocoder: coordinatesGeocoder,
//         zoom: 4,
//         placeholder: 'Search City',
//         mapboxgl: mapboxgl,
//         reverseGeocode: true
//     })

// );

// map.on('load', () => {
//             map.addSource('raster-array-source', {
//                 'type': 'raster-array',
//                 'url': 'mapbox://rasterarrayexamples.gfs-winds',
//                 'tileSize': 512
//             });
//             map.addLayer({
//                 'id': 'wind-layer',
//                 'type': 'raster-particle',
//                 'source': 'raster-array-source',
//                 'source-layer': '10winds',
//                 'paint': {
//                     'raster-particle-speed-factor': 0.4,
//                     'raster-particle-fade-opacity-factor': 0.9,
//                     'raster-particle-reset-rate-factor': 0.4,
//                     'raster-particle-count': 4000,
//                     'raster-particle-max-speed': 40,
//                     'raster-particle-color': [
//                         'interpolate',
//                         ['linear'],
//                         ['raster-particle-speed'],
//                         1.5,
//                         'rgba(134,163,171,256)',
//                         2.5,
//                         'rgba(126,152,188,256)',
//                         4.12,
//                         'rgba(110,143,208,256)',
//                         4.63,
//                         'rgba(110,143,208,256)',
//                         6.17,
//                         'rgba(15,147,167,256)',
//                         7.72,
//                         'rgba(15,147,167,256)',
//                         9.26,
//                         'rgba(57,163,57,256)',
//                         10.29,
//                         'rgba(57,163,57,256)',
//                         11.83,
//                         'rgba(194,134,62,256)',
//                         13.37,
//                         'rgba(194,134,63,256)',
//                         14.92,
//                         'rgba(200,66,13,256)',
//                         16.46,
//                         'rgba(200,66,13,256)',
//                         18.0,
//                         'rgba(210,0,50,256)',
//                         20.06,
//                         'rgba(215,0,50,256)',
//                         21.6,
//                         'rgba(175,80,136,256)',
//                         23.66,
//                         'rgba(175,80,136,256)',
//                         25.21,
//                         'rgba(117,74,147,256)',
//                         27.78,
//                         'rgba(117,74,147,256)',
//                         29.32,
//                         'rgba(68,105,141,256)',
//                         31.89,
//                         'rgba(68,105,141,256)',
//                         33.44,
//                         'rgba(194,251,119,256)',
//                         42.18,
//                         'rgba(194,251,119,256)',
//                         43.72,
//                         'rgba(241,255,109,256)',
//                         48.87,
//                         'rgba(241,255,109,256)',
//                         50.41,
//                         'rgba(256,256,256,256)',
//                         57.61,
//                         'rgba(256,256,256,256)',
//                         59.16,
//                         'rgba(0,256,256,256)',
//                         68.93,
//                         'rgba(0,256,256,256)',
//                         69.44,
//                         'rgba(256,37,256,256)'
//                     ]
//                 }
//             });
//         });
// // Add geolocate control to the map.
// map.addControl(
//     new mapboxgl.GeolocateControl({
//         positionOptions: {
//             enableHighAccuracy: true
//         },
//         // When active the map will receive updates to the device's location as it changes.
//         trackUserLocation: true,
//         // Draw an arrow next to the location dot to indicate which direction the device is heading.
//         showUserHeading: true
//     })
// )
// map.addControl(new mapboxgl.NavigationControl());