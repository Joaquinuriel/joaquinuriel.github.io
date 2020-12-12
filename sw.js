'serviceWorker' in navigator && navigator.serviceWorker.register('/sw.js');

self.addEventListener('install', e => e.waitUntil(caches.open('app').then(ch => ch.addAll(['/sw.js', '/manifest.json'])).then(self.skipWaiting())));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)))
// self.addEventListener('fetch', e => e.respondWith(fetch(e.request)
//     .then(res => caches.open('fallback').then(cache => cache.put(e.request, res.clone()) && res))
//     .catch(() => caches.match(e.request))
// ))

Headers