const menu = document.getElementById('hamburger-menu')
const closeMenu = document.getElementById('close-menu')
const mbMenu = document.getElementById('mb-menu')
const navbar =  document.querySelector('nav')

function toggleMenu(){
    navbar.classList.toggle('hidden')
    mbMenu.classList.toggle('fade-in')
}

menu.addEventListener('click', toggleMenu)
closeMenu.addEventListener('click', toggleMenu)