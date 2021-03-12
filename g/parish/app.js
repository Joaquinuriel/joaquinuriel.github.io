navigator.serviceWorker.register("/sw.js");
let wrapper = document.querySelector("div.wrapper");

// llamar cajas
let boxes = document.querySelectorAll("div.wrapper__box");

// clasificar cajas
boxes.forEach((box) => {
	if (box.innerHTML === "Matemática") box.style.backgroundColor = "#90E0FF";
	if (box.innerHTML === "Literatura") box.style.backgroundColor = "#ADFF90";
	if (box.innerHTML === "Ciudadanía") box.style.backgroundColor = "#AEB6BF ";
	if (box.innerHTML === "Geografía") box.style.backgroundColor = "#FF55FF";
	if (box.innerHTML === "Inglés") box.style.backgroundColor = "#EDBB99";
	if (box.innerHTML === "Proyecto") box.style.backgroundColor = "coral";
	if (box.innerHTML === "Filosofía") box.style.backgroundColor = "#FFFF90";
	if (box.innerHTML === "Historia") box.style.backgroundColor = "#FF5555";
	if (box.innerHTML === "Arte") box.style.backgroundColor = "#FFAA00";
});

const idb = async () => {
	let promise = new Promise((resolve) => {
		let request = indexedDB.open("db");
		request.onerror = (event) => console.log(event);
		request.onupgradeneeded = (event) =>
			event.target.result.objectStoreNames.contains("homework") ||
			event.target.result.createObjectStore("homework");
		request.onsuccess = (event) => {
			let db = event.target.result;
			let action = db.transaction("homework", "readwrite");
			resolve(action);
		};
	});
	return await promise;
};

const getVersion = () => indexedDB.databases().then((dbs) => dbs.find((db) => db.name === "db").version);

idb().then((action) => {
	let store = action.objectStore("homework");
	let add = store.add("Hacer 2 + 2", "Math");
	add.onsuccess = (event) => console.log("added", event.target.result);
	add.onerror = (event) => console.log("not added", event.target.error);
});
