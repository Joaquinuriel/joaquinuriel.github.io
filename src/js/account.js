navigator.serviceWorker.register("/sw.js");
navigator.connection.effectiveType === "4g" || console.log("slow connection");

const getIcon = async (icon) =>
	localStorage.getItem(icon) ||
	(await fetch(`/src/ionicons/${icon}.svg`)
		.then((res) => res.text())
		.then((txt) => (localStorage.setItem(icon, txt), txt)));

let icons = document.querySelectorAll("s");
icons.forEach(async (icon) => (icon.outerHTML = await getIcon(icon.innerHTML)));

const load = async (src) => {
	let script = document.createElement("script");
	script.src = `/src/js/${src}.js`;
	document.head.appendChild(script);
};

load("fire")

let body = document.body;
let header = document.querySelector("header");
let nav = document.querySelector("nav");
let toast = document.getElementById("toast");

let text = toast.querySelector("p");
let link = nav.querySelector("a")
let btn = header.querySelector("button");

const say = (message) => {
	text.innerHTML = message;
	toast.classList = "toast"
};

const unsay = () => toast.classList = "toast--hidden"

toast.addEventListener("click", () => (toast.style.top = null));