var tl = gsap.timeline();
tl.from(".main h1", {
  y: 40,
  x: -20,
  opacity: 0,
  duration: 1,
  color: "yellow",
}).from(".main button", {
  y: 40,
  opacity: 0,
  duration: 1,
});
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    tl.to(".main h1", {
        rotation:"360deg",
        duration:3,
        color: "blue"
    })
});
let chng = document.getElementById("btnn");

chng