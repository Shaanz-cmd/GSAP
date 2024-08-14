// Make sure to register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

gsap.to("#page1 .box", {
  x: 300,
  rotate: 360,
  duration: 3,
});
gsap.to("#page2 .box", {
  scrollTrigger: {
    trigger: "#page2 .box",
    markers: true,
    start: "top center",
    scrub: 1,
    pin:true,
  },
  x: 300,
  rotate: 360,
  duration: 3,
});
