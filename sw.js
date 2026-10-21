const C='sms-v1';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{const r=e.request;
  if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open(C).then(h=>h.put(r,c));return x})
    .catch(()=>caches.match(r).then(m=>m||caches.match('./index.html'))))});
