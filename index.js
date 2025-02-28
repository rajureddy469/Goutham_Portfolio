// Menu-bar
const navMenu = document.querySelector('.nav-menu');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => {
    if(!navMenu.classList.contains('show-menu')){
        navMenu.classList.add("show-menu")
    } else{
        navMenu.classList.remove("show-menu")
    }
})
// Removing Mobile Menu after clicking on menu item
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navLink => {
    navLink.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
})

// Education & Work Tabs
const tabs = document.querySelectorAll('.tab-name');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach(content => {
            content.classList.remove('is-active');
        });
        tabs.forEach(tab => {
            tab.classList.remove('is-active');
        });
        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    })
})
