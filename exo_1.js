function display_weather_chart(longitude, latitude) {
const url = `https://www.7timer.info=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=auto&unit=metric&output=internal&tzshift=0`;
fetch(url)
.then(response => {
      if (!response.ok) {
        throw new Error("Problem with the meto request");
      }
      return response.json();
    })
    .then(data => {
const dates = data.daily.time;
const maxTemps = data.daily.temperature_2m_max;
const minTemps = data.daily.temperature_2m_min;
console.log("Prévisions météo pour les 7 prochains jours :");
for (let i = 0; i < 7; i++) {
console.log(`Date : ${dates[i]}`);
console.log(`  Température max : ${maxTemps[i]}°C`);
console.log(`  Température min : ${minTemps[i]}°C`);
console.log("--------------------");
      }
})
.catch(error => {
console.error("Une erreur s'est produite :", error);
    });
}

