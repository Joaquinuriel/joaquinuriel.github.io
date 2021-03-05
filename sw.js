// navigator.serviceWorker.register('/sw.js');

// self.addEventListener('install', e => e.waitUntil(caches.open("app")
//     .then(cache => cache.addAll(['/sw.js', '/manifest.json']))
//     .then(self.skipWaiting())));

// self.addEventListener('fetch', e => e.respondWith(fetch(e.request)))

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