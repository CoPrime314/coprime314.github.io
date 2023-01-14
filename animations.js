
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
}else{
  var body = document.getElementsByTagName("body")[0];
  document.body.classList.add('body2');
}



