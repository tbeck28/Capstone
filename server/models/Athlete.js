import mongoose from "mongoose";

const athleteSchema = new mongoose.Schema({
  // a schema is the display model that the data will follow or be presented in
  athlete: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/ // this is called a regex(regular expression), with this the only submission itll take from a form is a regular expression, letters a-z numbers 0-9 the beginning, the front slash and back slash represent a regex. The carrot(^) tells it to go to the beginning of the string, the dollar sings means go to the end of the string, the start means pick every character from the beginning to the end and this processes the entirety of the string
  },
  division: {
    type: String,
    required: true,
    enum: ['gi', 'no-gi', 'gi-absolute', 'no-gi-absolute'] // enum is short for enumerator, meaning it is a white list, the value of division has to match whatever is in the array exactly
  },
  matNumber: Number,
  team: {
    type: String,
    default: 'Watson Martial Arts'
  }



});
const Athlete = mongoose.model('Athlete', athleteSchema);

export default Athlete;
// the whole purpose of this is to tell the data how to be modeled
