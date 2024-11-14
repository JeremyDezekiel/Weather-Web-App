// const daily = {
//     time: [
//         "2024-10-14",
//         "2024-10-15",
//         "2024-10-16",
//         "2024-10-17",
//         "2024-10-18",
//         "2024-10-19",
//         "2024-10-20",
//     ],
//     temperature_2m: [11.5, 11.8, 13.7, 15.5, 16.5, 15.3, 13.5],
// };

// const days = document.querySelector('#days')

// for (let i = 0; i < daily.time.length; i++) {
//     // console.log(formattedDate(daily.time[i]))
//     days.innerHTML += `
//         <div class="d-flex justify-content-between align-items-center">
//             <div>
//                 <span>${formattedDate(daily.time[i])}</span>
//             </div>
//             <div>
//                 <img width="50px" src="asset/water-drop.gif" alt="water-drop">
//                 <span>56%</span>
//                 <img width="50px" src="asset/cloudy-day.gif" alt="cloudy-day">
//                 <img width="50px" src="asset/cloudy-night.gif" alt="cloudy-night">
//                 <span>${daily.temperature_2m[i]}</span>
//                 <span>26°</span>
//             </div>
//         </div>
//     `
// }

// function formattedDate (date) {
//     const options = {
//         weekday: 'long',
//         year : 'numeric',
//         month : 'long',
//         day : 'numeric',
//     }
//     const newDate = new Date(date)
//     const formatted = newDate.toLocaleDateString('en-US', options)
//     return formatted
// }

// function dailyDateFormated(date) {
//     const options = {
//         weekday: 'long',
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric',
//     };
//     const dateFormatted = new Date(date);
//     return dateFormatted.toLocaleDateString('en-US', options);
// }

// 

const URL = 'https://api.open-meteo.com/v1/forecast?latitude=-7.2492&longitude=112.7508&current=temperature_2m,apparent_temperature,is_day,weather_code&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset'
// const weekly = document.querySelector('#weekly')

function showGifWeather(code) {
    if (code == 0) {
        return '<img src="gif/0"/>'
    } else if (code == 1) {
        return '<img src="gif/1"/>'
    } else if (code == 2) {
        return '<img src="gif/2"/>'
    } else if (code == 3) {
        return '<img src="gif/3"/>'
    } else if (code == 45) {
        return '<img src="gif/45"/>'
    } else if (code == 48) {
        return '<img src=""/>'
    } else if (code == 51 || code == 53 || code == 55 || code == 80 || code == 81 || code == 82 || code == 61 || code == 63 || code == 65) {
        return '<img src="gif/51,53,55,80,81,82,61,63,65.gif"/>'
    } else if (code == 56 || code == 57 || code == 66 || code == 67) {
        return '<img src="gif/56,57,66,67.gif"/>'
    } else if (code == 77 || code == 85 || code == 86 || code == 71 || code == 73 || code == 75) {
        return '<img src="gif/77,85,86,71,73,75.gif"/>'
    } else if (code == 95 || code == 96 || code == 99) {
        return '<img src="gif/95,96,99.gif"/>'
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

async function getDataDaily() {
    try {
        const fetchDaily = await fetch(URL)
        const dataDaily = await fetchDaily.json()

        dataDaily.daily.weather_code.forEach((element, i) => {
            weekly.innerHTML += `
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <span>${dailyDateFormated(dataDaily.daily.time[i])}</span>
                    </div>
                    <div>
                    <img width="50px" src="asset/water-drop.gif" alt="water-drop">
                    <span>56%</span>
                    <img width="50px" src="asset/cloudy-day.gif" alt="cloudy-day">
                    <img width="50px" src="asset/cloudy-night.gif" alt="cloudy-night">
                    <span>${dataDaily.daily.temperature_2m_max[i]}°C</span>
                    <span>${dataDaily.daily.temperature_2m_min[i]}°C</span>
                    </div>
                </div>
            `
        })
    } catch (error) {
        console.error(error)
    }
}

getDataDaily()

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