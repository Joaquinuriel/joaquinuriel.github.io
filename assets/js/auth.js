const auth = async () => {
	let auth = firebase.auth();
	auth.onAuthStateChanged((user) => {
		user && say("Hola " + user.displayName);
		user &&
			console.log(user.displayName, {
				email: user.email,
				phone: user.phoneNumber,
				id: user.uid,
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
