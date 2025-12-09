import html from "html-literal";

export default () => html`
 <main>


    <div id="centerElement">

          <h1>Welcome to Mat Finder!</h1>
          <h3>The tournament organization software you never knew you needed!</h3>
    </div>

      <ul id="navi">
        <li class="link">

          <a href="about.html">About us!</a>

        <ul class="innerUl">

          <li class="item">Find out more about mat finder</li>

        </ul>
        </li>


        <li class="link"><a href="contact.html">Contact us!</a>
          <ul class="innerUl">
            <li>have suggestions or improvements?</li>
            <li>let us know by contacting us</li>
          </ul>

        </li>


        <li class="link">

          <a href="athlete.html">Athlete Selection</a>
          <ul class="innerUl">
            <li>This is where the magic starts</li>
          </ul>

        </li>


        <li class="link"><a href="about.html">Help Me Documentation</a>
          <ul class="innerUl">
            <li>first time to the site?</li>
            <li>visit this page to help you navigate the application</li>
          </ul>

        </li>



      </ul>
</main>
`
