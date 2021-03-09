const toggleNav = () => {
    body.classList.toggle("locked")
    nav.classList.toggle("nav")
    nav.classList.toggle("nav--visible")
}

btn.addEventListener("click", toggleNav)

