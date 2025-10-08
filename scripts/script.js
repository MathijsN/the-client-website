const menuButton = document.querySelector("header > img")
const nav = document.querySelector("nav")
const header = document.querySelector("header")
const flyingButton = document.querySelector(".flying-button")

menuButton.addEventListener('click', toggleMenu)

function toggleMenu () {
    nav.classList.toggle('open')
    header.classList.toggle('static')
    flyingButton.classList.toggle('display')
    console.log("clicked")
}

console.log("hello")