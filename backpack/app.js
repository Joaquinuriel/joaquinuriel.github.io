navigator.serviceWorker.register('/sw.js');
let input = document.querySelector("input");
input.addEventListener("change", () => {
    let file = input.files[0];
    let obj = file.prototype.text();
    console.log(obj);
});
