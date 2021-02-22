
self.addEventListener('install', e => e.waitUntil(caches.open('app')
    .then(ch => ch.addAll(['/sw.js', '/manifest.json']))
    .then(self.skipWaiting())));
    
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)))