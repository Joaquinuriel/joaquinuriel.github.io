navigator.serviceWorker.register("/sw.js")
navigator.connection.effectiveType === "4g" || console.log("slow connection") 

const getIcon = async (icon) => localStorage.getItem(icon) || await fetch(`/assets/ionicons/${icon}.svg`)
    .then(res => res.text()).then(txt => (localStorage.setItem(icon, txt), txt));

let icons = document.querySelectorAll('s');
icons.forEach(async (icon) => icon.outerHTML = await getIcon(icon.innerHTML));

let header = document.querySelector("header");
let menu = document.getElementById("menu");
let headerBtn = header.querySelector("button");
let links = menu.querySelectorAll("a");

const toggleMenu = () => {
    document.body.classList.toggle("locked");
    menu.classList.toggle("menu");
    menu.classList.toggle("menu--hidden");
};

headerBtn.addEventListener("click", () => toggleMenu());
links.forEach(link => link.addEventListener("click", () => toggleMenu()));

let body = document.body;

const say = (message) => {
    let toast = document.getElementById("toast");
    let text = toast.querySelector("p");
    text.innerHTML = message;
    toast.style.top = "60px";
};

let flexBtn = document.querySelector(".flex button");

flexBtn.addEventListener("click", () => say("hello there"));
toast.addEventListener("click", () => toast.style.top = null);

const load = (src) => {
	let script = document.createElement("script");
	script.defer = true;
	script.src = `/assets/js/${src}.js`;
	document.head.appendChild(script);
};

load("fire")
    
// const navigate = (page) => {
//     document.body.classList.add("loading")
// 	fetch(`/assets/${page}.html`)
// 		.then((file) => file.text())
// 		.then((text) => {
// 			document.body.style.transition = "250ms";
//             document.body.style.opacity = 0;
//             setTimeout(() => {
//                 document.body.outerHTML = text;
//                 document.body.style.opacity = 1;
//                 document.body.classList.remove("loading")
//             }, 250)
// 		});
// };

// class Joaa extends HTMLElement {
// 	async render(page) {
// 		await fetch(`/assets/${page}.html`)
// 			.then((file) => file.text())
// 			.then((text) => (this.body = text));
// 	}
// }

// customElements.define("joaa-page", Joaa);

// let account = new Joaa()
// account.render("account")
//     .then(() => account.innerHTML = account.body)
//     .then(() => document.body.appendChild(account))