const menuButton = document.querySelector("header > img")
const nav = document.querySelector("nav")

menuButton.addEventListener('click', toggleMenu)

function toggleMenu () {
    nav.classList.toggle('open')
    console.log("clicked")
}

console.log("hello")