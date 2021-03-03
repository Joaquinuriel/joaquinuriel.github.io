const getIcon = async (icon) => localStorage.getItem(icon) || await fetch(`/assets/ionicons/${icon}.svg`)
    .then(res => res.text().then(txt => (localStorage.setItem(icon, txt), txt)));

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
let toast = document.getElementById("toast");
let para = toast.querySelector("p");
const say = (message) => {
    para.innerHTML = message;
    toast.style.top = "60px";
};

let flexBtn = document.querySelector(".flex button");

flexBtn.addEventListener("click", () => say("hello there"));
toast.addEventListener("click", () => toast.style.top = null);


import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

const octokit = new Octokit();

octokit.request('GET /repos/Joaquinuriel/joaquinuriel.github.io/contents/README.md', {})
    .then(({ data }) => console.log(atob(data.content)))
