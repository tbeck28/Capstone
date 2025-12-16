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
    let mat = faker.number.int({ min: 1, max: 3 }) // setting the min and max values for how many matches there are
    let hour = faker.number.int({ min: 8, max: 16 }) // setting the min and max values for what times this will be active
    let mins = faker.number.int({ min: 0, max: 5 }) * 10 // setting the min and max values for time intervals, this is set to be in intervals of 10(Ex: 8:10, 8:20, 8:30)
    let hourFormat = hour.toString().padStart(2, '0'); // setting up how the hour will be displayed as a string, telling it that there is going to be 2 values, which will be 0
    let time = `${hourFormat}:${minFormat}` // created a variable for to display the time in the correct format using a template literal
    let match = { 'matValue': `${mat}`, 'timeValue': `${time}` } // combining the mat numbers and the time together
    console.log(match) // console logging to confirm that we were getting the correct output
    sched.push(match) // once verified that the answer was correct we are pushing(adding) the variables in to the array sched
  }
  console.log(sched)
  return { 'athlete': athleteName, 'division': chosenDivision, 'team': chosenTeam, 'schedule': sched }
}

// create athlete route:
router.post('/', async (request, response) => { // defining a POST route are the root path, post is for creating new resources
  try {

    // //  take what the user sent us and search for an athlete from it
    const newAthlete = new Athlete(generateRandomAthlete()); // creating a new athlete in a mongoose document and saves it as a variable

    console.log(newAthlete)
    // // add that athlete to our
    const athletes = await newAthlete.save() // inserting the document into MongoDB, await pauses execution until the save completes
    response.json(athletes) // saving the athlete as a JSON response
  }
  catch (error) { // error handling, this is to catch any errors and log it into the console so we can then take action and debug it
    console.log(error)
  }

})

// get all the athletes route

router.get("/", async (request, response) => {
  try {
    // Store the query params(key and value pairs) into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const athletes = await Athlete.find(query);

    response.json(athletes);
  } catch (error) {
    // Output error to the console in case it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// getting one athlete from the data base:

router.get("/:id", async (request, response) => { // defining a get request at the route with a specified id, which is specified by what the user puts into the search box
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
