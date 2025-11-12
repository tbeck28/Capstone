import html from "html-literal";
export default () => html `
 <main>

    <div id="zones">
        <div class="red">
            <h1>active</h1>

            <div class="athlete">
                <ul>
                    <h1 class="athleteName">User Data</h1>
                    <h1 class="mat">mat number 15</h1>
                    <li>Division: User data</li>
                    <li>opponent: User Data</li>
                    <li>make this way more compact  </li>
                </ul>
            </div>


        </div>


        <div class="yellow">
            <h1>2 matches away</h1>
        </div>


        <div class="green">
            <h1> 5+ matches away </h1>
        </div>


</div>


<div id="athleteHeader">
    <h1>Athlete Que</h1>
</div>



<div id="athleteQue">
<button onclick="



const name = prompt('Athlete name');
function createNewElement () {

        const newElement = document.createElement('athlete');
        newElement.className = 'athlete';
        newElement.innerHTML = name;


        const parentElement = document.getElementById('athleteQue');
        parentElement.appendChild(newElement);
        newElement.addEventListener('click', newElement());
    }
    createNewElement();
" class="athlete">Add New Athlete</button>

<div class="athlete">
    <ul>
        <h1 class="athleteName">User Data</h1>
        <h1 class="mat">mat number 15</h1>
        <li>mat number: User Data</li>
        <li>weight: User Data</li>
        <li>opponent: User Data</li>
    </ul>
</div>

<div class="athlete">
    <ul>
        <h1 class="athleteName">User Data</h1>
        <h1 class="mat">mat number 15</h1>
        <li>mat number: User Data</li>
        <li>weight: User Data</li>
        <li>opponent: User Data</li>
    </ul>
</div>
</div>

</main>
`
