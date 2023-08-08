
gsap.to("#border",{
    width:"100%",
    duration:4,
    delay:1
})
gsap.from("#parta #parta-1 h1",{
    x:1000,
    duration:2,
    delay:0.3,
})
// .from("#parta #parta-1 h1",{
//     x:2000,
//     duration:1,
//     delay:0.3,
// })

gsap.to("#parta #parta-1 h1",{
    y:"100%",
    opacity:0,
    duration:2,
    delay:6
})
gsap.to("#parta-1 h2",{
    opacity:1,
    duration:2,
    delay:0.3,
})
// gsap.from("#parta-1 h2",{
//     opacity:0,
//     duration:2,
//     delay:6,
// })
// gsap.form(".get",{
//     opacity:0,
//     duration:2,
//     delay:6,
// })
 var element=document.querySelector('#parta-1 h2');
//  var element1 = document.querySelector('#parta #parta-1 h1');
 var element2 =  document.querySelector('.get');

function hide(){
    element.style.opacity=0;
    // element1.style.opacity=0;
    element2.style.opacity=0;
    border.style.opacity=0;
 }

setTimeout(() => {
    hide();
}, 6000);

var tl = gsap.timeline();
tl.to("#parta ",{
delay:6,
duration:1,
opacity:0,
})
tl.to("#partb",{
    // width:"100%",
    // height:"100%",
    opacity:0,
    duration:2,
    scale:1.6,
    filter:"blur(20px)",
    opacity:0
})
.to("#partc",{
    scale:1.2,
    duration:2,
    opacity:1,
    delay:-0.5
})
// function show(value) {
//     document.querySelector(".text-box").value = value;
//   }
  
//   let dropdown = document.querySelector(".dropdown")
//   dropdown.onclick = function() {
//       dropdown.classList.toggle("active")
//   }
  
// document.addEventListener("mousemove", function (dets) {
//     document.querySelector("#cursor").style.left = `${dets.x + 38}px`
//     document.querySelector("#cursor").style.top = `${dets.y + 20}px`
//   })


  