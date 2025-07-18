const track = document.getElementById("techTrack");

let scrollAmount = 0;
const speed = 3;

function scrollLogos() {
  scrollAmount += speed;
  if (scrollAmount >= track.scrollWidth / 2) {
    scrollAmount = 0;
  }
  track.style.transform = `translateX(-${scrollAmount}px)`;
  requestAnimationFrame(scrollLogos);
}

requestAnimationFrame(scrollLogos);
