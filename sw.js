'serviceWorker' in navigator && navigator.serviceWorker.register('/sw.js');

const cacheable = ['/index.html', '/sw.js', '/manifest.json'];
self.addEventListener('install', e => e.waitUntil(caches.open('app').then(ch => ch.addAll(cacheable)).then(self.skipWaiting())));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)))