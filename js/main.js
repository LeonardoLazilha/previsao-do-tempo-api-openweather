

const key = "169a0762f1fad96a05a61fd284c06cfd"

function showData(dados) {

    document.querySelector(".city-name").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".txt-prev").innerHTML = dados.weather[0].description
    document.querySelector(".umid").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-prev").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    console.log(dados)
}

async function searchCity(cityName) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json()) 
    // espera o servidor acessar para continuar    
    showData(dados)
}

function clickBtn() {
    const cityName = document.querySelector(".input-city").value;

    searchCity(cityName)
}

