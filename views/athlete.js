import html from "html-literal";
export default (state) => html`
<main>
    <div id='searchSection'>
<fieldset>

    <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>


        <div id="form">
        <form action="">

            <h1>Search Menu</h1>

            <label for="athleteName">Athlete Name:<input type="text" id="name"></label>

            <input type="submit" name="" id="submit-button">


        </form>
        </div>
    </fieldset>
</div>
</main>
`
