

const name = prompt('Athlete name');
function createNewElement() {

  const newElement = document.createElement('athlete');
  newElement.className = 'athlete';
  newElement.innerHTML = name;


  const parentElement = document.getElementById('athleteQue');
  parentElement.appendChild(newElement);
  newElement.addEventListener('click', newElement());
}
createNewElement();

