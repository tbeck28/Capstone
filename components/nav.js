import html from "html-literal";
import navItem from "./navItem"

export default navItems => html`
    <nav>

        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Watch List</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact US</a></li>
        </ul>

    </nav>
`
// look back at class spa to set up lines 8-11, need to use template literal
