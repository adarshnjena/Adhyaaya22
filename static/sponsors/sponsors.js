  //? Mascot Scroll Animation
  gsap.registerPlugin(ScrollTrigger);
  // let speed = 100;
  
  let mascot = gsap.timeline();
  ScrollTrigger.create({
    animation: mascot,
    trigger: ".mascot",
    start: "top top",
    end: "100% 100%",
    scrub: 1,
    onEnter: function () {
      gsap.to("#mascot-img", { scaleX: 1, rotation: 0 });
    },
    onLeave: function () {
      gsap.to("#mascot-img", { scaleX: -1, rotation: -4 });
    },
  });
  
  if (window.innerWidth <= 700) {
    mascot.to("#mascot-img", { x: window.innerHeight * 0.35 }, 0);
  } else mascot.to("#mascot-img", { x: window.innerHeight * 1.7 }, 0);
  
  //reset scrollbar position after refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  