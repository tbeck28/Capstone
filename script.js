const athlete = document.getElementById('athlete')

athlete.addEventListener('click', () => {
  const name = prompt('Athlete name')
  const dispName = document.createElement('h1')
  dispName.textContent = name  // name of the athlete that the user types in, this has the h1 element in it
  console.log(dispName)

  const athleteBox = document.createElement('div') // box the name is going to be displayed in
  athleteBox.className = 'athlete'
  athleteBox.appendChild(dispName)

  const initials = document.createElement('img')
  initials.src = `https://avatar.iran.liara.run/username?username=${name}`
  athleteBox.appendChild(initials)

  const athleteQ = document.getElementById('athleteQue').appendChild(dispName) // athlete que at the bottom of the screen
  athleteQ.appendChild(athleteBox)
})

// you are putting the h1 element from the name inside of the athlete queue

export { athlete }
