
// Caches
//-----------
const myCaches = ['static-v1', 'images-v1'];



// Event Listeners
//-----------
self.addEventListener('install', (e) => {
  console.log('[service worker] New service worker INSTALLED');

  e.waitUntil(

    // Fetch pre-cache list
    fetch('./cache-manifest.json')
      .then((resp) => resp.json())
      .then((resp) => {
        const preCachedItems = Object.values(resp);

        // Pre-cache items
        caches.open(myCaches[0])
        .then((cache) => {
          return cache.addAll(preCachedItems);
        });
      })
      .catch((err) => {
        console.log('[service worker] Error fetching cache manifest: ', err);
      })
  );
});


self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (!myCaches.includes(key)) {
          return caches.delete(key);
        }
      }));
    })
  );

  return self.clients.claim();
});


self.addEventListener('fetch', (e) => {

  e.respondWith(
    caches.match(e.request).then((resp) => {
      return resp || fetch(e.request).then((response) => {

        // Cache Images after each is requested. This makes sure we're not pre-fetching too many assets

        if ( (/\.(gif|jpg|jpeg|tiff|png|svg)$/i).test(e.request.url) ) {
          const responseClone = response.clone();
          caches.open(myCaches[1]).then((cache) => {
            cache.put(e.request, responseClone);
          });
        }

        return response;
      })
      .catch((error) => {
        console.error('[service worker] Error fetching asset: ', error);
      });
    })
    .catch(() => {
      return 'Error getting '+ e.request.url;
    })
  );

});