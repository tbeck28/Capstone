import html from "html-literal";
export default () => html`
<main>
    <div id='searchSection'>
<fieldset>
        <div id="form">
        <form action="">

            <h1>Search Menu</h1>

            <label for="athleteName">Athlete Name:<input type="text"></label>


            <label for="gymName">Gym Name:<input type="text"></label>
        </form>
        </div>
    </fieldset>


    <div id="results">

        <div id="athName" class="box">
            <h1>athlete name:</h1>
            <div class="smallbox">
                <p>mason</p>
                <p>hannah</p>
                <p>megan</p>


    </div>
</div>
</main>
`
