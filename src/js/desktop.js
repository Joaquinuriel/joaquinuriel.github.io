let open = nav.querySelector("a");
let close = menu.querySelector("button");

const toggleMenu = () => {
	body.classList.toggle("locked")
	menu.classList.toggle("menu");
	menu.classList.toggle("menu--hidden");
};

open.addEventListener("click", toggleMenu);
close.addEventListener("click", toggleMenu);