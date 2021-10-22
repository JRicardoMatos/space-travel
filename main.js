const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')

hamburger.addEventListener('click', ()=>{
    navLinks.classList.add('open')
    navLinks.style.transform = 'scaleX(1)'
    hamburger.style.display = 'none'
})


document.addEventListener('mouseup', (event) => {
    if (navLinks.classList.contains('open')) {
        if(!navLinks.contains(event.target))
            navLinks.classList.remove('open')
            navLinks.style.transform = 'scaleX(0)'
            hamburger.style.display = 'block'
    }
})

