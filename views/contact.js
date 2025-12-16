import html from "html-literal"

export default () => html`
<main id="main" class="bigbox">


        <div id="contact">
            <form id='suggestionBox' method='POST'>

              <label for="name">Name:<input type="text" name="name" id=""></label>

                <label for="message">Message <textarea name="message" id="message" cols="50" rows="10"></textarea></label>

                 <input type="submit" name="submitSuggestion" id="formSub">
            </form>
            </div>

    </main>
  `
