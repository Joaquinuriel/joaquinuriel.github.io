const base = async () => {
	let database = firebase.database();
	let root = database.ref();

	root.child("joaa").on("value", (snap) => {
		console.log(snap.key, snap.val());
		// let jason = snap.val();
		// Object.keys(jason).forEach((key) => {
		// 	console.log({ [key]: jason[key] });
		// });
	});
};

fire("database", base);
