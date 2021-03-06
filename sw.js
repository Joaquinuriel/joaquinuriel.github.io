// self.addEventListener('fetch', event => {
//     if(event.request.method === 'GET') {
//         if (event.request.url.startsWith(self.location.origin)) {
//             if (!event.request.url.endsWith("/")) {
//                 event.respondWith(fetch(event.request));
//            }
//         }
//     }
// });

// self.addEventListener("fetch", (e) => {
// 	e.request.url.endsWith("/") || e.respondWith(fetch(e.request));
// });

self.addEventListener("install", (event) =>
	event.waitUntil(
		caches
			.open("app")
            .then((cache) => cache.add("/")
                .then(self.skipWaiting()))
	)
);

self.addEventListener("fetch", (event) => {
	event.request.url.endsWith("/") ||
        event.respondWith(
			caches.open("stale").then((cache) =>
				cache.match(event.request).then((response) => {
					var fetchPromise = fetch(event.request).then(
						(networkResponse) => {
							cache.put(event.request, networkResponse.clone());
							return networkResponse;
						}
					);
					return response || fetchPromise;
				})
			)
		);
});
