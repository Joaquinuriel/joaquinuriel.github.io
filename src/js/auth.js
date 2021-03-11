const auth = async () => {
	let auth = firebase.auth();
	let signedOut = document.getElementById("signed-out");
	let signedIn = document.getElementById("signed-in");
	auth.onAuthStateChanged((user) => {
		if (user) {
			toggleBlock(signedIn, signedOut)
			say("Hola " + user.displayName);

			let title = signedIn.querySelector("h4")
			let text = signedIn.querySelector("p")
			let btn = signedIn.querySelector("button")

			title.textContent = user.displayName
			text.textContent = user.email
			btn.addEventListener("click", () => auth.signOut())

		} else {
			toggleBlock(signedOut, signedIn)
		}

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
