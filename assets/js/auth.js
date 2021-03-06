const auth = () => {
	let auth = firebase.auth();
	auth.onAuthStateChanged((user) => {
		console.log(user);

		user && say("Hola " + user.displayName);

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
