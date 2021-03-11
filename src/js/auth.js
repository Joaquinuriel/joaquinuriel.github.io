const auth = async () => {
	let auth = firebase.auth();
	auth.onAuthStateChanged((user) => {
		if (user) {
			say("Hola " + user.displayName);
			createDashboard(auth, user.displayName, user.email).then((block) => {
				let signedOut = document.getElementById("signed-out");
				signedOut.hidden = true;
				block.querySelector("button").addEventListener("click", () => auth.signOut());
			});
		} else {
			let block = document.getElementById("signed-in");
			block.hidden = true;
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

const signOut = () => firebase.auth().signOut();
