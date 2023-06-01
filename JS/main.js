const canva = document.getElementById("grafico")
graph (datos.serie, canva)


const cityInput = document.getElementById('city')
const getButton = document.getElementById('get')
const nameSpan = document.getElementById('cityName')
const countrySpan = document.getElementById('country')
const tempSpan = document.getElementById('temp')
const maxTempSpan = document.getElementById('maxTemp')
const minTempSpan = document.getElementById('minTemp')

const readCity = async () => {
const city = cityInput.value
const informacion = await getData(
'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}' 
)

console.log(informacion)

nameSpan.innerText = informacion.name
tempSpan.innerText = Math.ceil(informacion.main.temp - 273.15)

}

getButton.addEventListener('click', readCity)
