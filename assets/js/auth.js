const auth = () => {
	let auth = firebase.auth();
	auth.onAuthStateChanged((user) => {
		console.log("user: " + user.displayName);

		let signIn = document.getElementById("sign-in");
		signIn &&
			signIn.addEventListener("click", () => {
				let email = prompt("email");
				let password = prompt("password");
				auth.signInWithEmailAndPassword(email, password)
					.then((user) => console.log(user))
					.catch((error) => console.log(error.message));
			});

		let signUp = document.getElementById("sign-up");
		signUp &&
			signUp.addEventListener("click", () => {
				let email = prompt("email");
				let password = prompt("password");
				auth.createUserWithEmailAndPassword(email, password)
					.then((user) => console.log(user))
					.catch((error) => console.log(error.message));
			});

		let googleBtn = document.getElementById("google-btn");
		googleBtn &&
			googleBtn.addEventListener("click", () => {
				auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
					.then((user) => console.log(user))
					.catch((error) => console.log(error.message));
			});
	});
};

fire("auth", auth);
