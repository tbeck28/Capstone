import { response, Router } from 'express';
import Athlete from '../models/Athlete.js';
import { faker } from '@faker-js/faker';
import { request } from 'http';

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
    const athletes = await newAthlete.save()
    response.json(athletes)
  }
  catch (error) {
    console.log(error)
  }

})

// get all the athletes route

router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const athletes = await Athlete.find(query);

    response.json(athletes);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// getting one athlete from the data base:

router.get("/:id", async (request, response) => {
  try {
    const athletes = await Athlete.findById(request.params.id);

    if (athletes === null) response.status(404);

    response.json(athletes);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error.errors)
  }
});



export default router
