const toggleButton = document.getElementsByClassName('button-toggle')[0]
const navbaritems = document.getElementsByClassName('nav-items')[0]


toggleButton.addEventListener('click', () => {
    navbaritems.classList.toggle('active')
})
