const img = document.querySelector('.yt-img');
const img2 = document.querySelector('.balle-img');
const header = document.querySelector('header');
const center = document.querySelector('.container');
const réseaux = document.querySelector('.réseaux');

var menu = document.querySelector('.menu');
var menu_toggle = document.querySelector('.menu_toggle');

menu_toggle.onclick = function(){
   menu_toggle.classList.toggle('active');
   menu.classList.toggle('responsive');
}
window.addEventListener('load', () => {
    const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
    tl
    .staggerFrom(header , 2 , {y:-100 , opacity:0, ease: "power2.out"}, 0.3)
    .staggerFrom(img , 1 , {y:-1000 , opacity:0, ease: "power2.out"}, 0.3)
    .staggerFrom(img2 , 1 , {x:-1000 , opacity:0, ease: "power2.out"}, 0.3)
    .staggerFrom(center , 1 , {y:-1000 , opacity:0, ease: "power2.out"}, 0.3)
    .staggerFrom(réseaux , 1 , {y:-100, opacity:0, ease: "power2.out"}, 0.3)
    tl.play();
});

function RedirectionRegister() {
    document.location.href="http://localhost:3000/register";
}