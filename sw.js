'serviceWorker' in navigator && navigator.serviceWorker.register('/sw.js');

self.addEventListener('install', e => e.waitUntil(caches.open('app').then(ch => ch.addAll(['/sw.js', '/manifest.json'])).then(self.skipWaiting())));

self.addEventListener('fetch', e => e.respondWith(caches.open('dynamic').then(cache => caches.match(e.request)
    .then(res => (res || fetch(e.request).then(res => cache.put(e.request, response.clone()) && res))))));