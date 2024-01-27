///make header sticky and change background color when user scroll
let header=document.querySelector("header nav");
window.onscroll=function(){
    if(this.scrollY > 80){
        header.classList.add("sticky-nav")


    }
    else{
        header.classList.remove("sticky-nav")



    }

}
//open menu bar in mobile screens when click on hamburger btn
let hamburger=document.querySelector(".hamburger");
let menuBar=document.querySelector("header .navbar");

hamburger.addEventListener("click",function(){
    this.classList.toggle("active");
    menuBar.classList.toggle("show");
    menuBar.addEventListener("click",function(){
        console.log("sss")
        hamburger.classList.remove("active");
        this.classList.remove("show");
    })
    document.querySelectorAll("header .navbar ul li a").forEach(ele=>{
        ele.addEventListener("click",function(){
            hamburger.classList.remove("active");
            menuBar.classList.remove("show");



        })
    })
    
});

let aside=document.querySelector("header .navbar ul"); 
aside.addEventListener("click",function(e){
    e.stopPropagation();
})


let CloseAsideBtn=document.querySelector("header .navbar .close-aside");
console.log(CloseAsideBtn)
CloseAsideBtn.addEventListener("click",function(e){
  hamburger.classList.remove("active");
            menuBar.classList.remove("show");
})






  $('#our-partners').owlCarousel({
    stagePadding: 0,
    rtl:true,
    loop:true,
    margin:10,
    nav: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout:2000,
    autoplaySpeed: 3000,
    
    autoplayHoverPause: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$('#our_works_slider').owlCarousel({
  loop: false,
  margin: 20,
  nav: true,
    rewindNav:true,
  autoplay: true,
  rtl:true,
  dots:true,

  navText: [
    "<img src='assets/images/left-arrow.webp'>",
    "<img src='assets/images/right-arrow.webp'>"
  ],
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    500: {
      items: 2
    },
    1000: {
      items: 4
    },
    1600:{
      items:5
    }
  },

  
  
})


//FAQ accordion
const accSingleTriggers = document.querySelectorAll('.js-acc-single-trigger');

accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

function toggleAccordion() {
  const items = document.querySelectorAll('.js-acc-item');
  const thisItem = this.parentNode;

  items.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle('is-open');
      return;
    }
    item.classList.remove('is-open');
  });
}