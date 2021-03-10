const fire = async (src, callback) => {
	let script = document.createElement("script");
	script.src = `https://www.gstatic.com/firebasejs/8.2.7/firebase-${src}.js`;
	script.onload = callback;
	document.head.appendChild(script);
};

const init = () =>
	firebase.initializeApp({
		apiKey: "AIzaSyCqepuZoUpFqbkqtPs_hbPynIUFcJjrqfc",
		authDomain: "joaquinuriel.firebaseapp.com",
		databaseURL: "https://joaquinuriel-default-rtdb.firebaseio.com",
		projectId: "joaquinuriel",
		storageBucket: "joaquinuriel.appspot.com",
		messagingSenderId: "236766090256",
		appId: "1:236766090256:web:47ce276a0e7b2c01692695",
	});

const analytics = () => firebase.analytics()
const performance = () => firebase.performance()

fire("app", init)
load("base");
load("auth");
fire("analytics", analytics);
fire("performance", performance);
