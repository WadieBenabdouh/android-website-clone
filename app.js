// HEADER OPENING x CLOSING

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
const closeBurgerBtn = document.querySelector("#closeBurger")
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

// OPENING MORE 1
let essentialsTab = document.querySelector("#essentialsTab")
let essentialsPage = document.querySelector(".essentials-page")
const crossMark = document.querySelector("#cross-mark")
const backBtn = document.querySelector("fa-arrow-left")

essentialsTab.onclick = () => {
    essentialsPage.classList.toggle("active")
    crossMark.className = 'fa-solid fa-arrow-left';
}

closeBurgerBtn.onclick = () => {
    essentialsPage.classList.remove("active")
    crossMark.className = ("fa-solid fa-xmark");
}
