import html from "html-literal";
import navItem from "./navItem"

export default navItems => html`
    <nav>
  <i class='fas fa-bars'></i>
  <ul>
    ${navItems.map(item => navItem(item)).join('')}
  </ul>
    </nav>
`
// look back at class spa to set up lines 8-11, need to use template literal
