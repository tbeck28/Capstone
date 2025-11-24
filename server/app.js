import express, { response } from 'express';
import { request } from 'http';
import cors from 'cors';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config()


mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const app = express();

app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
  response.send('welcome to my app')
}) // needs two parameters, the path and the function of the particular form

app.get('/status', (request, response) => {
  response.json({ message: ' service working' })
})


const server = app.listen(3000, () => console.log(`Listening on port ${server.address().port}`)); // im turned on and running and listening on port 3000
