const daily = {
    time: [
        "2024-10-14",
        "2024-10-15",
        "2024-10-16",
        "2024-10-17",
        "2024-10-18",
        "2024-10-19",
        "2024-10-20",
    ],
    temperature_2m: [11.5, 11.8, 13.7, 15.5, 16.5, 15.3, 13.5],
};

const days = document.querySelector('#days')

for (let i = 0; i < daily.time.length; i++) {
    // console.log(formattedDate(daily.time[i]))
    days.innerHTML += `
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <span>${formattedDate(daily.time[i])}</span>
            </div>
            <div>
                <img width="50px" src="asset/water-drop.gif" alt="water-drop">
                <span>56%</span>
                <img width="50px" src="asset/cloudy-day.gif" alt="cloudy-day">
                <img width="50px" src="asset/cloudy-night.gif" alt="cloudy-night">
                <span>${daily.temperature_2m[i]}</span>
                <span>26°</span>
            </div>
        </div>
    `
}

function formattedDate (date) {
    const options = {
        weekday: 'long',
        year : 'numeric',
        month : 'long',
        day : 'numeric',
    }
    const newDate = new Date(date)
    const formatted = newDate.toLocaleDateString('en-US', options)
    return formatted
}