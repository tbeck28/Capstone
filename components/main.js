import html from "html-literal";
import * as views from "../views";

export default state =>
  html`
    ${view[state.view](state)}
  `;

