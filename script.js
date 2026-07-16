const quotes = [

"Some feelings are easier written than spoken.",

"Every page remembers a different version of me.",

"The words stayed, even when people didn't.",

"These pages became home before I ever did.",

"Some memories refuse to stay silent."

];

document.getElementById("quote").textContent =
quotes[Math.floor(Math.random()*quotes.length)];

const shooting = document.createElement("div");

shooting.className = "shooting-star";

document.body.appendChild(shooting);

setTimeout(()=>{

shooting.remove();

},2500);
