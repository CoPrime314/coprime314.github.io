
//parallaxing with cursor
const bodymouse = document.querySelector('body');
function handleMouseMove(event) {
  const { clientX, clientY } = event;
  const x = clientX / window.innerWidth;
  const y = clientY / window.innerHeight;
  bodymouse.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
}
//end of parallax code
//**
// for windows specific
//**
if (typeof window.orientation == 'undefined'){
bodymouse.addEventListener('mousemove', handleMouseMove);
}

console.log("test");
let appear_once =0;
var snowstorm = document.getElementById("snowstorm");
snowstorm.loop=true;

var body = document.getElementsByTagName("body")[0];
body.addEventListener("click",changebg);

function changebg(body){

    // EVENTS
    
    document.body.removeEventListener("click",changebg);
    console.log("what");
    snowstorm.play();
    setTimeout(() => {  
        document.body.classList.add('bodyimpactin');
    }, 9350);
    setTimeout(() => {  document.body.classList.add('bodycoprime');
    document.body.classList.remove('bodyimpactin');
    }, 10350);
    setTimeout(() =>{
      $(".dialogue").append("<p>GREETINGS TRAVELER...</p>");
    },12350);
    setTimeout(() =>{
      $(".dialogue").empty();
      $(".dialogue").append("<p>WELCOME TO MY CABIN...</p>");
    },15350);
    setTimeout(() =>{
      $(".dialogue").empty();
      $(".dialogue").append("<p>I HOPE YOU ENJOY YOUR STAY...</p>");
    },18350);
    setTimeout(() =>{
      $(".dialogue").empty();
      $(".dialogue").append("<p>GO AHEAD... HAVE A LOOK AROUND...</p>");
    },21350);
    setTimeout(() =>{
      $(".dialogue").empty();
    },24350);
}


