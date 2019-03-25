
// Utilities
//-----------
const myCaches = ['static-v1', 'images-v1'];

// TODO: Add fonts, JS, CSS
const cachedItems = [
  // '/main.js',
  // '/main.css',

  // Fonts
  '/fonts/joe-icons.ttf?748ojo',
  '/fonts/joe-icons.woff?748ojo',
  '/fonts/joe-icons.svg?748ojo#joe-icons',
];



// Event Listeners
//-----------
self.addEventListener('install', (e) => {
  console.log('[service worker] New service worker INSTALLED');

  e.waitUntil(
    caches.open(myCaches[0])
    .then((cache) => {
      return cache.addAll(cachedItems);
    })
  );
});


self.addEventListener('activate', (e) => {
  console.log('[service worker] New service worker ACTIVATED');

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
  console.log('[service worker] FETCH event: ', e);
  // return fetch(e);
  e.respondWith(
    caches.match(e.request).then((resp) => {
      return resp || fetch(e.request).then((response) => {
        console.log('[service worker] %s not in cache', e.request);

        // Cache Images after each is requested. This makes sure we're not pre-fetching too many assets

        if ( (/\.(gif|jpg|jpeg|tiff|png|svg)$/i).test(e.request.url) ) {

          console.log('[service worker] %s is an image, so adding to image cache', e.request.url);

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