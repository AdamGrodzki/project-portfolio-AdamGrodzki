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

window.addEventListener('scroll', scrollActive)



const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true,
});

sr.reveal('.home__title',{})
sr.reveal('.button', {delay: 200});
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills_img', {delay: 400});
sr.reveal('.home__social-icon', {interval: 200});
sr.reveal('.skills__data, .projects__img, .contact__input', {interval: 200});


// DARK MODE
document.body.style="background-color: var(--second-bg-color);transition: .3s;"
const sun = src="https://img.icons8.com/emoji/48/crescent-moon-emoji.png";
const moon = src="https://img.icons8.com/color/48/sun--v1.png";

var theme = "dark";
  const root = document.querySelector(":root");
  const container = document.getElementsByClassName("theme-container")[0];
  const themeIcon = document.getElementById("theme-icon");
  container.addEventListener("click", setTheme);



  function setTheme() {
    switch (theme) {
      case "dark":
        setLight();
        theme = "light";
        break;
      case "light":
        setDark();
        theme = "dark";
        break;
    }
  }
  function setLight() {
    document.documentElement.style.setProperty('--bg-color', '#fff')
    root.style.setProperty('--text-color', '#000');
    root.style.setProperty("--second-bg-color", "--text-color");
    container.classList.remove("shadow-dark");
    setTimeout(() => {
      container.classList.add("shadow-light");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = sun;
  }
  function setDark() { 
    root.style.setProperty('--text-color', '#fff');
    root.style.setProperty("--second-bg-color", "#323946");
    container.classList.remove("shadow-light");
    setTimeout(() => {
      container.classList.add("shadow-dark");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
  }

