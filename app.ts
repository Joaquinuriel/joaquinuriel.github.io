navigator.serviceWorker.register('/sw.js');

// ICONS
let icons = document.querySelectorAll('s')
icons.forEach(async icon => icon.outerHTML = await getIcon(icon.innerHTML))

const getIcon = async (icon: string) => localStorage.getItem(icon) || await fetch(`/assets/ionicons/${icon}.svg`)
    .then(res => res.text().then(txt => (localStorage.setItem(icon, txt), txt)))

let header = document.querySelector("header")
let menu = header.querySelector("svg")


// menu.addEventListener('click', () => menu.ac)

