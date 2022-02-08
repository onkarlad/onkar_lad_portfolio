//  black bg on scrll
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if(document.documentElement.scrollTop>40) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
 }
};


// to remove onload navigation background
window.onload= function(){
    nav.classList.remove("scroll-on")
}



// nav hide
let navBar=document.querySelectorAll(".nav-link");
let navCollapse =document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})











