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
    header.classList.toggle("header")
    menu.classList.toggle("menu")
    header.classList.toggle("header--bottom")
    menu.classList.toggle("menu--hidden")
})


let clearCache = document.getElementById("clear-cache")
clearCache.addEventListener("click", () => localStorage.clear())