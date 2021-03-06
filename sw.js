self.addEventListener("fetch", (e) => e.respondWith(fetch(e.request)));

// self.addEventListener("fetch", (event) => {
//     event.respondWith(
//         caches.open("stale").then((cache) => cache.match(event.request).then((response) => {
//             var fetchPromise = fetch(event.request).then((networkResponse) => {
//                 cache.put(event.request, networkResponse.clone());
//                 return networkResponse;
//             });
//             return response || fetchPromise;
//         }))
//     );
// });
