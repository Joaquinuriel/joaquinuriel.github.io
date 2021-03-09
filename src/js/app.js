navigator.serviceWorker.register("/sw.js");
navigator.connection.effectiveType === "4g" || console.log("slow connection");

const getIcon = async (icon) =>
	localStorage.getItem(icon) ||
	(await fetch(`/src/ionicons/${icon}.svg`)
		.then((res) => res.text())
		.then((txt) => (localStorage.setItem(icon, txt), txt)));

let icons = document.querySelectorAll("s");
icons.forEach(async (icon) => (icon.outerHTML = await getIcon(icon.innerHTML)));

let body = document.body;
let header = document.querySelector("header");
let nav = document.querySelector("nav");
let menu = document.getElementById("menu");
let toast = document.getElementById("toast");

let text = toast.querySelector("p");
let link = nav.querySelector("a")
let btn = header.querySelector("button");

const toggleMenu = () => {
	document.body.classList.toggle("locked");
	menu.classList.toggle("menu");
	menu.classList.toggle("menu--hidden");
};

btn.addEventListener("click", toggleMenu);

const say = (message) => {
	text.innerHTML = message;
	toast.style.top = "60px";
};

toast.addEventListener("click", () => (toast.style.top = null));

const load = (src) => {
	let script = document.createElement("script");
	script.src = `/src/js/${src}.js`;
	document.head.appendChild(script);
};

if (window.matchMedia("(orientation: portrait)").matches) {
	load("mobile");
} else load("desktop");

load("fire");


