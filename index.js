import Navigo from "navigo";
import { header, nav, main, footer } from "./components";
import * as store from './store'
import * as views from './views'
import { camelCase } from 'lodash'
import axios from 'axios';
import { getDefaultHighWaterMark } from "stream";
const router = new Navigo('/')



function render(state = store.homepage) { // about should be the homepage, make a homepage
  document.querySelector('#root').innerHTML = `
  ${header(state)}
  ${nav(store.nav)}
  ${main(state)}
  ${footer()}`

  router.updatePageLinks(); // every time we navigate to a different page, navigo manages those links and also keeps track of where they go
};

// axios
//   // fetching our data from an API
//   .get(`https://avatar.iran.liara.run/username?username=${views / views.watchlist.name}`)
//   // then console logging the response
//   .then(response => {
//     console.log(response)
//   }).catch(error => {
//     console.log(error)
//   })

router.hooks({
  // We pass in the `done` function to the before hook handler to allow the function to tell Navigo we are finished with the before hook.
  // The `match` parameter is the data that is passed from Navigo to the before hook handler with details about the route being accessed.
  // https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md#match
  before: (done, match) => {
    // We need to know what view we are on to know what data to fetch
    const view = match?.data?.view ? camelCase(match.data.view) : "homepage"; // previous was 'watchlist'
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // Add a case for each view that needs data from an API
      case "athlete":
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?APPID=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`).then(response => {
            console.log('weather response.data', response.data);
            store.athlete.weather = {
              city: response.data.name,
              temp: response.data.main.temp,
              feelsLike: response.data.main.feels_like,
              description: response.data.weather[0].main
            };
            console.log('Weather response.data', response.data);
            done();
          })
          .catch((error) => {
            console.log("It puked", error);
            done();
          });
        break

      case "watchlist":
        // New Axios get request utilizing already made environment variable

        console.log("this is someone somones name: ", store.athlete.name)
        axios
          .get(`${process.env.MAT_FINDER_API_URL}/athletes?athlete=${store.athlete.name}`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response);
            store.watchlist.athletes = response.data
            done();
          })
          .catch((error) => {
            console.log("It puked", error);
            done();
          });
        break;
      default:
        // We must call done for all views so we include default for the views that don't have cases above.
        done();
      // break is not needed since it is the last condition, if you move default higher in the stack then you should add the break statement.
    }
  },
  already: async (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    switch (view) {
      // Add a case for each view that needs data from an API

      case "watchlist":
        // New Axios get request utilizing already made environment variable

        console.log("this is someone somones name: ", store.athlete.name)
        await axios
          .get(`${process.env.MAT_FINDER_API_URL}/athletes?athlete=${store.athlete.name}`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response);
            store.watchlist.athletes = response.data
            done();
          })
          .catch((error) => {
            console.log("It puked", error);
            done();
          });
        break;
      default:
        // We must call done for all views so we include default for the views that don't have cases above.
        done();
      // break is not needed since it is the last condition, if you move default higher in the stack then you should add the break statement.
    }

    render(store[view]);

    if (view === 'athlete') {
      document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value
        console.log(name)
        store.athlete.name = name

      }
      )

    }
  },
  after: (match) => {

    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    if (view === 'athlete') {
      document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value
        console.log(name)
        store.athlete.name = name

        router.navigate('watchlist')
      }
      )
      router.updatePageLinks();



    }



    // add menu toggle to bars icon in nav bar
    document.querySelector(".fa-bars").addEventListener("click", () => {
      document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });
  }
});

router.on({
  "/": () => render(),
  // The :view slot will match any single URL segment that appears directly after the domain name and a slash
  '/:view': function (match) {
    // If URL is '/about-me':
    // match.data.view will be 'about-me'
    // Using Lodash's camelCase to convert kebab-case to camelCase:
    // 'about-me' becomes 'aboutMe'
    const view = match?.data?.view ? camelCase(match.data.view) : "homepage"; // about should be the homepage, make a homepage

    // If the store import/object has a key named after the view
    if (view in store) {
      // Then the invoke the render function using the view state, using the view name
      render(store[view]);
    } else {
      // If the view name is not in the store, then display viewNotFound view
      render(store.viewNotFound);
      console.log(`View ${view} not defined`);
    }
  }
}).resolve();



// add menu toggle to bars icon in nav bar
/*document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
*/

