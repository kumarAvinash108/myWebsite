gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".page"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".page" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".page", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".page").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();






var parent = document.querySelector('.loadingParent')
var h1 = document.querySelector('.h1Div h1')
var progress = document.querySelector('.progress')

var interval
var count = 0
var val = 0
 function load(){
    interval =  setInterval(()=>{
        if(count<100){
            count++;
            h1.textContent = `${count}%`
            progress.style.height = `${count}%`
            h1.style.bottom = `${count-30}%`
           
        }
    
        else{
            clearInterval(interval)
            parent.style.display = 'none'
            document.querySelector('.ldprt').style.display = 'none'
        }
       
    },25)
    return true
   
}
load()
setTimeout(()=>{
document.querySelector('.intro').style.display = 'block'
},3000)

var tl = gsap.timeline()
tl.from('.intro h1',{
    delay: 3.5,
    stagger:0.2,
    opacity:0,
   y:50,
 
})
tl.from('img',{
    opacity:0,
    x:50,
    stagger:0.2,
    scale:0
})
tl.to('#main',{
  
    rotate:'-90deg',
    x:-1500,
  display:'none',

    opacity:0,
    display:'none',
   scrollTrigger:{
    // start:'end 30%',
    // end:'end 60%',
    trigger:'#main',
    scroller:'.page',
    // markers:true,
    scrub:1.7,
    
  pin:true,
  end:'50%'
   }
})

  


 // menu animation
 var main  = document.querySelector('#Menu')
 function menuFun(){
   
    var interval
  main.addEventListener('mouseenter',()=>{
    
    interval = setInterval(()=>{
        let a = Math.floor(Math.random() *70)
        let b = Math.floor(Math.random() *70)
        let c = Math.floor(Math.random() *70)
        let d = Math.floor(Math.random() *70)
        let e = Math.floor(Math.random() *70)
        let f = Math.floor(Math.random() *70)
        let g = Math.floor(Math.random() *70)
        let h = Math.floor(Math.random() *70)
        main.style.borderRadius = `${a}% ${b}% ${c}% ${d}% `
        
    },110)
  })
  main.addEventListener('mouseleave',()=>{
    
    main.style.borderRadius = '10px'
    clearInterval(interval)
  })

 }
 function menuBtn(){
    
    var val = false
    var btn = document.querySelector('.p2')
   
    btn.addEventListener('click',()=>{
        if(val == false)
        {
            main.style.display = 'block'
            val = true
            
        }
        else{
            main.style.display = 'none'
            val = false
            
        }
        
    })
 }


 menuBtn()
menuFun()
var tl2 = gsap.timeline()



// intoText animation
var intv

var intext = document.querySelector('.introText')




// page3 animation
gsap.from('#page3',{
    backgroundColor : '#fff',
    opacity:0.5,
    scrollTrigger:{
        trigger :'#page3',
        scroller:'.page',
        // markers : true,
        start:'top 50%',
        end:'top 10%',
        scrub : 2
    }
})

gsap.to('#page3 h1',{
    color:'#fff',
    transform : 'translateX(-40%)',
    scrollTrigger : {
        trigger :'#page3',
        scroller:'.page',
        scrub:2.5,
        pin:true

    }
})


// giving blur divs border radius
var design = document.querySelector('.design')
var design2 = document.querySelector('.design2')
var int1 = setInterval(()=>{
    let a = Math.floor(Math.random() *100)
    let b = Math.floor(Math.random() *200)
    let c = Math.floor(Math.random() *100)
    let d = Math.floor(Math.random() *100)
    let e = Math.floor(Math.random() *200)
    let f = Math.floor(Math.random() *100)
    let g = Math.floor(Math.random() *100)
    let h = Math.floor(Math.random() *100)
    design.style.borderRadius = `${a}% ${b}% ${c}% ${d}% `
    design2.style.borderRadius = `${a}% ${b}% ${c}% ${d}% `

},50)


//changing the text color of paragraph in page2


function splitting(){
 var pText =    document.querySelector('#page2 p').textContent
var arr = pText.split('')
var clutter = ''
arr.forEach((ele)=>{
clutter+=`<span>${ele}</span>`
})
document.querySelector('#page2 p').innerHTML = clutter

}

function gsapAnimation(){
    gsap.to('#page2 span',{
        color : '#fff',
        opacity:1,
     
        stagger : 0.5,
        scrollTrigger :{
            target:'#page2 span',
            scroller:'.page',
            // markers:'true',
            start : '100% -20%',
            end: 'top -20%',
            scrub : 2
        }
    })

}
splitting()
gsapAnimation()


// cursor button in page2
//cursor coding
var cursor = document.querySelector('.cursor')
var p2 = document.querySelector('#page2')

p2.addEventListener('mousemove',(dets)=>{
    // cursor.style.display = 'block'
    cursor.style.top  = (dets.y)+'px'
   cursor.style.left = dets.x+'px'
})
p2.addEventListener('mouseleave',()=>{
    cursor.style.display = 'none'
})
var p1 = document.querySelector('.p1')
var p2 = document.querySelector('.p2')
p1.addEventListener('mouseenter',()=>{
    cursor.style.scale = '3'
    cursor.style.backgroundColor = 'red'
})
p1.addEventListener('mouseleave',()=>{
    cursor.style.scale = '1'
    cursor.style.backgroundColor = 'white'
})
// intoText animation
var intv

var intext = document.querySelector('.introText')
intext.addEventListener('mouseenter',()=>{
    cursor.style.display = 'block'
    cursor.style.backgroundColor = 'transparent'
   cursor.style.scale = '1.8'
   cursor.style.backgroundColor = 'salmon'
   
  
   intv = setInterval(()=>{ let a = Math.floor(Math.random() *70)
    let b = Math.floor(Math.random() *70)
    let c = Math.floor(Math.random() *70)
    let d = Math.floor(Math.random() *70)
    let e = Math.floor(Math.random() *70)
    let f = Math.floor(Math.random() *70)
    let g = Math.floor(Math.random() *70)
    let h = Math.floor(Math.random() *70)
    cursor.style.borderRadius = `${a}% ${b}% ${c}% ${d}% `
},200)

   
})
intext.addEventListener('mouseleave',()=>{
    cursor.style.backgroundColor = '#fff'
   cursor.style.scale = '1'
   cursor.style.borderRadius = `50%`
   cursor.style.display = 'none'
   
   clearInterval(intv)
   
})

//page 4

gsap.to('#page4',{
    backgroundColor:'#A1554D',
    scrollTrigger:{
        trigger:'#page4',
        scroller:'.page',
        // markers:true,
        scrub:2,
        start:'top 30%',
        end:'top 10%'

    }
})

//project animation

var major = document.querySelector('.major')
var projectSec = document.querySelector('.project')
var image = document.querySelector('#imge')
projectSec.addEventListener('mouseenter',()=>{
    image.style.backgroundImage = `url(/Images/foodpur.gif`
    image.style.backgroundSize = 'cover'
    // image.style.backgroundPosition = 'center'
})

projectSec.addEventListener('mouseleave',()=>{
    image.style.backgroundImage = `url(/Images/foodpur.png`
    image.style.backgroundSize = '100%'
    image.style.backgroundRepeat = 'no-repeat'
})
var int1 = setInterval(()=>{
    let a = Math.floor(Math.random() *100)
    let b = Math.floor(Math.random() *200)
    let c = Math.floor(Math.random() *100)
    let d = Math.floor(Math.random() *100)
    let e = Math.floor(Math.random() *200)
    let f = Math.floor(Math.random() *100)
    let g = Math.floor(Math.random() *100)
    let h = Math.floor(Math.random() *100)
    document.querySelector('#des').style.borderRadius = `${a}% ${b}% ${c}% ${d}% `
    

},100)

// animation on each project

gsap.from('.project',{
    opacity:0,
    y:100,
    stagger:0.2,
    scrollTrigger:{
        trigger:'.project',
        scroller:'.page',
        // markers : true,
        scrub:2,
        start: 'top 50%',
        end: 'top 40%',
        
    }
})

// animation of page5


gsap.to('#page5',{
    backgroundColor : '#fff',
    
    scrollTrigger : {
        trigger :'#page5',
        scroller:'.page',
        // markers:true,
        scrub : 2,
        start:'top 50%',
        end:'top 10%'
    }
})
gsap.from('#page5',{
//   rotate:-60,
  x:-400,
 
    scrollTrigger : {
        trigger :'#page5',
        scroller:'.page',
        // markers:true,
        scrub : 2,
        start:'top 40%',
        end:'top 8%'
    }
})

// h1 in page5

function splitting2(){
    var pText =    document.querySelector('#page5 h1').textContent
   var arr = pText.split('')
   var clutter = ''
   arr.forEach((ele)=>{
   clutter+=`<span>${ele}</span>`
   })
   document.querySelector('#page5 h1').innerHTML = clutter
   
   }
   splitting2()

gsap.from('#page5 h1 span',{
   scale:0,
    opacity:0,
    scale:0,
    x:-400,
    stagger:0.2,
   
    scrollTrigger:{
        trigger:'#page5 h1 span',
        scroller:'.page',
        scrub:2,
        // markers:'true',
        start:'top 30%',
        end:'top 20%'

    }
  
})
// cards animation

var card = document.querySelectorAll('.cards')
var h2 = document.querySelectorAll('.cards h2')

card.forEach((val,index)=>{
val.addEventListener('mouseenter', (dets)=>{
    h2[index].style.display = 'block';
   
 
    
})
val.addEventListener('mouseleave', ()=>{
    h2[index].style.display = 'none';
   
    
 
})
})

// showing text in details division

var html = 'I have a very good knowledge of HTML🖥️...'
var htmlArr = html.split('')

var css = "I am very comfortable in CSS and I can make responsive websites using CSS and I have a good knowledge of tailwind css 😉..."
var cssArr = css.split('')

var js = "I have a good understanding of JavaScript and I also have a great understanding of DOM, I can use libraries like GSAP, Locomotive js , ScrollTrigger, React Js etc 😎..."
var jsArr = js.split('')

var c1 = document.querySelector('#card1')
var c2 = document.querySelector('#card2')
var c3 = document.querySelector('#card3')
var details = document.querySelector('.detail')
var click = true
var click1 = true
var click2 = true
c1.addEventListener('click',()=>{
    
   if(click){
    var str = ``
    htmlArr.forEach((ele)=>{
        str+=`<span>${ele}</span>` 
    })
    details.innerHTML = str
    details.style.display = 'block'
    
    gsap.to(".detail span",{
        color: "#000000",
        fontSize:"4vh",
        opacity: 1,
        scale:1,
        duration: 1,
        stagger: 0.05,
        duration:0.02,
        
    })
    click = !click
   }
   else if(click == false){
    details.style.display = 'none'
    click = true
    
   }

   
})
c2.addEventListener('click',()=>{
   
    if(click1){
     var str = ``
     cssArr.forEach((ele)=>{
         str+=`<span>${ele}</span>`
     })
     details.innerHTML = str
     details.style.display = 'block'

     gsap.to(".detail span",{
         color: "#000000",
         fontSize:"4vh",
         opacity: 1,
         duration: 1,
        scale:1,

         stagger: 0.05,
         duration:0.02,
         
     })
     click1 = false
    }
    else{
     details.style.display = 'none'
     click1 = true
    }
 
    
 })
 c3.addEventListener('click',()=>{
    
    if(click2){
     var str = ``
     jsArr.forEach((ele)=>{
         str+=`<span>${ele}</span>`
     })
     details.innerHTML = str
     details.style.display = 'block'
     click2 = false
     gsap.to(".detail span",{
         color: "#000000",
         fontSize:"4vh",
         opacity: 1,
         duration: 1,
        scale:1,

        stagger: 0.05,
        duration:0.02,
         
     })
    }
    else{
     details.style.display = 'none'
     click2 = true
    }
 
    
 })

 // applying animation on cards

 gsap.from('.cards',{
scale:0,
rotate:360,
stagger:0.2,
scrollTrigger:{
scroller:'.page',
trigger:'.cards',
// markers:true,
scrub:2,
start:'top 90%',
end:'top 80%'
}
 })

 // applying animation on design1

 gsap.to('.design1',{
    width: '100vw',
  
    scrollTrigger:{
        scroller:'.page',
        trigger:'.design1',
        // markers:true,
        scrub:2,
        start:'top 10%',
        end:'top 0%',
    }
 })