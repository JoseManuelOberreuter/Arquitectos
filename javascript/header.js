// First, we need to get a reference to the div element with the id 'barralateral'
const lateralBar = document.getElementById('barralateral');

// Next, we will define a function that will be called whenever the user scrolls
function handleScroll() {
  // We can use the window.scrollY property to get the current vertical scroll position of the page
  const scrollPosition = window.scrollY;

  // If the scroll position is greater than 0, it means the user has scrolled away from the top of the page
  if (scrollPosition > 0) {
    // In this case, we can set the div's background to be partially opaque by setting its opacity property to a value between 0 and 1
    lateralBar.style.background = 'rgba(0, 0, 0, 0.9)';
  } else {
    // If the scroll position is 0, it means the user is at the top of the page, so we can set the div's background to be fully transparent by setting its opacity to 0
    lateralBar.style.background = 'rgba(0, 0, 0, 0.0)';
  }
}

// Finally, we will use the window.addEventListener() method to attach the 'scroll' event to the window object, and specify our handleScroll function as the event handler
window.addEventListener('scroll', handleScroll);




