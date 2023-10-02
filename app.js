let headerLeft = document.querySelector(".left")
let headerRight = document.querySelector(".right")
const searchField = document.querySelector(".search-wrapper")
const searchBtn = document.querySelector("#search")

searchBtn.onclick = () => {
    headerLeft.classList.toggle("active")
    headerRight.classList.toggle("active")
    searchField.classList.toggle("active")
}