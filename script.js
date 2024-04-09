function init(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
    
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
}
init();



var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".home img",
        scroller:".main",  
        start:"top -58%",
        end:"top -209%",
        scrub:3

    }

})
tl3.to(".main",{
    background:"#ffd7f4"
})


var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".home img",
        scroller:".main",  
        start:"top -206%",
        end:"top -329%",
        scrub:5

    }

})
tl4.to(".main",{
    background:"#ffe7f4"
})
//Profile image animation
gsap.to("#profile-img",{
    duration:2.5,
    y:-40,
    repeat:-1,
    yoyo:true});


//About us animation
const split = new SplitText(".text");

    gsap.to(
      split.chars,
      0.7,
      {
        x: "-40",
        ease: "power2.inOut",
        yoyo: true,
        stagger: 0.08,
    
        repeat: -1
      }
    );

//What I do animation
const split1 = new SplitText(".text1");

gsap.set(split1.chars, {
  transformOrigin: "center center -100px",
  backfaceVisibility: "hidden"
});
gsap.to(
  
  split1.chars,
  
  2.4,
  {
    // Rotate on X axis 360 degrees
    rotationX: "360",
    // Delay the next item in seconds
    stagger: 0.1,
    // Infinite repeat
    repeat: -1
  }
);

    gsap.to(".page2-part1", { 
        duration: 2.4,
        rotation: 360,
        repeat:-1,
        repeatDelay:2,
        ease:'bounce.out'

      });
    
var card1 = document.querySelector(".col .card1");
  card1.addEventListener("mouseenter",function(){

    const anchorHTML = '<a href="https://rudrakshabillore1.github.io/todo-list.github.io/ "target="_blank">Click here</a>'
  
    card1.innerHTML=anchorHTML;
    
  })
  card1.addEventListener("mouseleave",function(){
  
    card1.innerHTML="To-Do List";
    
  })

  var card2 = document.querySelector(".col .card2");
  card2.addEventListener("mouseenter",function(){

    const anchorHTML = '<a href="https://jojo-cards.netlify.app/game/0" target="_blank">Click here</a>'
  
    card2.innerHTML=anchorHTML;
    
  })
  card2.addEventListener("mouseleave",function(){
  
    card2.innerHTML="Memory Game";
    
  })

  var card3 = document.querySelector(".col .card3");
  card3.addEventListener("mouseenter",function(){

    const anchorHTML = '<a href="https://themefisher.com/products/bigspring-light-nextjs" target="_blank">Click here</a>'
  
    card3.innerHTML=anchorHTML;
    
  })
  card3.addEventListener("mouseleave",function(){
  
    card3.innerHTML="Landing Page";
    
  })

  var card4 = document.querySelector(".col .card4");
  card4.addEventListener("mouseenter",function(){

    const anchorHTML = '<a href="https://dogstagram-react.netlify.app/" target="_blank">Click here</a>'
  
    card4.innerHTML=anchorHTML;
    
  })
  card4.addEventListener("mouseleave",function(){
  
    card4.innerHTML="Tinder-Dog";
    
  })

  var card5 = document.querySelector(".col .card5");
  card5.addEventListener("mouseenter",function(){

    const anchorHTML = '<a href="https://zxcodes.github.io/Calculator/" target="_blank">Click here</a>'
  
    card5.innerHTML=anchorHTML;
    
  })
  card5.addEventListener("mouseleave",function(){
  
    card5.innerHTML="Calculator";
    
  })

  var card6 = document.querySelector(".col .card6");
  card6.addEventListener("mouseenter",function(){

    const anchorHTML = '<a href="https://dudo.ai/" target="_blank">Click here</a>'
  
    card6.innerHTML=anchorHTML;
    
  })
  card6.addEventListener("mouseleave",function(){
  
    card6.innerHTML="Dice Game";
    
  })
    

 