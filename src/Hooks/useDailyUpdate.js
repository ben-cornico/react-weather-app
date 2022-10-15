// THIS WILL BE FOR FUTURE UPDATES
function useDailyUpdate(dailyInfo) {
    const daily = [];
    dailyInfo.forEach(element => {
        daily.push({
            dt: element.dt,
            temp: element.temp,
            icon: `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`,
            desc: element.weather[0].description,
        })
    })
    return daily;
}

export default useDailyUpdate