

const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.getElementsByClassName('card');
const apiKey = 'd885fea198951402fc12026f970666e3'

weatherForm.addEventListener('submit', async event => {
  event.preventDefault();

  const city = cityInput.value;
  if(city){
    try{
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    }
    catch(error){
      console.error(error);
      displayError();
    }

  }
  else {
    displayError('Please enter a city')
  }

});


async function getWeatherData(city) {

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${city}&lon=${apiKey}&appid={API key}`

  const respone = await fetch(apiUrl);

  console.log(response);
  

}

function displayWeatherInfo(data) {

}


function displayError(message) {

  const errorDisplay = document.createElement('p')
  errorDisplay.textContent = message;
  errorDisplay.classList.add('errorDisp');
  card.textContent = '';
  card.style = 'flex';
  card.appendChild(errorDisplay);
}




const hola = document.createElement('p');
document.querySelector('#section1').appendChild(hola)
hola.textContent = 'hola'
hola.style.color = 'blue'




























// source: https://www.youtube.com/watch?v=VaDUGPMjzOM&t=1123s