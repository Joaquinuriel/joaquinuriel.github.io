navigator.serviceWorker.register('/sw.js');
const getIcon = async (icon) => localStorage.getItem(icon) || await fetch(`/assets/ionicons/${icon}.svg`)
    .then(res => res.text().then(txt => (localStorage.setItem(icon, txt), txt)));
let icons = document.querySelectorAll('s');
icons.forEach(async (icon) => icon.outerHTML = await getIcon(icon.innerHTML));
let header = document.querySelector("header");
let headerBtn = header.querySelector("button");
headerBtn.addEventListener("click", () => menu.classList.toggle("--hidden"));
let menu = document.getElementById("menu");
let menuBtn = document.getElementById("close-menu");
menuBtn.addEventListener("click", () => menu.classList.toggle("--hidden"));
let clearCache = document.getElementById("clear-cache");
clearCache.addEventListener("click", () => localStorage.clear());
