gsap.from("#imgTwo, #imgThree", {
  x: 70,
  y: 30,
  duration: 2,
  opacity: 0,
});
gsap.from("#imgOne", {
  x: -70,
  y: -30,
  duration: 2,
  opacity: 0,
});
gsap.from(".main_title", {
  y: -20,
  opacity: 0,
  duration: 2,
});
gsap.from("#starter", {
  y: 20,
  opacity: 0,
  duration: 2,
});
setInterval(() => {
  document.getElementById("blink").classList.toggle("unBlink");
}, 600);
