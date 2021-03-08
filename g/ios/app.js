const getIcon = async (icon) =>
	localStorage.getItem(icon) ||
	(await fetch(`/assets/ionicons/${icon}.svg`)
		.then((res) => res.text())
		.then((txt) => (localStorage.setItem(icon, txt), txt)));

let icons = document.querySelectorAll("s");
icons.forEach(async (icon) => (icon.outerHTML = await getIcon(icon.innerHTML)));

let body = document.body;
let header = document.querySelector("header");
let nav = document.querySelector("nav");
let menu = document.getElementById("menu");
let open = header.querySelector("button");
let close = menu.querySelector("button");
let fullscreen = document.getElementById("fullscreen");
let download = document.getElementById("download");

const toggleMenu = () => {
	body.classList.toggle("locked");
	menu.classList.toggle("menu");
	menu.classList.toggle("menu--hidden");
};
open.addEventListener("click", toggleMenu);
close.addEventListener("click", toggleMenu);
fullscreen.addEventListener("click", () => document.documentElement.requestFullscreen());
download.addEventListener("click", () => showInstallPromotion());

let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
	e.preventDefault();
	deferredPrompt = e;
});
download.addEventListener("click", () => deferredPrompt.prompt());
