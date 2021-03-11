firebase.initializeApp({
	apiKey: "AIzaSyCqepuZoUpFqbkqtPs_hbPynIUFcJjrqfc",
	authDomain: "joaquinuriel.firebaseapp.com",
	databaseURL: "https://joaquinuriel-default-rtdb.firebaseio.com",
	projectId: "joaquinuriel",
	storageBucket: "joaquinuriel.appspot.com",
	messagingSenderId: "236766090256",
	appId: "1:236766090256:web:47ce276a0e7b2c01692695",
});

firebase.auth().onAuthStateChanged((user) => {
	if (user) console.log("user");
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
