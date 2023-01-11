var elem = document.querySelector('.carousel');

document.querySelector('.carousel').style.height = '500px';

var flkty = new Flickity( elem, {
  // opciones aquí
  cellAlign: 'center',
  contain: true,
  freeScroll: true,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
  groupCells: 1,
//   autoPlay: true,
  autoPlay: 2000,
  lazyLoad: 2,
  pauseAutoPlayOnHover: false,
  selectedAttraction: 0.002,
  friction: 0.15
  
    });