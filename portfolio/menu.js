let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () =>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})



let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop < lastScrollTop) {
        // Rolar para baixo
        document.getElementById("menu-desktop").classList.add("hidden");
    } else {
        // Rolar para cima
        document.getElementById("menu-desktop").classList.remove("hidden");
    }

    if (currentScrollTop === 0) {
        document.getElementById("menu-desktop").classList.remove("hidden");
    }

    lastScrollTop = currentScrollTop;
});