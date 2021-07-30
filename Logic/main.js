const btn = document.getElementById("btn-oscuro")

btn.addEventListener("click", () => {
const body = document.querySelector("body")
const html = document.querySelector("html")

body.classList.toggle("oscuro")
html.classList.toggle("oscuro")
btn.classList.toggle("luz")



})


