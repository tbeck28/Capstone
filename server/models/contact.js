import mongoose from "mongoose";
import { type } from 'os';

const suggestionsSchema = new mongoose.Schema({
  Username: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  message: {
    type: String
  }
})

const Suggestion = mongoose.model('Suggestion', suggestionsSchema)

export default Suggestion;
