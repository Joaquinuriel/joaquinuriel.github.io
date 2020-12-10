setTimeout((ss = document.querySelectorAll('s')) => ss.forEach(async s => s.outerHTML = localStorage.getItem(s.innerHTML) || 
await fetch(`/assets/ionicons/${s.innerHTML}.svg`).then(res => res.text().then(txt => localStorage.setItem(s.innerHTML, txt) && txt))))

setTimeout((menu = document.querySelector('header svg')) => menu.onclick = () => console.log(menu))


