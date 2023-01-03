
// Primero, seleccionamos el elemento principal de la imagen a través de su id
const imagenPrincipal = document.getElementById("imagen-principal");
const portafolioPrincipal = document.getElementById('portafolio-principal');

// Luego, podemos seleccionar cada una de las imágenes de la galería a través de su id
const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");
const imagen3 = document.getElementById("imagen3");
const imagen4 = document.getElementById("imagen4");
const imagen5 = document.getElementById("imagen5");
const imagen6 = document.getElementById("imagen6");
const imagen7 = document.getElementById("imagen7");
const imagen8 = document.getElementById("imagen8");
const imagen9 = document.getElementById("imagen9");
const imagen10 = document.getElementById("imagen10");
const imagen11 = document.getElementById("imagen11");
const imagen12 = document.getElementById("imagen12");



function scrollPortafolio(){
  const portafolioPrincipal = document.getElementById('portafolio-principal');

  portafolioPrincipal.scrollIntoView({
    behavior: 'smooth',
    block: 'start'  });
}

// Ahora, podemos establecer un evento click en cada una de las imágenes de la galería
imagen1.addEventListener("click", function() {
  imagenPrincipal.src = imagen1.src;
});

imagen2.addEventListener("click", function() {
  imagenPrincipal.src = imagen2.src;
  portafolioPrincipal.scrollIntoView({ behavior: "smooth" });
});

imagen3.addEventListener("click", function() {
  imagenPrincipal.src = imagen3.src;
  portafolioPrincipal.scrollIntoView({ behavior: "smooth" });
});

imagen4.addEventListener("click", function() {
  imagenPrincipal.src = imagen4.src;

});

imagen5.addEventListener("click", function() {
  imagenPrincipal.src = imagen5.src;

});

imagen6.addEventListener("click", function() {
  imagenPrincipal.src = imagen6.src;
});

imagen7.addEventListener("click", function() {
  imagenPrincipal.src = imagen7.src;
});

imagen8.addEventListener("click", function() {
  imagenPrincipal.src = imagen8.src;
});

imagen9.addEventListener("click", function() {
  imagenPrincipal.src = imagen9.src;
});

imagen10.addEventListener("click", function() {
  imagenPrincipal.src = imagen10.src;
  
});

imagen11.addEventListener("click", function() {
  imagenPrincipal.src = imagen11.src;
  window.scrollTo({ top: imagenPrincipal.offsetTop, behavior: "smooth" });
});

imagen12.addEventListener("click", function() {
  imagenPrincipal.src = imagen12.src;
  window.scrollTo({ top: imagenPrincipal.offsetTop, behavior: "smooth" });
});