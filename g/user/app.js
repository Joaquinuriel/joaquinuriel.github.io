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

let email_input = document.getElementById("email-input");
let password_input = document.getElementById("password-input");

let sign_in_btn = document.getElementById("sign-in");
let sign_up_btn = document.getElementById("sign-up");
let sign_out_btn = document.getElementById("sign-out");
let google_btn = document.getElementById("google");

let name_title = document.querySelector(".block__subtitle");

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
		auth.createUserWithEmailAndPassword(email, password)
			.then(() => {
				block_signed_in.classList.add("hidden");
				block_signed_out.classList.add("hidden");
				block_signing_up.classList.remove("hidden");
				let btn = block_signing_up.querySelector("button");
				let value = block_signing_up.querySelector("input").value;
				btn.addEventListener("click", () => {
					user.updateProfile({ displayName: value });
					block_signing_up.classList.add("hidden");
					block_signed_in.classList.remove("hidden");
				});
			})
			.catch((error) => {
				if (error.code === "auth/email-already-in-use") alert("auth/email-already-in-use");
				else console.log(error.code);
			});
	} else console.log(email, password);
});

sign_out_btn.addEventListener("click", () => auth.signOut());

google_btn.addEventListener("click", () => {
	auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
		.then((user) => console.log(user))
		.catch((error) => console.log(error.message));
});

auth.onAuthStateChanged((user) => {
	if (user && user.displayName) {
		block_signed_out.classList.add("hidden");
		block_signed_in.classList.remove("hidden");
		name_title.textContent = user.displayName;
	} else {
		block_signed_in.classList.add("hidden");
		block_signed_out.classList.remove("hidden");
	}
});
