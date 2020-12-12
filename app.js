const ss = document.querySelectorAll('s');
ss.forEach(async (s) => s.outerHTML = localStorage.getItem(s.innerHTML) || await fetch(`/assets/ionicons/${s.innerHTML}.svg`)
    .then(res => res.text().then(txt => (localStorage.setItem(s.innerHTML, txt), txt))));
const menu = document.querySelector('header svg');
menu.addEventListener('click', () => header.classList.toggle('open'));
const header = document.querySelector('header');
const aa = header.querySelectorAll('a');
window.onscroll = () => window.scrollY > 0 ?
    (header.style.backgroundColor = "#fffe", header.style.color = "royalblue") :
    (header.style.backgroundColor = "#0fa", header.style.color = "white");
const qr = header.querySelector('nav svg');
qr.addEventListener('click', () => qr.classList.add('qr'));
//# sourceMappingURL=app.js.map