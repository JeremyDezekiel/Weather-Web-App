const URL = 'https://api.open-meteo.com/v1/forecast?latitude=-7.2492&longitude=112.7508&current=temperature_2m,apparent_temperature,is_day,weather_code&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Asia%2FSingapore'

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

function dailyDateFormated(date) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    const dateFormatted = new Date(date)
    return dateFormatted.toLocaleDateString('en-US', options)
}

function hourlyTime(time) {
    options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "Asia/Singapore",
        timeZoneName: "short",
    }
    const timeFormat = new Date(time)
    return timeFormat.DateTimeFormat('en-US', options)
}

async function getDataDaily() {
    try {
        const fetchDaily = await fetch(URL)
        const dataDaily = await fetchDaily.json()

        dataDaily.daily.weather_code.forEach((element, i) => {
            document.getElementById('weekly').innerHTML += `
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <span>${dailyDateFormated(dataDaily.daily.time[i])}</span>
                    </div>
                    <div>
                    <img width="50px" src="asset/water-drop.gif" alt="water-drop">
                    <span>56%</span>
                    <span>
                    ${showGifWeather(element)}
                    <span>
                    <span>${dataDaily.daily.temperature_2m_max[i]}°C</span>
                    <span>${dataDaily.daily.temperature_2m_min[i]}°C</span>
                    </div>
                </div>
            `
            tomorrow.innerHTML = `
                    <div class="col-12">
                        <p class="mb-0 mt-3">Tomorrow</p>
                        <h3 class="mb-0">Surabaya,Indonesia</h3>
                    </div>
                    <div class="col-12 d-flex flex-column justify-content-end">
                        <h3 class="mb-0">${dataDaily.daily.temperature_2m_min[1]}°C</h3>
                        <p class="mb-3">${showWeatherText(element)}</p>
                    </div>
            `
        })
    } catch (error) {
        console.error(error)
    }
}

getDataDaily()

async function getDataCurrent() {
    try {
        const fetchCurrent = await fetch(URL)
        const dataCurrent = await fetchCurrent.json()

        console.log(dataCurrent)
        
    } catch (error) {
        console.error(error)
    }
}

// async function getDataCurrent() {
//     try {
//         const fetchCurrent = await fetch(URL)
//         const dataCurrent = await fetchCurrent.json()

//         dataCurrent.current.temperature_2m.forEach((element, i) => {
//             current.innerHTML += `
//                     <div class="row align-items-center">
//                         <div class="col-12 col-sm-6">
//                             <div class="d-flex align-items-center justify-content-center">
//                                 <img width="30px"
//                                     src="https://img.icons8.com/?size=100&id=c0kUjxdWTRsk&format=png&color=000000"
//                                     alt="pin-location">
//                                 <h3 class="fs-5 my-0">Surabaya, Indonesia</h3>
//                             </div>
//                             <div class="text-center">
//                                 <h3>Weather</h3>
//                                 <p>Now</p>
//                                 <h1>${dataCurrent.current.temperature_2m[element]}C</h1>
//                                 <p>Feels like 27°C</p>
//                             </div>
//                         </div>
//                         <div class="col-12 col-sm-6">
//                             <div class="text-center">
//                                 <img class="w-50" src="asset/cloudy.gif" alt="cloudy">
//                             </div>
//                             <div class="d-flex justify-content-around">
//                                 <span>
//                                     <p>Visibility</p>
//                                     <h1>4.3 Km</h1>
//                                 </span>
//                                 <span>
//                                     <p class="fs-6">Humidity</p>
//                                     <h1>80%</h1>
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//             `
//     })

//     } catch (error) {
//         console.error(error)
//     }
// }

// getDataCurrent()