import html from "html-literal";

export default () => html`
 <main>


    <div id="centerElement">

          <h1>Welcome to Mat Finder!</h1>
          <h3>The tournament organization software you never knew you needed!</h3>
    </div>

      <ul id="navi">
        <li> About Us!<li>
        <ul class="innerUl">
          <li class="item">Find out more about mat finder</li>
        </ul>


        <li>Contact us!</li>
          <ul class="innerUl">
            <li>have suggestions or improvements?</li>
            <li>let us know by contacting us</li>
          </ul>

        </li>


        <li>Athlete Selection</li>
        <ul>
          <li>Select the athlete you want to follow throughout the tournament</li>
        </ul>



      </ul>
</main>
`
