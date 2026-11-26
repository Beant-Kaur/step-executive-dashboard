const CACHE_NAME = 'step-kpi-pwa-v4';
const LOCAL_ASSETS = [
  './',
  './index.html',
  './step_executive_dashboard.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];
const CDN_ASSETS = [
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(LOCAL_ASSETS);
      await Promise.allSettled(
        CDN_ASSETS.map((url) => cache.add(url).catch(() => {}))
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Always let live Google Sheets sync and cache-busted requests hit the network directly
  if (
    url.hostname.includes('google.com') ||
    url.hostname.includes('googleusercontent.com') ||
    url.searchParams.has('_cb')
  ) {
    return;
  }

  // Same-origin / navigation: Network-First with Cache Fallback
  if (url.origin === self.location.origin || event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(event.request);
          if (cached) return cached;
          if (event.request.mode === 'navigate') {
            return (
              (await caches.match('./index.html')) ||
              (await caches.match('./step_executive_dashboard.html'))
            );
          }
          return Response.error();
        })
    );
    return;
  }

  // Static CDN assets (Chart.js, fonts): Cache-First with Network Fallback
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      });
    })
  );
});
