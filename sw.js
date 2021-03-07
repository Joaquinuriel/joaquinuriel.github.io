self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("fetch", (event) => {
	if (event.request.method === "GET")
		if (/api/.test(event.request.url)) event.respondWith(fetch(event.request));
		else if (self.navigator.connection.effectiveType === "4g")
			event.respondWith(
				caches.open("stale").then(async (cache) => {
					let response = await cache.match(event.request);
					let promise = fetch(event.request)
						.then((network) => {
							cache.put(event.request, network.clone());
							return network;
						})
						.catch((error) => console.log(error, event.request.url));
					return response || promise;
				})
			);
		else event.respondWith(caches.match(event.request));
});