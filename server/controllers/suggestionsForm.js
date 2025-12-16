import { Router } from 'express';
import Suggestion from "../models/contact.js";

// creating a route to add a new name and comment

const router = Router();

router.post('/', async (request, response) => {
  try {
    console.log('This is the full request', request)
    const newSuggestion = new Suggestion(request.body)
    console.log('This is the newSuggestion post request')
    console.log(newSuggestion)
    const suggestion = await newSuggestion.save()
    response.json(suggestion)
  }
  catch (error) {
    console.log(error)
  }
})

export default router;
