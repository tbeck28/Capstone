import html from "html-literal";
export default () => html `

<fieldset>
        <div id="form">
        <form action="">

            <h1>Search Menu</h1>

            <label for="athleteName">Athlete Name:<input type="text"></label>


            <label for="gymName">Gym Name:<input type="text"></label>


            <label for="affName">Affiliation Name:<input type="text"></label>
        </form>
        </div>
    </fieldset>


    <div id="results">

        <div id="athName" class="box">
            <h1>athlete name:</h1>
            <div class="smallbox">
            <h1>mason</h1>
            <h1>megan</h1>
            <h1>mannah</h1>
        </div>

        </div>



        <div id="gym" class="box">
        <h1>gym name:</h1>
        <div class="smallbox">
            <h1>Watson Matial Arts</h1>
            <h1>10th Planet Tanglefoot</h1>
            <h1>Headnod Hq</h1>
        </div>

        </div>



        <div id="aff" class="box">
        <h1>affiliation name:</h1>
        <div class="smallbox">
            <h1>Tac Team</h1>
            <h1>10th Planet</h1>
            <h1>Graie Humita</h1>
        </div>

        </div>

    </div>
`
