const getVersion = async () => {
	return await new Promise((resolve) => {
		indexedDB.databases().then((dbs) => {
			dbs.forEach((db) => {
				if (db.name === "db") resolve(db.version);
			});
		});
	});
};

const idb = async (objectStore) => {
	let version = (await getVersion()) + 1;
	return await new Promise((resolve) => {
		let request = indexedDB.open("db", version);
		request.onerror = (event) => console.log(event.target.error);
		request.onupgradeneeded = (event) =>
			event.target.result.objectStoreNames.contains(objectStore) ||
			event.target.result.createObjectStore(objectStore);
		request.onsuccess = (event) =>
			resolve(event.target.result.transaction(objectStore, "readwrite"));
	});
};

const write = async (key, value, objectStore) => {
	let store = objectStore || "store";
	return await new Promise((resolve, reject) => {
		idb(store).then((action) => {
			let add = action.objectStore(store).add(value, key);
			add.onsuccess = (event) => resolve(event.target.result);
			add.onerror = (event) => reject(event.target.error);
		});
	});
};

const read = async (key, objectStore) => {
	let store = objectStore || "store";
	return await new Promise((resolve, reject) => {
		idb(store).then((action) => {
			let read = action.objectStore(store).get(key);
			read.onsuccess = (event) => resolve(event.target.result);
			read.onerror = (event) => reject(event.target.error);
		});
	});
};

const erase = (key) => idb("store").then((action) => action.objectStore("store").delete(key));

// write("Joaquin", { age: 16 })
// 	.then((value) => console.log("written", value))
// 	.catch((error) => console.log(error));

// read("Joaquin")
// 	.then((value) => console.log("Joaquin", value))
// 	.catch((error) => console.log(error));

// erase("Joaquin")