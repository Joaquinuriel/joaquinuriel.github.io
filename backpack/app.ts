navigator.serviceWorker.register('/sw.js');

let input = document.querySelector("input")
// input.addEventListener("click", () => import("/backpack/cache.js"))
input.addEventListener("change", () => {
    let file = input.files[0]
    // cache()
    // window.localStorage.setItem(input.files[0].name, input.files[0].toString())
    // let obj = URL.createObjectURL(file)
    let obj = file.prototype.text()
    console.log(obj)
})