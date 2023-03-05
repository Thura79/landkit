
import counterUp from 'counterup2';
import './node_modules/waypoints/lib/noframework.waypoints';


let plan = document.querySelector('.switch');


const money = document.querySelector('.money');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menuclose');
const menuOpen = document.querySelector('.menuopen');
const itclick = document.querySelectorAll('.itclick');


for(let i = 0; i < itclick.length; i++ ){
    itclick[i].addEventListener('click', () => {
        menu.style.left = '-100%'
        menu.style.right = ''
    })
}

menuOpen.addEventListener('click', () => {
    menu.style.left = '0px'
    menu.style.right = '0px'
})

menuClose.addEventListener('click', () => {
    menu.style.left = '-100%'
    menu.style.right = ''
})

plan.addEventListener('change', () => {
    money.classList.toggle('dollor');
    if(money.classList.contains('dollor')) {
        money.innerText = '100';
    }else {
        money.innerText = '29'
    }
})


ScrollReveal().reveal('.headline', {
    distance: '50px',
    origin: 'bottom',
    scale: 0.85,
    duration: 1000,
    reset: true
});

ScrollReveal().reveal('.sect', {
    distance: '50px',
    origin: 'bottom',
    scale: 0.85,
    duration: 1000,
    interval: 300,
    reset: true
});

ScrollReveal().reveal('.left', {
    distance: '50px',
    origin: 'left',
    scale: 0.85,
    duration: 1000,
    reset: true
});

ScrollReveal().reveal('.right', {
    distance: '50px',
    origin: 'right',
    scale: 0.85,
    duration: 1000,
    reset: true
});

var typed = new Typed('.element', {
    strings: ["developers.", "founders.", "designers."],
    typeSpeed: 130,
    backSpeed: 150,
    loop: true
  })



const el = document.querySelector( '.counter' )
const el1 = document.querySelector( '.counter1' )
const el2 = document.querySelector( '.counter2' )



// Start counting, do this on DOM ready or with Waypoints.


var waypoint = new Waypoint({
    element: document.getElementById('element-waypoint'),
    handler: function(direction) {
        counterUp( el, {
            duration: 1000,
            delay: 16,
        } )
        
        counterUp( el1, {
            duration: 1000,
            delay: 16,
        } )
        
        counterUp( el2, {
            duration: 1000,
            delay: 16,
        } )
    },
    offset: '50%'
  })