const write = async (key, value) => {
	let promise = new Promise((resolve, reject) => {
		let request = indexedDB.open("db");

		request.onerror = (event) => {
			console.log(event.target.error);
			reject(event.target.error);
		};

		request.onupgradeneeded = (event) => {
			let db = event.target.result;
			db.createObjectStore("store");
		};

		request.onsuccess = (event) => {
			let db = event.target.result;
			// console.log(db.name, db);

			let action = db.transaction("store", "readwrite");
			action.onerror = (event) => {
				console.log("transaction error", event.target.error);
				reject(event.target.error);
			};

			let store = action.objectStore("store");
			// console.log(store.name, store);

			let update = store.put(value, key);

			update.onsuccess = (event) => {
				console.log("updated", event.target.result);
				resolve(event.target.result);
			};
			update.onerror = (event) => {
				console.log("not updated", event.target.error);
				reject(event.target.error);
			};
		};
	});
	return await promise;
};

const getVersion = async (db) => {
	let promise = new Promise((resolve, reject) => {
		let request = indexedDB.open(db);
		request.onsuccess = (event) => resolve(event.target.result.version);
		request.onerror = (event) => reject(event.target.error);
	});
	return await promise;
};

const idb = async (database, store) => {
	let version = (await getVersion(database)) + 1;
    let promise = new Promise((resolve, reject) => {
		let request = indexedDB.open(database, version);
		request.onerror = (event) => reject(event.target.error);
		request.onupgradeneeded = (event) => {
			if (!event.target.result.objectStoreNames.contains(store))
				event.target.result.createObjectStore(store);
		};
		request.onsuccess = (event) =>
			resolve(event.target.result.transaction(store, "readwrite"));
	});
	return await promise;
};

idb("db", "store").then((action) => {
	update(action, "person", { name: "joaa", age: 16 }).then((result) =>
		console.log(result)
	);
	read(action, "person").then((result) => console.log(result));
});

const update = async (action, key, value) => {
	action.onerror = (event) => reject(event);
	let promise = new Promise((resolve, reject) => {
		let request = action.objectStore("store").put(value, key);
		request.onsuccess = (event) => resolve(event.target.result);
		request.onerror = (event) => reject(event.target.error);
	});
	return await promise;
};

const read = async (action, key) => {
	action.onerror = (event) => reject(event.target.error);
	let promise = new Promise((resolve, reject) => {
		let request = action.objectStore("store").get(key);
		request.onsuccess = (event) => resolve(event.target.result);
		request.onerror = (event) => reject(event.target.error);
	});
	return await promise;
};
