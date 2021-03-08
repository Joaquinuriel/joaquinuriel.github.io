const getIcon = async (icon) => localStorage.getItem(icon) || await fetch(`/assets/ionicons/${icon}.svg`)
    .then(res => res.text()).then(txt => (localStorage.setItem(icon, txt), txt));

let icons = document.querySelectorAll('s');
icons.forEach(async (icon) => icon.outerHTML = await getIcon(icon.innerHTML));

const toggleMenu = () => {
    menu.classList.toggle("menu")
    menu.classList.toggle("menu--hidden")
}

let blocks = document.querySelectorAll("div.block")
blocks.forEach((block, n) => setTimeout(() => block.style.marginLeft = "30px", 100 * n))

let nav = document.querySelector("nav")
let open = nav.querySelector("a")
let menu = document.getElementById("menu")
let close = menu.querySelector("button")
open.addEventListener("click", toggleMenu)
close.addEventListener("click", toggleMenu)

let toast = document.getElementById("toast")
let text = toast.querySelector("p")
const say = (something) => {
    unsay()
    text.textContent = something
    toast.classList.add("toast")
    toast.classList.remove("toast--hidden")
}
const unsay = () => {
    toast.classList.remove("toast")
    toast.classList.add("toast--hidden")
}
toast.addEventListener("click", unsay)
setTimeout(() => say("hello!"), 500)

const ask = (question) => {
    toast.textContent = question
    toast.classList.add("toast")
    toast.classList.remove("toast--hidden")
}