function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  locomotiveAnimation();
Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr" , {
  videos: ["https://media.istockphoto.com/id/473073037/video/coupon-savings.mp4?s=mp4-640x640-is&k=20&c=p9RSwcqQ4qjLuPDJwvUYXKr91_PXjhstzB-PCrcs_co="],
});
// Shery.hoverWithMediaCircle(".hvr2" , {
//     images: ["https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=600",    "https://images.pexels.com/photos/5905706/pexels-photo-5905706.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600", 
//    "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600"],
// });
function loaderPart() {
    var timeline = gsap.timeline()
timeline.from("#loader h2", {
  x:90,
  opacity:0,
  duration:2,
  stagger:0.1
})
timeline.to("#loader h2", {
  x:-90,
  opacity:0,
  duration:1,
  stagger:0.1
})
timeline.to("#loader", {
  opacity:0
})
timeline.to("#loader", {
  display:"none"
})
}
loaderPart()
function loadinganimation() {
    gsap.from("#right h1", {
      y: -150,
      opacity: 0,
      delay: 5.5,
      duration: 0.9,
      stagger: 0.3,
    })};
 loadinganimation();
function loadinganimation2() {
    gsap.from("#left h3", {
      y: 150,
      opacity: 1,
      delay: 4.5,
      duration: 1.5,
      stagger: 0.3,
    })};
 loadinganimation2(); 

function navanimation() {
gsap.from(".right a", {
    x: -150,
    opacity: 1,
    delay: 3.5,
    duration: 1.2,
    stagger: 0.3,
})};
 navanimation();