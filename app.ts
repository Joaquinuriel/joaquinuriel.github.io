const ss = document.querySelectorAll('s')
ss.forEach(async s => s.outerHTML = localStorage.getItem(s.innerHTML) || await fetch(`/assets/ionicons/${s.innerHTML}.svg`)
    .then(res => res.text().then(txt => (localStorage.setItem(s.innerHTML, txt), txt))))

const menu = document.querySelector('header svg')
menu.addEventListener('click', () => header.classList.toggle('open'))
const header = document.querySelector('header')
const aa = header.querySelectorAll('a')
window.onscroll = () => window.scrollY > 0? 
    (header.style.backgroundColor = "#fffe", header.style.color = "royalblue") :
    (header.style.backgroundColor = "#0fa", header.style.color = "white")

// const qr = header.querySelector('nav svg')
// qr.addEventListener('click', () => qr.classList.toggle('qr'))
// header.addEventListener('click', e => qr.contains(e.target) || qr.classList.toggle('qr'))

// let socket = new WebSocket("wss://joaquinuriel.github.io");
// socket.onopen = (e) => {
//     alert("[open] Connection established")
//     alert("Sending to server") 
//     socket.send("My name is John")
// };
// socket.onmessage = (event) => {
//     alert(`[message] Data received from server: ${event.data}`)
// };
// socket.onclose = (event) => {
//     if (event.wasClean) {
//         alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`)
//     } else {
//         alert('[close] Connection died')
//     }
// };
// socket.onerror = (error) => {
//     alert(`[error] ${error.message}`)
// };