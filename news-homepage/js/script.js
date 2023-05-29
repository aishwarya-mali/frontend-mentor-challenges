const menu = document.getElementById('hamburger-menu')
const closeMenu = document.getElementById('close-menu')
const mbMenu = document.getElementById('mb-menu')

menu.addEventListener('click', function(e){
    menu.style.display = "none"
    closeMenu.style.display = "inline-block"
    mbMenu.style.display = "inline-block"
    mbMenu.style.opacity = "1"
    mbMenu.style.animation = "fadeIn 0.3s";
})

closeMenu.addEventListener('click', function(e){
    closeMenu.style.display = "none"
    menu.style.display = "inline-block"
    mbMenu.style.display = "none"
    mbMenu.style.opacity = "0"
    mbMenu.style.animation = "";
})