const menuButton = document.querySelector(".menu-button");
const lines = document.querySelectorAll(".menu-button__line");

const lineaTop = document.getElementById('barra-arriba');
const lineaMid = document.getElementById('barra-media');
const lineaBot = document.getElementById('barra-baja');


menuButton.addEventListener("click", () => {
  lineaTop.classList.toggle('barraTop');
  lineaBot.classList.toggle('barraBot');
  lineaMid.style.display = 'none';
  
});