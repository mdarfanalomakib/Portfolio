var typed= new Typed(".x",{
    strings:["Web Developer","Graphic Designer","Game Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,

});

//Navlinks Active
let sections= document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll= ()=>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });

        };

    });

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};
//////////////////////////////////////


//Toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick =() =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};
//////////////////////////////////////


//Scroll Reveal
ScrollReveal({
    // reset:true,
    distance:'80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, .heading, .home-content p, .about-content',{origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin: 'left'});








//////////////////////////////////////

//Button Hover
let buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    let text = button.textContent;
    button.innerHTML = '';

    for (let char of text) {
        let span = document.createElement('span');
        span.textContent = char === '' ? '\u00A0' : char;
        button.appendChild(span);
    }

    // Corrected the method name from querySelectionAll to querySelectorAll
    let spans = button.querySelectorAll('span'); // Fixed the variable name to 'spans'
    
    button.addEventListener('mouseenter', () => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('hover'); // Fixed 'classLists' to 'classList'
            }, index * 50);
        });
    });

    button.addEventListener('mouseleave', () => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.remove('hover'); // Fixed 'classLists' to 'classList'
            }, index * 50);
        });
    });
});
