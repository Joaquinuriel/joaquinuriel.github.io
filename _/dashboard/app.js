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

let scrollbox = document.querySelector(".scrollbox")
const message = (message) => {
    let tweet = document.createElement("p")
    tweet.classList.add("twet")
    tweet.textContent = message
    scrollbox.appendChild(tweet)
}