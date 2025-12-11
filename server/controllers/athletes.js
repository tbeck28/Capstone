import { Router } from 'express';
import Athlete from '../models/Athlete.js';
import { faker } from '@faker-js/faker';

// create a new router, this is where the athlete is selected
const router = Router();

function generateRandomAthlete() {
  const athleteName = faker.person.fullName();

  const divisions = ['gi', 'no-gi', 'gi-absolute', 'no-gi-absolute'];
  const chosenDivision = faker.helpers.arrayElement(divisions);

  const teams = ['gracie barra', 'watson martial arts', '10th planet'] // add more later
  const chosenTeam = faker.helpers.arrayElement(teams);

  let sched = []

  for (let x = 0; x < 3; x++) {
    let mat = faker.number.int({ min: 1, max: 3 })
    let hour = faker.number.int({ min: 8, max: 16 })
    let mins = faker.number.int({ min: 0, max: 5 }) * 10
    let hourFormat = hour.toString().padStart(2, '0');
    let minFormat = mins.toString().padStart(2, '0');
    let time = `${hourFormat}:${minFormat}`
    let match = { 'matValue': `${mat}`, 'timeValue': `${time}` }
    console.log(match)
    sched.push(match)
  }
  console.log(sched)
  return { 'athlete': athleteName, 'division': chosenDivision, 'team': chosenTeam, 'schedule': sched }
}

// create athlete route:
router.post('/', async (request, response) => {
  try {


    // //  take what the user sent us and search for an athlete from it
    const newAthlete = new Athlete(generateRandomAthlete());

    console.log(newAthlete)
    // // add that athlete to our
    const data = await newAthlete.save()
    response.json(data)
  }
  catch (error) {
    console.log(error)
  }

})

export default router
