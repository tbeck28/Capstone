import mongoose from "mongoose";
import { type } from "os";

const matchSchema = new mongoose.Schema({
  // created a new schema just for the mat descriptions, these are how they will be shown under the athlete when they come up on the watch list
  matValue: {
    type: String
  },
  timeValue: {
    type: String
  }


});
const Match = mongoose.model('Match', matchSchema);

export default Match;
// the whole purpose of this is to tell the data how to be modeled
