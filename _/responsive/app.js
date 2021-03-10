const getIcon = async (icon) =>
	localStorage.getItem(icon) ||
	(await fetch(`/assets/ionicons/${icon}.svg`)
		.then((res) => res.text())
		.then((txt) => (localStorage.setItem(icon, txt), txt)));

let icons = document.querySelectorAll("s");
icons.forEach(async (icon) => (icon.outerHTML = await getIcon(icon.innerHTML)));

let blocks = document.querySelectorAll("div.block");
// blocks.forEach((block, n) => setTimeout(() => (block.style.marginLeft = "30px"), 100 * n));

const load = (src) => {
	let script = document.createElement("script");
	script.src = `/assets/js/${src}.js`;
	document.head.appendChild(script);
};

if (window.matchMedia("(display-mode: browser)").matches) {
	load("mobile");
} else load("desktop");

let body = document.body
let nav = document.querySelector("nav");


let toast = document.getElementById("toast");
let text = toast.querySelector("p");
const say = (something) => {
	text.textContent = something;
	toast.classList = "toast";
};


setTimeout(() => say("hello!"), 500);

const ask = (question) => {
	toast.textContent = question;
	toast.classList.add("toast");
	toast.classList.remove("toast--hidden");
};

toast.addEventListener("click", () => toast.classList = "toast--hidden")


