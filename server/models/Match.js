import mongoose from "mongoose";
import { type } from "os";

const matchSchema = new mongoose.Schema({

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
