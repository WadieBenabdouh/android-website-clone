// HEADER SEARCH OPENING x CLOSING
let headerLeft = document.querySelector(".left")
let headerRight = document.querySelector(".right")
const searchField = document.querySelector(".search-wrapper")
const searchBtn = document.querySelector("#search")

searchBtn.onclick = () => {
    headerLeft.classList.toggle("active")
    headerRight.classList.toggle("active")
    searchField.classList.toggle("active")
}

let closeSearchBtn = document.querySelector("#closeSearchBtn")

closeSearchBtn.onclick = () => {
    headerLeft.classList.remove("active")
    headerRight.classList.remove("active")
    searchField.classList.remove("active")
}
// HEADER OPENING x CLOSING END


// BURGER MENU
const burgerMenuBtn = document.querySelector("#burgerMenuBtn")
const mobileNav = document.querySelector(".mobile-nav")
const closeBurgerBtn = document.querySelector(".x-mark")
const bodyOverlayDark = document.querySelector("body")

burgerMenuBtn.onclick = () => {
    mobileNav.classList.toggle("active")
    bodyOverlayDark.classList.toggle("active")
}

closeBurgerBtn.onclick = () => {
    mobileNav.classList.remove("active")
    bodyOverlayDark.classList.remove("active")
}
// BURGER MENU END


// OPENING MORE 1> Essentials
let essentialsTab = document.querySelector('#essentialsTab')
let essentialsPage = document.querySelector(".essentials-page")
let backBtn = document.querySelector('.backBtn')

essentialsTab.onclick = () => {
    essentialsPage.classList.toggle("active")
    backBtn.classList.toggle("active")
    closeBurgerBtn.classList.toggle("active")
}

backBtn.onclick = () => {
    essentialsPage.classList.remove("active")
    backBtn.classList.remove("active")
    closeBurgerBtn.classList.remove("active")
}
// OPENING MORE 1> Essentials END