const auth = () => {
	firebase.auth().onAuthStateChanged((user) => {
		// LOG USER
		console.log(user);
		let auth = firebase.auth();

		let signIn = document.getElementById("sign-in");
		signIn.addEventListener("click", () => {
			let email = prompt("email");
			let password = prompt("password");
			auth.signInWithEmailAndPassword(email, password)
				.then((user) => console.log(user))
				.catch((error) => console.log(error.message));
		});

		let signUp = document.getElementById("sign-up");
		signUp.addEventListener("click", () => {
			let email = prompt("email");
			let password = prompt("password");
			auth.createUserWithEmailAndPassword(email, password)
				.then((user) => console.log(user))
				.catch((error) => console.log(error.message));
		});

		let googleBtn = document.getElementById("google-btn");
		googleBtn.addEventListener("click", () => {
			auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
				.then((user) => console.log(user))
				.catch((error) => console.log(error.message));
		});
	});
};

fire("auth", auth);