const CACHE_NAME = "toolbench-v1";
const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/favicon-32.png",
  "./assets/logo-192.png",
  "./assets/logo-512.png",
  "./assets/logo.svg",
  "./course/index.html",
  "./course/equivalent_circuit_explorer.html",
  "./course/inside_the_drive.html",
  "./course/reflected_wave.html",
  "./course/rotating_field_vector_sum.html",
  "./course/star_delta_terminal_box.html",
  "./course/stopping_simulator.html",
  "./course/three_rotors.html",
  "./course/torque_speed_curve.html",
  "./course/vector_control.html",
  "./course/vf_control.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

// Network-first: serve the freshest copy when online, fall back to cache when offline.
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;

  event.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        return res;
      })
      .catch(() => caches.match(req).then((cached) => cached || caches.match("./index.html")))
  );
});
