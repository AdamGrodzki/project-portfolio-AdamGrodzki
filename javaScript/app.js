// SHOW MENU 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]');

const header = document.querySelector('header');

// ACTIVE SCROLL HEADER 
const stickHeader = () => {
    const scroll = window.scrollY;

    if(scroll > 1) {
        header.classList.add('active');
    } else {
        header.classList.remove('active')
    }
}

window.addEventListener("scroll", stickHeader)

// SCROLL REVEAL 
const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <=sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }else {
            sectionsClass.classList.remove('active-link')
        }
    })
};
document.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    delay: 200,
    reset: true,
});

sr.reveal('.home__title',{})
sr.reveal('.button', {delay: 200});
sr.reveal('.home__data, .about__img, .skills__subtitle,', {});
sr.reveal('.home__img, .about__subtitle, .about__text,', {delay: 400});
sr.reveal('.section-title', {interval: 300});
sr.reveal('.home__social-icon', {interval: 200});
sr.reveal('.projects__img, .contact__input', {interval: 200});

//THEME MODE
const darkMode = () => document.body.className = "dark-mode";
const lightMode = () => document.body.className = "light-mode";


document.getElementById("dark__mode").addEventListener("click", darkMode);
document.getElementById("light__mode").addEventListener("click", lightMode);

// AOS ANIMATION 
AOS.init({
    startEvent: 'DOMContentLoaded',
    duration: 800,
    once: false,
    easing: "ease-in",
    delay: 800,
});

function ScrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 300 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', ScrollUp)



// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//       e.preventDefault();
  
//       const targetId = this.getAttribute('href').substring(1);
//       const targetSection = document.getElementById(targetId);

//       console.log("targetSection", targetSection)
//       console.log("targetID:", targetId)

//       window.scrollTo({
//         top: targetSection.offsetTop,
//         behavior: 'smooth',
//         duration: 2500,
//     });
// });
// });

