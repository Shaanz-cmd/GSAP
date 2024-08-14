gsap.registerPlugin(ScrollTrigger);

gsap.from(".image", {
  scale: 1.1,
  duration: 1,
  delay: 1.1,
});
gsap.to(".before", {
  x: window.innerWidth,
  duration: 1.5,
  stagger: true,
});
gsap.to(".after", {
  zIndex: 3,
  width: window.innerWidth,
  delay: 4,
  duration: 1.5,
});
gsap.to(".top", {
  delay: 1.5,
  padding: 0,
  duration: 1.4,
});
gsap.to(".bottom", {
  delay: 1.8,
  padding: 0,
  duration: 1.4,
});
gsap.from(".one", {
  scale: 0,
  duration: 0.6,
  delay: 1.4,
});
gsap.from(".two", {
  scale: 0,
  duration: 0.6,
  delay: 1.4,
});
gsap.from(".three", {
  scale: 0,
  duration: 0.6,
  delay: 1.4,
});
gsap.from(".four", {
  scale: 0,
  duration: 0.6,
  delay: 1.4,
});
