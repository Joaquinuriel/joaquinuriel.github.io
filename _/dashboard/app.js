const getIcon = async (icon) =>
	localStorage.getItem(icon) ||
	(await fetch(`/src/icons/${icon}.svg`)
		.then((res) => res.text())
		.then((txt) => (localStorage.setItem(icon, txt), txt)));

let icons = document.querySelectorAll("s");
icons.forEach(async (icon) => (icon.outerHTML = await getIcon(icon.innerHTML)));

firebase.initializeApp({
	apiKey: "AIzaSyCqepuZoUpFqbkqtPs_hbPynIUFcJjrqfc",
	authDomain: "joaquinuriel.firebaseapp.com",
	databaseURL: "https://joaquinuriel-default-rtdb.firebaseio.com",
	projectId: "joaquinuriel",
	storageBucket: "joaquinuriel.appspot.com",
	messagingSenderId: "236766090256",
	appId: "1:236766090256:web:47ce276a0e7b2c01692695",
});

let signOutBtn = document.getElementById("sign-out-btn")
let side = document.querySelector(".side")
let title = document.querySelector("h1")
let sign_in_btn = document.querySelector(".main button")

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		side.style.bottom = "150px"
		title.textContent = user.displayName
		sign_in_btn.classList.add("hidden")
		setTimeout(() => signOutBtn.classList.remove("hidden"), 250)
	}
	else console.log("no user");
});

let btn = document.querySelector("button");
btn.onclick = () => firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

let scrollbox = document.querySelector(".scrollbox");
let db = firebase.database();
let root = db.ref();
const tweet = (message) => {
    root.child("messages")
        .push()
		.then((snap) => {
			console.log(snap.val());
		});
	let text = document.createElement("p");
	text.classList.add("tweet");
	text.textContent = message;
	scrollbox.appendChild(text);
};
