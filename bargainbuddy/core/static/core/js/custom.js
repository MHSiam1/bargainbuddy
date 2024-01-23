Shery.mouseFollower();
Shery.makeMagnet(".magnet");

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
Shery.hoverWithMediaCircle(".hvr" , {
  videos: ["https://media.istockphoto.com/id/473073037/video/coupon-savings.mp4?s=mp4-640x640-is&k=20&c=p9RSwcqQ4qjLuPDJwvUYXKr91_PXjhstzB-PCrcs_co="],
});
function loadinganimation() {
    gsap.from("#right h1", {
      y: -150,
      opacity: 0,
      delay: 4,
      duration: 0.9,
      stagger: 0.3,
    })};
loadinganimation();
function loadinganimation2() {
    gsap.from("#left h3", {
      y: 150,
      opacity: 1,
      delay: 5,
      duration: 1.5,
      stagger: 0.3,
    })};
 loadinganimation2(); 
 Shery.imageEffect("#fimgs", {
  style:5,
  gooey:true,
  config: {"a":{"value":0.23,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.707887201195219},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":8}},"discard_threshold":{"value":0.54,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  
})