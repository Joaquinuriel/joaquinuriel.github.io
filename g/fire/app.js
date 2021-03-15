const fire = (file, callback) => {
	let script = document.createElement("script");
	script.src = `https://www.gstatic.com/firebasejs/8.3.0/firebase-${file}.js`;
	script.onload = callback;
	document.head.appendChild(script);
};

const load = (file) => {
	let script = document.createElement("script");
	script.src = `/g/fire/${file}.js`;
	document.head.appendChild(script);
};

let firebaseConfig = {
	apiKey: "AIzaSyCqepuZoUpFqbkqtPs_hbPynIUFcJjrqfc",
	authDomain: "joaquinuriel.firebaseapp.com",
	databaseURL: "https://joaquinuriel-default-rtdb.firebaseio.com",
	projectId: "joaquinuriel",
	storageBucket: "joaquinuriel.appspot.com",
	messagingSenderId: "236766090256",
	appId: "1:236766090256:web:47ce276a0e7b2c01692695",
	measurementId: "G-QQHB6SMVE0",
};

const init = () => {
    firebase.initializeApp(firebaseConfig);
    fire("auth", load("auth"));
    fire("database", load("base"));
    fire("analytics");
    fire("performance");
};

fire("app", init);

