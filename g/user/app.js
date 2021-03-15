const getIcon = async (icon) =>
	localStorage.getItem(icon) ||
	(await fetch(`/src/icons/${icon}.svg`)
		.then((res) => res.text())
		.then((txt) => (localStorage.setItem(icon, txt), txt)));

let icons = document.querySelectorAll("s");
icons.forEach(async (icon) => (icon.outerHTML = await getIcon(icon.innerHTML)));

let block_signed_in = document.getElementById("signed-in");
let block_signed_out = document.getElementById("signed-out");
let block_signing_up = document.getElementById("signing-up");
let block_options = document.getElementById("options");

let email_input = document.getElementById("email-input");
let password_input = document.getElementById("password-input");

let sign_in_btn = document.getElementById("sign-in");
let sign_up_btn = document.getElementById("sign-up");
let sign_out_btn = document.getElementById("sign-out");
let google_btn = document.getElementById("google");

let name_input = block_signing_up.querySelector("input");
let name_btn = block_signing_up.querySelector("button");
let no_name_btn = block_signing_up.querySelector("button + button");

let subtitle = block_signed_in.querySelector("h2");
let email__text = block_signed_in.querySelector("h3");
let options_btn = block_signed_in.querySelector("button");

let go_back_btn = block_options.querySelector("button")
let change_name_btn = document.getElementById("change-name")
let reset_password_btn = document.getElementById("reset-password")

firebase.initializeApp({
	apiKey: "AIzaSyCqepuZoUpFqbkqtPs_hbPynIUFcJjrqfc",
	authDomain: "joaquinuriel.firebaseapp.com",
	databaseURL: "https://joaquinuriel-default-rtdb.firebaseio.com",
	projectId: "joaquinuriel",
	storageBucket: "joaquinuriel.appspot.com",
	messagingSenderId: "236766090256",
	appId: "1:236766090256:web:47ce276a0e7b2c01692695",
});

let auth = firebase.auth();

sign_in_btn.addEventListener("click", () => {
	let email = email_input.value;
	let password = password_input.value;
	if (email && password) auth.signInWithEmailAndPassword(email, password);
	else console.log(email, password);
});

sign_up_btn.addEventListener("click", () => {
	let email = email_input.value;
	let password = password_input.value;
	if (email && password) {
		auth.createUserWithEmailAndPassword(email, password).catch((error) => {
			if (error.code === "auth/email-already-in-use") alert("auth/email-already-in-use");
			else console.log(error.code);
		});
	} else alert("missing value");
});

sign_out_btn.addEventListener("click", () => auth.signOut());

google_btn.addEventListener("click", () => {
	auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
		.then((user) => console.log(user))
		.catch((error) => console.log(error.message));
});

name_btn.addEventListener("click", () => {
	if (name_input.value) {
		if (name_input.value.length >= 3) {
			block_signing_up.classList.add("hidden");
			block_signed_in.classList.remove("hidden");
			auth.currentUser.updateProfile({ displayName: name_input.value });
			subtitle.textContent = name_input.value;
		} else console.log("name too short");
	} else console.log("no name writter");
});

no_name_btn.addEventListener("click", () => {
	block_signing_up.classList.add("hidden");
	block_signed_out.classList.remove("hidden");
});

options_btn.addEventListener("click", () => {
	block_signed_in.classList.add("hidden");
	block_options.classList.remove("hidden");
});

go_back_btn.addEventListener("click", () => {
    block_options.classList.add("hidden")
    block_signed_in.classList.remove("hidden")
})

change_name_btn.addEventListener("click", () => {
    block_options.classList.add("hidden")
    block_signing_up.classList.remove("hidden")
})

reset_password_btn.addEventListener("click", () => {
    // PROMPT USER FOR CONFIRMATION
})

auth.onAuthStateChanged(async (user) => {
	if (user) {
		block_signed_out.classList.add("hidden");
		if (user.displayName) {
			block_signed_in.classList.remove("hidden");
			subtitle.textContent = user.displayName;
			email__text.textContent = user.email;
			// if (user.emailVerified) {
			// 	email__text.innerHTML = (await getIcon("checkmark")) + user.email;
			// } else email__text.innerHTML = (await getIcon("alert")) + user.email;
		} else {
			// NO USERNAME
			block_signing_up.classList.remove("hidden");
		}
	} else {
		// NO USER
		block_signed_in.classList.add("hidden");
		block_signed_out.classList.remove("hidden");
	}
});
