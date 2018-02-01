const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";

function getForCity(city) {  
  const url = `${API_STEM}q=${city}&units=metric&APPID=${WEATHER_API_KEY}`
  return fetch(url)
    .then((response) => response.json())
    .then((res) => {     
      const min = parseInt(res.main.temp_max)
      const max = parseInt(res.main.temp_min)
      return {
        avg: parseInt((max + min) / 2)
      }
    })
    .catch(error => {
      console.log(error);
    });
}

export { getForCity }