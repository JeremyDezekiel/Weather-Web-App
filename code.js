const wmo = {
    0: {
        day: {
            description: 'Sunny',
            image: '<img width="50px" src="weatherCode/0 clear.gif"/>',
        },
        night: {
            description: 'Clear',
            image: '<img width="50px" src="weatherCode/0 night.gif"/>',
        },
    },
    1: {
        day: {
            description: 'Mainly Sunny',
            image: '<img width="50px" src="weatherCode/1 day Mostly Clear.gif"/>',
        },
        night: {
            description: 'Mainly Clear',
            image: '<img width="50px" src="gif/weatherCode/1 night Mostly Clear.gif"/>',
        },
    },
    2: {
        day: {
            description: 'Partly Cloudy',
            image: '<img width="50px" src=""/>',
        },
        night: {
            description: 'Partly Cloudy',
            image: '<img width="50px" src=""/>',
        },
    },
    3: {
        day: {
            description: 'Cloudy',
            image: '<img width="50px" src="weatherCode/3 Overcast day.gif"/>',
        },
        night: {
            description: 'Cloudy',
            image: '<img width="50px" src="weatherCode/3 Overcast night.gif"/>',
        },
    },
    45: {
        day: {
            description: 'Foggy',
            image: '<img width="50px" src="weatherCode/45 day fog.gif"/>',
        },
        night: {
            description: 'Foggy',
            image: '<img width="50px" src="weatherCode/45 night fog.gif"/>',
        },
    },
    48: {
        day: {
            description: 'Rime Fog',
            image: '<img width="50px" src="weatherCode/48 day icy fog.gif"/>',
        },
        night: {
            description: 'Rime Fog',
            image: '<img width="50px" src="gif/48 night icy fog"/>',
        },
    },
    51: {
        day: {
            description: 'Light Drizzle',
            image: '<img width="50px" src="weatherCode/51 day rain.gif"/>',
        },
        night: {
            description: 'Light Drizzle',
            image: '<img width="50px" src="weatherCode/51 night rain.gif"/>',
        },
    },
    53: {
        day: {
            description: 'Drizzle',
            image: '<img width="50px" src="weatherCode/53 day rain.gif"/>',
        },
        night: {
            description: 'Drizzle',
            image: '<img width="50px" src="weatherCode/53 night rain.gif"/>',
        },
    },
    55: {
        day: {
            description: 'Heavy Drizzle',
            image: '<img width="50px" src="weatherCode/55 day rain.gif"/>',
        },
        night: {
            description: 'Heavy Drizzle',
            image: '<img width="50px" src="weatherCode/55 night rain.gif"/>',
        },
    },
    56: {
        day: {
            description: 'Light Freezing Drizzle',
            image: '<img width="50px" src=""/>',
        },
        night: {
            description: 'Light Freezing Drizzle',
            image: '<img width="50px" src=""/>',
        },
    },
    57: {
        day: {
            description: 'Freezing Drizzle',
            image: '<img width="50px" src=""/>',
        },
        night: {
            description: 'Freezing Drizzle',
            image: '<img width="50px" src=""/>',
        },
    },
    61: {
        day: {
            description: 'Light Rain',
            image: '<img width="50px" src="weatherCode/61 day rain.gif"/>',
        },
        night: {
            description: 'Light Rain',
            image: '<img width="50px" src="weatherCode/61 night rain.gif"/>',
        },
    },
    63: {
        day: {
            description: 'Rain',
            image: '<img width="50px" src="weatherCode/63 day rain.gif"/>',
        },
        night: {
            description: 'Rain',
            image: '<img width="50px" src="weatherCode/63 night rain.gif"/>',
        },
    },
    65: {
        day: {
            description: 'Heavy Rain',
            image: '<img width="50px" src="weatherCode/65 day rain.gif"/>',
        },
        night: {
            description: 'Heavy Rain',
            image: '<img width="50px" src="weatherCode/65 night rain.gif"/>',
        },
    },
    66: {
        day: {
            description: 'Light Freezing Rain',
            image: '<img width="50px" src=""/>',
        },
        night: {
            description: 'Light Freezing Rain',
            image: '<img width="50px" src=""/>',
        },
    },
    67: {
        day: {
            description: 'Freezing Rain',
            image: '<img width="50px" src=""/>',
        },
        night: {
            description: 'Freezing Rain',
            image: '<img width="50px" src=""/>',
        },
    },
    71: {
        day: {
            description: 'Light Snow',
            image: '<img width="50px" src="weatherCode/71 day snow.gif"/>',
        },
        night: {
            description: 'Light Snow',
            image: '<img width="50px" src="weatherCode/71 nigth snow.gif"/>',
        },
    },
    73: {
        day: {
            description: 'Snow',
            image: '<img width="50px" src="weatherCode/73 day snow.gif"/>',
        },
        night: {
            description: 'Snow',
            image: '<img width="50px" src="weatherCode/73 night snow.gif"/>',
        },
    },
    75: {
        day: {
            description: 'Heavy Snow',
            image: '<img width="50px" src="weatherCode/75 day snow.gif"/>',
        },
        night: {
            description: 'Heavy Snow',
            image: '<img width="50px" src="weatherCode/75 night snow.gif"/>',
        },
    },
    77: {
        day: {
            description: 'Snow Grains',
            image: '<img width="50px" src="weatherCode/77 day snow.gif"/>',
        },
        night: {
            description: 'Snow Grains',
            image: '<img width="50px" src="weatherCode/77 night snow.gif"/>',
        },
    },
    80: {
        day: {
            description: 'Light Showers',
            image: '<img width="50px" src="weatherCode/80 day rain.gif"/>',
        },
        night: {
            description: 'Light Showers',
            image: '<img width="50px" src="weatherCode/80 night rain.gif"/>',
        },
    },
    81: {
        day: {
            description: 'Showers',
            image: '<img width="50px" src="weatherCode/81 day rain.gif"/>',
        },
        night: {
            description: 'Showers',
            image: '<img width="50px" src="weatherCode/81 night rain.gif"/>',
        },
    },
    82: {
        day: {
            description: 'Heavy Showers',
            image: '<img width="50px" src="weatherCode/82 day rain.gif"/>',
        },
        night: {
            description: 'Heavy Showers',
            image: '<img width="50px" src="weatherCode/82 night rain.gif"/>',
        },
    },
    85: {
        day: {
            description: 'Light Snow Showers',
            image: '<img width="50px" src="weatherCode/85 day snow.gif"/>',
        },
        night: {
            description: 'Light Snow Showers',
            image: '<img width="50px" src="weatherCode/85 night snow.gif"/>',
        },
    },
    86: {
        day: {
            description: 'Snow Showers',
            image: '<img width="50px" src="weatherCode/86 day snow.gif"/>',
        },
        night: {
            description: 'Snow Showers',
            image: '<img width="50px" src="weatherCode/86 night snow.gif"/>',
        },
    },
    95: {
        day: {
            description: 'Thunderstorm',
            image: '<img width="50px" src="weatherCode/95 day thunder.gif"/>',
        },
        night: {
            description: 'Thunderstorm',
            image: '<img width="50px" src="weatherCode/95 night thunder.gif"/>',
        },
    },
    96: {
        day: {
            description: 'Light Thunderstorms With Hail',
            image: '<img width="50px" src="weatherCode/96 day thunder rain.gif"/>',
        },
        night: {
            description: 'Light Thunderstorms With Hail',
            image: '<img width="50px" src="weatherCode/96 night thunder rain.gif"/>',
        },
    },
    99: {
        day: {
            description: 'Thunderstorm With Hail',
            image: '<img width="50px" src="weatherCode/99 day thunder rain.gif"/>',
        },
        night: {
            description: 'Thunderstorm With Hail',
            image: '<img width="50px" src="weatherCode/99 night thunder rain.gif"/>',
        },
    },
};
