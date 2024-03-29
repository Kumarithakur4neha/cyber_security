gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
 // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
 ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

 // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
 ScrollTrigger.refresh();

 var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        // markers:true,
        start: "top 5%",
        end: "top -100%",
        scrub: 2,
    }
})
 gsap.to(".page1-side-img",{
    // rotate:10,
    scale:2,
    opacity:1,
    transition:"all ease 1s",
    delay:"1s"
 })
 tl1.from(".page1 h1",{
    y:50,
    opacity:0,
 })
 gsap.from(".page1 h2",{
    x:-350,
    opacity:0,
  delay:"1s",
  
 })

  var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        // markers:true,
        start:"top 10% ",
        end:"top 50%",   
scrub:2,
    }
  })
  tl2.from(".page2-elem-box2",{
    x:-200,
    opacity:0,
  })
  tl2.from(".page2-elem-box3",{
    x:200,
    opacity:0,
  })
  tl2.from(".page2-elem-box1 h1",{
    y:-50,
    opacity:0,
  })

  var search=document.querySelector(".header-right-search img")
  var cross=document.querySelector(".page1-side img")

  tl1.from(".page1-side",{
    right:"-40%",
     })

     tl1.from(".page1-side a",{
      duration:1,
      x:400,
      stagger:0.3,
      opacity:0,
     })
     tl1.pause()

     search.addEventListener("click",function(){
      tl1.play()
    })
     cross.addEventListener("click",function(){
      tl1.reverse()
     }) 
        
     var arrow=document.querySelector(".page3-feedback img")
     var cross2=document.querySelector(".page3-close img")
     
     var tl3=gsap.timeline({
      scrollTrigger:{
          trigger:".page3",
          scroller:".main",
          // markers:true,
          start:"top 10% ",
          end:"top 50%",   
  scrub:2,
      }
    })
    tl3.from(".page3-down",{
      y:"100",
      opacity:"0",
      
       })
       
       tl3.from(".page3-feedback1",{
        //  duration:1,
         y:100,
        //  stagger:0.3,
         opacity:0,
        })
        tl3.pause()  
  
       arrow.addEventListener("click",function(){
        tl3.play()
      })
       cross2.addEventListener("click",function(){
        tl3.reverse()
       }) 