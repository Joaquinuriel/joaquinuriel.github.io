navigator.serviceWorker.register('/sw.js');

// ICONS
const getIcon = async (icon: string) => localStorage.getItem(icon) || await fetch(`/assets/ionicons/${icon}.svg`)
    .then(res => res.text().then(txt => (localStorage.setItem(icon, txt), txt)))

let icons = document.querySelectorAll('s')
icons.forEach(async icon => icon.outerHTML = await getIcon(icon.innerHTML))

let header = document.querySelector("header")
let menu = document.getElementById("menu")
let headerBtn = header.querySelector("button")

headerBtn.addEventListener("click", () => {
    menu.classList.toggle("menu")
    menu.classList.toggle("menu--hidden")
})

let flexBtn = document.querySelector(".flex button")
flexBtn.addEventListener("click", () => say("hello there"))

// document.createElement("")

let updateIcons = document.getElementById("clear-cache")
updateIcons.addEventListener("click", () => localStorage.clear())

let toast = document.getElementById("toast")
let para = toast.querySelector("p")
const say = (message: string) => {
    para.innerHTML = message
    toast.style.top = "60px"
}
toast.addEventListener("click", () => toast.style.top = null)