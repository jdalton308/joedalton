
import Landing from './components/landing.js';
import Projects from './components/projects.js';

import '../scss/main.scss';


window.onload = function(){

  Landing();
  Projects();

};


// Initialize Service Worker
//-----------
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then((registration) => {
      console.log('Service worker registered: ', registration);
    })
    .catch((err) => {
      console.log('error registering service worker: ', err);
    });
} else {
  console.log('serviceWorker not found in navigator object', navigator);
}