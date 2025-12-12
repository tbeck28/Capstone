import html from "html-literal";

export default (state) => html`
     <main>

    ${console.log(state)}
    ${state.athletes.map(athlete => {
    console.log('hello')
    return `
         <div class="box">
            <p>${athlete.athlete}</p>
            <p>${athlete.schedule[0].matValue}</p>
            <p>${athlete.division}</p>
        </div>
        `
}).join('')}
        <!-- <div class="box yellow">
            <p>Athlete Name</p>
            <p>mat number</p>
            <p>division</p>
        </div>

         <div class="box green">
            <p>Athlete Name</p>
            <p>mat number</p>
            <p>division</p>
        </div>

         <div class="box">
            <p>Athlete Name</p>
            <p>mat number</p>
            <p>division</p>
        </div>

         <div class="box">
            <p>Athlete Name</p>
            <p>mat number</p>
            <p>division</p>
        </div> -->

    </main >
    `
