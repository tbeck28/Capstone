
function doc (name, place, element, description){
    name = document.createElement(element);
    document.querySelector(place).appendChi+    d(name);
    name.textContent = description;
}

doc('h1', 'header', 'h1', 'Who Are We?');

doc('p', 'main', 'p', 'I am a one man team. My name is Quinn, I live in St Louis and I am a beginning developer, this is my first application. The idea behind this was while on a hiatus from jiu jitsu, I was watching my friends compete, and it was just a horrible experience. It was very unorganized, I had to have multiple tabs open to track my friends matches and I just thought there had to be a better wat to do this and after not finding it, I decided I would just make a way. I wanted it to be very simple and bre minimum, meaning no fat, if it is not necessary. This application will provide accurate tournament information while also taking some of the stress away as well.')
