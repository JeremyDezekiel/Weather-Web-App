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

let unixTime = Math.floor(Date.now() / 1000) + 7 * 3600;

function formatTime(time) {
    const hours = String(Math.floor(time / 3600) % 24).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

setInterval(() => {
    document.getElementById('time').textContent = formatTime(unixTime++);
}, 1000);

async function getData() {
    try {
        const fetchData = await fetch(URL)
        const dataWeather = await fetchData.json()

        document.getElementById('current').innerHTML = 

        dataWeather.daily.weather_code.forEach((element, i) => {
            document.getElementById('weekly').innerHTML += `
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <span>${dailyDateFormated(dataWeather.daily.time[i])}</span>
                    </div>
                    <div>
                    <img width="50px" src="asset/water-drop.gif" alt="water-drop">
                    <span>56%</span>
                    <span>
                    ${showGifWeather(element)}
                    <span>
                    <span>${dataWeather.daily.temperature_2m_max[i]}°C</span>
                    <span>${dataWeather.daily.temperature_2m_min[i]}°C</span>
                    </div>
                </div>
            `
            // tomorrow.innerHTML = 

            // dataWeather.hourly.time.forEach((element, i) => {
            //     document.getElementById('hourly').innerHTML = 
            // })
        })
    } catch (error) {
        console.error(error)
    }
}

getData()